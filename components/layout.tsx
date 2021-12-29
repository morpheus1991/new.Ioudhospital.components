import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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

//레이아웃 연관 여백
const desktopHeaderHeigth = 24; //rem
const mobileHeaderHeigth = 14; //rem

const desktopFooterHeigth = 124; //rem
const mobileFooterHeigth = 14; //rem

const desktopHeaderHeigthPx = `${desktopHeaderHeigth * 4}px`; //px
const mobileHeaderHeigthPx = `${mobileHeaderHeigth * 4}px`; //px

const desktopMainDefaultHeight = `lg:min-h-[calc(100vh-(${desktopHeaderHeigthPx}+100px))]`; //main hight clac
const mobileMainDefaultHeight = `min-h-[calc(100vh-(${mobileHeaderHeigthPx}+100px))]`; //main hight clac

const desktopMainPaddingTop = `lg:pt-${desktopHeaderHeigth}`; //main padding-top (headerHeight)
const mobileMainPaddingTop = `md:pt-${mobileHeaderHeigth}`; //main padding-top (headerHeight)

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
    document.querySelector("body").classList.add("overflow-y-hidden");
    console.log(document.querySelector("body"));
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.querySelector("body").classList.remove("overflow-y-hidden");
  };

  //resize overflow controll
  useEffect(() => {
    let timer;
    const resizeScrollControll = () => {
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          if (window.innerWidth < 1027 && isMobileMenuOpen) {
            document.querySelector("body").classList.add("overflow-y-hidden");
          }
          if (window.innerWidth > 1027) {
            document
              .querySelector("body")
              .classList.remove("overflow-y-hidden");
          }
        }, 500);
      }
    };
    window.addEventListener("resize", resizeScrollControll);
    return () => {
      window.removeEventListener("resize", resizeScrollControll);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen overflow-hidden`}>
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
      <header className="bg-primary text-white fixed w-full z-50">
        {/* 개발용 유틸 */}
        <div className="fixed top-0 left-2 z-50">
          <div className="text-yellow-300">global</div>
          <div className="hidden sm:block text-yellow-300">sm</div>
          <div className="hidden md:block text-yellow-300">md</div>
          <div className="hidden lg:block text-yellow-300">lg</div>
          <div className="hidden xl:block text-yellow-300">xl</div>
          <div className="hidden 2xl:block text-yellow-300">2xl</div>
        </div>
        {/* 개발용 유틸 종료 */}
        {/* desktop 컨테이너 */}
        <div className="xl:w-[1140px] 2xl:w-[1280px] mx-auto lg:px-2 xl:px-8 relative lg:block hidden">
          <div className="w-full mx-auto lg:px-4 xl:px-8 pt-4 ">
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
          <div className="w-full mx-auto lg:px-4 xl:px-8 pt-4 relative flex justify-between flex-grow pb-2">
            {/* gnb area */}
            <nav className="pl-28 w-full flex items-stretch">
              <ul className="flex lg:space-x-5 xl:space-x-7 text-md items-stretch">
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
              <nav className="flex items-center ml-6">
                <div className="relative w-28 flex items-center">
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
                    <strong className="text-sm font-normal lg:hover:underline lg:hover:font-semibold cursor-pointer block text-white">
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
                    } absolute top-8 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full`}
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
                <button className="ml-5 bg-white rounded-sm text-primary w-28 h-8 items-center px-2">
                  Join or Login
                </button>
              </nav>
            </div>
          </div>
        </div>
        {/* mobile 컨테이너 */}
        <div className=" flex justify-between bg-primary text-textDark lg:hidden items-stretch  pl-4 fixed w-full">
          <h1 className="flex items-center">
            <Image src="/images/logo.png" width="64px" height="32px"></Image>
          </h1>
          <div className="flex">
            <button className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/images/search-nav-icon.png"
                width="18px"
                height="19px"
              ></Image>
            </button>
            <button
              className="w-14 h-14 bg-gnbSubPrimary flex items-center justify-center flex-col space-y-1"
              onClick={openMenu}
            >
              <span className="h-0.5 w-5 bg-white flex"></span>
              <span className="h-0.5 w-5 bg-white flex"></span>
              <span className="h-0.5 w-5 bg-white flex"></span>
            </button>
          </div>
          {/* dim */}
          <div
            className={`w-screen h-screen left-0 top-0 bg-black  lg:hidden visible fixed transition-opacity duration-500  ${
              isMobileMenuOpen ? "opacity-70 z-0" : "opacity-0 invisible"
            }`}
          ></div>
          {/* menus */}
          <div
            className={`w-64 h-screen bg-gnbSubPrimary fixed top-0 right-0 translate-x-full transition-transform duration-1000 px-7 ${
              isMobileMenuOpen ? "translate-x-0" : ""
            }`}
          >
            <nav className="">
              {/* menus wrapper */}
              <button className="right-5 top-6 absolute" onClick={closeMenu}>
                <div className="flex w-5 h-5 relative">
                  <span className="absolute w-6 h-0.5 left-0 right-0 top-0 bottom-0 bg-white m-auto rotate-45"></span>
                  <span className="absolute w-6 h-0.5 left-0 right-0 top-0 bottom-0 bg-white m-auto -rotate-45"></span>
                </div>
              </button>
              {/* languege select */}
              <div className="relative">
                <div className="absolute left-0 top-4 w-28 p-2 bg-gnbMobileLanguegeBg rounded-md">
                  <div
                    className="flex justify-between w-full relative "
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
                </div>
                <ul
                  className={`${
                    isLanguegeOpen ? "block" : "hidden"
                  } absolute top-14 mx-auto bg-white text-textDark  rounded-lg py-4 text-sm w-full`}
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
                <ul className="pt-24 flex flex-col space-y-4 text-white font-bold">
                  {gnbMenus.map((menu) => (
                    <li className="text-lg">
                      <Link href="/">{menu}</Link>
                    </li>
                  ))}
                </ul>
                <div className="bg-white w-full h-px my-6 opacity-40"></div>
                {/* fast Menu */}
                <ul className="flex flex-col space-y-2">
                  {fastMenus.map((menu) => (
                    <li className="opacity-80  font-bold text-white">
                      <Link href="/">{menu}</Link>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white py-2 mt-8 rounded-md text-xl font-bold text-gnbSubPrimary">
                  Join or Login
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main
        className={`${desktopMainPaddingTop} ${mobileMainPaddingTop} pt-flex-grow bg-slate-500 ${desktopMainDefaultHeight} ${mobileMainDefaultHeight} `}
      >
        <div className="h-screen"></div>
        <div className="h-screen"></div>

        {children}
      </main>
      <footer className="bg-textGrayDark min-h-[500px]">
        <div className="xl:w-[1284px] mx-auto pt-14  text-white px-5 md:px-10">
          {/* footer menus, app store */}
          <div className="flex justify-start lg:space-x-44 md:space-x-20 min-h-[400px] md:min-h-[320px] relative md:flex-nowrap flex-wrap pb-20 sm:pb-0">
            <div className=" w-1/2 flex-col md:w-auto text-center md:text-left">
              <h2 className="text-md md:text-lg font-bold">FOR PATIENTS</h2>
              <div className="flex flex-col text-sm space-y-1 md:space-y-3 pt-2 md:pt-4">
                <a href="/search?filter=GeneralHealth&amp;tab=Hospitals">
                  Best Hospitals
                </a>
                <a href="/search?filter=Both&amp;tab=Doctors">Best Doctors</a>
                <a href="/search?filter=Beauty&amp;tab=Hospitals">
                  Best Beauty Clinics
                </a>
              </div>
            </div>
            <div className=" w-1/2 flex-col md:w-auto text-center md:text-left">
              <h2 className="text-md md:text-lg font-bold">ABOUT US</h2>
              <div className="flex flex-col text-sm space-y-1 md:space-y-3 pt-2 md:pt-4">
                <a href="/about_us">About CloudHospital</a>
                <a href="/how_does_it_work">How Does It Work</a>
                <a href="/faq">FAQ</a>
              </div>
            </div>
            <div className=" w-1/2 flex-col md:w-auto text-center md:text-left">
              <h2 className="text-md md:text-lg font-bold">POLICIES</h2>
              <div className="flex flex-col text-sm space-y-1 md:space-y-3 pt-2 md:pt-4">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/site_map">Sitemap</a>
              </div>
            </div>
            <div className=" w-1/2 flex-col md:w-auto text-center md:text-left">
              <h2 className="text-md md:text-lg font-bold">CONTACT</h2>
              <div className="flex flex-col text-sm space-y-1 md:space-y-3 pt-2 md:pt-4">
                <a href="mailto:info@icloudhospital.com">
                  info@icloudhospital.com
                </a>
                <a href="tel:+82234437756">+82 2 3443 7756</a>
              </div>
            </div>
            <div>
              <ul className="flex absolute bottom-4 right-0 w-full space-x-2 sm:space-x-4 justify-center lg:justify-end">
                <li>
                  <Image
                    width="135px"
                    height="40px"
                    src="/images/btn-app-store.png"
                  />
                </li>
                <li>
                  <Image
                    width="135px"
                    height="40px"
                    src="/images/btn-google-paly.png"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* footer logo, copyright, sns */}
          <div className="pt-4 md:pt-12  border-t flex">
            <div className="relative items-stretch flex flex-wrap mt-4 justify-center mx-auto pb-16 sm:pb-0 w-full">
              <div className="md:absolute left-0 top-0 bottom-0 mt-auto mb-auto flex  items-center justify-center shrink-0 order-3 sm:order-none">
                <Image
                  src="/images/logo.png"
                  width="76px"
                  height="38px"
                ></Image>
              </div>
              <p className="sm:flex sm:items-center sm:justify-center ml-5 md:ml-0 text-sm order-3 pt-1.5 sm:pt-0 sm:order-none md:w-full md:justify-center">
                <span className="block sm:inline-block">
                  © 2021 CloudHospital Inc.
                </span>
                <span className="block sm:inline-block">
                  {" "}
                  All rights reserved.
                </span>
              </p>
              <div className="md:absolute right-0 top-0 bottom-0 my-auto items-center flex space-x-8 w-full mt-6 md:mt-0 sm:mb-0  md:my-auto pb-8 md:pb-0 justify-center md:justify-end md:items-center order-1 sm:order-none">
                <a
                  target="_blank"
                  className="lg:hover:opacity-70 transition-opacity duration-500 cursor-pointer"
                >
                  <Image
                    width="20px"
                    height="20px"
                    src="/images/foo_linkedIn_icon.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  target="_blank"
                  className="lg:hover:opacity-70 transition-opacity duration-500 cursor-pointer"
                >
                  <Image
                    width="20px"
                    height="20px"
                    src="/images/foo_twitter_icon.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  target="_blank"
                  className="lg:hover:opacity-70 transition-opacity duration-500 cursor-pointer"
                >
                  <Image
                    width="20px"
                    height="20px"
                    src="/images/foo_facebook_icon.png"
                    alt="facebook"
                  />
                </a>
                <a
                  target="_blank"
                  className="lg:hover:opacity-70 transition-opacity duration-500 cursor-pointer"
                >
                  <Image
                    width="20px"
                    height="20px"
                    src="/images/instagram_icon_solid.png"
                    alt="Instagram"
                  />
                </a>
                <a
                  target="_blank"
                  className="lg:hover:opacity-70 transition-opacity duration-500 cursor-pointer"
                >
                  <Image
                    width="20px"
                    height="20px"
                    src="/images/foo_youtube_icon.png"
                    alt="Youtube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
