"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{
		href: "https://www.flickr.com/photos/magnitopic/",
		label: "Photography",
		external: true,
	},
	{ href: "/contact", label: "Contact" },
];

const Header = () => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	// Close mobile menu when clicking outside the header
	useEffect(() => {
		if (!menuOpen) return;
		const handleClickOutside = (e) => {
			if (headerRef.current && !headerRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [menuOpen]);

	return (
		<header
			ref={headerRef}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-[#0C071E]/85 backdrop-blur-xl border-b border-white/[0.05]"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					aria-label="Magnitopic — home"
					className="font-mono text-sm text-blue-300/80 hover:text-blue-200 transition-colors"
				>
					magnitopic<span className="text-blue-500/70" aria-hidden="true">.com</span>
				</Link>

				{/* Desktop nav */}
				<nav aria-label="Main navigation" className="hidden md:block">
					<ul className="flex items-center gap-7" role="list">
						{navLinks.map(({ href, label, external }) => (
							<li key={href}>
								<Link
									href={href}
									target={external ? "_blank" : undefined}
									rel={external ? "noopener noreferrer" : undefined}
									aria-current={pathname === href ? "page" : undefined}
									className={`text-sm transition-colors ${
										pathname === href
											? "text-white"
											: "text-white/55 hover:text-white/90"
									}`}
								>
									{label}
									{external && (
										<span className="sr-only"> (opens in new tab)</span>
									)}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile menu toggle */}
				<button
					className="md:hidden text-white/55 hover:text-white transition-colors p-1"
					onClick={() => setMenuOpen((v) => !v)}
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
				>
					<div className="w-5 flex flex-col gap-1.5" aria-hidden="true">
						<span
							className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
						/>
						<span
							className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
						/>
						<span
							className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
						/>
					</div>
				</button>
			</div>

			{/* Mobile dropdown */}
			<nav
				id="mobile-nav"
				aria-label="Mobile navigation"
				hidden={!menuOpen}
				className={`md:hidden bg-[#0C071E]/95 backdrop-blur-xl border-b border-white/[0.05] px-6 pb-5 pt-2 ${menuOpen ? "" : "hidden"}`}
			>
				<ul className="flex flex-col gap-4" role="list">
					{navLinks.map(({ href, label, external }) => (
						<li key={href}>
							<Link
								href={href}
								target={external ? "_blank" : undefined}
								rel={external ? "noopener noreferrer" : undefined}
								aria-current={pathname === href ? "page" : undefined}
								className={`text-sm transition-colors ${
									pathname === href ? "text-white" : "text-white/55"
								}`}
							>
								{label}
								{external && (
									<span className="sr-only"> (opens in new tab)</span>
								)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
