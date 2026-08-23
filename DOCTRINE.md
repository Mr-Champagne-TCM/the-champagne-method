# Project Doctrine — The Champagne Method Website

> **Purpose:** This is the governing reference for all edits to this repo. Read it before
> making any change. Its top priority is: **do not break the build or the deployment.**
> Live site: **https://thechampagnemethod.co**
> Repo: `github.com/Mr-Champagne-TCM/the-champagne-method`
> Last audited at **v2.0** (Aug 2026) — the redesign: new palette and type, layered
> waves + bubbles background, Calendly link-out, and a static library page at `/library/`.

---

## 0. Session startup (do this first, every time)

**At the start of any working session on this repo, always:**
1. Ensure dependencies are installed — run `npm install` (or `npm ci`) if `node_modules`
   is missing or `package.json`/lockfile changed.
2. **Start the Vite dev server** (`npm run dev`) so changes can be previewed live at the
   local URL (default `http://localhost:5173`).

This is the owner's standing instruction: begin every session by installing and running the
dev server before making edits.

**Environment notes (this machine):**
- Node.js LTS is installed at `C:\Program Files\nodejs` (installed 2026-07-21 via winget,
  `OpenJS.NodeJS.LTS`, v24.x). If a fresh shell can't find `npm`, prepend that dir to PATH:
  `$env:Path = "C:\Program Files\nodejs;" + $env:Path`.
- npm 11+ gates package install scripts. `esbuild`'s postinstall may be skipped with an
  `allow-scripts` warning, but its native binary
  (`node_modules\@esbuild\win32-x64\esbuild.exe`) is present and Vite works. If Vite ever
  fails on a missing esbuild binary, run `npm approve-scripts` / reinstall to fix.
- Dev server serves at `http://localhost:5173/`.

---

## 1. Stack (what this is)

| Layer | Tech |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler / dev server | **Vite 5** |
| Styling | Tailwind CSS 3 + PostCSS + autoprefixer |
| Font | "Plus Jakarta Sans" (loaded via Google Fonts in `index.html`) |
| Icons | `lucide-react` |
| Backend/data | `@supabase/supabase-js` (used by the connect/contact flow) |
| Lint | ESLint 9 flat config + typescript-eslint |

**Scripts** (`package.json`):
- `npm run dev` — local dev server (Vite)
- `npm run build` — production build → outputs to `docs/`
- `npm run preview` — serve the built output locally
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit -p tsconfig.app.json`

---

## 2. Build & deployment — THE RULES (do not break these)

### 2.1 How deployment works
- Deployment is **automatic**: a push to the **`main`** branch triggers
  `.github/workflows/deploy.yml`, which runs `npm ci` → `npm run build` → uploads
  `./docs` → deploys to GitHub Pages.
- **A push to `main` publishes the live site.** There is no manual deploy step and no
  staging environment. Treat every push to `main` as going live.

### 2.2 Non-negotiable build config
These settings are load-bearing. Changing them can break the site or the custom domain:

1. **Build output dir is `docs/`, NOT `dist/`.**
   Set in `vite.config.ts` (`build.outDir: 'docs'`). The GitHub Pages workflow uploads
   `./docs`. Do not change `outDir`.

2. **`base: '/'` in `vite.config.ts`** — required because the site is served from the
   apex domain (`thechampagnemethod.co`), not a sub-path. Do not change to a repo-name
   base unless the domain setup changes.

3. **`CNAME` must survive every build.** The custom domain depends on `docs/CNAME`
   containing `thechampagnemethod.co`. This works because `public/CNAME` exists and Vite
   copies everything in `public/` into the output dir on build.
   - **Never delete `public/CNAME`.** If it's missing, the built `docs/` will have no
     CNAME, and GitHub Pages will drop the custom domain → site breaks at the domain.

4. **`docs/` is regenerated on every build — never hand-edit it.**
   Vite empties `docs/` on each build (`emptyOutDir` default). Any manual change to files
   under `docs/` (including `docs/assets/*`) will be wiped. Edit **`src/`** instead.

### 2.3 Committed build output — known quirk
- The built `docs/` folder is currently **committed to the repo**. CI rebuilds it fresh on
  deploy, so the committed copy does not affect the live site — but local builds will
  produce diffs in `docs/assets/index-*.js|css`.
- **Do not treat `docs/` diffs as meaningful changes.** If asked to commit source edits,
  be deliberate about whether to also commit the regenerated `docs/`.
- Open question (needs owner decision): stop tracking `docs/` via `.gitignore`, or keep it.
  Not changed yet.

### 2.4 Stale branch
- `origin/gh-pages` exists but is **not** used by the current Actions-based deploy. Legacy
  from an older branch-based Pages setup. Leave it alone unless we decide to clean up.

---

## 3. Source layout

`src/App.tsx` renders a fixed `Background` (see below) plus 10 sections in order:

```
Navbar → Hero → Premise → WhoIWorkWith → Themes → Method → HowItAdapts
       → FreeResources → MyStory → Testimonials → LetsConnect → Footer
```

**`Background.tsx` is a deliberate z-index stack** — `z0` gradient ground + glow, `z1`
three animated wave SVGs, `z2` 60 rising bubbles, with all content above at `z10`.
The wave timings (1s / 1.25s / 1.6s) are **owner-confirmed and intentional** — do not
"fix" them by slowing them down.

**Second page:** `public/library/index.html`, served at `/library/`. Standalone static
HTML on purpose, so it adds zero build risk. It carries **its own copy of the design
tokens** — a palette change must be made in both there and `tailwind.config.js`.
Note that `npm run dev` does not serve it (the SPA fallback wins); use `npm run preview`.

**Version marker:** the footer of both pages shows `v2.0 · Aug 2026`, and `package.json`
carries the matching version. Keep all three in step when releasing.

- Components live in `src/components/*.tsx` (one file per section).
- Global styles + Tailwind layers: `src/index.css`.
- Entry: `src/main.tsx`; HTML shell: `index.html` (root, not `docs/index.html`).

### Design tokens (Tailwind)
Custom color palettes defined in `tailwind.config.js`: **`navy`**, **`lavender`**, **`teal`**
(each a 50–900/950 scale). Font family `sans` is mapped to Plus Jakarta Sans. Reuse these
tokens for visual consistency rather than hardcoding hex values where a token exists.

---

## 4. Pre-push checklist (run before ANY push to `main`)

Because pushing to `main` deploys live, verify locally first:

1. `npm run typecheck` — must pass (no TS errors).
2. `npm run lint` — should pass.
3. `npm run build` — must succeed and produce `docs/` with a `CNAME` file present.
4. Sanity-check with `npm run preview` (or `npm run dev` during development).
5. Confirm `public/CNAME` still contains `thechampagnemethod.co`.

Only push to `main` when explicitly instructed by the owner.

---

## 5. Editing conventions

- **Edit `src/`, never `docs/`.**
- Match the existing code style of neighboring components (Tailwind utility classes,
  functional components, named default exports per file).
- Prefer the custom Tailwind color tokens (`navy`/`lavender`/`teal`) over raw hex.
- Keep secrets out of the repo. `.env` is gitignored; Supabase keys must not be committed.
  (Note: any key shipped in a client-side Vite build is public by nature — use only
  anon/public-safe keys and rely on Supabase Row Level Security.)

---

## 6. Security / access notes
- The site is a static client-side build; there is no server the repo controls beyond
  GitHub Pages + Supabase.
- Never commit access tokens, PATs, or private Supabase keys.
