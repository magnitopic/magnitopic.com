import BgCanvas from "../components/BgCanvas";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<BgCanvas></BgCanvas>
			<main className="flex flex-1 justify-around items-center flex-col z-10 relative">
				<section className="container max-w-7xl px-4 flex-grow flex gap-5 justify-around flex-wrap min-h-screen items-center">
					<div className="flex flex-col md:gap-5 gap-10 items-center md:items-start">
						<div>
							<h1 className="md:text-5xl text-4xl max-w-xl md:text-start text-center mb-3">
								Hi, I'm{" "}
								<span className="text-blue-300">
									Alex Aparicio
								</span>{" "}
								<span className="">|</span>{" "}
								<span className="underline decoration-blue-500 decoration-2">
									Software developer
								</span>
							</h1>
							<h2 className="text-xl md:text-start text-center">
								aka{" "}
								<span className="text-blue-300">
									Magnitopic
								</span>
							</h2>
						</div>
						<div className="flex flex-row gap-5 text-3xl w-fit">
							<Link
								href="https://www.linkedin.com/in/magnitopic/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-linkedin hover:text-blue-300 hover:scale-110" />
							</Link>
							<Link
								href="https://github.com/magnitopic"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-github hover:text-blue-300 hover:scale-110" />
							</Link>
							<Link
								href="https://www.youtube.com/@Magnitopic"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-youtube-play hover:text-blue-300 hover:scale-110" />
							</Link>
						</div>
						<div className="text-center md:text-start">
							<p>
								I love creating, learning and exploring
								technology 👨‍💻
							</p>
							<p>
								<span className="text-blue-200">
									Web Development
								</span>{" "}
								-{" "}
								<span className="text-blue-200">
									Artificial Intelligence
								</span>
							</p>
						</div>
					</div>
				</section>
				{/* <section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 flex-wrap">
				<div>
					<h1 className="text-5xl">
						Skills
					</h1>
				</div>
			</section>
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 flex-wrap">
				<div>
					<h1 className="text-5xl">
						Experience
					</h1>
				</div>
			</section>
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 flex-wrap">
				<div>
					<h1 className="text-5xl">
						Projects
					</h1>
				</div>
			</section>
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 flex-wrap">
				<div>
					<h1 className="text-5xl">
						Education
					</h1>
				</div>
			</section> */}
			</main>
		</>
	);
}
