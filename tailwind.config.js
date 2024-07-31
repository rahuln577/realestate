/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero':'url("/src/Images/houseside1.jpg")',
        'hero2':'url("/src/Images/houseside2.jpg")',
        'hero3':'url("/src/Images/houseside3.jpg")'
      }
    },
    fontFamily:{
      'poppins':['Poppins']
    },
  },
  plugins: [],
}

