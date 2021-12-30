import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

SwiperCore.use([Grid, Navigation]);

const Data = [
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
    "Gynecology and Reproductive Medicine",
    "Gynecology",
];

const settings = {
    spaceBetween: 1,
    slidesPerColumn: 2,
    slidesPerColumnFill: "column",
    breakpoints: {
        961: { slidesPerView: 4, slidesPerGroup: 4 },
        900: { slidesPerView: 3, slidesPerGroup: 3 },
        540: { slidesPerView: 2, slidesPerGroup: 2 },
        420: { slidesPerView: 1, slidesPerGroup: 1 },
    },
};
const Responsive = {
    320: {
        slidesPerView: 1,
        spaceBetween: 13,
    },
};

// .swiper-container {
//     width: 100%;
//     height: 100%;
//     margin-left: auto;
//     margin-right: auto;
//   }

const swiperslide = {
    height: "calc((100% - 30px) / 2)",
};
const FourTabSlider = () => {
    return (
        <ul className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <li className="sm:basis-1/1">
                <Link href="">
                    <a className="flex items-center h-[60px]  shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        <span className="overflow-hidden max-h-12 block">
                            Anti-aging Treatment Package AAnti-aging Treatment
                            Package AAnti-aging Treatment Package A
                        </span>
                    </a>
                </Link>
            </li>
            <li className="sm:basis-1/1">
                <Link href="">
                    <a className="flex items-center h-[60px]  shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        <span className="overflow-hidden max-h-12 block">
                            Anti-aging Treatment Package AAnti-aging Treatment
                            Package AAnti-aging Treatment Package A
                        </span>
                    </a>
                </Link>
            </li>
            <li className="basis-1/4">
                <Link href="">
                    <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        Interface
                    </a>
                </Link>
            </li>
            <li className="sm:basis-1/1">
                <Link href="">
                    <a className="flex items-center h-[60px]  shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        <span className="overflow-hidden max-h-12 block">
                            Anti-aging Treatment Package AAnti-aging Treatment
                            Package AAnti-aging Treatment Package A
                        </span>
                    </a>
                </Link>
            </li>
            <li className="basis-1/4">
                <Link href="">
                    <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        Interface
                    </a>
                </Link>
            </li>
            <li className="sm:basis-1/1">
                <Link href="">
                    <a className="flex items-center h-[60px]  shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        <span className="overflow-hidden max-h-12 block">
                            Anti-aging Treatment Package AAnti-aging Treatment
                            Package AAnti-aging Treatment Package A
                        </span>
                    </a>
                </Link>
            </li>{" "}
            <li className="basis-1/4">
                <Link href="">
                    <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        Interface
                    </a>
                </Link>
            </li>{" "}
            <li className="basis-1/4">
                <Link href="">
                    <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                        Interface
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default FourTabSlider;