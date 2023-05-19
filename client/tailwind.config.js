/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#de483a",
          foreground:"#ffffff"
        },
        background:"#ffffff",
        foreground:"#1f1f1f",
        muted:"#575757",
        link: "#316fea"
      }
    },
  },
  plugins: [],
};
