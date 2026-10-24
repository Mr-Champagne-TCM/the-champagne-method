import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * THE CLAUDE WRITER, SAID PLAINLY (Jeremy 10/23: "This is the new approach"). Anthropic's Claude writes
 * the interpretation and Google's Gemini only steps in when Claude cannot; the privacy page must say who
 * gets the chart values, and must never again say Google alone writes it.
 */
const privacy = fs.readFileSync("src/library/article/Privacy.tsx", "utf8");
const said = privacy.replace(/\{\/\*[\s\S]*?\*\/\}/g, "");

test("the privacy page names Anthropic as the writer and Gemini as the backup", () => {
  assert.ok(said.includes("<strong>Anthropic</strong> writes the interpretation on the reading tier"));
  assert.ok(said.includes("Gemini model\n            writes it instead"));
  assert.ok(said.includes("never sent to Anthropic\n        or Google, who write the interpretation"));
  assert.ok(said.includes("Stripe, Anthropic, Google, Resend"));
  assert.ok(said.includes("doesn&rsquo;t use it to train their models and deletes it within 30 days"));
});

test("no sentence still says Google alone writes it", () => {
  assert.ok(!/<strong>Google<\/strong> writes the interpretation/.test(said));
  assert.ok(!/\n\s*Google writes the interpretation/.test(said));
  assert.ok(!said.includes("Google never sees it"));
});
