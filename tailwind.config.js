/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // v2.0: Fraunces carries the display voice, Outfit the body.
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        // v2.0 accent palette, kept over the v1.3 gradient ground.
        // Gold is load-bearing: eyebrow pillars, the name-note, the third wave layer.
        brand: {
          violet: '#7C5CE0',
          teal: '#3FE0C5',
          gold: '#E8CBA0',
          paper: '#F3EFF7',
          muted: '#B4A8CE',
        },
        // The three stops of the fixed background gradient (v1.3, retained).
        ground: {
          top: '#0b1428',
          mid: '#1a1040',
          bottom: '#2d1155',
        },
        navy: {
          50: '#f0f3f9',
          100: '#dce3f0',
          200: '#b9c7e1',
          300: '#8da3cc',
          400: '#6280b5',
          500: '#46629a',
          600: '#374f7e',
          700: '#2d4167',
          800: '#1e2d4a',
          900: '#15203a',
          950: '#0b1428',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
    },
  },
  plugins: [],
};
