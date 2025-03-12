import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	return (
		<div
			key={project.id}
			className="bg-opacity-20 backdrop-blur-md bg-blue-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-blue-500/20"
		>
			<div className="relative h-fit max-h-48 overflow-hidden flex justify-center items-center">
				<img
					src={project.image}
					alt={project.title}
					className="object-contain"
				/>
			</div>

			<div className="p-6">
				<div className="flex flex-col mb-6">
					<Link href={`/projects/${project.id}`} className="block">
						<h2 className="text-2xl mb-3 text-blue-200 hover:underline decoration-blue-500 decoration-2">
							{project.title}
						</h2>
					</Link>
					<p className="mb-4 text-gray-300">{project.description}</p>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, index) => (
							<span
								key={index}
								className="text-xs px-3 py-1 rounded-full bg-blue-900/50 text-blue-200 border border-blue-500/30"
							>
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className="flex justify-between items-center flex-col gap-3">
					<Link
						href={`/projects/${project.id}`}
						className="px-4 py-2 rounded bg-blue-500/20 text-blue-200 hover:bg-blue-500/40 transition-colors border border-blue-500/30 w-full text-center"
					>
						More about this project
						<i className="fa fa-arrow-right ml-2" />
					</Link>
					<Link
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 rounded bg-blue-500/20 text-blue-200 hover:bg-blue-500/40 transition-colors border border-blue-500/30 w-full text-center"
					>
						<i className="fa fa-github mr-2" />
						See project code on GitHub
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
