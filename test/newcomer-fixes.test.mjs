import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * NEWCOMER FIXES 11B, 12A, 18A, 17A AND 20A (Jeremy's calls, 10/19), pinned so a
 * tidy-up cannot quietly undo one. The mock that showed the options lived on
 * the ux-mock-8-20 branch behind ?mock=; what shipped is plain code, no switch.
 */
const read = (f) => fs.readFileSync(f, "utf8");
const lib = read("src/library/hd/HdLibrary.tsx");
const bg = read("src/library/article/ReadingYourBodygraph.tsx");
const chart = read("src/library/article/MarkedChart.tsx");
const readings = read("src/library/article/WhatAReadingIs.tsx");
const privacy = read("src/library/article/Privacy.tsx");
const shelf = read("src/library/content.ts");

test("11B: three questions at the top of the Human Design library, in the accepted words", () => {
  for (const [q, a] of [
    ["What is it?", "A chart worked out from when and where you were born, about how your energy tends to work."],
    ["Where is it from?", "It began in 1987 and blends astrology, the I Ching, the Kabbalah and the chakra system."],
    ["Is it science?", "No, and it is not a prediction either. It is a lens to test against your own life."],
  ]) {
    assert.ok(lib.includes(`'${q}'`), q);
    assert.ok(lib.includes(`'${a}'`), a);
  }
  assert.match(lib, /className="how what"/);
});

test("12A: the marked example under The colors, with its key and caption, and it zooms", () => {
  for (const s of [
    "'Personality line'", "'Design line'", "'Both, split'", "'Open line'",
    "'Colored in'", "'Not colored in, gates lit'", "'Not colored in, nothing lit'",
    "An example: Jeremy Champagne&rsquo;s own chart, marked. Not your chart.",
  ]) assert.ok(bg.includes(s), s);
  assert.ok(bg.indexOf("<MarkedChart") > bg.indexOf("<H2>The colors</H2>"), "the figure sits under The colors");
  // The marks are drawn into the same SVG the viewer zooms, so they move with the drawing.
  assert.match(chart, /<g dangerouslySetInnerHTML=\{\{ __html: inner \}\} \/>\s*<Marks marks=\{marks\} \/>/);
  for (const s of ["onPointerDown={down}", "addEventListener('wheel'", "Pinch or scroll to zoom, drag to move", "Done", "Fit"]) {
    assert.ok(chart.includes(s), `viewer lost ${s}`);
  }
  assert.ok(fs.existsSync("src/library/article/zoomBounds.ts"));
});

test("no option switch shipped", () => {
  assert.ok(!fs.existsSync("src/mock.ts"), "src/mock.ts is mock-branch only");
  for (const [f, s] of [["HdLibrary", lib], ["bodygraph", bg], ["readings", readings], ["privacy", privacy]]) {
    assert.doesNotMatch(s, /\bmock\(|from '..\/..\/mock'|from '..\/mock'/, f);
  }
});

test("18A: 'colored in' is the one word for the drawing, where people read it", () => {
  const strays = /\b(un)?fill(ed|s)?\b|uncolou?red|half[- ]filled/i;
  const prose = (s) => s.replace(/\/\*[\s\S]*?\*\/|\{\/\*[\s\S]*?\*\/\}|\/\/.*$/gm, "").replace(/\bfill(Opacity)?=\{?["'#\w]/g, "");
  assert.doesNotMatch(prose(bg), strays, "bodygraph page");
  assert.doesNotMatch(readings.replace(/READING_SAMPLE[\s\S]*?\n\];/, ""), /which are filled/, "readings page");
  assert.doesNotMatch(shelf, /half filled/, "library shelf card");
  for (const s of [
    "half colored in.",
    "either colored in on the drawing",
    'meta="&middot; colored in"',
    'meta="&middot; not colored in, but carrying gate numbers"',
    'meta="&middot; not colored in, and no gate numbers"',
    "the colored-in centers",
    "<H2>The half-colored channels</H2>",
  ]) assert.ok(bg.includes(s), s);
});

test("17A + 20A: the privacy page says what happens to the chart's name, and the PDF no longer prints the time zone", () => {
  assert.match(privacy, /A name for the chart, if you give one/);
  assert.match(privacy, /Alex&rsquo;s Human Design|Alex’s Human Design/);
  assert.match(privacy, /not yours, and not the one you gave the chart/);
  assert.doesNotMatch(privacy, /exactly what your PDF prints/);
  assert.match(privacy, /kept with your reading so your PDF can show/, "prerender sentinel");
});
