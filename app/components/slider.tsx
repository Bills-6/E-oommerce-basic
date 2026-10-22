'use client';

import { Suspense } from "react";

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
	return (
		<Suspense fallback={<div className="p-5 bg-red-300"></div>}>
		<div className="w-full max-w-4xl py-10 pb-5">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={20}
				slidesPerView={1}
				navigation={{
					prevEl: '.prevButtonHitbox',
					nextEl: '.nextButtonHitbox',
				}}
				pagination={{ el: '.swiper-preview-pagination', clickable: true, type: 'bullets' }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop={true}
				className="rounded-lg overflow-hidden h-64 bg-gray-100">

				<SwiperSlide className="flex bg-blue-300"/>
				<SwiperSlide className="flex bg-purple-300"/>
				<SwiperSlide className="flex bg-red-300"/>
				<SwiperSlide className="flex bg-yellow-300"/>
			</Swiper>

			<div className="descriptionMobile py-4 px-5 bg-sky-300">
				<h2 className="productName text-center font-bold text-2xl mb-3">Keyboard Zincya 32</h2>
				<p className="productDescription text-center mb-6">16 Keys+3 Knobs VIA programmable RGB Numpad with Hot-swappable PCB</p>
				<button className="detailProductPage mx-auto full-center bg-white font-semibold h-13 px-10 rounded-md shadow-md mb-6" type="button">Shop Now</button>

				<div className="controllerSwiper flex items-center gap-4 mx-auto w-fit">
					<button className="prevButtonHitbox w-10 h-10 bg-red-200 full-center"></button>
					{/* pagination */}
					<div className="swiper-preview-pagination relative w-24 overflow-hidden flx items-center gap-2"></div>
					<button className="nextButtonHitbox w-10 h-10 bg-red-200 full-center"></button>
				</div>
			</div>
		</div>
		</Suspense>
	);
}