import Link from "next/link";
import LayoutCon from "./LayoutCon";

const BackgroundSearch = () => {
    return (
        <div className="bg-no-repeat sm:bg-right bg-center bg-looking-srh-bg py-[5.5%]">
            <div className="max-w-1240 sm:px-8 px-4 m-auto">
                <div className="md:w-[60%] w-[90%]">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-4 leading-7 sm:leading-10">
                        Are you aware of the best treatment options for your
                        condition?
                    </h2>
                    <p className="text-20 sm:mb-20 mb-3">
                        Let us help you! We've helped thousands of patients
                        positively improve their lives.
                    </p>
                </div>
                <div className="relative sm:max-w-[800px] md:w-3/4 sm:mb-8 mb-8">
                    <form>
                        <input
                            type="text"
                            className="w-full sm:h-20 h-14 px-8 rounded-[3rem] border-gray-300 border placeholder:italic placeholder:text-gray-600 placeholder:text-16"
                            placeholder="what are you looking for?"
                        />
                        <button className="sm:w-20 w-14 sm:h-20 h-14 absolute top-0 right-3 indent-[-9999px] bg-ico-blue-srh bg-no-repeat bg-[length:50%] bg-center">
                            search
                        </button>
                    </form>
                </div>
                <ul className="flex flex-wrap">
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
                        <Link href="">
                            <a className="block sm:px-6 sm:py-2 px-4 py-1 text-14 bg-[#99a6bb66] rounded-[3rem] border border-white hover:border-primary text-white shadow-lg hover:shadow-3xl hover:bg-primary">
                                cardfsdf
                            </a>
                        </Link>
                    </li>
                    <li className="mt-4 mr-4">
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