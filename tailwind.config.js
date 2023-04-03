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
      sans: [
        'Linux Biolinum O',
        // 'Source Han Serif SC',
        'LXGW New Clear Gothic',
        'LXGW Clear Gothic',
        'sans-serif',
      ],
      serif: ['Linux Libertine O', 'LXGW WenKai Lite', 'serif'],
      mono: [
        'Fira Code',
        // NOTE One Chinese character should equal to two English characters.
        // 'LXGW WenKai Larger',
        'LXGW WenKai Mono Lite',
        'monospace',
      ],
      logo: ['Bodoni Moda', 'Source Han Serif SC', 'serif'],
    },
  },
}
