import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
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
