/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // clipPath: {
      //   wave: "path('M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,500 L0,500 Z')",
      // },
    },
  },
  plugins: [],
}