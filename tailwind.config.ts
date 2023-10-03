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
      // sans: ['Unifont', 'sans-serif'],
      // serif: ['Unifont', 'serif'],
      // ui: ['Unifont', 'sans-serif'],
      // content: ['Unifont', 'sans-serif'],
      // code: ['Unifont', 'monospace'],
      // logo: ['Unifont', 'sans-serif'],

      ui: ['sans-serif'],
      content: ['sans-serif'],
      code: ['monospace'],
      logo: ['sans-serif'],
    },
  },
} satisfies Config
