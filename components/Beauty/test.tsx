import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import LayoutCon from "./LayoutCon";
import { ReactNode } from "react";

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

const WordClassExperts = (iter, Inner: ReactNode) => {
  return (
    <LayoutCon>
      <Swiper breakpoints={Responsive} navigation={true} className="mySwiper">
        {iter.map((item, i) => (
          <SwiperSlide></SwiperSlide>
        ))}
      </Swiper>
      <Link href="">
        <a>See all Doctors</a>
      </Link>
    </LayoutCon>
  );
};

export default WordClassExperts;
