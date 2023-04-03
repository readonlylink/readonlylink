const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
    },
    fontFamily: {
      sans: ['Linux Biolinum O', 'Source Han Serif SC', 'sans-serif'],
      serif: ['Linux Libertine O', 'LXGW WenKai', 'serif'],
      // NOTE One Chinese character should equal to two English characters.
      mono: ['Fira Code', 'LXGW WenKai Larger', 'monospace'],
      logo: ['Bodoni Moda', 'Source Han Serif SC', 'serif'],
    },
  },
}
