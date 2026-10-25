'use client';

import EntryTitle from "./entryTitle";

import { FaInstagram, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function AboutPage() {
	return (
		<section className="py-15 bg-amber-100 px-5">
			<div className="container mx-auto">
				<div className="aboutWrapper grid md:grid-cols-2 gap-5 lg:gap-20">
				<div className="aboutBanner h-64 bg-zinc-300 rounded-md shadow-md"></div>
				<div className="aboutContent">
					<EntryTitle value="About Jmox"/>
					<p className="md:text-lg lg:text-2xl mb-5">We believe your everyday tools should feel as unique as you are. From satisfying sounds to thoughtful designs, every detail is made to bring a little more joy to your desk.</p>

					{/* media */}
					<div className="flex items-center gap-3">
						<a className="w-15 h-15 full-center bg-zinc-700 rounded-md shadow-md hover-button-primary text-white font-semibold" href="#">
							<FaInstagram className="text-3xl" />
						</a>
						<a className="w-15 h-15 full-center bg-zinc-700 rounded-md shadow-md hover-button-primary text-white font-semibold" href="#">
							<FaWhatsapp className="text-3xl" />
						</a>
						<a className="w-15 h-15 full-center bg-zinc-700 rounded-md shadow-md hover-button-primary text-white font-semibold" href="#">
							<FaTwitter className="text-3xl" />
						</a>
						<a className="w-15 h-15 full-center bg-zinc-700 rounded-md shadow-md hover-button-primary text-white font-semibold" href="#">
							<FaTiktok className="text-3xl" />
						</a>
					</div>
				</div>
			</div>
			</div>
		</section>
	);
}