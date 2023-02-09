/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "container": "url('./assets/images/background_container.jpg')"
      }
    }
  },
  plugins: [],
}