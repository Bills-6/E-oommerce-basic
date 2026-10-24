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

export default function ByCategory() {
	return (
		<Suspense fallback={<div className="b-5 bg-red-500"></div>}>
			<div className="py-16">
				<EntryTitle value="Shop By Category"/>

				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1.5}
					navigation={{prevEl: '.prevButtonCategory', nextEl: '.nextButtonCategory',}}
					pagination={{el: '.swiper-category-pagination', clickable: true, type: 'bullets'}}
					loop={false}
					className="overflow-hidden h-64 mb-5"
				>
					<SwiperSlide className="flex bg-purple-500"></SwiperSlide>
					<SwiperSlide className="flex bg-yellow-500"></SwiperSlide>
					<SwiperSlide className="flex bg-blue-500"></SwiperSlide>
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
		</Suspense>
	);
}