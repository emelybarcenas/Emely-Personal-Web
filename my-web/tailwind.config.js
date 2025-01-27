/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src folder
  ],

  theme: {
    extend: {}, // Customize your theme here
    fontFamily:{ 
      sans: ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
};
