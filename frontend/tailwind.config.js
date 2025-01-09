/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#fef0e3',
        'wine': '#590202',
        'blue': '#2E84A6',
        'pink': '#F24464',
        'lightpink': '#F2B6A0',
      }
    },
  },
  plugins: [],
}

