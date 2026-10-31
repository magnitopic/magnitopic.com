"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, PixelGlobe } from "./ui";

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
	const [menuOpen, setMenuOpen] = useState(false);
	const headerRef = useRef(null);

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

	const isActive = (href) =>
		!href.startsWith("http") &&
		(pathname === href || pathname.startsWith(`${href}/`));

	const renderLink = ({ href, label, external }) => (
		<Link
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			aria-current={isActive(href) ? "page" : undefined}
			className={`text-sm transition-colors hover:text-plum ${
				isActive(href)
					? "text-plum underline underline-offset-[0.4em] decoration-1"
					: "text-ink"
			}`}
		>
			{label}
			{external && (
				<>
					<span aria-hidden="true"> ↗</span>
					<span className="sr-only"> (opens in new tab)</span>
				</>
			)}
		</Link>
	);

	return (
		<header ref={headerRef} className="border-b border-rule">
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>
			<Container className="grid h-16 grid-cols-12 items-center gap-x-6">
				<Link
					href="/"
					aria-label="Magnitopic — home"
					className="col-span-8 flex items-center gap-3 md:col-span-3"
				>
					<PixelGlobe size={32} />
					<span className="text-sm">Alejandro Aparicio</span>
				</Link>

				<nav
					aria-label="Main navigation"
					className="col-span-9 hidden md:block"
				>
					<ul className="flex items-center gap-8" role="list">
						{navLinks.map((l) => (
							<li key={l.href}>{renderLink(l)}</li>
						))}
					</ul>
				</nav>

				<button
					className="col-span-4 justify-self-end text-sm md:hidden"
					onClick={() => setMenuOpen((v) => !v)}
					aria-expanded={menuOpen}
					aria-controls="mobile-nav"
				>
					{menuOpen ? "Close" : "Menu"}
				</button>
			</Container>

			<nav
				id="mobile-nav"
				aria-label="Mobile navigation"
				hidden={!menuOpen}
				className={`border-t border-rule md:hidden ${menuOpen ? "" : "hidden"}`}
			>
				<Container as="ul" className="space-y-4 py-5" role="list">
					{navLinks.map((l) => (
						<li key={l.href} className="text-2xl">
							{renderLink(l)}
						</li>
					))}
				</Container>
			</nav>
		</header>
	);
};

export default Header;
