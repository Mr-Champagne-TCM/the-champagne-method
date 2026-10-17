import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

/**
 * THE FOOTER THEME ON THE HUMAN DESIGN PAGES ONLY (Jeremy 10/17). The words
 * are the readings' emails' (hd-site shared/footerTheme.mjs); the coaching
 * pages stay clean of HD (10/16), so only pages that already carry Human
 * Design turn it on.
 */
const read = (f) => fs.readFileSync(f, "utf8");
const ui = read("src/library/article/ArticleUI.tsx");

test("the theme's words and links are the accepted ones", () => {
  for (const w of [
    "href: 'https://humandesign.thechampagnemethod.co/'",
    "name: 'Human Design by The Champagne Method'",
    "line: 'Charts and readings, for you or someone close to you.'",
    "href: 'https://thechampagnemethod.co'",
    "name: 'The Champagne Method Coaching and Consulting'",
    "line: 'Coaching, if you’d like to go further.'",
    "color: '#a78bfa'",
  ]) assert.ok(ui.includes(w), w);
  assert.doesNotMatch(ui, /Human Design By /);
});

test("the four Human Design pages turn it on", () => {
  for (const f of [
    "src/library/article/WhatAReadingIs.tsx",
    "src/library/article/Privacy.tsx",
    "src/library/article/ReadingYourBodygraph.tsx",
  ]) assert.match(read(f), /<ArticlePage[^>]*\bhd\b/, f);
  assert.match(read("src/library/hd/HdLibrary.tsx"), /<Footer\s+hd\s/);
});

test("the coaching pages and the site-wide 404 do not", () => {
  assert.match(ui, /export function Footer\(\{ note, hd = false \}/, "off unless asked for");
  assert.match(read("src/site/NotFound.tsx"), /<Footer \/>/);
  for (const f of ["src/components/Footer.tsx", "src/library/LibraryApp.tsx", "src/App.tsx", "src/tools/ToolsApp.tsx"]) {
    assert.doesNotMatch(read(f), /Charts and readings, for you|FooterTheme|footer-theme/, f);
  }
});

test("the privacy page has the in-person section the readings site links to", () => {
  const p = read("src/library/article/Privacy.tsx");
  assert.match(p, /id="in-person"/);
  assert.match(p, /Readings made with Jeremy in person/);
  assert.match(p, /The link stops working after seven days/);
  assert.doesNotMatch(p.split('id="in-person"')[1].split("If something goes wrong")[0], /deleted when|removed when the link/,
    "do not promise the PDF is deleted when the link closes: nothing does that yet");
});
