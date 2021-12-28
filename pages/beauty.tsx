import Link from "next/link";
import BackgroundSearch from "../components/BackgroundSearch";
import LayoutCon from "../components/LayoutCon";
import TabList from "../components/TabList";
import WhatWeOffer from "../components/WhatWeOffer";
import WordClassExperts from "../components/WordClassExperts";

const Beauty = () => {
    return (
        <>
            <BackgroundSearch />
            <LayoutCon>
                <div className="block mt-20 py-2 px-6 text-16 before:content-[''] before:inline-block before:align-middle before:bg-[url('/images/main/icon-pattern.png')] before:bg-contain before:w-[15px] before:h-[19px] before:mr-2 rounded-t-[2.5rem] bg-primary text-white">
                    New service available!
                </div>
                {/* membership */}
                <div className="lg:flex shrink-0lg:px-14 lg:pt-8 p-8 border border-primary">
                    <div className="flex grow">
                        <i className="block shrink-0 w-[7rem] h-[6.1rem] bg-[length:4.4rem] bg-center bg-no-repeat bg-[url('/images/main/icon-doctor.png')]"></i>
                        <div className="grow px-2">
                            <strong className="lg:text-24 text-18">
                                Do you want to get free Medical Coordination
                                Service?
                            </strong>
                            <p className="lg:text-20 text-14">
                                If you want to get 24/7 free coordination from A
                                to Z to improve your health
                            </p>
                        </div>
                    </div>
                    <Link href="">
                        <a className="block lg:w-[12rem] w-full lg:mt-0 mt-10 text-center self-end p-2 rounded-[3rem] text-18 bg-primary text-white">
                            Click Here
                        </a>
                    </Link>
                </div>
            </LayoutCon>
            {/* banner */}
            <ul className="flex flex-wrap">
                <li className="md:flex-1 flex-[1_1_40%] overflow-hidden">
                    <Link href="">
                        <a className="relative block md:h-[288px] h-[188px] bg-center grayscale hover:grayscale-0 overflow-hidden bg-cover bg-[url('/images/beauty/dental_bg.jpg')] bg-no-repeat ease-in duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after: after: after:w-full after:h-full after:bg-blackbottom-shadow">
                            <div className="absolute left-0 bottom-0 break-all z-10 ml-8 mb-8 text-white ">
                                <strong className="text-3xl">Denta</strong>
                                <span className="block text-20">
                                    12 Services
                                </span>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className="md:flex-1 flex-[1_1_40%] overflow-hidden">
                    <Link href="">
                        <a className="relative block md:h-[288px] h-[188px] bg-center grayscale hover:grayscale-0 overflow-hidden bg-cover bg-[url('/images/beauty/dental_bg.jpg')] bg-no-repeat ease-in duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after: after: after:w-full after:h-full after:bg-blackbottom-shadow">
                            <div className="absolute left-0 bottom-0 break-all z-10 ml-8 mb-8 text-white ">
                                <strong className="text-3xl">Dental</strong>
                                <span className="block text-20">
                                    12 Services
                                </span>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className="md:flex-1 flex-[1_1_40%] overflow-hidden">
                    <Link href="">
                        <a className="relative block md:h-[288px] h-[188px] bg-center grayscale hover:grayscale-0 overflow-hidden bg-cover bg-[url('/images/beauty/dental_bg.jpg')] bg-no-repeat ease-in duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after: after: after:w-full after:h-full after:bg-blackbottom-shadow">
                            <div className="absolute left-0 bottom-0 break-all z-10 ml-8 mb-8 text-white ">
                                <strong className="text-3xl">Dental</strong>
                                <span className="block text-20">
                                    12 Services
                                </span>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className="md:flex-1 flex-[1_1_40%] overflow-hidden">
                    <Link href="">
                        <a className="relative block md:h-[288px] h-[188px] bg-center grayscale hover:grayscale-0 overflow-hidden bg-cover bg-[url('/images/beauty/dental_bg.jpg')] bg-no-repeat ease-in duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after: after: after:w-full after:h-full after:bg-blackbottom-shadow">
                            <div className="absolute left-0 bottom-0 break-all z-10 ml-8 mb-8 text-white ">
                                <strong className="text-3xl">Dental</strong>
                                <span className="block text-20">
                                    12 Services
                                </span>
                            </div>
                        </a>
                    </Link>
                </li>
                <li className="md:flex-1 flex-[1_1_40%] md:bg-primary">
                    <Link href="">
                        <a className="relative block md:h-[288px] h-auto leading-[3.3rem] border border-primary md:m-0 mx-8 mt-4 rounded-[3rem]">
                            <div className="md:absolute left-0 bottom-0 md:break-all text-center md:z-10 md:ml-10 md:mb-10 md:text-white text-primary">
                                <strong className="md:text-3xl">Show all</strong>
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
            <TabList/>
            <WordClassExperts/>
            <WhatWeOffer/>
        </>
    );
};

export default Beauty;