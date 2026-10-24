'use client';

interface ViewProps {
	href: string | undefined
}

export default function ViewAll(
	{ href }:ViewProps
) {
	return (
		<a href={href} className="bg-zinc-700 full-center gap-3 px-5 text-white font-semibold h-10 rounded-md">Shop more</a>
	);
}