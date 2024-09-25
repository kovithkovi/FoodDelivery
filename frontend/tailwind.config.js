/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: { max: "400px" },
        custom2: { max: "450px" }, // Add custom screen for width <= 400px
      },
    },
  },
  plugins: [require("daisyui")],
};
