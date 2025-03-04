
export default function Home() {
	return (
		<main className="flex flex-1 justify-around items-center flex-col">
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 justify-around flex-wrap">
				<div>
					<h1 className="text-5xl">
						Hi, I'm <span>Alex Aparicio</span> <span className="">|</span> Software developer
					</h1>
					<h2 className="text-xl">aka Magnitopic</h2>
				</div>
			</section>
			<section className="container max-w-7xl my-10 px-4 flex-grow flex gap-5 flex-wrap">
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
			</section>
		</main>
	);
}
