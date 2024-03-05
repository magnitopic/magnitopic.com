import React, { useState } from "react";
import alaparic1 from "./img/alaparic.jpeg";
import alaparic2 from "./img/tierra.png";
import alaparic3 from "./img/spytf2.jpg";

function App() {
	const imgs = [alaparic1, alaparic2, alaparic3];
	const [currentImage, setCurrentImage] = useState(imgs[0]);

	const changeImage = () => {
		const currentIndex = imgs.indexOf(currentImage);
		const nextIndex = (currentIndex + 1) % imgs.length;
		setCurrentImage(imgs[nextIndex]);
	};

	return (
		<div className="text-blue-300">
			<header className="flex flex-wrap gap-12 justify-around align-center p-4 bg-sky-950">
				<div className="flex flex-1 justify-center">
					<p className="text-purple-400 text-4xl font-bold">
						Magnitopic
					</p>
				</div>
				<div className="flex gap-7 align-middle justify-around flex-1 whitespace-nowrap">
					<p className="text-blue-300 text-xl font-bold underline flex cursor-pointer">
						<a href="/#">About me</a>
					</p>
					<p className="text-blue-300 text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Projects</a>
					</p>
					<p className="text-blue-300 text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Activities</a>
					</p>
					<p className="text-blue-300 text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Contact</a>
					</p>
				</div>
			</header>
			<main className="flex bg-sky-950 flex-col">
				<div className="p-10 flex flex-row flex-1 flex-wrap">
					<div className="flex flex-1 align-center justify-center">
						<img
							src={currentImage}
							alt="alaparic"
							className="rounded-full h-60 w-60 object-cover object-top"
							onClick={changeImage}
						/>
					</div>
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-5xl text-blue-300 font-bold">
							Hello, I'm Alex
						</h1>
						<p className="text-2xl text-blue-300">
							I'm a software developer and student at{" "}
							<span className="italic">42Madrid</span>
						</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-6 p-14 bg-gradient-to-b from-sky-950 to-blue-500">
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">minishell</h1>
						<p>
							This project is about creating a simple shell. Yes,
							your own little bash. You will learn a lot about
							processes and file descriptors.
						</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">webserv</h1>
						<p>
							This project is about creating a simple shell. Yes,
							your own little bash. You will learn a lot about
							processes and file descriptors.
						</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">Rubber Ducky</h1>
						<p>
							This project is about creating a simple shell. Yes,
							your own little bash. You will learn a lot about
							processes and file descriptors.
						</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">so_long</h1>
						<p>
							This project is about creating a simple shell. Yes,
							your own little bash. You will learn a lot about
							processes and file descriptors.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
