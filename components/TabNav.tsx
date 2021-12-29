import Link from "next/link";
import { useState } from "react";
import LayoutCon from "./LayoutCon";

const navList = ["dental", "dental22", "dental", "dental22"];

const TabNav = () => {
    const [tabActive, secTabActive] = useState(false);

    return (
        <ul className="-ml-2 mb-10">
            {navList.map((item, i) => (
                <li className="inline-block ml-2 my-1">
                    <Link href="">
                        <a
                            className={
                                (!tabActive && !i
                                    ? "bg-primary text-white"
                                    : "bg-gray-300 text-gray-700") +
                                " block sm:text-lg text-sm p-2 px-4 rounded-[3rem] border border-white hover:border-primary font-bold ease-in duration-200 hover:bg-primary hover:text-white"
                            }
                        >
                            Dental
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default TabNav;