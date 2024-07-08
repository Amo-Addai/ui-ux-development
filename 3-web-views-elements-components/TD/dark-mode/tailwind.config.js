/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // custom twind-css class-construct 'dark:bg-gray-700'
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
