"use client";

interface EntryTypes {
	value: string;
}

export default function EntryTitle({ value='Unknow title' }: EntryTypes) {
	return (
		<h2 className="font-semibold text-2xl mb-3">{value}</h2>
	);
}