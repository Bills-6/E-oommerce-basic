"use client";

interface EntryTypes {
	value: string;
}

export default function EntryTitle({ value='Unknow title' }: EntryTypes) {
	return (
		<h2 className="font-bold text-2xl lg:text-4xl mb-3">{value}</h2>
	);
}