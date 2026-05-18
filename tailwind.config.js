/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#040816',
        surface: '#0a132c',
        accent: '#16d9ff',
        accentSoft: '#62e7ff',
        muted: '#92a4c8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(98,231,255,0.15), 0 12px 32px rgba(7,18,47,0.55)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 10% 10%, rgba(98, 231, 255, 0.12), transparent 30%), radial-gradient(circle at 90% 20%, rgba(22, 217, 255, 0.09), transparent 25%), linear-gradient(170deg, #040816 0%, #07122f 45%, #040816 100%)',
      },
    },
  },
  plugins: [],
}
