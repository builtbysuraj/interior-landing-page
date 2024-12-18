/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        playfairDisplay: ['"Playfair Display"', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: '#FF0000',
        white: '#ffffff',
        textDark: '#2C2C2C',
        textLight: '#444444',
      },
    },
    container: {
      center: true,
      screens: {
        lg: '1400px',
      },
    },
    // colors: {},
  },
  plugins: [require('tailwindcss-animate')],
}
