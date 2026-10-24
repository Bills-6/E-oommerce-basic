'use client';

import { Suspense } from "react";

import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Slider() {
	return (
		<Suspense fallback={<div className="p-5 bg-red-300"></div>}>
		<div className="w-full max-w-4xl md:max-w-none py-10 pb-5 lg:relative">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				navigation={{
					prevEl: '.prevButtonHitbox',
					nextEl: '.nextButtonHitbox',
				}}
				pagination={{
					el: '.swiper-preview-pagination',
					clickable: true, type: 'bullets' }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop={true}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 1,
						spaceBetween: 0,
					}
				}}
				className="swiperContainer rounded-lg overflow-hidden w-full h-64 lg:h-[600px] bg-pink-100">

				<SwiperSlide className="flex bg-blue-300 md:relative">

					<div className="descriptionProductContainer container hidden lg:block absolute top-1/2 -translate-y-1/2 p-5 left-1/2 -translate-x-1/2">
						<h2 className="productName font-bold text-5xl mb-3 text-shadow-[-7px_10px_5px_rgba(0,0,0,0.5)]">Keyboard 
							
							Zincya 32</h2>
						<p className="productDescription mb-10 text-xl max-w-1/2">16 Keys+3 Knobs VIA programmable RGB Numpad with Hot-swappable PCB</p>

						<button className="detailProductPage full-center bg-white font-semibold h-13 px-10 rounded-md shadow-md mb-6 hover:bg-zinc-700 hover:border-4 hover:border-zinc-600 hover:text-white transition-all cursor-pointer" type="button">Shop Now</button>
					</div>
				</SwiperSlide>

				<SwiperSlide className="flex bg-blue-300 md:relative">

					<div className="descriptionProductContainer container hidden lg:block absolute top-1/2 -translate-y-1/2 p-5 left-1/2 -translate-x-1/2">
						<h2 className="productName font-bold text-5xl mb-3 text-shadow-[-7px_10px_5px_rgba(0,0,0,0.5)]">Keyboard 
							
							Zincya 32</h2>
						<p className="productDescription mb-10 text-xl max-w-1/2">16 Keys+3 Knobs VIA programmable RGB Numpad with Hot-swappable PCB</p>

						<button className="detailProductPage full-center bg-white font-semibold h-13 px-10 rounded-md shadow-md mb-6 hover:bg-zinc-700 hover:border-4 hover:border-zinc-600 hover:text-white transition-all cursor-pointer" type="button">Shop Now</button>
					</div>
				</SwiperSlide>

			</Swiper>

			<div className="descriptionMobile py-4 px-5 bg-sky-300 lg:hidden">
				<p className="productDescription text-center mb-6">16 Keys+3 Knobs VIA programmable RGB Numpad with Hot-swappable PCB</p>
				<button className="detailProductPage mx-auto full-center bg-white font-semibold h-13 px-10 rounded-md shadow-md mb-6" type="button">Shop Now</button>

				<div className="controllerSwiper flex items-center justify-center w-full gap-4">
					<button className="prevButtonHitbox w-10 h-10 full-center">
						<ChevronLeft/>
					</button>
					{/* pagination */}
					<div className="swiper-preview-pagination w-24 overflow-hidden flex items-center gap-2"></div>
					<button className="nextButtonHitbox w-10 h-10 full-center">
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
		</Suspense>
	);
}