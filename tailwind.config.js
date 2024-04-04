/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#868A73",
        secondary: "#FFD098",
        tertiary: "#FD904C",
      }
    },
  },
  plugins: [],
}
