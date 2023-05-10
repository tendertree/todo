/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      fontFamily:{
        'taebaek':['taebaek','...defaultTheme.fontFamily.sans']
      }
    },
    colors: {
      "dark-orange": "#B36355",
      red: "#B36355",
      white: "#ffffff",
    }
    },

  plugins: [],
};
