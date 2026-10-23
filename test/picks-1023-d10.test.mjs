import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * DECISION 10 (GO v3, my pick, pending Jeremy): the in-person section names
 * the readings site's health log -- what it keeps and for how long, as the
 * code does it (hd-reading-app hosting: recordIn writes "incident/<at>-…"
 * entries; sweepHealth clears them past fourteen days, monthly).
 */
const src = fs.readFileSync("src/library/article/Privacy.tsx", "utf8");
const inPerson = src.slice(src.indexOf('<div id="in-person"'));

test("decision 10: the in-person table has the health-log row, after the IP row", () => {
  const row = inPerson.indexOf("<strong>A record of what happens on that site</strong>, so a problem can be found and fixed");
  assert.ok(row > 0, "row present in the in-person section");
  assert.ok(row > inPerson.indexOf("A scrambled version of your IP address</strong>, when you use that form"));
  assert.ok(row < inPerson.indexOf("<strong>Occasional emails</strong>"));
  for (const s of [
    "the first six characters of the link it was about",
    "Never your name, your code, your birth details or a birth time.",
    "Each record runs for fourteen days, and a monthly clean-up clears the ones that have run out",
  ]) assert.ok(inPerson.includes(s), s);
  assert.doesNotMatch(inPerson.slice(row, inPerson.indexOf("<strong>Occasional emails</strong>")), /[a-z]'[a-z]/i, "apostrophes as &rsquo;");
});
