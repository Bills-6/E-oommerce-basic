'use client';
// react property
import Link from "next/link";

// icon
import { FaHome } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiGrid41, CiShoppingCart } from "react-icons/ci";

export default function NavBottom() {
	return (
	<nav className='fixed bottom-0 left-0 right-0 h-15 z-20 bg-amber-50 rounded-tl-2xl rounded-tr-2xl shadow-[0_-5px_5px_#c9c9c9] px-5 lg:hidden'>
          <ul className='navList h-full flex items-center justify-between md:w-[70%] md:mx-auto md:gap-6'>
			<li className="w-10 h-10 text-3xl full-center cursor-pointer hover-nav-bottom">
				<Link href="/">
					<FaHome />
				</Link>
			</li>
			<li className="w-10 h-10 text-3xl full-center cursor-pointer hover-nav-bottom">
				<Link href="/collections/AllProduct">
					<CiGrid41 />
				</Link>
			</li>
			<li className="w-10 h-10 text-3xl full-center cursor-pointer hover-nav-bottom">
				<Link href="/cart">
					<CiShoppingCart />
				</Link>
			</li>
			<li className="w-10 h-10 text-3xl full-center cursor-pointer hover-nav-bottom">
				<Link href="/account">
					<RiAccountCircleLine />
				</Link>
			</li>
		  </ul>
        </nav>
	);
}