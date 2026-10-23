import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

/**
 * JEREMY'S CALLS FROM THE GO PDF (10/23), pinned so a tidy-up cannot quietly
 * undo one:
 *   1. "Good, be consistent. I like planet numbers better."
 *   2. "Good, lets add link labels (hover hints?)" -- every link says where it goes.
 *   3. "good, bring into our voice" -- the bodygraph page's "Do this with it" list.
 *   4. "don't mix curly/straight apostrophes" -- curly in everything a reader sees.
 */
const read = (f) => fs.readFileSync(f, "utf8");
const readings = read("src/library/article/WhatAReadingIs.tsx");
const bg = read("src/library/article/ReadingYourBodygraph.tsx");
const lib = read("src/library/hd/HdLibrary.tsx");
const engine = read("src/library/hd/engine.ts");
const ui = read("src/library/article/ArticleUI.tsx");
const hints = read("src/site/linkHints.ts");
/** What a reader can see: comments out. */
const prose = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

test("1: planet numbers, in the readings' own words; no 'activations' left where a reader looks", () => {
  assert.ok(readings.includes("'All twenty-six planet numbers, each with the planet that lit it.'"));
  assert.ok(prose(bg).includes("Every planet number on"));
  for (const [name, src] of [["readings", readings], ["bodygraph", bg], ["hd library", lib], ["engine", engine]]) {
    assert.doesNotMatch(prose(src), /\bactivations?\b/i, name);
  }
  // The gates example chart's banner (HD-Library-Work charts/markup.py), when the sibling folder is there.
  const markup = path.resolve(process.cwd(), "..", "HD-Library-Work", "charts", "markup.py");
  if (fs.existsSync(markup)) {
    const m = read(markup);
    assert.ok(m.includes(">A reading lists all 26 planet numbers, each with the planet that lit it."), "markup.py gates line");
    assert.ok(!m.includes("all 26 activations with"), "markup.py still says activations");
  }
});

test("2: link labels -- every link to the readings, the home page or its contact section names where it goes", () => {
  for (const w of [
    "readings: 'Opens Human Design readings'",
    "connect: 'Opens the contact section on the home page'",
    "home: 'Opens The Champagne Method home page'",
  ]) assert.ok(hints.includes(w), w);
  // The library's own hover box (calls 39, 40): the destination first, then what you get and the price.
  assert.match(engine, /a\.dataset\.tip = `\$\{LINK_HINT\.readings\}\. ` \+ \(/);
  assert.ok(engine.includes("'Your profile is in the summary · $1.11'"), "call 40 wording kept");
  assert.match(lib, /href="\/#connect" data-tip=\{HINT\.connect\}/);
  // Site chrome on the Human Design pages and the 404.
  assert.match(ui, /hint\('Human Design by The Champagne Method Coaching and Consulting', HINT\.home\)/);
  assert.equal((ui.match(/hint\('Start a conversation', HINT\.connect\)/g) || []).length, 2, "nav + footer");
  assert.match(readings, /hint\('See the three ways in', HINT\.readings\)/);
  assert.match(read("src/site/NotFound.tsx"), /<TextLink href="\/#connect" where=\{HINT\.connect\}>/);
  // Every "/#connect" link off the home page carries the hint.
  for (const f of ["src/library/LibraryApp.tsx", "src/tools/ToolsApp.tsx", "src/library/article/ArticleUI.tsx"]) {
    const s = prose(read(f));
    const bare = s.match(/href="\/#connect"(?![\s\S]{0,40}(hint\(|where=))/g) || [];
    assert.equal(bare.length, 0, `${f}: a /#connect link without its hint`);
  }
});

test("3: the bodygraph page's closing list is requests, in I, not commands", () => {
  const p = prose(bg).replace(/\s+/g, " ");
  for (const s of [
    "<H2>What you might do with it</H2>",
    "<H3>1. The line that stung</H3>",
    "You&rsquo;re welcome to go back through your reading and find the sentence",
    "It can help to write that one sentence",
    "I&rsquo;d invite you to give it exactly one real decision",
    "<H3>2. Your Authority, once, on purpose</H3>",
    "<H3>3. A note of what happened</H3>",
    "A week of those gives you",
    "<strong className=\"font-semibold\">Going further.</strong>",
    // 10/23 verbatim read S6: the notes have somewhere to go.
    "You&rsquo;re welcome to bring your notes to{' '} <TextLink href=\"/#connect\" where={HINT.connect}> a free conversation </TextLink> .",
    "you’re welcome to let me know, and I’ll recast it.",
    "the two words mean the same thing and I use them interchangeably.",
  ]) assert.ok(p.includes(s), s);
  assert.ok(!p.includes("deeper than one page"), "S6: 'the readings that go deeper than one page'");
  for (const s of [
    "Do this with it", "Pick the line that stung", "Write that one sentence", "Give it exactly one real decision",
    "Bring your notes.", "tell us and we will recast it", "we use them interchangeably", "Run your Authority once", "Write down what happened",
    "Then go further.", "Do that for a week", "answer something out loud", "and do not revise it",
    "deliberately sleep on it", "act on the first quiet read",
  ]) assert.ok(!p.includes(s), `command back: "${s}"`);
});

/** Every piece of text in a source file a reader could see: JSX text, string literals, template chunks, JSX attribute strings. */
function texts(file) {
  const src = read(file);
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const out = [];
  const visit = (n) => {
    const at = () => `${file}:${sf.getLineAndCharacterOfPosition(n.getStart()).line + 1}`;
    if (n.kind === ts.SyntaxKind.JsxText) out.push({ kind: "jsx", text: n.getText(), at: at() });
    else if (n.kind === ts.SyntaxKind.StringLiteral) out.push({ kind: "str", text: n.text, at: at() });
    else if ([ts.SyntaxKind.NoSubstitutionTemplateLiteral, ts.SyntaxKind.TemplateHead, ts.SyntaxKind.TemplateMiddle, ts.SyntaxKind.TemplateTail].includes(n.kind))
      out.push({ kind: "tpl", text: n.rawText ?? n.text, at: at() });
    ts.forEachChild(n, visit);
  };
  visit(sf);
  return out;
}
const walkFiles = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walkFiles(path.join(d, e.name)) : [path.join(d, e.name)]));

