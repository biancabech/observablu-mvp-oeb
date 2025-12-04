/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // <--- ISSO É O MAIS IMPORTANTE
  ],
  theme: {
    extend: {
      colors: {
        cib: {
          blue: '#2B589F',
          orange: '#F05A28',
        }
      }
    },
  },
  plugins: [],
}