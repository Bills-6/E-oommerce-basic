'use client';

import HeaderTop from "../components/headerTop";
import NavBottomHome from "../components/navBottom";
import SidebarHomeMobile from "../components/sidebar";

import { useSidebar } from "../context/SidebarContext.";

export default function CollectionsPage() {
	const { isOpen, handleOpenSidebarMobile } = useSidebar();
	
	return (
		<div className="rootPage p-5 h-[3000px] text-zinc-700">
			<HeaderTop toggle={handleOpenSidebarMobile} />

			<header className="collectionsHeaderNav bg-amber-200 pt-40 pb-10 rounded-bl-2xl rounded-br-2xl">
				<nav className="py-4 w-fit mx-auto mb-5">
					<ul className="pathUrl uppercase flex items-center gap-2">
						<li className="pathItem flex items-center gap-2">
							<a href="#home/">Home</a>
							<div className="hori text-xl">/</div>
						</li>
						<li className="pathItem flex items-center gap-2">
							<a href="#home/">Collections</a>
							<div className="hori text-xl">/</div>
						</li>

					</ul>
				</nav>

				<h1 className="text-2xl uppercase text-center font-semibold">Collections</h1>
			</header>

			<main className="content"></main>

			<NavBottomHome />
			<SidebarHomeMobile active={isOpen} />
		</div>
	);
}