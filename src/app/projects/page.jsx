import ProjectCard from "../../components/ProjectCard";
import projects from "../../../public/content/projects/cards.json";

export default function Projects() {
	return (
		<main className="flex flex-1 justify-around items-center flex-col z-10 relative">
			<section className="container max-w-7xl px-4 pt-32 pb-16">
				<h1 className="text-5xl mb-8 text-center md:text-left">
					<span className="text-blue-300">Projects</span>
				</h1>
				<p className="text-xl mb-12 max-w-3xl text-center md:text-left">
					Here are some of the projects I've worked on. Click on a
					project to learn more about it. You can also view the
					project code on GitHub.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>
		</main>
	);
}
