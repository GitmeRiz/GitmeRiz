module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
