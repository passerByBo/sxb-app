/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{html,js,css,tsx,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
     colors:{
      primary: '#383838'
     }
    },
  },
  plugins: [],
}

