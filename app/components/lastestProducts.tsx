'use client';

import { Suspense } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// component
import { ChevronLeft, ChevronRight } from "lucide-react";
import EntryTitle from "./entryTitle";
import ViewAll from "./base/viewAll";

export default function LastestProducts() {
	return (
		<Suspense fallback={<div className="p-5 bg-red-300"></div>}>
			<div className="lastestProductContainer p-5 md:hidden ">
				<div className="flex items-center justify-between mb-6">
					<EntryTitle value="Lastest"/>
					<ViewAll href="#lastest" />
				</div>
				
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
					className="swiper-lastest overflow-hidden h-64 mb-5"
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

			<div className="lastestProductDesktop hidden md:block p-5 bg-zinc-300">
				<div className="container mx-auto">
					<EntryTitle value="Lastest" />
				<div className="productCard grid grid-cols-3 gap-4">
					<article className="productLastest h-32 bg-red-500"></article>
					<article className="productLastest h-32 bg-red-500"></article>
					<article className="productLastest h-32 bg-red-500"></article>
					<article className="productLastest h-32 bg-red-500"></article>
					<article className="productLastest h-32 bg-red-500"></article>
					<article className="productLastest h-32 bg-red-500"></article>
				</div>
				</div>
			</div>
		</Suspense>
	);
}