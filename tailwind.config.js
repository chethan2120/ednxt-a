/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102B50',
          dark: '#0B2142',
          light: '#1e3a63',
          muted: '#2a4365',
        },
        brand: {
          blue: '#2563EB',
          'blue-light': '#3B82F6',
          'blue-dark': '#1D4ED8',
          lime: '#B4E94E',
          'lime-dark': '#93CA30',
          'lime-hover': '#A3DC3A',
        },
        soft: {
          blue: '#EAF3FF',
          green: '#EAF8E9',
          purple: '#F1EAFE',
          orange: '#FFF0DE',
          yellow: '#FEF9C3',
        },
        edbg: '#F8FAFF',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(16, 43, 80, 0.06), 0 2px 6px -1px rgba(16, 43, 80, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(16, 43, 80, 0.08), 0 4px 12px -2px rgba(16, 43, 80, 0.04)',
        'card-hover': '0 20px 40px -8px rgba(16, 43, 80, 0.12), 0 8px 16px -4px rgba(16, 43, 80, 0.06)',
        'glow-lime': '0 0 24px -2px rgba(180, 233, 78, 0.45)',
        'glow-blue': '0 0 24px -2px rgba(37, 99, 235, 0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
