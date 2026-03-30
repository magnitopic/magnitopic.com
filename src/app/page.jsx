import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import { SocialsLinkButton } from "../components/ui";
import projects from "../../public/content/projects/cards.json";

// ── Data ──────────────────────────────────────────────────────

const experience = [
	{
		year: "2026",
		role: "Data Engineer",
		company: "Quantori",
		period: "Feb 2026 – Present",
		current: true,
		description:
			"Full-time position delivering data engineering solutions in the medical sector, where data integrity and compliance are critical.",
		tags: ["Databricks", "Apache Spark", "SQL", "Python"],
	},
	{
		year: "2024",
		role: "FullStack Developer",
		company: "Telefónica — Chief Digital Office",
		period: "Jul 2024 – Jun 2025",
		current: false,
		description:
			"Development of web pages for company services with a custom CMS. Led migration from legacy systems to a React & REST API architecture.",
		tags: ["React", "REST APIs", "JavaScript", "TypeScript"],
		internship: true,
	},
	{
		year: "2024",
		role: "BIM Web Developer",
		company: "INECO",
		period: "Feb 2024 – Jun 2024",
		current: false,
		description:
			"Internship — development of internal tools and web pages using Python, JavaScript and Java.",
		tags: ["Python", "JavaScript", "Java"],
		internship: true,
	},
];

const skills = [
	{
		category: "Data & Big Data",
		items: ["Databricks", "Apache Spark", "Apache Kafka", "Apache NiFi", "SQL"],
	},
	{
		category: "Languages",
		items: ["Python", "C / C++", "Java / Kotlin", "JavaScript", "TypeScript"],
	},
	{
		category: "Cloud & Infra",
		items: ["AWS", "Docker", "Kubernetes", "GitHub Actions / CI·CD"],
	},
	{
		category: "Full-Stack",
		items: ["React", "Next.js", "Node.js", "Django", "FastAPI"],
	},
	{
		category: "Domains",
		items: ["Data Engineering", "AI / ML", "Full-Stack Development"],
	},
];

// ── Page ──────────────────────────────────────────────────────

