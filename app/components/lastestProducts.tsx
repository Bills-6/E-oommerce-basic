'use client';

import { Suspense } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// component
import { ChevronLeft, ChevronRight } from "lucide-react";
import EntryTitle from "./entryTitle";

export default function LastestProducts() {
	return (
		<Suspense fallback={<div className="p-5 bg-red-300"></div>}>
			<div className="lastestProductContainer py-2">
				<EntryTitle value="Lastest"/>
				<Swiper 
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1.5}
					navigation={{
						prevEl: '.prevBtn',
						nextEl: '.nextBtn',
					}}
					pagination={{
						el: '.swiper-pagination',
						clickable: true,
						type: 'bullets'
					}}
					loop={false}
					className="overflow-hidden h-64 mb-5"
					>
					<SwiperSlide className="flex bg-red-500"></SwiperSlide>
					<SwiperSlide className="flex bg-yellow-500"></SwiperSlide>
					<SwiperSlide className="flex bg-pink-500"></SwiperSlide>
					<SwiperSlide className="flex bg-purple-500"></SwiperSlide>
					<SwiperSlide className="flex bg-green-500"></SwiperSlide>
				</Swiper>

				<div className="controllerSwiper py-1 flex items-center justify-center gap-3">
					<button className="prevBtn static w-10 h-10 cursor-pointer full-center">
						<ChevronLeft/>
					</button>
					<div className="swiper-pagination relative w-24 overflow-hidden flex items-center gap-2"></div>
					<button className="nextBtn static w-10 h-10 cursor-pointer full-center">
						<ChevronRight/>
					</button>
				</div>
			</div>
		</Suspense>
	);
}