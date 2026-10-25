'use client';

export default function Footer() {
	return (
		<footer className="px-5 pt-15 pb-20 bg-zinc-800 text-white">
			<div className="container mx-auto grid gap-5 md:grid-cols-2 md:gap-10">
				<div className="left">
					<div className="logo flex items-center gap-4 mb-4">
						<div className="icon w-15 h-15 bg-purple-400"></div>
						<div className="desc">
							<h4 className="font-bold text-xl">JmoX</h4>
							<p>Find Your Perfect Keystroke</p>
						</div>
					</div>
					<div className="descBrand">
						<p className="">Mechanical keyboards, keycaps, and accessories to elevate your typing experience.</p>
					</div>
				</div>
				<div className="right">
					<div className="media grid gap-10 md:grid-cols-2 md:gap-5">
						<div className="box">
							<h5 className="font-bold uppercase mb-4">Explore</h5>
							<div className="linkExplore text-zinc-200">
								<a className="block" href="#">Shop Keyboards</a>
								<a className="block" href="#">Custom Keyboards</a>
								<a className="block" href="#">Keycaps</a>
								<a className="block" href="#">Switches</a>
							</div>
						</div>
						<div className="box">
							<h4 className="font-bold uppercase mb-4">Support</h4>
							<div className="linkExplore text-zinc-200">
								<a className="block" href="#">Shop Keyboards</a>
								<a className="block" href="#">Custom Keyboards</a>
								<a className="block" href="#">Keycaps</a>
								<a className="block" href="#">Switches</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}