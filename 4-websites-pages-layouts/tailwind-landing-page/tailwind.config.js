/** @type {import('tailwindcss').Config} */
module.exports = {
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
