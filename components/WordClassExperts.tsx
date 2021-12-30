import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LayoutCon from "./LayoutCon";
import TitleAndSeeAllBtnCon from "./TitleAndSeeAllBtnCon";

SwiperCore.use([Navigation]);

const ExpertsArr = [
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 0,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beaut",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
    {
        number: 1,
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: "dfsdf,sdfsdf,sdfs,sdfdf,sdfsdfs,dfs,sdfsdfsdfsd",
    },
];

const Responsive = {
    "640": {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    "768": {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    "1024": {
        slidesPerView: 5,
        spaceBetween: 13,
    },
};

const WordClassExperts = () => {
    const props = {
        title: "World-Class Surgeons and Experts",
        btnName: "doctor",
    };

    return (
        <LayoutCon>
            <TitleAndSeeAllBtnCon {...props}>
                <Swiper
                    breakpoints={Responsive}
                    navigation={true}
                    className="mySwiper swiper-btn-circle-gray"
                >
                    {ExpertsArr.map((expert, i) => (
                        <SwiperSlide>
                            <div className="relative p-5 sm:min-h-[450px] min-h-fit my-5 border border-gray-200 rounded-[1.5rem] hover:shadow-basic">
                                <Link href="">
                                    <a className="block ">
                                        <div className="relative w-[175px] h-[175px] m-auto rounded-full overflow-hidden">
                                            <Image
                                                src={expert.img}
                                                alt={expert.name}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <dl>
                                                <dt className="text-lg leading-5 font-bold mb-2">
                                                    {expert.name}
                                                </dt>
                                                <dd className='relative pl-6 pb-1 text-sm leading-4 max-h-12 overflow-hidden text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-home before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center '>
                                                    {expert.home}
                                                </dd>
                                                <dd className='relative pl-6 pb-1 text-sm leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-location before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center '>
                                                    {expert.location}
                                                </dd>
                                                <dd className='relative pl-6 pb-1 text-sm leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-specialty before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center whitespace-nowrap overflow-hidden text-ellipsis'>
                                                    {expert.tag}
                                                </dd>
                                            </dl>
                                        </div>
                                    </a>
                                </Link>
                                <div className="sm:mt-6 mt-6 sm:absolute left-0 right-0 w-[calc(100%-2rem)] m-auto bottom-[20px]">
                                    {!expert.number && (
                                        <div className="mb-2">
                                            <strong>Fee: $120</strong>
                                            <span className="block -mt-1 text-xs text-[#bcbebf]">
                                                taxe dsfdfsfds
                                            </span>
                                        </div>
                                    )}
                                    <Link href="">
                                        <a
                                            className={`${
                                                !expert.number
                                                    ? "bg-primary text-white"
                                                    : "border border-primary text-primary "
                                            } flex justify-center items-center h-[40px] rounded-[3rem] font-bold text-sm`}
                                        >
                                            Ask a Question
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </TitleAndSeeAllBtnCon>
        </LayoutCon>
    );
};

export default WordClassExperts;