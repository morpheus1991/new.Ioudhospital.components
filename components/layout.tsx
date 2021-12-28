import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { SearchOnTheWayUp } from "../lib/etc";
export const siteTitle = "next.js sample website";
const gnbMenus = [
  "General Health",
  "Beauty",
  "Hospitals & Doctors",
  "Deals",
  "Articles & Experts",
];
const fastMenus = ["About us", "Medical Team", "FAQ"] as const;
const languages = [
  "English",
  "Russian",
  "Chinese",
  "Spanish",
  "Indonesian",
  "Portuguese",
  "French",
  "Vietnamese",
  "Thai",
] as const;
type FastMenus = typeof fastMenus[number];
type Languages = typeof languages[number];
const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) => {
  const [isFastMenuOpen, setIsFastMenuOpen] = useState(false);
  const [currentSelectedFastMenu, setCurrentSelectedFastMenu] =
    useState<FastMenus>("About us");

  const [isLanguegeOpen, setIsLanguegeOpen] = useState(false);

  const [currentSelectedLanguages, setcurrentSelectedLanguages] =
    useState<Languages>("English");
  const selectedFastMenu = (menu: FastMenus) => {
    setCurrentSelectedFastMenu(menu);
    setIsFastMenuOpen(false);

    console.log(menu);
    console.log(isFastMenuOpen);
  };

  const selectedLanguage = (lang: Languages) => {
    setcurrentSelectedLanguages(lang);
    setIsLanguegeOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>icloudhospital</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="yandex-verification" content="75837c382ba0e683" />
        <meta
          name="p:domain_verify"
          content="9391acdfd942711d9dfc795d77c140d8"
        />
        <meta name="next-head-count" content="5" />
      </Head>
      {/* 100프로 */}
      <header className="bg-primary text-white">
        {/* 컨테이너 */}
        <div className="2xl:w-[1140px] mx-auto px-8 pt-6 relative">
          <div className="w-full mx-auto px-8 pt-6 relative">
            <h1 className="w-20 h-10 bg-red-800 absolute bottom-0">logo</h1>
            {/* fast menu area */}
            <div className="flex justify-end">
              {/*SelectedFastMenu area*/}
              <div className="relative flex w-28">
                <div
                  className="flex justify-between w-full relative"
                  onClick={(e) => {
                    const selecEl = e.target;
                    setIsFastMenuOpen(true);
                    const layerControll = (e) => {
                      if (SearchOnTheWayUp(selecEl, e.target)) {
                      } else {
                        setIsFastMenuOpen(false);
                        window.removeEventListener("click", layerControll);
                      }
                    };
                    window.addEventListener("click", layerControll);
                  }}
                >
                  <strong className="text-sm font-normal lg:hover:underline lg:hover:font-semibold cursor-pointer">
                    {currentSelectedFastMenu}
                  </strong>
                  <span className="w-6 h-4 bg-red-700 absolute right-0">
                    <image />
                  </span>
                </div>
                <ul
                  className={`${
                    isFastMenuOpen ? "block" : "hidden"
                  } absolute top-4 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full`}
                >
                  {fastMenus.map((menu, i) => (
                    <li
                      className="cursor-pointer px-3 py-2 lg:hover:bg-lightGray lg:hover:font-bold h-8"
                      key={i}
                      onClick={() => {
                        selectedFastMenu(menu);
                      }}
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="">
                <Link href="">
                  <a className="text-white ml-7">How does it work?</a>
                </Link>
              </p>
            </div>
          </div>
          {/* 컨테이너 */}
          <div className="w-full mx-auto px-8 pt-6 relative flex justify-between flex-grow">
            {/* 개발용 유틸 */}

            <div className="fixed top-0 left-2">
              <div className="text-yellow-300">global</div>
              <div className="hidden sm:block text-yellow-300">sm</div>
              <div className="hidden md:block text-yellow-300">md</div>
              <div className="hidden lg:block text-yellow-300">lg</div>
            </div>
            {/* 개발용 유틸 종료 */}

            {/* gnb area */}
            <nav className="pl-28 w-full flex items-stretch">
              <ul className="flex space-x-7 text-md items-stretch">
                {gnbMenus.map((menu, i) => (
                  <li key={i} className="flex items-end">
                    <Link href="/">
                      <a className="whitespace-pre">{menu}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* languege select, search, login area */}
            <div className="flex items-center">
              <button>
                <span>srarch</span>
              </button>
              <nav className="flex items-center ml-12">
                <div className="relative w-28">
                  <div
                    className="flex justify-between w-full relative"
                    onClick={(e) => {
                      const selecEl = e.target;
                      setIsLanguegeOpen(true);
                      const layerControll = (e) => {
                        if (SearchOnTheWayUp(selecEl, e.target)) {
                        } else {
                          setIsLanguegeOpen(false);
                          window.removeEventListener("click", layerControll);
                        }
                      };
                      window.addEventListener("click", layerControll);
                    }}
                  >
                    <strong className="text-sm font-normal lg:hover:underline lg:hover:font-semibold cursor-pointer text-white">
                      {currentSelectedLanguages}
                    </strong>
                    <span className="w-6 h-4 bg-red-700 absolute right-0">
                      <image />
                    </span>
                  </div>
                  <ul
                    className={`${
                      isLanguegeOpen ? "block" : "hidden"
                    } absolute top-4 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full`}
                  >
                    {languages.map((lang, i) => (
                      <li
                        className="cursor-pointer px-3 py-2 lg:hover:bg-lightGray lg:hover:font-bold h-8"
                        key={i}
                        onClick={() => {
                          selectedLanguage(lang);
                        }}
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="ml-8 bg-white rounded-sm text-primary w-28 h-9 items-center px-2">
                  Join or Login
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow bg-slate-500">{children}</main>
      <footer className="bg-slate-800">
        <div>footer</div>
      </footer>
    </div>
  );
};
export default Layout;
