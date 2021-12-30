import Link from 'next/link';
import React from 'react';

interface Datatype {
    title: string,
    children:React.ReactNode,
    btnName:string,
}

const TitleAndSeeAllBtnCon = ({children,title,btnName} : Datatype) => {
    return (
        <section className='relative pb-10'>
            <h2 className="font-bold mb-8 text-xl">{title}</h2>
            {children}
            <Link href=""><a className='lg:absolute right-4 top-0 lg:underline lg:w-auto w-52 m-auto border-primary mt-4 block text-center lg:h-auto h-12 leading-[3rem] border lg:border-0 rounded-[3rem] text-primary lg:after:content-[" "] lg:after:absolute after:right-[-25px] after:top-[50%] after:w-[25px] after:h-[25px] after:-translate-y-1/2 after:-rotate-90 after:bg-ico-blue-arrow after:bg-[length:100%]'>See all {btnName}</a></Link>
        </section>
    );
};

export default TitleAndSeeAllBtnCon;