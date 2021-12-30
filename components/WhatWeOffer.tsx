import Image from "next/image";
import LayoutCon from "./LayoutCon";

const whatWeOfferData = [
    {
        img: "/images/what-we-offer-main01.jpg",
        title: "Cross-border Telemedicine",
        desc: "CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.",
    },
    {
        img: "/images/what-we-offer-main01.jpg",
        title: "Cross-border Telemedicine.jpg",
        desc: "CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.",
    },
    {
        img: "/images/what-we-offer-main01.jpg",
        title: "Cross-border Telemedicine.jpg",
        desc: "CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.",
    },
    {
        img: "/images/what-we-offer-main01.jpg",
        title: "Cross-border Telemedicine.jpg",
        desc: "CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.",
    },
];
//

const WhatWeOffer = () => {
    return (
        <LayoutCon>
            <h3 className="text-xl sm:text-3xl mb-8 sm:mb-10 font-bold">
                What we Offer
            </h3>
            <ul>
                {whatWeOfferData.map((v, i) => {
                    return (
                        <li
                            key={i}
                            className="sm:flex items-center even:flex-row-reverse mb-10"
                        >
                            <div
                                className={
                                    (i % 2 == 0 ? "sm:mr-20" : "sm:ml-20") +
                                    " flex-1 rounded-[1rem] overflow-hidden shadow-[0_10px_20px_0px_rgba(59,67,092,0.5)]"
                                }
                            >
                                <Image
                                    src={v.img}
                                    alt={v.title}
                                    layout="responsive"
                                    width={475}
                                    height={316}
                                    quality={100}
                                />
                            </div>
                            <div className="flex-1 self-center sm:mt-0 mt-4">
                                <h3 className="sm:text-3xl text-lg font-bold">
                                    {v.title}
                                </h3>
                                <p className="mt-2 sm:text-base text-sm">
                                    {v.desc}
                                </p>
                                <button className="mt-4 text-primary">
                                    + See more
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </LayoutCon>
    );
};

export default WhatWeOffer;