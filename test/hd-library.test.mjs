import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

/**
 * THE HUMAN DESIGN LIBRARY CARRIES 62 LOCKED CALLS, AND CALLS HAVE BEEN LOST
 * BETWEEN VERSIONS BEFORE ("How are my calls getting missed in version
 * changes???"). The ledger is HD-Library-Locked-Calls.md; the approved mock is
 * HD-Library-Work/mocks/HD-Library-Flow-Mock-v29.html.
 *
 * This pins the wordings that ARE a call, so a tidy-up cannot quietly undo one,
 * and keeps the generated src/library/hd/data.ts identical to the content JSON
 * it was made from. The content check is cross-repo and SKIPS when the sibling
 * HD-Library-Work folder is absent, like twins.test.mjs.
 */

const SRC = ["src/library/hd/HdLibrary.tsx", "src/library/hd/engine.ts"].map((f) => fs.readFileSync(f, "utf8")).join("\n");
const WORK = path.resolve(process.cwd(), "..", "HD-Library-Work", "content");

/** Each locked wording, with the call that set it. */
const REQUIRED = [
  ["Search your cross here", 62],
  ["Typing the exact name from your chart here opens its entry.", 61],
  ["Your own way", 18],
  ["Making sense of patterns", 18],
  ["Learning through experience", 18],
  ["Looking after your people", 18],
  ["Self-powered", 18],
  ["Not colored in, any gates lit", 58],
  ["When it&rsquo;s on track", 45],
  ["When it&rsquo;s off track", 45],
  ["Each kind below lights up its channels on the drawing.", 37],
  ["Know your chart?", 37],
  ["Full list (36)", 38],
  ["Download example chart", 39],
  ["an example chart", 43],
  ["Where the two numbers come from:", 42],
  ["Your profile is in the summary · $1.11", 40],
  ["Summary $1.11 · Chart $11.11 · Reading $44.44", 40],
  ["Opens in Channels.", 53],
  ["Get yours!", 9],
  ["Ra Uru Hu and the", 6],
  ["Start a conversation", 7],
  ["'Heart'", 12],
  ["'Emotional'", 11],
  ["'Right Angle · 16'", 25],
  ["'Left Angle · 33'", 25],
  ["'Juxtaposition · 64'", 25],
];
const BANNED = [
  ["When it isn", 45],
  ["lit on its own", 46],
  ["Half a channel", 47],
];

test("every locked wording is still in the library", () => {
  for (const [s, call] of REQUIRED) assert.ok(SRC.includes(s), `call ${call}: missing "${s}"`);
  for (const [s, call] of BANNED) assert.ok(!SRC.includes(s), `call ${call}: superseded wording back: "${s}"`);
});

test("US spelling in what the reader sees (call 27)", () => {
  const data = fs.readFileSync("src/library/hd/data.ts", "utf8");
  for (const [name, text] of [["source", SRC], ["data.ts", data]]) {
    const prose = text.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
    assert.doesNotMatch(prose, /\b[Cc]entre|\b[Cc]olour/, `${name} has British spelling`);
  }
});

test("each topic links its own marked example chart, and the file ships", () => {
  for (const k of ["types", "authority", "centers", "definition", "profiles", "channels", "gates", "crosses"]) {
    assert.ok(fs.existsSync(`public/samples/charts/example-chart-${k}.pdf`), `missing example-chart-${k}.pdf`);
  }
  assert.ok(SRC.includes("/samples/charts/example-chart-crosses.pdf"));
});

test("data.ts is still exactly the content JSON it was generated from", (t) => {
  if (!fs.existsSync(WORK)) {
    t.skip(`sibling folder absent: ${WORK}`);
    return;
  }
  const ts = fs.readFileSync("src/library/hd/data.ts", "utf8");
  const take = (name) => {
    const m = new RegExp(`export const ${name}: [^=]+= (\\{[\\s\\S]*?\\});\\n`).exec(ts);
    assert.ok(m, `no ${name} in data.ts`);
    return JSON.parse(m[1]);
  };
  const J = (f) => JSON.parse(fs.readFileSync(path.join(WORK, f + ".json"), "utf8"));
  const prof = J("profiles"), cr = J("crosses");
  assert.deepEqual(take("TYPETXT"), J("types").types, "types.json changed: regenerate data.ts");
  assert.deepEqual(take("AUTHTXT"), J("authority").authority, "authority.json changed");
  assert.deepEqual(take("CTRTXT"), J("centers").centers, "centers.json changed");
  assert.deepEqual(take("DEFTXT"), J("definition").definition, "definition.json changed");
  assert.deepEqual(take("PROF"), { lines: prof.lines, profiles: prof.profiles }, "profiles.json changed");
  assert.deepEqual(take("CHAN"), J("channels").channels, "channels.json changed");
  assert.deepEqual(take("GATETXT"), J("gates").gates, "gates.json changed");
  assert.deepEqual(take("CRTXT"), { right: cr.right, left: cr.left }, "crosses.json changed");
  assert.deepEqual(take("CRIX"), J("crosses-index"), "crosses-index.json changed");
});
