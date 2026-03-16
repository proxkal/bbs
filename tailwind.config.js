/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bbs-green': '#007A7A', // Le vert de Bouyedi Business & Services
        'bbs-dark-blue': '#0f172a',
      },
    },
  },
  plugins: [],
}
