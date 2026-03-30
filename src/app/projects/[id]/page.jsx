import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import { notFound } from "next/navigation";
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
	const project = projects.find((p) => p.id === id);
	if (!project) notFound();

	return (
		<main className="max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen">
			{/* Back navigation */}
			<Link
				href="/projects"
				aria-label="Back to all projects"
				className="inline-flex items-center gap-2 text-xs font-mono text-white/55 hover:text-blue-300 transition-colors mb-14"
			>
				<span aria-hidden="true">←</span>
				Back to projects
			</Link>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
				{/* Main content */}
				<div className="lg:col-span-2">
					{/* Tags */}
					<ul
						aria-label="Project technologies"
						className="flex flex-wrap gap-2 mb-6 list-none"
					>
						{project.tags.map((tag) => (
							<li
								key={tag}
								className="text-xs px-3 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-white/70 font-mono"
							>
								{tag}
							</li>
						))}
					</ul>

					<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
						{project.title}
					</h1>

					<p className="text-white/65 leading-relaxed text-lg">
						{project.description}
					</p>
				</div>

				{/* Sidebar */}
				<aside aria-label="Project links and preview">
					<div className="space-y-4">
						{project.image && (
							<div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden p-4">
								<img
									src={project.image}
									alt={`${project.title} preview screenshot`}
									className="w-full h-auto object-contain"
								/>
							</div>
						)}

						<div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 space-y-4">
							<p className="text-xs font-mono text-white/35 uppercase tracking-widest">
								Links
							</p>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${project.title} source code on GitHub (opens in new tab)`}
								className="flex items-center gap-2.5 text-sm text-blue-400/80 hover:text-blue-300 transition-colors font-mono"
							>
								<i className="fa fa-github text-base" aria-hidden="true" />
								View on GitHub
							</a>
						</div>
					</div>
				</aside>
			</div>
		</main>
	);
}
