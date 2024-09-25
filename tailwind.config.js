/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      sm: '320px',
      md: '500px',
    },
    extend: {
      colors: {
        primary: '#FFFF',
      },
    },
  },
  plugins: [],
};
