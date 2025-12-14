/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background))',
        surface: 'hsl(var(--color-surface))',
        'surface-light': 'hsl(var(--color-surface-light))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          light: 'hsl(var(--color-primary-light))',
        },
        secondary: 'hsl(var(--color-secondary))',
        border: 'hsl(var(--color-border))',
      },
      textColor: {
        primary: 'hsl(var(--color-text-primary))',
        secondary: 'hsl(var(--color-text-secondary))',
        muted: 'hsl(var(--color-text-muted))',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
