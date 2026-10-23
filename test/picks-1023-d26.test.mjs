import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * DECISION 26 (GO v3, my pick, pending Jeremy; 10/23 read F2): customer copy
 * speaks as Jeremy, "I/my", not "we/our". On the website that meant the two
 * wheel lines ("The wheel below is ours", "This wheel is ours"). The coaching
 * home page's "we" (Jeremy and a client, working together) stays, by his
 * pick; so does the general "we" of people at large in the libraries' own
 * words ("what we carry forward", "where are we heading?").
 */
const read = (f) => fs.readFileSync(f, "utf8");
/** What a reader can see: comments out. */
const prose = (s) => s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

test("decision 26: the wheel is 'mine', in the library card and on the tool", () => {
  const shelf = read("src/library/content.ts");
  const wheel = read("src/library/tools/EmotionWheel.tsx");
  assert.ok(shelf.includes("<p>The wheel below is mine &mdash; drawn for this library, with its own words. It is yours to open, keep, print, or pass along.</p>"));
  assert.ok(prose(wheel).includes("This wheel is mine &mdash; drawn for this library, with its own words."));
  for (const [n, s] of [["library card", shelf], ["wheel tool", prose(wheel)]]) assert.doesNotMatch(s, /\bis ours\b/, n);
});

test("decision 26: no we/our on the Human Design pages and the privacy page", () => {
  for (const f of [
    "src/library/article/ReadingYourBodygraph.tsx",
    "src/library/article/WhatAReadingIs.tsx",
    "src/library/article/Privacy.tsx",
    "src/library/article/ArticleUI.tsx",
    "src/library/hd/HdLibrary.tsx",
  ]) {
    assert.doesNotMatch(prose(read(f)), /\b(we|We|our|Our|ours)\b|\bwe&rsquo;|\bWe&rsquo;|\bwe’/, f);
  }
});

test("decision 26: the coaching home page keeps its 'we' (Jeremy and a client)", () => {
  assert.match(read("src/components/Method.tsx"), /\bwe\b/);
});
