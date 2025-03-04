import React from "react";
import Link from 'next/link';


const Header = () => {
	return (
		<header className="flex flex-1 justify-around items-center flex-col">
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 justify-around flex-wrap">
				<h1 className="text-blue-600 text-3xl"><Link href="/">Magnitopic</Link></h1>
				<nav>
					<ul className="flex flex-wrap items-center justify-center gap-5">
						<div className="flex gap-5">
							<li className=""><Link href="/projects">Projects</Link></li>
							<li className=""><Link href="/contact">Contact</Link></li>
						</div>
						<div className="flex gap-5">
							<li className=""><Link href="/contact">Photography</Link></li>
							<li className=""><Link href="/blog">Blog</Link></li>
						</div>
					</ul>
				</nav>
			</section>
		</header>
	)
}

export default Header;
