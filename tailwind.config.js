/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)',
      },
      width: {
        'max-12vw-120px': 'max(12vw, 120px)',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

