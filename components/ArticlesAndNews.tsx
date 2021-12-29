import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";
import Image from "next/image";

type Data = {
  title: string;
  contentsBy: string;
  imgOrVideoUrl: string;
};
type Datas = Data[];

const datas: Datas = [
  {
    title: "The truth about High Fiber Foods",
    contentsBy: "by CloudHospital",
    imgOrVideoUrl: "",
  },
  {
    title: "The truth about High Fiber Foods",
    contentsBy: "by CloudHospital",
    imgOrVideoUrl: "",
  },
  {
    title: "The truth about High Fiber Foods",
    contentsBy: "by CloudHospital",
    imgOrVideoUrl: "",
  },
  {
    title: "The truth about High Fiber Foods",
    contentsBy: "by CloudHospital",
    imgOrVideoUrl: "",
  },
];
SwiperCore.use([Navigation]);
const ArticlesAndNews = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto px-4 xl:px-0">
        {/* text area */}
        <div>
          <h2 className="text-2xl md:text-34px font-bold">
            Global Healthcare Articles & News
          </h2>
          <p className="text-sm md:text-xl mt-2.5">
            <span className="inline">
              Learn more about why millions of people decide to travel abroad
              for their medical needs
            </span>
          </p>
        </div>
        {/* slide area */}
        <div className="GlobalHealthcareArticlesAndNews py-20">
          <Swiper
            spaceBetween={18}
            slidesPerView={2}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
            }}
          >
            {datas.map((item, i) => (
              <div className="" key={i}>
                <SwiperSlide>
                  <div className="w-full bg-white flex flex-col">
                    {/* 이미지 영역 */}
                    <div className="relative pb-[44%]">
                      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-full bg-orange-300 overflow-hidden">
                        <Image
                          src="/images/testimg.jpg"
                          width="734"
                          height="324"
                        ></Image>
                      </div>
                    </div>
                    {/* 텍스트 영역 */}
                    <div className="relative h-24 p-4 font-semibold rounded-b-2xl ">
                      <div className="text-xs">{item.contentsBy}</div>
                      <p className="text-md font-bold">{item.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndNews;
