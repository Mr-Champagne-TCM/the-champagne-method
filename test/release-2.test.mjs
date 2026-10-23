import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * RELEASE 2 ON THE WEBSITE (Jeremy 10/19-10/20), pinned so a tidy-up cannot
 * quietly undo one. Ships WITH hd-site release 2, never before it: the privacy
 * page describes what that release keeps.
 *
 *   - the summary keeps its birth details too; earlier details from a
 *     correction are kept for support only; "Email me my charts"
 *   - 2A: the readings page lists "All eleven", the two shown in gold; the
 *     bodygraph page ends "...starts with The Human Design library."
 *   - his page is "Human Design readings", never "the shop", to a reader
 *   - on a Human Design page, a link to the whole /library/ says "Open the
 *     full Coaching Library"
 */
const read = (f) => fs.readFileSync(f, "utf8");
const privacy = read("src/library/article/Privacy.tsx");
const readings = read("src/library/article/WhatAReadingIs.tsx");
const bg = read("src/library/article/ReadingYourBodygraph.tsx");
const ui = read("src/library/article/ArticleUI.tsx");
const lib = read("src/library/hd/HdLibrary.tsx");

/** What a reader can see: comments out. */
const prose = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

test("privacy: the summary keeps the birth details too, and nothing still says otherwise", () => {
  const p = prose(privacy);
  assert.match(p, /The summary keeps them too, so going a step further never\s+means typing them again\./);
  assert.match(p, /Kept with your chart, on every tier<\/strong> — the summary too/);
  assert.doesNotMatch(p, /the summary keeps none of them/i);
  assert.doesNotMatch(p, /Not kept at all/);
  assert.doesNotMatch(p, /The summary has no PDF, so it keeps none of them/);
});

test("privacy: earlier details from a correction -- kept for the year, seen only by Jeremy", () => {
  assert.match(privacy, /Earlier details, if you correct one/);
  assert.match(privacy, /kept with the chart for its year, seen only by Jeremy/);
  assert.match(privacy, /never shown on your page, your PDF or in an email/);
});

test("privacy: Email me my charts -- only to that address, nothing shown, address not stored", () => {
  assert.match(privacy, /The email you type on “Email me my charts”/);
  assert.match(privacy, /to that address and nowhere else/);
  assert.match(privacy, /The page never shows whether it has any/);
  assert.match(privacy, /as record numbers under a scrambled key — no birth details, no address/);
});

test("NO 'SHOP' WHERE A READER LOOKS: the Human Design pages", () => {
  for (const [name, src] of [["privacy", privacy], ["readings", readings], ["bodygraph", bg], ["hd library", lib]]) {
    // Variable names (SHOP) are code; quoted words and JSX text are not.
    const words = prose(src).replace(/\bSHOP\b/g, "");
    assert.doesNotMatch(words, /\bthe shop\b|\bshop's\b|\bshop’s\b/i, name);
  }
  assert.match(prose(privacy), /Human Design readings have no cookies, no trackers and no analytics at all\./);
});

test("2A: all eleven sections, the two shown above in gold", () => {
  assert.match(readings, /All eleven, so you can see the shape of the whole thing \(the two above in gold\):/);
  assert.doesNotMatch(prose(readings), /The other nine/);
  assert.match(readings, /border-brand-gold\/70 bg-brand-gold\/10 px-3 py-1 text-\[14px\] text-brand-gold/);
});

test("2A: the bodygraph page ends '...starts with The Human Design library.' -- one library, not two", () => {
  // 10/23 ("bring into our voice"): the closing "Bring your notes." is a request now.
  assert.match(bg, /starts with\{' '\}\s*\n?\s*(\{\/\*[\s\S]*?\*\/\}\s*)?<TextLink href="\/library\/human-design\/">The Human Design library<\/TextLink>\. You&rsquo;re welcome to bring your notes\./);
  assert.doesNotMatch(bg, /<TextLink href="\/library\/">/);
});

test("the wider library on a Human Design page: 'Open the full Coaching Library'", () => {
  assert.match(ui, /\{hd \? 'Open the full Coaching Library' : 'The Library'\}/);
  // The breadcrumb on a Human Design page hangs off the Human Design library.
  assert.match(ui, /hd \? \{ label: 'Human Design library', href: '\/library\/human-design\/' \}/);
  // No Human Design page links the bare /library/ in its own text.
  for (const [name, src] of [["privacy", privacy], ["readings", readings], ["bodygraph", bg], ["hd library", lib]]) {
    assert.doesNotMatch(prose(src), /href=["'{]+\/library\/["'}]/, name);
  }
});
