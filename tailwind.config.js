/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      colors: {
      background: '#0b0c10',
      surface: '#121417',
      accent: '#14b8a6',   // teal
      highlight: '#38bdf8', // cyan
      text: '#e5e7eb',
      lightbg: '#222b37ff',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(54, 165, 217, 0.4), 0 0 20px rgba(122, 104, 238, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

