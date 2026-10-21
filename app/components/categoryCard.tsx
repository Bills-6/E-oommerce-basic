'use client';

interface CategoryTypesProps {
	value: string;
	icon: string;
	href?: string;
}

export default function CategoryCard(
	{ value, href, icon }:CategoryTypesProps
) {
	return (
		<a href={href} className="h-20 flex flex-col items-center justify-center bg-zinc-100 outline outline-zinc-300 rounded-md shadow-md hover:bg-zinc-200 cursor-pointer">
			<span className="text-xl" aria-description="iconCard">{icon}</span>
			<p className="text-sm">{value}</p>
		</a>
	);
}