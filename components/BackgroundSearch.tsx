import Link from "next/link";
import LayoutCon from "./LayoutCon";

const BackgroundSearch = () => {
    return (
        <div className="bg-no-repeat sm:bg-right bg-center bg-looking-srh-bg lg:bg-contain bg-cover">
            <div className="max-w-1240 sm:px-8 px-4 sm:py-[80px] py-[30%] m-auto">
                <div className="md:max-w-[800px]">
                    <h2 className="sm:text-4xl text-2xl font-extrabold mb-4 leading-7 sm:leading-10">
                        Are you aware of the best treatment options for your
                        condition?
                    </h2>
                    <p className="sm:text-xl text-base sm:mb-20 mb-10">
                        Let us help you! We've helped thousands of patients
                        positively improve their lives.
                    </p>
                    <div className="relative sm:mb-8 mb-2">
                        <form>
                            <input
                                type="text"
                                className="w-full sm:h-20 h-14 px-8 rounded-[3rem] border-gray-300 border placeholder:italic placeholder:text-gray-600 placeholder:text-16"
                                placeholder="what are you looking for?"
                            />
                            <button className="sm:w-20 w-14 sm:h-20 h-14 absolute top-0 right-3 indent-[-9999px] bg-ico-blue-srh bg-no-repeat bg-[length:32px] bg-center">
                                search
                            </button>
                        </form>
                    </div>
                </div>
                <ul className="flex flex-wrap">
                    <li className="sm:mt-4 sm:mr-4 mt-2 mr-2">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="sm:mt-4 sm:mr-4 mt-2 mr-2">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="sm:mt-4 sm:mr-4 mt-2 mr-2">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="sm:mt-4 sm:mr-4 mt-2 mr-2">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundSearch;
