import Link from 'next/link';
import React from 'react';

interface Datatype {
    title: string,
    children:React.ReactNode,
    btnName:string,
}

const TitleAndSeeAllBtnCon = ({title,children,btnName}) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
            <Link href=""><a>`See all {btnName}`</a></Link>
        </div>
    );
};

export default TitleAndSeeAllBtnCon;