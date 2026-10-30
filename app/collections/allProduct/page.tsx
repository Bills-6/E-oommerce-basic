'use client';

// react icon (dummy)
import { FaEye } from "react-icons/fa";

// component import
import HeaderTop from "@/app/components/headerTop";
import HeaderNav from "@/app/components/base/headerNav";
import { useSidebar } from "@/app/context/SidebarContext";
import SidebarHomeMobile from "@/app/components/sidebar";
import NavBottom from "@/app/components/navBottom";
import BackTopBtn from "@/app/components/base/backTop";

export default function AllProductPage() {
	const { isOpen, handleOpenSidebarMobile } = useSidebar();
	
	return (
		<div className="rootPage p-5 h-[30000px]">
			<HeaderTop toggle={handleOpenSidebarMobile} />
			<HeaderNav heading="All product" />
			<SidebarHomeMobile active={isOpen} />

			<main className="py-5 lg:grid lg:grid-cols-3 gap-7">
				<aside className=" h-20 hidden lg:block p-5">
					<h4 className="mb-5 text-3xl text-center uppercase">Filter</h4>


				</aside>
				<div className="allProductCards grid gap-4 md:grid-cols-2 md:gap-7 lg:grid-cols-1 lg:col-span-2">
					<article className="allProductItem p-4 bg-sky-200 rounded-3xl shadow-xl lg:w-[80%]">
						<img className="h-64 bg-zinc-50/80 rounded-2xl" src="/" alt="allProductPreview" />

						{/* description product */}
						<div className="descriptionProduct py-2 px-3">
							<h4 className="productName font-bold mb-2 text-xl">Keyboard Zince 322</h4>
							<p className="text-sm text-zinc-700 mb-3">Introducing the Keyboard Zinc 322, a sleek and durable mechanical keyboard designed for maximum performance. Built with a premium zinc-alloy frame</p>
							<div className="producPrice flex items-center gap-3 font-semibold text-xl mb-4">
								<div className="currencyType">Rp.</div>
								<span className="priceCurrent">633.000</span>
							</div>
							<div className="actionsCard flex items-center gap-2">
								<button className="grow h-15 bg-zinc-50/50 full-center uppercase tracking-wider border border-zinc-500" type="button">Option</button>
								<button className="view w-15 h-15 bg-zinc-100 full-center text-2xl" type="button">
									<FaEye />
								</button>
							</div>
						</div>
					</article>
					<article className="allProductItem p-4 bg-sky-200 rounded-3xl shadow-xl">
						<img className="h-64 bg-zinc-50/80 rounded-2xl" src="/" alt="allProductPreview" />

						{/* description product */}
						<div className="descriptionProduct py-2 px-3">
							<h4 className="productName font-bold mb-2 text-xl">Keyboard Zince 322</h4>
							<p className="text-sm text-zinc-700 mb-3">Introducing the Keyboard Zinc 322, a sleek and durable mechanical keyboard designed for maximum performance. Built with a premium zinc-alloy frame</p>
							<div className="producPrice flex items-center gap-3 font-semibold text-xl mb-4">
								<div className="currencyType">Rp.</div>
								<span className="priceCurrent">633.000</span>
							</div>
							<div className="actionsCard flex items-center gap-2">
								<button className="grow h-15 bg-zinc-50/50 full-center uppercase tracking-wider border border-zinc-500" type="button">Option</button>
								<button className="view w-15 h-15 bg-zinc-100 full-center text-2xl" type="button">
									<FaEye />
								</button>
							</div>
						</div>
					</article>
				</div>
			</main>
			<BackTopBtn />
			<NavBottom />
		</div>
	);
}