'use client';

// react icon
import { IoIosArrowForward } from "react-icons/io";
// data
import { categoryList } from "../lib/mappings/listSidebar";
// component
import EntryTitle from "./entryTitle";

// interfice | type
interface ListTypeProps {
	name: string | undefined;
}

interface SidebarProps {
	active: boolean;
	onClose: () => void
}

// list component
function ListCategoryMobile(
	{ name }: ListTypeProps
) {
	return (
		<li className='categoryItem mb-6 flex items-center justify-between'>
			<span className="contentCategory">{name}</span>
			<button className='viewCategoryBtn w-10 h-10 full-center text-2xl'>
				<IoIosArrowForward />
			</button>
		</li>
	);
}

export default function SidebarHomeMobile({ active, onClose }: SidebarProps) {
	return (
	<>
		{active && (
			<button className='w-[10%] inset-0 left-0 top-0 h-screen fixed z-[122] bg-zinc-700/70' onClick={onClose}></button>
		)}

		<aside className={`fixed w-[90%] left-0 top-[calc(24px+40px)] h-[calc(100dvh-(24px+40px))] bg-white shadow-md overflow-hidden z-[200] transition-all p-5 flex flex-col justify-between`}>
			<ul className='categoryList'>
				{categoryList.map(category => (
					<ListCategoryMobile
						key={category.id}
						name={category.name}
					/>
				))}
			</ul>
			<div className="accountPage">
				<EntryTitle value="My Account"/>
				<div className="buttonAuthentication">
					<button className="w-full h-15 bg-zinc-800 text-white font-bold mb-5">Log in</button>
					<button className="w-full h-15 bg-zinc-100 border-2 text-zinc-700 font-bold">Sign in</button>
				</div>
			</div>
		</aside>
	</>
	);
}