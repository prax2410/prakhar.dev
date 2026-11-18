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
        apple: {
          primary: '#0071e3',         // Apple signature blue
          secondary: '#2997ff',       // Light interactive blue
          tertiary: '#0066cc',        // Link blue
          neutral: '#1d1d1f',         // Near-black text
          surface: '#ffffff',         // Clean white surface
          muted: '#f5f5f7',           // Light gray alternating tone
          border: '#e5e7eb',          // Soft border
          borderSubtle: '#d2d2d7',    // Classic Apple subtle divider
          subtext: '#86868b',         // Secondary gray text
          darkBg: '#000000',          // OLED black
          darkSurface: '#161617',     // Dark card surface
          darkBorder: '#2d2d2f',      // Dark border
          darkNeutral: '#f5f5f7',     // Dark primary text
        },
        darkBg: '#000000',
        darkCard: '#161617',
        darkBorder: '#2d2d2f',
        lightBg: '#ffffff',
        lightCard: '#ffffff',
        lightBorder: '#e5e7eb',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"SF Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Courier New"',
          'monospace',
        ],
      },
      spacing: {
        section: '70px',
      },
      borderRadius: {
        'apple-sm': '4px',
        'apple-md': '8px',
        'apple-lg': '16px',
        'apple-xl': '24px',
      },
    },
  },
  plugins: [],
}
