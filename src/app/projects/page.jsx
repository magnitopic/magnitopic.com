import ProjectCard from "../../components/ProjectCard";
import { Container } from "../../components/ui";
import projects from "../../../public/content/projects/cards.json";

export const metadata = {
	title: "Projects",
};

export default function Projects() {
	return (
		<main>
			<Container
				as="header"
				className="grid grid-cols-1 gap-x-6 gap-y-6 pb-16 pt-12 md:grid-cols-12 md:pb-24 md:pt-20"
			>
				<h1 className="display font-medium md:col-span-9">Projects</h1>
				<p className="max-w-xs text-lg leading-snug text-graphite md:col-span-3 md:self-end">
					Some of the projects I&apos;ve worked on, and am most proud
					of.
				</p>
			</Container>

			<div className="border-t border-rule">
				<Container>
					<ol
						aria-label="Projects"
						className="grid list-none grid-cols-1 gap-x-6 gap-y-14 py-12 sm:grid-cols-2 lg:grid-cols-3 md:py-20"
					>
						{projects.map((project, i) => (
							<li key={project.id}>
								<ProjectCard project={project} index={i} />
							</li>
						))}
					</ol>
				</Container>
			</div>
		</main>
	);
}
