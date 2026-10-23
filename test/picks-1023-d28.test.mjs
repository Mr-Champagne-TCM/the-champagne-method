import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * DECISION 28 (GO v3, my pick, pending Jeremy; 10/23 read F4): the centers
 * have one name, "centers". No "hubs" (the library's topic map, eyebrow,
 * intro and Reflector one-liner) and no "engines" synonym line on the
 * bodygraph page ("engine" collides with "motor").
 */
const read = (f) => fs.readFileSync(f, "utf8");
/** What a reader can see: comments out. */
const prose = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
const lib = read("src/library/hd/HdLibrary.tsx");
const data = read("src/library/hd/data.ts");
const bg = read("src/library/article/ReadingYourBodygraph.tsx");

test("decision 28: no 'hubs' anywhere a reader looks on the Human Design pages", () => {
  for (const [name, src] of [["hd library", lib], ["library words", data], ["bodygraph", bg]]) {
    assert.doesNotMatch(prose(src), /\bhubs?\b/i, name);
  }
  for (const s of [
    "<span>The nine centers on the chart</span>",
    "<span>How your centers connect</span>",
    '<span className="eyebrow">The nine centers</span>',
    "Nine centers on the chart. Each one is colored in, or not.",
    "['centers', 'Centers', 'the nine centers'],",
  ]) assert.ok(lib.includes(s), s);
  assert.ok(data.includes('"glance": "No steady centers of its own. Reflects the people and places around it."'));
});

test("decision 28: the bodygraph page's Centers card has no 'engines' synonym", () => {
  assert.doesNotMatch(prose(bg), /\bengines?\b/i);
  assert.ok(prose(bg).replace(/\s+/g, " ").includes("The nine shapes &mdash; squares, triangles, diamonds. Each one governs a different kind of energy. </Card>"));
});
