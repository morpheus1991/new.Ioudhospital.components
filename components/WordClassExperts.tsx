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
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
        name: "Anu MEfdsfs",
        home: "ADONIS Beauty Centre of Plastic Surgery and Cosmetology",
        location: "Seoul, oooo",
        tag: ["tdrdfg", "tdssfdd", "fdsdfsdfsfdds", "dfsdfsf"],
    },
    {
        img: "/images/experts.jpg",
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
        slidesPerView: 5,
        spaceBetween: 13,
    },
};

const WordClassExperts = () => {

    const props = {
        title: 'World-Class Surgeons and Experts',
        btnName: 'doctor'
    }

    return (
        <LayoutCon>
            <TitleAndSeeAllBtnCon {...props}>
                <Swiper
                    breakpoints={Responsive}
                    navigation={true}
                    className="mySwiper "
                >
                    {ExpertsArr.map((expert, i) => (
                        <SwiperSlide>
                            <div className="p-5 my-5 border border-gray-200 rounded-[1.5rem] hover:shadow-basic">
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
                                        <dd className='relative pl-6 pb-1 text-sm leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-home before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center '>
                                            {expert.home}
                                        </dd>
                                        <dd className='relative pl-6 pb-1 text-sm leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-location before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center '>
                                            {expert.location}
                                        </dd>
                                        <dd className='relative pl-6 pb-1 text-sm leading-4 text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-2px] before:bg-ico-specialty before:w-[22px] before:h-[22px] before:bg-contain before:bg-no-repeat before:bg-center whitespace-nowrap overflow-hidden text-ellipsis'>
                                            {ExpertsArr[i].tag.map((v) => (
                                                <Link href="">
                                                    <a>{v}</a>
                                                </Link>
                                            ))}
                                        </dd>
                                    </dl>
                                </div>
                                <Link href="">
                                    <a className="flex justify-center items-center sm:mt-12 mt-6 h-[40px] rounded-[3rem] border border-primary text-primary font-bold text-sm">
                                        Ask a Question
                                    </a>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </TitleAndSeeAllBtnCon>
        </LayoutCon>
    );
};

export default WordClassExperts;
