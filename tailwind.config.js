/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'input-textarea': 'var(--input-textarea, #F5F5F5)',
      },
      colors: {
        "vtd-primary": colors.gray, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
        'Green': '#219B60',
        'Orange': '#D8602A',
        'Blue': '#0B74B0'
      },
      fontFamily: {
        golos: ['Golos Text', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        '50px': '50px',
      },
      lineHeight: {
        '56px': '56px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

