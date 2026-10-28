'use client';

import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { BiBookmarkHeart } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";

// react property
import { useState, useEffect, useRef } from "react";

function SearchBar() {
	return (
		<search className="w-full h-13 rounded-lg border bg-zinc-100 overflow-hidden relative">
			<input className="w-full h-full px-5 pe-15" placeholder="Search here" type="search" name="search" />

			<button className="absolute w-10 h-10 top-1/2 -translate-y-1/2 right-2 bg-pink-200 full-center text-2xl" type="button">
				<BsSearch />
			</button>
		</search>
	);
}

type TypeToggle = {
	toggle: () => void;
}

export default function HeaderTop(
	{ toggle }: TypeToggle
) {
	const [isInvisible, setIsInvisible] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const previousScrollY = lastScrollY.current;

			if (currentScrollY <= 0) {
				setIsInvisible(true);
			}
			else if (currentScrollY > previousScrollY) {
				setIsInvisible(false);
			}
			else if (currentScrollY < previousScrollY) {
				setIsInvisible(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handleNavClick = () => {
		setIsInvisible(true);
	}
	
	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out bg-white px-5 pb-5
			${
				isInvisible
				? "translate-y-0"
				: "-translate-y-full"
			}
		`}>
			<div className="container mx-auto">
				<div className="flex items-center justify-between mb-5 pt-6">
					<button className="hamburger w-10 h-10 text-3xl full-center" type="button" onClick={toggle}>
						<RxHamburgerMenu />
					</button>
					<a className="font-bold text-2xl lg:text-3xl" href="#">Jmox</a>
					<div className="fitures flex items-center gap-5">
						<button className="cart w-10 h-10 full-center text-3xl" type="button">
							<CiShoppingCart />
						</button>

						<button className="whilist w-10 h-10 full-center text-3xl" type="button">
							<BiBookmarkHeart />
						</button>
					</div>
				</div>
				<div className="container mx-auto flex items-center gap-5">
					<SearchBar />

					<button className="w-10 h-10 text-4xl hidden lg:flex items-center justify-center cursor-pointer hover:scale-[1.1] transition-all" type="button">
						<RiAccountCircleLine />
					</button>
				</div>
				<nav className="navLarge hidden md:block pt-4">
					<ul className="flex items-center gap-10 uppercase w-fit mx-auto">
						<li className="">All product</li>
						<li className="">keyboard</li>
						<li className="">keycaps</li>
						<li className="">accesories</li>
						<li className="">download</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}