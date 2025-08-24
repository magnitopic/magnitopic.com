import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import { SocialsLinkButton } from "../components/ui";

export default function Home() {
	return (
		<>
			<main className="min-h-screen relative overflow-hidden items-center">
				<section className="w-full px-4 flex-grow flex gap-5 flex-wrap min-h-screen items-center justify-center bg-image-[url('https://burakdogan.vercel.app/img/gradients/1.png')] bg-cover">
					<div className="flex flex-col md:gap-5 gap-10 items-center">
						<div>
							<h1 className="md:text-5xl text-4xl max-w-xl text-center mb-3">
								{"Hi, I'm "}
								<span className="text-blue-300">
									Alex Aparicio
								</span>{" "}
								<span className="">|</span>{" "}
								<span className="underline decoration-blue-500 decoration-2">
									Software developer
								</span>
							</h1>
							<h2 className="text-xl text-center">
								aka{" "}
								<span className="text-blue-300">
									Magnitopic
								</span>
							</h2>
						</div>
						<div className="flex flex-row gap-5 text-3xl w-fit">
							<SocialsLinkButton
								link="https://github.com/magnitopic"
								icon="fa fa-github"
							/>
							<SocialsLinkButton
								link="https://www.linkedin.com/in/magnitopic/"
								icon="fa fa-linkedin"
							/>
							<SocialsLinkButton
								link="https://twitter.com/magnitopic"
								icon="fa fa-twitter"
							/>
						</div>
						<div className="text-center">
							<p>
								I love creating, learning and exploring
								technology 👨‍💻
							</p>
							<p>
								<span className="text-blue-200 mt-10">
									Web Development • Artificial Intelligence
								</span>
							</p>
						</div>
					</div>
				</section>
				{/* <section className="w-full px-4 flex-grow flex gap-5 flex-wrap min-h-screen items-center justify-center bg-gradient-to-t from-0% to-slate-900">
					<h1 className="text-5xl">Skills</h1>
				</section> */}
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
