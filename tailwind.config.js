/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xLarge: "var(--fs-xl)",
        large: "var(--fs-lg)",
        normal: "var(--fs)",
        small: "var(--fs-sm)",
        xSmall: "var(--fs-xs)",
      },
      colors: {
        priYellow: "hsl(var(--pri__yellow))",
        black: "hsl(var(--base__black))",
        white: "hsl(var(--accent__light))",
        white70: "hsl(var(--accent__light) / 70%)",
        white40: "hsl(var(--accent__light) / 40%)",
        white10: "hsl(var(--accent__light) / 10%)",
        accentRed: "hsl(var(accent__red))",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
