/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens (reference site se sample kiye gaye)
        ink: { DEFAULT: '#0d1721', soft: '#3d4752', muted: '#6b7580' },
        cream: '#faf3e9',
        paper: '#fdfcf8',
        sand: '#f1e8d9',
        line: '#e6ddcf',
        brand: { DEFAULT: '#004894', dark: '#003a7a', light: '#2f6fb5', soft: '#d6f0ff' },
        night: { DEFAULT: '#0d1721', 2: '#121c26', 3: '#1a2530' },
        star: '#f28c28',
        // Purane naam (compatibility)
        navy: { DEFAULT: '#0d1721', 800: '#121c26', 700: '#1a2530' },
        accent: { DEFAULT: '#004894', dark: '#003a7a', soft: '#d6f0ff' },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(13,23,33,0.04), 0 10px 30px rgba(13,23,33,0.06)',
        pill: '0 10px 24px rgba(0,72,148,0.28)',
      },
    },
  },
  plugins: [],
};
