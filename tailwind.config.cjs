/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Orange': 'hsl(25, 97%, 53%)',  
        'White': 'hsl(0, 0%, 100%)',
        'LightGrey': 'hsl(217, 12%, 63%)',
        'DarkBlue': 'hsl(213, 19%, 18%)',
        'VeryDarkBlue': 'hsl(216, 12%, 8%)',
        },
        fontFamily: {
          'Overpass': ['"Overpass"', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

