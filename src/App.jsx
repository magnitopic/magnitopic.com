import React, { useState } from "react";
import Card from "./components/Card.jsx";
import CardVid from "./components/CardVid.jsx";
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
		<div className="text-white bg-blue-400">
			<header className="flex flex-wrap gap-12 justify-around align-center p-4 bg-sky-950">
				<div className="flex flex-1 justify-center">
					<p className="text-purple-300 text-4xl font-bold">
						Magnitopic
					</p>
				</div>
				<div className="flex gap-7 align-middle justify-around flex-1 whitespace-nowrap">
					<p className="text-xl font-bold underline flex cursor-pointer">
						<a href="/#">About me</a>
					</p>
					<p className="text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Projects</a>
					</p>
					<p className="text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Activities</a>
					</p>
					<p className="text-xl font-bold underline flex cursor-pointer">
						<a href="/#">Contact</a>
					</p>
				</div>
			</header>
			<main className="flex bg-sky-950 flex-col">
				<div className="p-10 flex flex-row flex-1 flex-wrap gap-6 justify-center">
					<div className="flex flex-1 align-center justify-center min-w-60">
						<img
							src={currentImage}
							alt="alaparic"
							className="rounded-full h-60 w-60 object-cover object-top"
							onClick={changeImage}
						/>
					</div>
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-5xl text-white font-bold text-purple-300">
							Hello, I'm Alex
						</h1>
						<p className="text-2xl ">
							I'm a software developer and student at 42Madrid
						</p>
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-14 p-14 bg-gradient-to-b from-sky-950 to-blue-500">
					<Card
						title="Minishell"
						text="This project is about creating a simple shell. Yes,
							your own little bash. You will learn a lot about
							processes and file descriptors."
						image={alaparic3}
					/>
					<Card
						title="Rubber Ducky"
						text="Cybersecurity demonstration. Using a Rubber Ducky to change the DNS of a victim and redirect to a fake login form."
						image={alaparic3}
					/>
					<Card
						title="Cub3d"
						text="Graphics project. Making a 3D game using ray tracing and programed in C. Like retro shooter games"
						image={alaparic3}
					/>
					<Card
						title="Webserv"
						text="Web server with configurable behaviour. Implemented with non-blocking sockets, I/O Multiplexing and without threads."
						image={alaparic3}
					/>
					<CardVid
						title="Push-Swap"
						text="Sort data on two stacks, with a limited set of instructions, using the lowest possible number of actions. Develop a sorting algorithm."
						video="https://private-user-images.githubusercontent.com/21156058/247170625-a18ae060-f8a7-4b4e-a356-a4eb3c4e3793.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTEwMjYzOTksIm5iZiI6MTcxMTAyNjA5OSwicGF0aCI6Ii8yMTE1NjA1OC8yNDcxNzA2MjUtYTE4YWUwNjAtZjhhNy00YjRlLWEzNTYtYTRlYjNjNGUzNzkzLm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzIxVDEzMDEzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAxMmU0ZmMwMGFjYjhlOWRjMDRkNmVhODVkMGYxOWQyYzEzZDMwMDViZDc3ZjY1YjYzY2EzOTM5N2RhOWIwMjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.IygtFDq2U3FmASEqrBcJNXfcygjqggc72p4PSmSgu1g"
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
