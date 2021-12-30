
import Link from "next/link"

const FixNav = () => {
    return (
       <ul className="fixed bottom-2 right-2 z-[9999]">
           <li>
               <Link href=""><a className="block sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] bg-[url('/images/btn-chat.png')] bg-cover indent-[-9999px]">chat</a></Link>
           </li>
           <li className="mt-2">
                <Link href=""><a className="block sm:w-[60px] sm:h-[60px] w-[30px] h-[30px] bg-[url('/images/btn-top.png')] bg-cover indent-[-9999px]">top</a></Link>
            </li>
       </ul>
    );
};

export default FixNav;