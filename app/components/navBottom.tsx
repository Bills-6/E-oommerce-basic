'use client';

// icon
import { FaHome } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiGrid41, CiShoppingCart } from "react-icons/ci";

export default function NavBottomHome() {
	return (
	<nav className='fixed bottom-0 left-0 right-0 h-15 z-20 bg-amber-50 rounded-tl-2xl rounded-tr-2xl shadow-[0_-5px_5px_#c9c9c9] px-5'>
          <ul className='navList h-full flex items-center justify-between'>
			<li className="w-10 h-10 text-3xl full-center">
				<FaHome />
			</li>
			<li className="w-10 h-10 text-3xl full-center">
				<CiGrid41 />
			</li>
			<li className="w-10 h-10 text-3xl full-center">
				<CiShoppingCart />
			</li>
			<li className="w-10 h-10 text-3xl full-center">
				<RiAccountCircleLine />
			</li>
		  </ul>
        </nav>
	);
}