/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0B09',
        surface: '#131109',
        'surface-elevated': '#1A1710',
        border: '#2A2520',
        gold: '#C2A87A',
        'gold-hover': '#D4B888',
        'text-primary': '#F2EDE6',
        'text-secondary': '#9A9285',
        'text-muted': '#5A5248',
        stone: '#8A7A6A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
