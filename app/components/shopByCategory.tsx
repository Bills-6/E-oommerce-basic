'use client';

import { Suspense } from "react";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// component
import EntryTitle from "./entryTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ViewAll from "./base/viewAll";

export default function ByCategory() {
	return (
		<Suspense fallback={<div className="b-5 bg-red-500"></div>}>
			<div className="py-16 px-5">
				<div className="container mx-auto">
				<EntryTitle value="Shop By Category"/>

				<Swiper
					modules={[Navigation, Pagination]}
					navigation={{prevEl: '.prevButtonCategory', nextEl: '.nextButtonCategory',}}
					pagination={{el: '.swiper-category-pagination', clickable: true, type: 'bullets'}}
					loop={false}
					breakpoints={{
						320: {
							slidesPerView: 1.5,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 4.5,
							spaceBetween: 40,
						}
					}}
					className="overflow-hidden h-48 mb-5"
				>
					<SwiperSlide className="flex bg-zinc-200 relative overflow-hidden rounded-lg">
						<a className="w-full h-full block" href="#"></a>
						<h5 className="absolute bottom-5 left-5 font-bold uppercase">All Product</h5>
					</SwiperSlide>
					<SwiperSlide className="flex bg-zinc-200 relative overflow-hidden rounded-lg">
						<a className="w-full h-full block" href="#"></a>
						<h5 className="absolute bottom-5 left-5 font-bold uppercase">Keyboard</h5>
					</SwiperSlide>
					<SwiperSlide className="flex bg-zinc-200 relative overflow-hidden rounded-lg">
						<a className="w-full h-full block" href="#"></a>
						<h5 className="absolute bottom-5 left-5 font-bold uppercase">Keycaps</h5>
					</SwiperSlide>
				</Swiper>

				<div className="controllerSwiper flex items-center justify-center gap-3">
					<button className="prevButtonCateogory w-10 h-10 full-center" type="button">
						<ChevronLeft />
					</button>

					<div className="swiper-category-pagination w-24 overflow-hidden flex items-center gap-2"></div>
					
					<button className="nextButtonCateogory w-10 h-10 full-center" type="button">
						<ChevronRight />
					</button>
				</div>
				</div>
			</div>		
		</Suspense>
	);
}