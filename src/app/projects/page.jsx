import ProjectCard from "../../components/ProjectCard";
import projects from "../../../public/content/projects/cards.json";

export const metadata = {
	title: "Projects",
};

export default function Projects() {
	return (
		<main className="max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen">
			{/* Page header */}
			<header className="mb-14">
				<p className="text-xs text-blue-400/70 font-mono tracking-[0.25em] uppercase mb-4" aria-hidden="true">
					My work
				</p>
				<h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
					Projects
				</h1>
				<p className="text-white/60 max-w-lg leading-relaxed">
					Some of the projects I've worked on, and are most proud of.
				</p>
			</header>

			{/* Semantic list so screen readers announce "X items" */}
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
				{projects.map((project) => (
					<li key={project.id}>
						<ProjectCard project={project} />
					</li>
				))}
			</ul>
		</main>
	);
}
