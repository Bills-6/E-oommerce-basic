'use client';


//  HEADER NAV TYPES ===============
type HeaderNavTypes = {
	padding?: string;
	heading?: string;
	path?: string;
}
export default function HeaderNav(
	{ padding, heading = 'page?' }
	:HeaderNavTypes
) {
	return (
		<header className={`collectionsHeaderNav bg-amber-200 pt-40 pb-10 rounded-bl-2xl rounded-br-2xl`}>
			<nav className="py-4 w-fit mx-auto mb-5">
				<ul className="pathUrl uppercase flex items-center gap-2">
					<li className="pathItem flex items-center gap-2">
						<a href="#home/">Home</a>
						<div className="hori text-xl">/</div>
					</li>
					<li className="pathItem flex items-center gap-2">
						<a href="#home/">Collections</a>
						<div className="hori text-xl">/</div>
					</li>
				</ul>
			</nav>

			<h1 className="text-2xl uppercase text-center font-semibold">{heading}</h1>
		</header>
	);
}