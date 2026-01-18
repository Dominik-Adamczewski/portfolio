
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'proj-15-green-700': 'hsl(169, 83%, 16%);',
        'proj-15-green-600': 'hsl(169, 82%, 27%)',
        'proj-15-green-400': 'hsla(169, 82%, 40%, 0.7)',
        'error': '#ff0000',
      },
    },
  },
  plugins: [],
}