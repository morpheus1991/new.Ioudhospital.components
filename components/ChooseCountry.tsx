import Link from "next/link";
import React from "react";

type Country = {
  country: string;
  imgUrl: string;
  clinics: number;
  docters: number;
  specialties: number;
};
type Countrys = Country[];

const data: Countrys = [
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
  {
    country: "Korea",
    imgUrl: "/",
    clinics: 100,
    docters: 100,
    specialties: 100,
  },
];

// How many will you show? (Country item)
const limit = 6;

const ChooseCountry = () => {
  return (
    <div className="bg-lightGray pt-8 pb-12 md:py-12">
      <div className="2xl:w-[1228px] mx-auto px-6">
        <div className="lg:w-[1020px] mx-auto">
          <h2 className="text-2xl md:text-34px font-bold">Choose Country</h2>
          <p className="text-sm md:text-xl mt-2.5">
            <span className="inline">
              We believe you should get the best healthcare,
            </span>
            <span className="inline md:block"> wherever you are.</span>
          </p>
        </div>
        {/* 12 */}
        {/* <p className="text-xs">text</p> */}
        {/* 14 */}
        {/* <p className="text-sm">text</p> */}
        {/* 16 */}
        {/* <p className="text-md">text</p> */}
        {/* 18 */}
        {/* <p className="text-lg">text</p> */}
        {/* 20 */}
        {/* <p className="text-xl">text</p> */}
        {/* 24 */}
        {/* <p className="text-2xl">text</p> */}
        {/* 30 */}
        {/* <p className="text-3xl">text</p> */}
        {/* 36 */}
        {/* <p className="text-4xl">text</p> */}
        <ul className="  flex flex-wrap  justify-between  md:px-0 mt-5 lg:w-[1020px] mx-auto">
          {data.map((item, i) => {
            if (i < limit) {
              return (
                <li
                  key={i}
                  className="w-[calc(50%-8px)] bg-white mt-4 p-4 md:px-8 md:py-4 h-45 cursor-pointer hover:shadow-basic"
                >
                  <dl>
                    <dt className="flex space-x-4 items-center">
                      <div className=" w-8 h-8 md:w-14 md:h-14 bg-blue-600 rounded-full"></div>
                      <div className="text-md md:text-2xl font-bold">
                        {item.country}
                      </div>
                    </dt>
                    <dd className="mt-5">
                      <ul className="text-sm md:text-lg font-semibold text-textGraylight">
                        <li>{item.clinics} clinics</li>
                        <li>{item.docters} docters</li>
                        <li>{item.specialties} specialties</li>
                      </ul>
                    </dd>
                  </dl>
                </li>
              );
            } else {
              return;
            }
          })}
        </ul>
        <div className="lg:w-[1020px] mx-auto mt-4">
          <Link href="/">
            <a className="w-full flex bg-white justify-center py-4 text-md transition-all duration-300 hover:bg-primary hover:text-white">
              All Countries
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseCountry;
