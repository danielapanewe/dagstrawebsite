/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondarycolor': '#fdd428',
        ' textcolor': '#6a6a6a',
        'primarycolor':'#1c2765',
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
  },
    },
  },
  plugins: [],
}

