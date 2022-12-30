/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black' : '#FFFFFFAD',
        'my-yellow' : '#ffa500',
        'tertiary' : "#e66e00",
        'quartiary' : "#060805",
        'quinary' : "#E60000"
      }
    },
  },
  plugins: [],
}
