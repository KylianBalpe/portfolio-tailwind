/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans"],
        mono: ["JetBrains Mono"],
      }
    },
  },
  plugins: [],
}
