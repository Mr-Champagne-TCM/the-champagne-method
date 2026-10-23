import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * THE 10/23 WORD-FOR-WORD READ (hd-e2e\verbatim-1023\findings.md), the website's
 * copy items fixed in that round, pinned so a tidy-up cannot quietly undo one.
 * Ids are the read's: S = should, N = nit. The library's content items (N11,
 * N13) live in HD-Library-Work content and are held to data.ts by
 * hd-library.test.mjs; S8 (call 9) is pinned there too.
 */
const read = (f) => fs.readFileSync(f, "utf8");
/** What a reader can see, on one line: comments out, whitespace collapsed. */
const prose = (s) =>
  s.replace(/\{\/\*[\s\S]*?\*\/\}/g, "").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "").replace(/\s+/g, " ");
const privacy = prose(read("src/library/article/Privacy.tsx"));
const readings = prose(read("src/library/article/WhatAReadingIs.tsx"));
const data = read("src/library/hd/data.ts");

test("S3: the privacy page's lead names the fourth change, adding a birth time later, and the callout says it", () => {
  assert.ok(
    privacy.includes(
      "The birth details changed on October 16, 2026, the name for the chart on October 19, 2026, the summary keeping them too on October 20, 2026, and adding a birth time later on October 23, 2026, so they come first.",
    ),
  );
  assert.ok(
    privacy.includes(
      "If your chart was made without a birth time, you&rsquo;re welcome to add it later, once and free. Your earlier details, and the chart (and reading) made from them, stay with your chart for its year, seen only by Jeremy.",
    ),
  );
  assert.ok(privacy.includes("Last updated October 23, 2026."));
});

test("S7: 'after a year' is true for every tier, and asks nothing of the reader", () => {
  assert.ok(privacy.includes("After a year your chart is gone from here. The chart and the reading come with a PDF that is yours to keep — that copy lives on your own device."));
  assert.ok(!privacy.includes("If you want to keep it, download the PDF"));
});

test("S4: the readings page says the credit in the site's one sentence", () => {
  assert.ok(
    readings.includes(
      "What you have already paid comes off what you pay next — nobody pays twice for the same thing. The link in your email is what proves it, so opening the next step from there means the credit is already on the price.",
    ),
  );
});

test("N11 + N13: the library's undefined Spleen and Manifesting Generator lines", () => {
  assert.ok(data.includes('"undefined": "You’re sensitive to how others feel, in body and health. You can sense when someone is unwell.'));
  assert.ok(data.includes('"summary": "Manifesting Generators have a colored-in Sacral and a motor connected to the Throat.'));
  assert.ok(!data.includes("physically and emotionally"));
  assert.ok(!data.includes("linked to the Throat by a motor"));
});
