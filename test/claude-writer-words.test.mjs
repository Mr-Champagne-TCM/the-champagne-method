import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * THE CLAUDE WRITER, SAID PLAINLY (Jeremy 10/23: "This is the new approach"; Gemini dropped 10/25: "drop
 * gemini. fix related wording affected"). Anthropic's Claude is the only writer; the privacy page says who
 * gets the chart values, and Google -- which no longer gets anything -- is on none of its lists.
 */
// Line endings as checked out (CRLF on this Windows checkout) never decide a test.
const privacy = fs.readFileSync("src/library/article/Privacy.tsx", "utf8").replace(/\r\n/g, "\n");
const said = privacy.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

test("the privacy page names Anthropic as the writer, and only Anthropic", () => {
  assert.ok(said.includes("<strong>Anthropic</strong> writes the interpretation on the reading tier, using their\n            Claude model. <strong>They receive the values of your chart and nothing else</strong>"));
  assert.ok(said.includes("never sent to Anthropic,\n        who writes the interpretation"));
  assert.ok(said.includes("Anthropic never sees it."));
  assert.ok(said.includes("Stripe, Anthropic, Resend and the chart calculator"));
  assert.ok(said.includes("Anthropic writes the interpretation for these too, from the values of your chart only"));
  assert.ok(said.includes("doesn&rsquo;t use it to train their models and deletes it within 30 days"));
});

test("Google and Gemini are named nowhere a reader sees", () => {
  assert.ok(!/Google|Gemini/.test(said), (said.match(/.{0,60}(Google|Gemini).{0,60}/) ?? [""])[0]);
});
