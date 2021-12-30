import Link from "next/link";

import BackgroundSearch from "../components/BackgroundSearch";
import LayoutCon from "../components/LayoutCon";
import SpectialDeal from "../components/SpectialDeal";
import TabNav from "../components/TabNav";
import TabList from "../components/TabList";
import WhatWeOffer from "../components/WhatWeOffer";
import WordClassExperts from "../components/WordClassExperts";
import Consultation from "../components/Beauty/Consultation";
import Layout from "../components/layout";
import ArticlesAndNews from "../components/ArticlesAndNews";
import QuestionsAnswer from "../components/QuestionsAnswer";

const Beauty = () => {
    return (
        <Layout home={false}>
            <div>
                <BackgroundSearch />
                {/* banner */}
                <ul className="flex flex-wrap mb-20">
                    <li className="md:flex-1 flex-[1_1_40%] overflow-hidden">
                        <Link href="">
                            <a className="relative block md:h-[288px] h-[188px] bg-center grayscale hover:grayscale-0 overflow-hidden bg-cover bg-[url('/images/beauty/dental_bg.jpg')] bg-no-repeat ease-in duration-200 hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after: after: after:w-full after:h-full after:bg-blackbottom-shadow">
                                <div className="absolute left-0 bottom-0 break-all z-10 sm:mx-8 mb-8 ml-4 mb-4 text-white ">
                                    <strong className="lg:text-3xl text-xl">
                                        deam tal dsff daf ing omg ofd sads
                                    </strong>
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
                                <div className="absolute left-0 bottom-0 break-all z-10 sm:mx-8 mb-8 ml-4 mb-4 text-white ">
                                    <strong className="lg:text-3xl text-xl">
                                        Dental
                                    </strong>
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
                                <div className="absolute left-0 bottom-0 break-all z-10 sm:mx-8 mb-8 ml-4 mb-4 text-white ">
                                    <strong className="lg:text-3xl text-xl">
                                        DentaDentaDentaDental
                                    </strong>
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
                                <div className="absolute left-0 bottom-0 break-all z-10 sm:mx-8 mb-8 ml-4 mb-4 text-white ">
                                    <strong className="lg:text-3xl text-xl">
                                        Dental
                                    </strong>
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
                                    <strong className="md:text-3xl">
                                        Show all
                                    </strong>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
                <LayoutCon>
                    <TabNav />
                    <TabList />
                </LayoutCon>
                <SpectialDeal />
                <WordClassExperts />
                <ArticlesAndNews />
                <QuestionsAnswer/>
                <WhatWeOffer />
                <Consultation />
            </div>
        </Layout>
    );
};

export default Beauty;