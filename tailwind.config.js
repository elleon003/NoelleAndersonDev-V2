module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#343276',
      'gold': {
        500: '#BEA187',
        700: '#B08D6D'
      },
      'light': '#F1F1F9',
      'dark': '#0D0C1D',
      'grey': '#7F7F88',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      'body': ['Montserrat', 'ui-sans-serif'],
      'sans': ['Montserrat', 'ui-sans-serif'],
      'display': ['PermanentMarker', 'ui-serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
