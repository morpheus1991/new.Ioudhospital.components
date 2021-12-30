import Image from "next/image";
import LayoutCon from "./LayoutCon";

const WhatChooseuse = () => {
    return (
        <section className="py-10 sm:py-20 bg-lightGray mt-20 ">
            <LayoutCon>
                <div className="flex flex-col sm:flex-row -mt-20">
                    <div className="sm:flex-1 order-2 sm:order-1">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Why Choose Us
                        </h2>
                        <ol className="sm:grid grid-cols-2 gap-6">
                            <li className="mt-6">
                                <h3 className="relative pl-8 text-2xl font-medium pb-4 border-b border-gray-300 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[18px] before:h-[18px] before:bg-ico-ch-1 before:bg-no-repeat before:bg-cover before:mr-4">
                                    1. Search
                                </h3>
                                <p className="mt-4">
                                    Search our website and ask us if you are not
                                    sure.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="relative pl-8 text-2xl font-medium pb-4 border-b border-gray-300 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[18px] before:h-[18px] before:bg-ico-ch-2 before:bg-no-repeat before:bg-cover before:mr-4">
                                    2. clinic/doctor
                                </h3>
                                <p className="mt-4">
                                    Search our website and ask us if you are not
                                    sure.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="relative pl-8 text-2xl font-medium pb-4 border-b border-gray-300 before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[18px] before:h-[18px] before:bg-ico-ch-3 before:bg-no-repeat before:bg-cover before:mr-4">
                                    3. Pay the nominal amount
                                </h3>
                                <p className="mt-4">
                                    Choose the right clinic/doctor and book for
                                    an online consultation for your available
                                    chosen date. Provide as much information on
                                    your situation and condition as possible for
                                    us to better serve you.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="relative pl-8 text-2xl font-medium pb-4 border-b border-gray-300  before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[18px] before:h-[18px] before:bg-ico-ch-4 before:bg-no-repeat before:bg-cover before:mr-4">
                                    4. Receive online consultation
                                </h3>
                                <p className="mt-4">
                                    Receive online consultation and get a
                                    customized advice structured just for you.
                                </p>
                            </li>
                            <li className="mt-6">
                                <h3 className="relative pl-8 text-2xl font-medium pb-4 border-b border-gray-300  before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[18px] before:h-[18px] before:bg-ico-ch-4 before:bg-no-repeat before:bg-cover before:mr-4">
                                    5. Receive online consultation
                                </h3>
                                <p className="mt-4">
                                    Receive online consultation and get a
                                    customized advice structured just for you.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </LayoutCon>
        </section>
    );
};

export default WhatChooseuse;