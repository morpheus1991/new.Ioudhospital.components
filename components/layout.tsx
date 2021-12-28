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
  // desktop gnb controll
  const [isFastMenuOpen, setIsFastMenuOpen] = useState(false);
  const [currentSelectedFastMenu, setCurrentSelectedFastMenu] =
    useState<FastMenus>("About us");

  const [isLanguegeOpen, setIsLanguegeOpen] = useState(false);

  const [currentSelectedLanguages, setcurrentSelectedLanguages] =
    useState<Languages>("English");
  const selectedFastMenu = (menu: FastMenus) => {
    setCurrentSelectedFastMenu(menu);
    setIsFastMenuOpen(false);
  };
  const selectedLanguage = (lang: Languages) => {
    setcurrentSelectedLanguages(lang);
    setIsLanguegeOpen(false);
  };

  // mobile gnb controll
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
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
        {/* 개발용 유틸 */}

        <div className="fixed top-0 left-2">
          <div className="text-yellow-300">global</div>
          <div className="hidden sm:block text-yellow-300">sm</div>
          <div className="hidden md:block text-yellow-300">md</div>
          <div className="hidden lg:block text-yellow-300">lg</div>
          <div className="hidden xl:block text-yellow-300">xl</div>
          <div className="hidden 2xl:block text-yellow-300">2xl</div>
        </div>
        {/* 개발용 유틸 종료 */}
        {/* desktop 컨테이너 */}
        <div className="xl:w-[1140px] mx-auto px-8 pt-6 relative lg:block hidden">
          <div className="w-full mx-auto px-8 pt-6 ">
            <h1 className="w-20 h-10 absolute bottom-3">
              <Image src="/images/logo.png" width="190px" height="96px"></Image>
            </h1>
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
                  <span className="absolute right-0">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className={`${isFastMenuOpen ? "rotate-180" : ""}`}
                      fill="white"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                  </span>
                </div>
                <ul
                  className={`${
                    isFastMenuOpen ? "block" : "hidden"
                  } absolute top-4 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full z-10`}
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
            {/* gnb area */}
            <nav className="pl-28 w-full flex items-stretch">
              <ul className="flex space-x-7 text-md items-stretch">
                {gnbMenus.map((menu, i) => (
                  <li
                    key={i}
                    className="flex items-stretch transition-all relative group opacity-80 hover:opacity-100"
                  >
                    <Link href="/">
                      <a className="whitespace-pre flex items-center">{menu}</a>
                    </Link>
                    <div className="absolute bottom-0 left-0 bg-white h-[3px]  w-0 group-hover:w-full transition-all duration-1000"></div>
                  </li>
                ))}
              </ul>
            </nav>
            {/* languege select, search, login area */}
            <div className="flex items-center">
              <button className="felx w-5 h-5 justify-center items-center">
                <Image
                  src="/images/search-nav-icon.png"
                  width="18px"
                  height="19px"
                ></Image>
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
                    <span className="absolute right-0">
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className={`${isLanguegeOpen ? "rotate-180" : ""}`}
                        fill="white"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
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
        {/* mobile 컨테이너 */}
        <div className="bg-emerald-200 pl-40 text-textDark lg:hidden">
          <h1>logo</h1>
          <button>searchButton</button>
          <button className="" onClick={openMenu}>
            menus
          </button>
          {/* dim */}
          <div
            className={`w-screen h-screen left-0 top-0 bg-black  lg:hidden visible fixed transition-opacity duration-500  ${
              isMobileMenuOpen ? "opacity-70 z-0" : "opacity-0 invisible"
            }`}
          ></div>
          {/* menus */}
          <div
            className={`w-56 h-screen bg-emerald-300 absolute top-0 right-0 translate-x-full transition-transform duration-1000 ${
              isMobileMenuOpen ? "translate-x-0" : ""
            }`}
          >
            <nav className="">
              {/* menus wrapper */}
              <button className="right-0 top-0 absolute" onClick={closeMenu}>
                close
              </button>
              {/* languege select */}
              <div className="relative w-28">
                <div
                  className="flex justify-between w-full relative bg-red-300"
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
                  <span className="absolute right-0">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      focusable="false"
                      className={`${isLanguegeOpen ? "rotate-180" : ""}`}
                      fill="white"
                    >
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                  </span>
                </div>
                <ul
                  className={`${
                    isLanguegeOpen ? "block" : "hidden"
                  } absolute top-4 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full`}
                >
                  {languages.map((lang, i) => (
                    <li
                      className={`${
                        currentSelectedLanguages === lang
                          ? "bg-gnbSelectedBg text-white"
                          : ""
                      } cursor-pointer px-3 py-2 lg:hover:bg-lightGray lg:hover:font-bold h-8`}
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
              <div>
                {/* gnb */}
                <ul>
                  {gnbMenus.map((menu) => (
                    <li>
                      <Link href="/">{menu}</Link>
                    </li>
                  ))}
                </ul>
                {/* fast Menu */}
                <ul>
                  {fastMenus.map((menu) => (
                    <li>
                      <Link href="/">{menu}</Link>
                    </li>
                  ))}
                </ul>
                <button>Join or Login</button>
              </div>
            </nav>
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
