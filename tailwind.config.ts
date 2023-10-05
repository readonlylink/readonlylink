import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',  
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
    },
    fontFamily: {
      ui: ['sans-serif'],
      content: ['sans-serif'],
      code: ['monospace'],
      logo: ['sans-serif'],
    },
  },
} satisfies Config
