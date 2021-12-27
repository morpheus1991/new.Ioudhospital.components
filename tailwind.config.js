module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        mixGray: "#495057",
        lightGray: "#868E96",
        lightBg: "#EDF1F6",
      },
    },
  },
  plugins: [],
  addBase: {},
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./pages/**/*.jsx",
    "./components/**/*.js",
    "./components/**/*.jsx",
    "./pages/**/*.ts",
    "./pages/**/*.tsx",
    "./components/**/*.ts",
    "./components/**/*.tsx",
  ],
};
