import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	return (
		<article
			aria-labelledby={`project-${project.id}-title`}
			className="group p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-950/15 transition-all duration-300 flex flex-col"
		>
			{project.image && (
				<div className="relative h-36 overflow-hidden rounded-lg mb-5 bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
					<img
						src={project.image}
						alt={`${project.title} preview`}
						className="w-full h-full object-contain p-3 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
					/>
				</div>
			)}

			{/* Tags — decorative, skip for assistive tech */}
			<div className="flex flex-wrap gap-1.5 mb-3" aria-hidden="true">
				{project.tags.slice(0, 4).map((tag) => (
					<span key={tag} className="text-[10px] text-blue-400/60 font-mono">
						#{tag}
					</span>
				))}
			</div>

			<h2
				id={`project-${project.id}-title`}
				className="text-base font-medium text-white/90 mb-2 group-hover:text-white transition-colors"
			>
				{project.title}
			</h2>

			<p className="text-sm text-white/60 leading-relaxed flex-1 line-clamp-3 mb-5">
				{project.description}
			</p>

			<div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${project.title} source code on GitHub (opens in new tab)`}
					className="text-xs font-mono text-blue-400/70 hover:text-blue-300 transition-colors inline-flex items-center gap-1.5"
				>
					<i className="fa fa-github text-sm" aria-hidden="true" />
					GitHub
				</a>
				<Link
					href={`/projects/${project.id}`}
					aria-label={`View details for ${project.title}`}
					className="text-xs font-mono text-white/55 hover:text-white/85 transition-colors"
				>
					Details
					<span aria-hidden="true"> →</span>
				</Link>
			</div>
		</article>
	);
};

export default ProjectCard;
