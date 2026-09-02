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
        background: 'var(--bg-main)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        accent: 'var(--accent)',
        brass: 'var(--text-brass)',
        ivory: 'var(--text-ivory)',
        sand: 'var(--text-sand)',
        accentDark: 'var(--accent-dark)',
        borderSubtle: 'var(--border-subtle)',
        borderStrong: 'var(--border-strong)',
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
