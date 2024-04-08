module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      }),
    },
    letterSpacing: {
      widest: ".5em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
