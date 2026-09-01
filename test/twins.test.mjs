import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

/**
 * THE ARTICLE COPY EXISTS TWICE, IN TWO REPOS, AND NOTHING KEPT IT IN STEP.
 *
 * Each library article was ported verbatim from a static mock that is itself
 * still HOSTED -- `hd-reading-app/hosting/public/guide/` is a live page, and the
 * hd101 draft is the source the other article was written from. Both carry a
 * source comment saying the copy is approved and must not be re-authored, which
 * is exactly the situation where a fix applied to one side and not the other
 * ships a contradiction.
 *
 * That nearly happened. The centres correction touched four files across two
 * repos; the only thing that caught the pairing was reading them, and reading
 * is not a control.
 *
 * WHAT THIS ASSERTS, and why it is not a full-text diff: one side is JSX and
 * the other is HTML, so they can never be byte-equal. Comparing every sentence
 * would fail on nav, footers and markup differences and would be turned off
 * within a week. Instead it pins the LOAD-BEARING sentences -- the ones that
 * state the mechanics -- in both directions: each must appear in both files,
 * and the superseded wordings must appear in neither.
 *
 * CROSS-REPO, so it SKIPS when the sibling checkout is absent rather than
 * failing. It protects the machine where the edits actually happen; it is not a
 * substitute for the two repos being released together.
 */

const SIBLING = path.resolve(process.cwd(), "..", "hd-reading-app");

/** Visible prose, with tags, JSX attributes and entities taken out. */
function prose(file) {
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, " ");
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, " "); // JSX comments
  s = s.replace(/\/\*[\s\S]*?\*\//g, " "); // block comments
  s = s.replace(/<[^>]+>/g, " "); // tags, and JSX attributes with them
  s = s.replace(/&mdash;/g, "—").replace(/&ndash;/g, "–");
  s = s.replace(/&rsquo;/g, "’").replace(/&middot;/g, "·");
  s = s.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
  s = s.replace(/\{'\s*'\}/g, " "); // JSX spacer expressions
  return s.replace(/\s+/g, " ").trim();
}

/**
 * Sentences that carry the MECHANICS. If one of these changes on one side
 * only, the two live pages disagree about how a chart works.
 */
const PAIRS = [
  {
    name: "Human Design, plainly",
    tsx: "src/library/article/HumanDesignPlainly.tsx",
    twin: "docs/hd101-library-draft.html",
    required: [
      "parts that are not",
      "two kinds",
      "Variable, but with a fixed way in",
      "Variable, with no fixed way in",
      "Almost nothing defined",
      "the other two that explain the last ten years",
      "Nothing on your chart is a limit",
    ],
    banned: [
      "parts that are open",
      "Almost entirely open",
      "An open centre is not a thing you cannot do",
      "Open parts move when there is something",
      "the open ones that explain the last ten years",
    ],
  },
  {
    name: "Reading your bodygraph",
    tsx: "src/library/article/ReadingYourBodygraph.tsx",
    twin: "hosting/public/guide/index.html",
    required: [
      "defined, undefined and open",
      "come in two kinds",
      "Variable, with a fixed way in",
      "Variable, with no fixed way in at all",
      "the other two that explain the last ten years",
    ],
    banned: ["Your centres: filled and open", "It amplifies whatever is around it"],
  },
];

for (const pair of PAIRS) {
  test(`${pair.name}: the two live copies still agree`, (t) => {
    const twinPath = path.join(SIBLING, pair.twin);
    if (!fs.existsSync(twinPath)) {
      t.skip(`sibling checkout absent: ${twinPath}`);
      return;
    }
    const a = prose(pair.tsx);
    const b = prose(twinPath);

    for (const s of pair.required) {
      assert.ok(a.includes(s), `MISSING from ${pair.tsx}: "${s}"`);
      assert.ok(b.includes(s), `MISSING from ${pair.twin}: "${s}"`);
    }
    for (const s of pair.banned) {
      assert.ok(!a.includes(s), `SUPERSEDED wording still in ${pair.tsx}: "${s}"`);
      assert.ok(!b.includes(s), `SUPERSEDED wording still in ${pair.twin}: "${s}"`);
    }
  });
}

/**
 * "Nothing on your chart is a limit" appears three times ON PURPOSE, and the
 * source comment says so. A tidy-up that deduplicates it would pass every other
 * check here, so it is counted rather than merely found.
 */
test("the deliberate repetition survives a tidy-up", () => {
  const a = prose("src/library/article/HumanDesignPlainly.tsx");
  const n = a.split("Nothing on your chart is a limit").length - 1;
  assert.equal(n, 1, `expected the phrase once in this article's own prose, found ${n}`);
});
