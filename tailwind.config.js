module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat'],
        merri: ['Merriweather'],
        src: ['Source Code Pro'],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#ffeeeb',
        secondary: '#ff4716',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#ffeeeb',
        secondary: '#ff4716',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: '#ffeeeb',
        secondary: '#ff4716',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
