/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'SherlocksDefault': "url('../public/SherlockDefaultPhoto.jpeg')",
      'RigsDefault': "url('../public/RigsDefaultPhoto.PNG')",
      'MinitubesDefault': "url('../public/MinitubeDefaultPhoto.jpg')",

    },
    extend: {},
  },
  plugins: [],
}
