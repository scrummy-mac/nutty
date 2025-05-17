/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      colors: {
        bone: '#F9F4E8',
        blackForest: '#182D23',
        mutedGold: '#E8D6B9',
      },
    },
  },
  plugins: [],
}