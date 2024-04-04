/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#222831",
        indigo: "#393E46",
        // white: "#00ADB5",
        purple: "#002B5B",
        pink: "#675D50",
        primary: "#65B741",
      },
    },
  },
  plugins: [require("daisyui")],
};

