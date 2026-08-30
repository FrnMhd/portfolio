/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      colors: {
        background: '#121211',
        surface: '#1a1a19',
        accent: '#c87040',        // Rust
        brass: '#c2a678',         // Brass
        ivory: '#f4f4f0',         // Soft Ivory
        sand: '#9c9a96',          // Sand
        accentDark: '#1c1c1a',
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

