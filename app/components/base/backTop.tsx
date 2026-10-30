'use client';
// react property
import { useState, useEffect } from 'react';
// icon
import { FaArrowUp } from "react-icons/fa";

export default function BackTopBtn() {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = scrollY;
			setIsScroll(currentScroll > 100);
		}
		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleBackTop = () => {
		window.scrollTo({
			top: 0, behavior: 'smooth'
		});
	};
	
	return (
		<button className={`w-15 h-15 bg-zinc-700 full-center fixed bottom-17 right-2 rounded-full text-white text-2xl hover-button-primary transition-all cursor-pointer z-40 ${
			isScroll ? 'visible' : 'invisible opacity-0'
		}`} onClick={handleBackTop}>
			<FaArrowUp />
		</button>
	);
}