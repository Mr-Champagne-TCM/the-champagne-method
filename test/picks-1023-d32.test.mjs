import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * DECISION 32 (GO v3, my pick, pending Jeremy): the bodygraph page's one
 * decision for the week asks for something small, as the readings' try-this
 * lines do, not "something with real stakes".
 */
const bg = fs.readFileSync("src/library/article/ReadingYourBodygraph.tsx", "utf8");

test("decision 32: 'Something small with a short fuse.'", () => {
  assert.ok(bg.includes("<P>One decision. Not your career. Something small with a short fuse.</P>"));
  assert.ok(!bg.includes("real stakes"), "the old words are gone");
});