test("4: no straight apostrophes or quotes in what a reader sees (source, library data, page descriptions)", () => {
  const PROSE_APOS = /[A-Za-z]'[A-Za-z]|[a-z]s' |\d's\b/;
  const bad = [];
  for (const f of walkFiles("src").filter((f) => /\.tsx?$/.test(f) && !f.endsWith(path.join("hd", "data.ts")))) {
    for (const t of texts(f)) {
      if (t.kind === "jsx" ? /['"]/.test(t.text) : PROSE_APOS.test(t.text)) bad.push(`${t.at} ${JSON.stringify(t.text.trim().slice(0, 80))}`);
    }
  }
  // The library's words (generated from HD-Library-Work content): every value, every field.
  const data = read("src/library/hd/data.ts");
  for (const m of data.matchAll(/export const (\w+): [^=]+= (\{[\s\S]*?\});\n/g)) {
    const walk = (v, p) => {
      if (typeof v === "string") { if (/['"]/.test(v)) bad.push(`data.ts ${p} ${JSON.stringify(v.slice(0, 80))}`); }
      else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, `${p}.${k}`);
    };
    walk(JSON.parse(m[2]), m[1]);
  }
  for (const f of ["index.html", "404.html", "library/index.html", "library/human-design/index.html", "library/bodygraph/index.html", "readings/index.html", "readings/privacy/index.html", "tools/index.html"]) {
    for (const m of read(f).matchAll(/<title>([^<]*)<\/title>|\scontent="([^"]*)"/g)) {
      const s = m[1] ?? m[2];
      if (/'/.test(s)) bad.push(`${f} ${JSON.stringify(s.slice(0, 80))}`);
    }
  }
  assert.deepEqual(bad, [], "straight quotes a reader sees:\n" + bad.join("\n"));
});

test("2x renders (10/23): the nav link fits a phone, the closing buttons keep apart, the video link's arrow stays on its line", () => {
  // A one-line "Start a conversation" beside the 20px brand ran past the margin at 390 and off the screen at 375/360.
  for (const f of ["src/library/article/ArticleUI.tsx", "src/library/LibraryApp.tsx"]) {
    const s = read(f);
    assert.ok(s.includes("justify-between gap-2 sm:gap-4"), `${f}: nav gap`);
    assert.ok(s.includes("leading-snug text-right sm:whitespace-nowrap sm:shrink-0"), `${f}: nav link wraps on a phone`);
    assert.ok(!/whitespace-nowrap shrink-0 text-brand-muted/.test(s), `${f}: nav link forced onto one line again`);
  }
  assert.ok(read("src/library/hd/hd-library.css").includes(".cta .btn{margin-top:8px}"), "HD library closing buttons");
  assert.ok(read("src/library/tools/Breather.tsx").includes("breathwork with Sandi&nbsp;&rarr;"), "Sandi + arrow together");
});
