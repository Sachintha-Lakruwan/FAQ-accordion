/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans"],
      },
      colors: {
        p1: "#F9EEFF",
        p2: "#A034C9",
        p3: "#331539",
        pdull: "#A597A8",
      },
    },
  },
  plugins: [],
};
