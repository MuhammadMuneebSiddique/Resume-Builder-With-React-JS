/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppin:["Poppins", "sans-serif"],
        Hanken_Grotesk:["Hanken Grotesk", "sans-serif"],
        inter:["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

