"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();
	const isHome = pathname === "/";

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`flex justify-around items-center flex-col ${
				isHome && !isScrolled ? "h-24 py-4" : "h-16 py-2"
			} fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out bg-transparent backdrop-blur-3xl z-50 w-full`}
		>
			<section className="container max-w-7xl px-4 flex-grow flex gap-5 justify-around flex-wrap items-center flex-col md:flex-row">
				<p className="text-blue-200 text-3xl">
					<Link href="/">Magnitopic</Link>
				</p>
				<nav>
					<ul className="flex flex-wrap items-center justify-center gap-5">
						<div className="flex gap-5">
							<li className="hover:underline decoration-blue-500 decoration-2">
								<Link href="/projects">Projects</Link>
							</li>
							<li className="hover:underline decoration-blue-500 decoration-2">
								<Link href="/contact">Contact</Link>
							</li>
						</div>
						<div className="flex gap-5">
							<li className="hover:underline decoration-blue-500 decoration-2">
								<Link
									href="https://www.flickr.com/photos/magnitopic/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Photography
								</Link>
							</li>
							{/* <li className="hover:underline decoration-blue-500 decoration-2">
								<Link href="/blog">Blog</Link>
							</li> */}
						</div>
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Header;
