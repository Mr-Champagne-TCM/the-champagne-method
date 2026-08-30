/**
 * Prerender the built pages.
 *
 * Why this exists: every page is React mounted into an empty <div id="root">, so the
 * HTML a crawler fetches carried about 475 characters of text while a reader saw over a
 * thousand words. Google can run JavaScript, but it is a delayed second pass and a new
 * domain does not get the benefit of the doubt. This runs each built page through headless
 * Chrome and writes the rendered DOM back to disk, so the markup contains the actual words.
 *
 * The page still boots React afterwards — the module script tag is preserved and
 * createRoot().render() simply replaces the container, so there is no hydration contract
 * to violate and no mismatch to worry about.
 *
 * No npm dependency: it drives the Chrome that is already installed, and serves the built
 * output from Node's own http module.
 *
 * Every page is validated before it is written. A page that renders short, loses its title,
 * or loses its script tag is left exactly as the build produced it.
 */
import { createServer } from 'node:http';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);
const DOCS = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const PORT = 4199;

/** Routes to prerender. /r/ is excluded on purpose: it is a hand-written static page in
 *  public/ that frames a private Apps Script view, not React, and nothing should index it. */
const ROUTES = [
  { path: '/', sentinel: 'Nothing changes until you' },
  { path: '/library/', sentinel: 'Take the tools' },
  { path: '/library/human-design/', sentinel: 'Human Design is a map of how' },
  { path: '/library/bodygraph/', sentinel: 'wiring diagram, not a verdict' },
  { path: '/readings/', sentinel: 'Three ways in, and what arrives with each' },
  { path: '/tools/', sentinel: 'Three short quizzes' },
  { path: '/readings/privacy/', sentinel: 'used to work out your chart and are then discarded' },
];

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
};

function findChrome() {
  for (const c of CHROME_CANDIDATES) if (existsSync(c)) return c;
  return null;
}

function serve() {
  const server = createServer(async (req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const file = join(DOCS, p);
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

const textLength = (html) =>
  html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]*>/g, '').replace(/\s+/g, '').length;

const chrome = findChrome();
if (!chrome) {
  console.warn('[prerender] SKIPPED — no Chrome found. Pages ship as the empty React shell.');
  console.warn('[prerender] Looked in:', CHROME_CANDIDATES.join(', '));
  process.exit(0);
}

const server = await serve();
let written = 0;
let skipped = 0;

for (const { path, sentinel } of ROUTES) {
  const target = join(DOCS, path.slice(1), 'index.html');
  const before = await readFile(target, 'utf8');
  const beforeLen = textLength(before);
  const title = before.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';

  let html;
  try {
    const { stdout } = await run(
      chrome,
      ['--headless=new', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
       '--virtual-time-budget=10000', '--dump-dom', `http://127.0.0.1:${PORT}${path}`],
      { maxBuffer: 64 * 1024 * 1024 },
    );
    html = stdout;
  } catch (err) {
    console.warn(`[prerender] ${path} — Chrome failed (${err.message.split('\n')[0]}), left as built`);
    skipped++;
    continue;
  }

  const afterLen = textLength(html);
  const problems = [];
  if (!html.startsWith('<!DOCTYPE html>')) problems.push('no doctype');
  if (!html.includes('<script type="module"')) problems.push('lost the module script');
  if (title && !html.includes(`<title>${title}</title>`)) problems.push('lost its title');
  if (!html.includes(sentinel)) problems.push(`missing sentinel "${sentinel}"`);
  if (afterLen <= beforeLen) problems.push(`no text gained (${beforeLen} -> ${afterLen})`);

  if (problems.length) {
    console.warn(`[prerender] ${path} — REJECTED: ${problems.join('; ')}. Left as built.`);
    skipped++;
    continue;
  }

  await writeFile(target, html, 'utf8');
  console.log(`[prerender] ${path.padEnd(26)} ${beforeLen} -> ${afterLen} chars of text`);
  written++;
}

server.close();
console.log(`[prerender] ${written} prerendered, ${skipped} left as built`);
if (written === 0) console.warn('[prerender] WARNING: nothing was prerendered.');
