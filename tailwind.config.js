/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#eea302",
        "custom-red": "#ff3b25",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      screens: {
        "custom-md": { max: "1100px" },
      },
    },
  },
  plugins: [],
};
