/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#09090b',       // Ultra dark sleek background
        darkCard: '#121215',     // Minimal dark card
        darkBorder: '#27272a',   // Muted border
        lightBg: '#fafafa',      // Clean off-white background
        lightCard: '#ffffff',    // White card
        lightBorder: '#e4e4e7',  // Soft gray border
        accent: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          500: '#3f3f46',
          900: '#18181b',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
