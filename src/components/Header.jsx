import React from "react";
import Link from 'next/link';


const Header = () => {
	return (
		<header className="flex flex-1 justify-around items-center flex-col absolute top-0 bg-transparent backdrop-blur-3xl z-10 w-full">
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 justify-around flex-wrap items-center flex-col md:flex-row">
				<p className="text-blue-200 text-3xl"><Link href="/">Magnitopic</Link></p>
				<nav>
					<ul className="flex flex-wrap items-center justify-center gap-5">
						<div className="flex gap-5">
							<li className="hover:underline decoration-blue-500 decoration-2"><Link href="/projects">Projects</Link></li>
							<li className="hover:underline decoration-blue-500 decoration-2"><Link href="/contact">Contact</Link></li>
						</div>
						<div className="flex gap-5">
							<li className="hover:underline decoration-blue-500 decoration-2"><Link href="/contact">Photography</Link></li>
							<li className="hover:underline decoration-blue-500 decoration-2"><Link href="/blog">Blog</Link></li>
						</div>
					</ul>
				</nav>
			</section>
		</header>
	)
}

export default Header;
