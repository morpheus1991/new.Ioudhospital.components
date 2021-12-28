import Image from 'next/image'
import LayoutCon from "./LayoutCon";

const whatWeOfferData = [
    {
        img:'/images/what-we-offer-main01.jpg',
        title:'Cross-border Telemedicine',
        desc:'CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.',
    },
    {
        img:'/images/what-we-offer-main01.jpg',
        title:'Cross-border Telemedicine.jpg',
        desc:'CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.',
    },
    {
        img:'/images/what-we-offer-main01.jpg',
        title:'Cross-border Telemedicine.jpg',
        desc:'CloudHospital is well equipped to provide quality telemedicine for anyone around the world using our special platform developed in-house. Telemedicine allows healthcare providers to evaluate, diagnose and treat patients from a distance using latesttelecommunications technology.',
    }        
]

const WhatWeOffer = () => {
    return (
        <LayoutCon>
            <ul>
                {
                    whatWeOfferData.map(v=>{
                        return (
                            <li className='flex even:flex-row-reverse'>
                                <div className='flex-1'>
                                    <Image
                                        src={v.img}
                                        alt={v.title}
                                        layout="responsive"
                                        width={475}
                                        height={316}                                       
                                        quality={100}
                                    />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-3xl font-bold'>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            </li>
                        )
                    })

                }
            </ul>
        </LayoutCon>
    );
};

export default WhatWeOffer;