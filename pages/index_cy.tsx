import React from "react";
import Layout from "../components/layout";
import LayoutCon from "../components/LayoutCon";

const Home = () => {
    return (
        <div>
            <Layout home>
                {/* membership */}
                <LayoutCon>
                    <div className="block mt-20 py-2 px-6 text-16 before:content-[''] before:inline-block before:align-middle before:bg-[url('/images/main/icon-pattern.png')] before:bg-contain before:w-[15px] before:h-[19px] before:mr-2 rounded-t-[1.5rem] bg-primary text-white">
                        New service available!
                    </div>
                </LayoutCon>
                <div className="lg:flex shrink-0 lg:px-14 lg:pt-4 sm:p-4 p-4 border border-primary">
                    <div className="flex grow items-center">
                        <i className="block shrink-0 w-[4rem] h-[6.1rem] bg-[length:3.4rem] bg-center bg-no-repeat bg-[url('/images/icon/icon-doctor.png')]"></i>
                        <div className="grow pl-4">
                            <strong className="lg:text-xl text-base">
                                Do you want to get free Medical Coordination
                                Service?
                            </strong>
                            <p className="lg:text-lg text-sm">
                                If you want to get 24/7 free coordination from A
                                to Z to improve your health
                            </p>
                        </div>
                    </div>
                    <Link href="">
                        <a className="block lg:w-[12rem] w-full mt-4 lg:mt-0 sm:mt-10 text-center self-end p-2 rounded-[3rem] text-18 bg-primary text-white">
                            Click Here
                        </a>
                    </Link>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
