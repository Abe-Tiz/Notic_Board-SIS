/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#222831",
        indigo: "#393E46",
        purple: "#00ADB5",
        pink: "#00FFF5",
      },
    },
  },
  plugins: [require("daisyui")],
};

