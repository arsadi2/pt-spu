/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black' : '#060805',
        'my-yellow' : '#D2A810'
      }
    },
  },
  plugins: [],
}
