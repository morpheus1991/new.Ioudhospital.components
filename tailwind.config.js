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
            textGraylight: "#868E96",
            lightGray: "#EDF1F6",
            gnbSelectedBg: "#2684ff",
            gnbSubPrimary: "#3271b7",
            gnbMobileLanguegeBg: "#fff4",
            bgaliceblue: "#f0f8ff",        
        },
        maxWidth: {
            1600: "1600px",
            1240: "1280px",
        },
        //
        fontSize: {
            "34px": "2.125rem",
            "40px": "2.5rem",
        },
        backgroundImage: {
            "looking-srh-bg": "url('/images/common/bg-main.jpg')",
            "ico-blue-srh": "url('/images/icon/ico-blue-srh.png')",
            "ico-specialty": "url('/images/icon/ico-specialty.png')",
            "ico-location": "url('/images/icon/ico-location.png')",
            "ico-home": "url('/images/icon/ico-home.png')",
            "ico-ch-1": "url('/images/icon/ico-choose-us01.png')",
            "ico-ch-2": "url('/images/icon/ico-choose-us02.png')",
            "ico-ch-3": "url('/images/icon/ico-choose-us03.png')",
            "ico-ch-4": "url('/images/icon/ico-choose-us04.png')",
            "ico-ch-5": "url('/images/icon/ico-choose-us05.png')",
            "ico-ch-6": "url('/images/icon/ico-choose-us06.png')",
            "ico-ch-7": "url('/images/icon/ico-choose-us07.png')",
            "ico-ch-8": "url('/images/icon/ico-choose-us08.png')",
            "ico-blue-arrow": "url('/images/common/arrow-down-blue.png')",
            "slider-btn-circle-gray-next":
                "url('/images/common/slider-btn-circle-gray-next.png')",
            "slider-btn-circle-gray-prev":
                "url('/images/common/slider-btn-circle-gray-prev.png')",                
            "blackbottom-shadow":
                "linear-gradient(to bottom, #0000, rgba(0, 0, 0, 0.5))",
        },
        screens: {
            tablet: "640px",
            laptop: "1024px",
            desktop: "1440px",
        },
        boxShadow: {
            basic: "0 4px 15px 0 rgb(0 0 0 / 10%)",
            "3xl":
            "-23px 23px 46px rgb(209 209 209 / 20%), 23px -23px 46px rgb(209 209 209 / 20%), -23px -23px 46px rgb(255 255 255 / 90%), 23px 23px 58px rgb(209 209 209 / 90%), inset 1px 1px 2px rgb(255 255 255 / 30%), inset -1px -1px 2px rgb(209 209 209 / 50%)",
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
    }
};
