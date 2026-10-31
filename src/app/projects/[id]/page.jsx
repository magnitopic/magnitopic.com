import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui";
import projects from "../../../../public/content/projects/cards.json";

export async function generateStaticParams() {
	return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
	const { id } = await params;
	const project = projects.find((p) => p.id === id);
	return { title: project?.title ?? "Project" };
}

export default async function ProjectDetail({ params }) {
	const { id } = await params;
	const index = projects.findIndex((p) => p.id === id);
	if (index < 0) notFound();
	const project = projects[index];

	return (
		<main>
			<Container className="pt-8">
				<Link href="/projects" className="link text-sm">
					<span aria-hidden="true">← </span>Projects
				</Link>
			</Container>

			<Container
				as="article"
				className="grid grid-cols-1 gap-x-6 gap-y-10 pb-12 pt-12 md:grid-cols-12 md:pt-20"
			>
				<div className="md:col-span-3 md:flex md:flex-col md:justify-between">
					<p className="num text-graphite">
						{String(index + 1).padStart(2, "0")} /{" "}
						{String(projects.length).padStart(2, "0")}
					</p>
				</div>
				<h1 className="display md:col-span-9 font-medium break-words">
					{project.title}
				</h1>

				<aside
					aria-label="Project details"
					className="space-y-8 text-sm md:col-span-3"
				>
					<div>
						<h2 className="text-graphite">Stack</h2>
						<ul className="mt-1 list-none" aria-label="Project technologies">
							{project.tags.map((tag) => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className="text-graphite">Source</h2>
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="link mt-1 inline-block"
							aria-label={`${project.title} source code on GitHub (opens in new tab)`}
						>
							GitHub<span aria-hidden="true"> ↗</span>
						</a>
					</div>
				</aside>

				<div className="space-y-10 md:col-span-9">
					{project.image && (
						<div className="border border-rule bg-paper-2 p-4 md:p-8">
							<img
								src={project.image}
								alt={`${project.title} preview`}
								className="mx-auto h-auto max-h-[32rem] w-auto max-w-full"
							/>
						</div>
					)}
					<p className="max-w-[40rem] text-xl leading-snug">
						{project.description}
					</p>
				</div>
			</Container>
		</main>
	);
}
