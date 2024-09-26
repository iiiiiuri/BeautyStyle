/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    '**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Inria Serif"', 'serif'],
      },
      colors: {
        'destaque': '#E4B6B1',
        'apoio': '#FEADAC',
        'detalhes': '#E7A481',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'), 
    // require('flowbite/plugin')
  ],
}