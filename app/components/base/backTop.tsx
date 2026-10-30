'use client';

import { FaArrowUp } from "react-icons/fa";

export default function BackTopBtn() {
	return (
		<button className="w-15 h-15 bg-zinc-700 full-center fixed bottom-17 right-2 rounded-full text-white text-2xl hover-button-primary cursor-pointer z-40">
			<FaArrowUp />
		</button>
	);
}