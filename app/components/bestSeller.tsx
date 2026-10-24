'use client';

import { Suspense } from "react";

// component
import EntryTitle from "./entryTitle";

export default function BestSellerPage() {
	return (
		<div className="py-5 px-5">
			<div className="container mx-auto ">
				<EntryTitle value="Best Seller 🔥"/>

			<div className="productContainer pt-6 grid gap-3 md:grid-cols-3 md:gap-6">
				<article className="h-40 bg-pink-300"></article>
				<article className="h-40 bg-pink-300"></article>
				<article className="h-40 bg-pink-300"></article>
			</div>
			</div>
		</div>
	);
}