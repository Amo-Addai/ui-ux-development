/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '100': '100'
      }
    }
  },
  plugins: [],
}
