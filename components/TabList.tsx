import Link from "next/link";

const TabList = () => {
    return (
        <div className="mt-10">
            <h2 className="text-3xl mb-4 font-extrabold">Dental care</h2>
            <p className="mb-10">
                Find information on various types of diagnostics, diseases, and
                treatments for adults.
            </p>
            <ul className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                <li className="sm:basis-1/1">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>
                <li className="sm:basis-1/1">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>
                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>
                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>
                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>
                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>                <li className="basis-1/4">
                    <Link href="">
                        <a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">
                            Interface
                        </a>
                    </Link>
                </li>                
            </ul>
        </div>
    );
};

export default TabList;