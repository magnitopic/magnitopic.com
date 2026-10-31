import Link from "next/link";

/** A contact-sheet cell: framed image, numbered caption. */
const ProjectCard = ({ project, index }) => (
	<article aria-labelledby={`project-${project.id}-title`} className="group">
		<Link
			href={`/projects/${project.id}`}
			aria-label={`View details for ${project.title}`}
			className="block"
		>
			<div className="flex aspect-[4/3] items-center justify-center overflow-hidden border border-rule bg-paper-2">
				{project.image && (
					<img
						src={project.image}
						alt=""
						className="size-full object-contain p-4 grayscale transition-[filter] duration-150 group-hover:grayscale-0 group-focus-within:grayscale-0"
					/>
				)}
			</div>
		</Link>

		<div className="mt-3 grid grid-cols-6 gap-x-4">
			<span className="num col-span-1 pt-1 text-graphite">
				{String(index + 1).padStart(2, "0")}
			</span>
			<div className="col-span-5">
				<h2
					id={`project-${project.id}-title`}
					className="text-xl leading-tight"
				>
					{project.title}
				</h2>
				<p className="num mt-1 text-graphite">
					{project.tags.slice(0, 4).join(", ")}
				</p>
				<p className="mt-3 text-sm">
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="link"
						aria-label={`${project.title} source code on GitHub (opens in new tab)`}
					>
						GitHub<span aria-hidden="true"> ↗</span>
					</a>
				</p>
			</div>
		</div>
	</article>
);

export default ProjectCard;
