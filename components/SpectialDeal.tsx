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
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/img-spectial.png",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
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
        slidesPerView: 4,
        spaceBetween: 13,
    },
};

const SpectialDeal = () => {
    
    const props = {
        title: 'Special Deals',
        btnName: 'doctor'
    }

    return (
        <LayoutCon>
            <TitleAndSeeAllBtnCon {...props} >
                <Swiper
                    breakpoints={Responsive}
                    navigation={true}
                    className="mySwiper"
                >
                    {ExpertsArr.map((expert, i) => (
                        <SwiperSlide>
                            <Link href="">
                                <a className="block">
                                    <div className="my-5 border border-gray-200 rounded-[1.5rem] hover:shadow-basic overflow-hidden">
                                        <div className="relative h-[190px]">
                                            <Image
                                                src={expert.img}
                                                alt={expert.name}
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            />
                                        </div>
                                        <div className="px-5 pt-2">
                                            <span className="text-xs mb-2">
                                                fdfsdfsdfsdf
                                            </span>
                                            <dl>
                                                <dt className="mb-4 text-sm leading-5 font-bold">
                                                    {expert.name}
                                                </dt>
                                                <dd className='relative pl-6 pb-1 text-[0.75rem] leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-home before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center '>
                                                    {expert.home}
                                                </dd>
                                            </dl>
                                        </div>
                                        <div className="py-1px mt-4 text-center bg-lightGray">
                                            <span className="text-[0.75rem] font-bold">
                                                lightGray
                                            </span>
                                            <strong className="block">$ 510</strong>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </TitleAndSeeAllBtnCon>
        </LayoutCon>
    );
};

export default SpectialDeal;
