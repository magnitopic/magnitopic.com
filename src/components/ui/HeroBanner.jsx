"use client";
import React from "react";
import { usePathname } from "next/navigation";

const HeroBanner = ({ children }) => {
	const pathname = usePathname();
	const isHome = pathname === "/";
	return (
		<section
			className={`${
				isHome ? "h-screen" : "h-60"
			} relative px-4 flex-grow flex gap-5 w-full flex-wrap items-center justify-center`}
		>
			<div
				className="absolute inset-0 w-full h-full bg-[url(/img/main-background.png)] bg-cover -z-1"
				style={{
					mask: "linear-gradient(0deg,transparent 10%,rgba(0,0,0,.1),rgba(0,0,0,.5))",
				}}
			></div>
			<div className="my-28">{children}</div>
		</section>
	);
};

export default HeroBanner;
