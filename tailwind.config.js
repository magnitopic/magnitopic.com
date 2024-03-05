/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          alberto: "#ccd6f6",
          anotherColor: "#00ff00",
      },
    },
  },
  plugins: [],
}

