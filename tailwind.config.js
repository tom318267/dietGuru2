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

    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      green: "#4BA82A",
    }),
    extend: {
      textColor: {
        green: "#4BA82A",
      },
      outline: {
        green: "2px solid #4BA82A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
