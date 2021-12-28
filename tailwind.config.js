module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        textDark: "#212529",
        textGrayDark: "#495057",
        textGraylight: "##868E96",
        lightGray: "#EDF1F6",
      },
      maxWidth: {
        1600: "1600px",
        1240: "1240px",
      },
      // fontSize: {
      //     14: ["1.4rem", { lineHeight: "2.1rem" }],
      //     16: ["1.6rem", { lineHeight: "2.4rem" }],
      //     18: ["1.8rem", { lineHeight: "2.7rem" }],
      //     20: ["2rem", { lineHeight: "3rem" }],
      //     24: ["2.4rem", { lineHeight: "3.6rem" }],
      //     28: ["2.8rem", { lineHeight: "4.2rem" }],
      //     32: ["3.2rem", { lineHeight: "4.8rem" }],
      // },
      backgroundImage: {
          "looking-srh-bg": "url('/images/common/bg-main.jpg')",
          "ico-blue-srh": "url('/images/common/search_icon_blue.png')",
          "blackbottom-shadow":
              "linear-gradient(to bottom, #0000, rgba(0, 0, 0, 0.5))",
      },
      screens: {
          tablet: "640px",
          laptop: "1024px",
          desktop: "1440px",
      },
      boxShadow: {
          "3xl": "-23px 23px 46px rgb(209 209 209 / 20%), 23px -23px 46px rgb(209 209 209 / 20%), -23px -23px 46px rgb(255 255 255 / 90%), 23px 23px 58px rgb(209 209 209 / 90%), inset 1px 1px 2px rgb(255 255 255 / 30%), inset -1px -1px 2px rgb(209 209 209 / 50%)",
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
