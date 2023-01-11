/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#004191",
        blue_sky: "#00BEFF",
        gray: "#333333",
        dark_gray: "#262626",
        beige: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
