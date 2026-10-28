'use client';

// component import
import HeaderTop from "@/app/components/headerTop";
import HeaderNav from "@/app/components/base/headerNav";

export default function AllProductPage() {
	return (
		<div className="rootPage p-5 h-[30000px]">
			<HeaderTop />
			<HeaderNav heading="All product" />
		</div>
	);
}