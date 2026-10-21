'use client';

// import react property
import { useState } from 'react';

import { dataMainMenu, listDetailAccount } from '../lib/mappings/listSidebar'

// interfice | type
interface ListTypeProps {
	href: string;
	value: string;
	icon: string;
}

interface SidebarProps {
	active: boolean;
	onClose: () => void
}

// component child
function List(
	{ href, value, icon }:ListTypeProps
) {
	return (
		<li className="mb-2 hover:bg-zinc-100 cursor-pointer active:bg-zinc-200 active:shadow-md active:scale-[0.99]">
			<a href="#" className="flex items-center">
				<div className="iconList w-10 h-10 full-center text-xl">{icon}</div>
				<span className="contentList">{value}</span>
			</a>
		</li>
	);
}

export default function SidebarHomeMobile({ active, onClose }: SidebarProps) {

	return (
	<>

		{active && (
			<button className='w-[40%] inset-0 left-0 top-0 h-screen fixed z-[122] bg-zinc-700/70' onClick={onClose}></button>
		)}

		<aside className={`fixed w-[70%] right-0 top-0 h-screen bg-white shadow-md rounded-tl-2xl overflow-hidden rounded-bl-2xl z-[200] transition-all ${active ? '' : 'translate-x-200'} `}>
			<header className="p-5 bg-blue-500">
				<div className="title flex items-center justify-between mb-5">
					<div className="logos flex items-center gap-3">
						<div className="iconLogo w-10 h-10 bg-white rounded-xl full-center">🛒</div>
						<span className="font-bold text-xl text-white">JmoX</span>
					</div>
					<button className={`closeSidebar w-10 h-10 relative full-center cursor-pointer group active:scale-[0.9]`} onClick={onClose} type="button">
						<div className="line w-1/2 h-1 rotate-45 bg-white absolute group-hover:bg-zinc-200"></div>
						<div className="line w-1/2 h-1 -rotate-45 bg-white absolute group-hover:bg-zinc-200"></div>
					</button>
				</div>

				<div className="userProfil flex items-center gap-2">
					<div className="hitboxProfil w-15 h-15">
						<a className="full-center bg-zinc-100 w-15 h-15 rounded-full" href="#?"></a>
					</div>
					<div className="descriptionProfil grow self-start text-white">
						<h3 className="gretting text-lg">Halo, pengguna!</h3>
						<p className="font-semibold">
							<a className="" href="?">Login </a> 
							/
							<a className="" href="?"> Daftar</a> 
						</p>
					</div>
				</div>
			</header>

			<section className="sidebarListParent">
				{/*  */}
				<section className="py-3" aria-description="sidebarList">
					<h5 className="font-semibold mb-1 px-3">Menu utama</h5>
					<ul className="px-3">
						{dataMainMenu.map((list, i) => (
							<List
							key={i}
							icon={list.icon}
							value={list.title}
							href='?'/>
						))}
					</ul>
				</section>
				<hr className='h-0.5 mx-3 bg-zinc-900' />
				<section className="py-3" aria-description="sidebarList">
					<h5 className="font-semibold mb-1 px-3">Akun Saya</h5>
					<ul className="px-3">
						{listDetailAccount.map((item, i) => (
							<List
							key={i}
							icon={item.icon}
							value={item.title}
							href='?'/>
						))}
					</ul>
				</section>
			</section>
		</aside>
	</>
	);
}