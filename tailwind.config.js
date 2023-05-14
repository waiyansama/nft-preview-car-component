/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#8BACDA",
        accent: "#00FFF6",
        mainBg: "#0D192B",
        cardBg: "#14253D",
        line: "#2F415B",
      },
    },
  },
  plugins: [],
};
