import logo from "./logo.svg";

function App() {
	return (
		<div className="text-blue-300">
			<header className="flex flex-wrap gap-12 justify-around align-center p-4 bg-sky-950">
				<div className="flex flex-1 justify-center">
					<p className="text-purple-400 text-4xl font-bold">Magnitopic</p>
				</div>
				<div className="flex gap-12 align-middle justify-around flex-1 whitespace-nowrap">
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
				<div className="p-14 flex flex-row flex-1">
					<div className="flex flex-1 align-center">
						<img
							src={logo}
							alt="logo"
							className="rounded-full h-60 w-60"
						/>
					</div>
					<div className="flex flex-col flex-1 justify-center">
						<h1 className="text-5xl text-blue-300 font-bold">
							Hello, I'm Alex
						</h1>
						<p className="text-2xl text-blue-300">
							I'm a software developer and student at <span className="italic">42Madrid</span>
						</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-6 p-14 bg-gradient-to-b from-sky-950 to-blue-500 pt-20">
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">minishell</h1>
						<p>This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">webserv</h1>
						<p>This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">Rubber Ducky</h1>
						<p>This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.</p>
					</div>
					<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1">
						<h1 className="text-3xl">so_long</h1>
						<p>This project is about creating a simple shell. Yes, your own little bash. You will learn a lot about processes and file descriptors.</p>
						<img src="https://private-user-images.githubusercontent.com/21156058/245845457-eb5b36e7-1b97-4c00-8b05-8c77b104e46a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg0MzM3OTMsIm5iZiI6MTcwODQzMzQ5MywicGF0aCI6Ii8yMTE1NjA1OC8yNDU4NDU0NTctZWI1YjM2ZTctMWI5Ny00YzAwLThiMDUtOGM3N2IxMDRlNDZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIwVDEyNTEzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVhNGMyNTA2NzIzOGMxNmVjODRlYmU0MDQyOTA5MmFmMzRlZDM4NjUyMDU1ZDNlZGMxNjVhMDAyZTk4MDk5ZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.W1-DuDCVQSwusN81cGZOZ0MgYpS1Ltc7qLXrWR9jhTU" alt="" />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
