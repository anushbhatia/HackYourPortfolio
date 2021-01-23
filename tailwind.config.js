const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans]
      },
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
