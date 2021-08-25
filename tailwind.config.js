module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      green: "#5FCD38",
      darkGreen: "#4BA82A",
    }),
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      textColor: {
        green: "#4BA82A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
