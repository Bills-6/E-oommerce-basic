'use client';

import { Check } from "lucide-react";
import EntryTitle from "./entryTitle";

// data
import { socialMediaData } from "../lib/mappings/socialMedia";
import { IconType } from "react-icons";

interface LiTypes {
	href?: string;
	Icon: IconType;
	message?: string;
}
function LiSocial(
	{ href, Icon, message }: LiTypes
) {
	return (
		<li className="border-2 h-14 rounded-md overflow-hidden mb-3 hover-shadow-blue">
			<a className="flex items-center gap-3 h-full px-4" href={href}>
				<div className="icon w-10 h-10 text-2xl full-center">
					{Icon && <Icon />}
				</div>
				<p className="description grow">
					{message}
				</p>
			</a>
		</li>
	);
}

export default function NewSteller() {
	return (
		<section className="py-20 px-5 bg-purple-200">
			<div className="container mx-auto grid gap-4">
				<div className="content">
					<EntryTitle value="Newsletter"/>

					<p className="mb-5">Get first dibs on new keyboard drops, exclusive offers, and inspiration for your dream setup.</p>
					<ul className="mb-5">
						<li className="flex items-center gap-3 mb-2">
							<div className="icon w-10 h-10 text-green-400 bg-zinc-200 rounded-md font-extrabold full-center">
								<Check />
							</div>
							<span>Early access to new releases</span>
						</li>
						<li className="flex items-center gap-3">
							<div className="icon w-10 h-10 text-green-400 bg-zinc-200 rounded-md font-extrabold full-center">
								<Check />
							</div>
							<span>Special subscriber offers</span>
						</li>
					</ul>

					<form className="subscribeWrapper flex flex-col gap-4">
						<input className="bg-zinc-200 h-15 rounded-md px-5" placeholder="Enter your email address" type="email" name="subscribeMail" />

						<button className="bg-blue-500 text-white text-lg tracking-wide h-15 rounded-md hover-button-primary cursor-pointer" type="button">Subscribe</button>
					</form>
				</div>
				<div className="social">
					<EntryTitle value="Join us on Social Media"/>
					<ul className="pt-5">
						{socialMediaData.map((media) => (
							<LiSocial
								key={media.name}
								Icon={media.icon}
								message={media.message}
								href={media.href}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}