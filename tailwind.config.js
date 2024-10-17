
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      },

      width: {
        '700': '700px',
        '90' : '90px',
        '2300': '2300px'
      },
      height: {
        '05': '440px'
      },
      spacing: {
        'md': "45vw",
        '50%': "50%",
        '25%': "25%",
        '500': "500px",
        '515': "515px"
      },
      color: {
        'color-#C4C4C4': '#C4C4C4'
      }
    },
  },
  plugins: [],
}