export default function Home() {
	return (
		<main className="min-h-screen overflow-x-hidden">

			{/* Decorative background — hidden from assistive tech */}
			<div
				aria-hidden="true"
				className="fixed inset-0 -z-10 opacity-[0.035]"
				style={{
					backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
					backgroundSize: "32px 32px",
				}}
			/>
			<div aria-hidden="true" className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-3xl pointer-events-none -z-10" />
			<div aria-hidden="true" className="fixed bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

			{/* ── 00 · Hero ─────────────────────────────────────── */}
			<section
				className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 max-w-5xl mx-auto"
				aria-labelledby="hero-name"
			>
				<div className="relative z-10">
					<p className="text-xs text-blue-400/70 font-mono tracking-[0.25em] uppercase mb-6" aria-hidden="true">
						Hi, I&apos;m
					</p>

					<h1 id="hero-name" className="text-7xl md:text-9xl font-bold leading-[0.9] mb-6 pb-2">
						<span className="bg-gradient-to-br from-white via-white to-blue-200 bg-clip-text text-transparent">
							Alejandro
						</span>
						<br />
						<span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
							Aparicio
						</span>
					</h1>

					<div className="flex items-center gap-3 mb-5">
						<span className="text-white/50 font-mono text-sm" aria-hidden="true">aka</span>
						<span className="text-blue-300/80 font-mono text-sm">Magnitopic</span>
						<span aria-hidden="true" className="w-px h-3 bg-white/20" />
						<span className="text-white/60 text-sm">Data Engineer</span>
					</div>

					<p className="text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
						Building data pipelines and making sense of large-scale data.
						Currently a Junior Data Engineer at Quantori, working in the medical
						sector. Also studying a Master&apos;s in AI &amp; Big Data and
						specializing through 42 Network&apos;s Data &amp; AI track.
					</p>

					<ul aria-label="Areas of interest" className="flex flex-wrap gap-2 mb-10 list-none">
						{["Data Engineering", "AI / ML", "Full-Stack Development"].map((tag) => (
							<li key={tag} className="text-xs px-3 py-1 rounded-full border border-blue-500/30 text-blue-300/80 font-mono">
								{tag}
							</li>
						))}
					</ul>

					<div className="flex gap-4 text-2xl" role="list" aria-label="Social media links">
						<div role="listitem">
							<SocialsLinkButton link="https://github.com/magnitopic" icon="fa fa-github" label="GitHub" />
						</div>
						<div role="listitem">
							<SocialsLinkButton link="https://www.linkedin.com/in/magnitopic/" icon="fa fa-linkedin" label="LinkedIn" />
						</div>
						<div role="listitem">
							<SocialsLinkButton link="https://twitter.com/magnitopic" icon="fa fa-twitter" label="Twitter" />
						</div>
					</div>
				</div>

				{/* Decorative scroll indicator */}
				<div aria-hidden="true" className="absolute bottom-10 left-6 flex flex-col items-center gap-2 text-white/20">
					<div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
					<span className="text-[10px] font-mono tracking-[0.2em] rotate-90 origin-center translate-y-6">scroll</span>
				</div>
			</section>

			{/* ── 01 · Work Experience ──────────────────────────── */}
			<section className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="experience-heading">
				<SectionLabel id="experience-heading" number="01" label="Work Experience" />

				{/* Timeline */}
				<ol className="relative mt-12 list-none" aria-label="Career timeline">
					{/* Vertical line running through the whole list */}
					<div aria-hidden="true" className="absolute left-[3.25rem] top-3 bottom-3 w-px bg-white/[0.07]" />

					{experience.map((job, i) => (
						<li key={i} className="relative flex gap-6 pb-8 last:pb-0">

							{/* Year badge */}
							<div className="flex flex-col items-center shrink-0 w-16">
								<div className={`relative z-10 text-xs font-mono px-1.5 py-1 rounded-md ${job.current ? "bg-blue-500/15 text-blue-300 border border-blue-500/30" : "bg-white/[0.04] text-white/40 border border-white/[0.08]"}`}>
									{job.year}
								</div>
							</div>

							{/* Card */}
							<div className={`flex-1 rounded-xl border p-5 mb-2 transition-colors ${job.current ? "border-blue-500/25 bg-blue-950/10" : "border-white/[0.07] bg-white/[0.02]"}`}>
								<div className="flex flex-wrap items-center gap-2 mb-1">
									<h3 className={`text-base font-medium ${job.current ? "text-white" : "text-white/85"}`}>
										{job.role}
									</h3>
									{job.current && (
										<span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
											<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-green-400" />
											Current
										</span>
									)}
									{job.internship && (
										<span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.07]">
											Internship
										</span>
									)}
								</div>

								<p className="text-sm text-blue-300/70 font-mono mb-2">
									{job.company}
									<span aria-hidden="true" className="mx-2 text-white/20">·</span>
									<span className="text-white/35">{job.period}</span>
								</p>

								<p className="text-sm text-white/60 leading-relaxed mb-4">
									{job.description}
								</p>

								<ul className="flex flex-wrap gap-1.5 list-none" aria-label={`Technologies used at ${job.company}`}>
									{job.tags.map((tag) => (
										<li key={tag} className="text-xs px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-white/55 font-mono">
											{tag}
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ol>
			</section>

			{/* ── 02 · Technical Skills ─────────────────────────── */}
			<section className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="skills-heading">
				<SectionLabel id="skills-heading" number="02" label="Technical Skills" />

				<div className="space-y-5 mt-12">
					{skills.map(({ category, items }) => (
						<div
							key={category}
							className="flex flex-col sm:flex-row sm:items-start gap-3 py-4 border-t border-white/[0.06] first:border-t-0"
						>
							<span className="text-white/50 text-xs font-mono uppercase tracking-widest w-28 shrink-0 pt-1.5">
								{category}
							</span>
							<ul className="flex flex-wrap gap-2 list-none" aria-label={`${category} skills`}>
								{items.map((skill) => (
									<li
										key={skill}
										className="px-3 py-1 text-sm rounded-md border border-white/[0.08] bg-white/[0.03] text-white/75 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-950/20 transition-all duration-200"
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* ── 03 · Featured Projects ────────────────────────── */}
			<section className="max-w-5xl mx-auto px-6 py-24" aria-labelledby="projects-heading">
				<div className="flex items-end justify-between mb-12">
					<SectionLabel id="projects-heading" number="03" label="Featured Projects" />
					<Link
						href="/projects"
						className="text-xs font-mono text-blue-400/70 hover:text-blue-300 transition-colors mb-[2px]"
					>
						View all projects
						<span aria-hidden="true"> →</span>
					</Link>
				</div>

				<ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none">
					{projects.slice(0, 5).map((project, i) => (
						<li
							key={project.id}
							className={`group relative p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-950/15 transition-all duration-300 flex flex-col ${i === 0 ? "md:col-span-2" : ""}`}
						>
							<div className="flex flex-wrap gap-1.5 mb-4" aria-hidden="true">
								{project.tags.slice(0, 4).map((tag) => (
									<span key={tag} className="text-[10px] text-blue-400/60 font-mono">
										#{tag}
									</span>
								))}
							</div>

							<h3 className="text-base font-medium text-white/90 mb-3 group-hover:text-white transition-colors">
								{project.title}
							</h3>

							<p className="text-sm text-white/60 leading-relaxed flex-1 line-clamp-3">
								{project.description}
							</p>

							<div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
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
									className="text-xs font-mono text-white/50 hover:text-white/80 transition-colors"
								>
									Details<span aria-hidden="true"> →</span>
								</Link>
							</div>
						</li>
					))}
				</ul>
			</section>

			{/* ── 04 · Contact CTA ──────────────────────────────── */}
			<section className="max-w-5xl mx-auto px-6 py-24 mb-12" aria-labelledby="contact-heading">
				<div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-12 md:p-16 overflow-hidden">
					<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-transparent pointer-events-none" />
					<div aria-hidden="true" className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

					<div className="relative z-10">
						<SectionLabel id="contact-heading" number="04" label="Get in touch" />
						<p className="text-4xl md:text-5xl font-bold mt-6 mb-4 pb-1 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
							Let&apos;s build something.
						</p>
						<p className="text-white/60 max-w-md mb-8 leading-relaxed">
							Whether it&apos;s a project, a collaboration, or just to say hi — my inbox is open.
						</p>
						<Link
							href="/contact"
							className="inline-block px-7 py-2.5 rounded-lg border border-blue-500/40 text-blue-300/90 hover:bg-blue-500/10 hover:border-blue-400/60 hover:text-blue-200 transition-all font-mono text-sm"
						>
							Contact me<span aria-hidden="true"> →</span>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}

// ── Shared components ─────────────────────────────────────────

function SectionLabel({ number, label, id }) {
	return (
		<div className="flex items-center gap-3">
			<span aria-hidden="true" className="text-blue-500/50 font-mono text-xs">{number}</span>
			<div aria-hidden="true" className="w-px h-3 bg-blue-500/25" />
			<h2 id={id} className="text-xs font-mono uppercase tracking-[0.2em] text-white/55">
				{label}
			</h2>
		</div>
	);
}
