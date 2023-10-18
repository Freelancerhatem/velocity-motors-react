/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./src/assets/images/bg.jpg')",
      
      }
    },
  },
  plugins: [require("daisyui")],
}

