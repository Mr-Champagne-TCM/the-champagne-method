import { resolve } from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Paste the website ID from Umami Cloud here. Empty string means no script is
 * injected at all, which is the safe default — the site simply is not tracked.
 *
 * This value is NOT a secret. It ships in the HTML of every page by design, so
 * hardcoding it is correct: an env var would also have to be set in the GitHub
 * Actions build, and a missing one there would silently ship an untracked site.
 */
const UMAMI_WEBSITE_ID = '7649009f-4f02-43ca-b1b6-3d9f5ab05863';

/**
 * Adds the analytics tag to every built page from one place. Each entry HTML has
 * its own duplicated <head>, so without this the snippet would have to be pasted
 * into four files and kept in step.
 *
 * `apply: 'build'` keeps it out of `npm run dev`, and `data-domains` means even a
 * built preview served from localhost reports nothing.
 *
 * Note: files in public/ are copied verbatim and never pass through here, so
 * public/r/index.html is not covered.
 */
function umamiTag(): Plugin {
  return {
    name: 'umami-tag',
    apply: 'build',
    transformIndexHtml() {
      if (!UMAMI_WEBSITE_ID) return [];
      return [
        {
          tag: 'script',
          injectTo: 'head',
          attrs: {
            defer: true,
            src: 'https://cloud.umami.is/script.js',
            'data-website-id': UMAMI_WEBSITE_ID,
            'data-domains': 'thechampagnemethod.co',
          },
        },
      ];
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), umamiTag()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        library: resolve(__dirname, 'library/index.html'),
        humanDesign: resolve(__dirname, 'library/human-design/index.html'),
        bodygraph: resolve(__dirname, 'library/bodygraph/index.html'),
      },
    },
  },
});
