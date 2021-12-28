import Link from "next/link";
import LayoutCon from "./LayoutCon";


const TabList = () => {
    return (
        <LayoutCon>
            <ul className="-ml-2 mb-10">
                <li className="inline-block ml-2"><Link href=""><a className="on :class='[ 'on' ? 'font-bold text-blue' : 'text-grey-dark']' 1block text-lg p-2 px-4 rounded-[3rem] bg-gray-300 border border-white hover:border-primary text-gray-700 font-bold ease-in duration-200 hover:bg-primary hover:text-white active:">Dental</a></Link></li>
                <li className="inline-block ml-2"><Link href=""><a className="block text-lg p-2 px-4 rounded-[3rem] bg-gray-300 border border-white hover:border-primary text-gray-700 font-bold ease-in duration-200 hover:bg-primary hover:text-white active:">Dental</a></Link></li>
                <li className="inline-block ml-2"><Link href=""><a className="block text-lg p-2 px-4 rounded-[3rem] bg-gray-300 border border-white hover:border-primary text-gray-700 font-bold ease-in duration-200 hover:bg-primary hover:text-white active:">Dental</a></Link></li>
                <li className="inline-block ml-2"><Link href=""><a className="block text-lg p-2 px-4 rounded-[3rem] bg-gray-300 border border-white hover:border-primary text-gray-700 font-bold ease-in duration-200 hover:bg-primary hover:text-white active:">Dental</a></Link></li>
            </ul>

            <div className="mt-10">
                <h2 className="text-3xl mb-4 font-bold">Medical care for Face & Neck</h2>
                <p className="mb-10">Find information on various types of diagnostics, diseases, and treatments for adults.</p>
                <ul  className="grid gap-4 md:grid-cols-4 grid-cols-2">
                    <li className="basis-1/4"><Link href=""><a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">Interface</a></Link></li>
                    <li className="basis-1/4"><Link href=""><a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">Interface</a></Link></li>
                    <li className="basis-1/4"><Link href=""><a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">Interface</a></Link></li>
                    <li className="basis-1/4"><Link href=""><a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">Interface</a></Link></li>
                    <li className="basis-1/4"><Link href=""><a className="flex items-center h-[60px] shadow-lg pl-4 rounded-[1rem] ease-in duration-200 border border-white hover:border-primary font-bold text-black">Interface</a></Link></li>
                </ul>
            </div>
        </LayoutCon>
    );
};

export default TabList;