import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
    },
    fontFamily: {
      ui: ['serif'],
      content: ['sans-serif'],
      code: ['Fira Code', 'monospace'],
      logo: ['serif'],
    },
  },
} satisfies Config
