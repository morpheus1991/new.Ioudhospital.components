import Image from 'next/image'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"

SwiperCore.use([Navigation])

const Responsive = {
    "640": {
      "slidesPerView": 2,
      "spaceBetween": 20
    },
    "768": {
      "slidesPerView": 3,
      "spaceBetween": 40
    },
    "1024": {
      "slidesPerView": 5,
      "spaceBetween": 50
    }
  } 

const WordClassExperts = () => {
    return (
        <Swiper breakpoints={Responsive} navigation={true} className="mySwiper ">
            <SwiperSlide className='hover:shadow-basic'>
                <div className='p-5 border border-gray-200 rounded'>
                    <div className='relative w-[175px] h-[175px] m-auto rounded-full overflow-hidden'>
                        <Image
                            src="/images/experts.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                    <div className='mt-4'>
                        <dl>
                            <dt className='text-lg font-bold'>Ani annndfdf</dt>
                            <dd className='relative pl-6 text-sm text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-4px] before:bg-ico-home before:w-[24px] before:h-[24px] before:bg-contain before:bg-no-repeat'>ADONIS Beauty Centre of Plastic Surgery and Cosmetology</dd>
                            <dd className='relative pl-6 text-sm text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-4px] before:bg-ico-location before:w-[24px] before:h-[24px] before:bg-contain before:bg-no-repeat'>ADONIS Beauty Centre of Plastic Surgery and Cosmetology</dd>
                            <dd className='relative pl-6 text-sm text-textGraylight before:content-[""] before:absolute before:left-0 before:top-[-4px] before:bg-ico-specialty before:w-[24px] before:h-[24px] before:bg-contain before:bg-no-repeat whitespace-nowrap overflow-hidden text-ellipsis'>
                                <span>dfdsfdfds</span>
                                <span>dfdsfdfds</span>
                                <span>dfdsfdfds</span>
                                <span>dfdsfdfds</span>
                            </dd>
                        </dl>
                    </div>
                    <Link href="">
                        <a className='flex justify-center items-center mt-12 h-[40px] rounded-[3rem] border border-primary text-primary font-bold text-sm'>
                        Ask a Question
                        </a>                
                    </Link>
                </div>
            </SwiperSlide>                         
        </Swiper>            
    );
};

export default WordClassExperts