import Link from "next/link";
import { PixelGlobe, Section, Container } from "../components/ui";
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
			"Development of internal tools and web pages using Python, JavaScript and Java. Worked on a web-based BIM model viewer and a project management dashboard.",
		tags: ["Python", "JavaScript", "Java"],
		internship: true,
	},
];

const skills = [
	{
		category: "Data & Big Data",
		items: [
			"Databricks",
			"Apache Spark",
			"Apache Kafka",
			"Apache NiFi",
			"SQL",
		],
	},
	{
		category: "Languages",
		items: [
			"Python",
			"C / C++",
			"Java / Kotlin",
			"JavaScript",
			"TypeScript",
		],
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

const areas = ["Data Engineering", "AI / ML", "Full-Stack Development"];

const socials = [
	{ href: "https://github.com/magnitopic", label: "GitHub" },
	{ href: "https://www.linkedin.com/in/magnitopic/", label: "LinkedIn" },
	{ href: "https://twitter.com/magnitopic", label: "Twitter" },
];

export default function Home() {
	return (
		<main>
			{/* ── Hero ───────────────────────────────────────── */}
			<Container
				as="section"
				aria-labelledby="hero-name"
				className="grid grid-cols-1 gap-x-6 gap-y-16 pb-16 pt-12 md:grid-cols-12 md:pb-24 md:pt-20"
			>
				<h1
					id="hero-name"
					className="display font-medium md:col-span-9"
				>
					Alejandro
					<br />
					Aparicio
				</h1>

				<div
					className="hidden md:col-span-3 md:flex md:flex-col md:items-end md:justify-between"
					aria-hidden="true"
				>
					{/* 16 px per module keeps the bitmap crisp */}
					<PixelGlobe size={256} />
				</div>

				<div className="md:col-span-3">
					<p className="num text-graphite">aka Magnitopic</p>
					<p className="mt-1 text-xl">Data Engineer</p>
				</div>

				<p className="max-w-[34rem] text-lg leading-snug md:col-span-5 md:col-start-6">
					Building data pipelines and making sense of large-scale
					data. Currently working as a Data Engineer at Quantori, in
					the medical sector. Also studying and specializing through
					42 Network&apos;s Data &amp; AI tracks.
				</p>

				<ul
					aria-label="Social media links"
					className="flex gap-6 text-sm md:col-span-3 md:col-start-10 md:flex-col md:gap-1"
				>
					{socials.map(({ href, label }) => (
						<li key={label}>
							<a
								className="link"
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{label}
								<span aria-hidden="true"> ↗</span>
								<span className="sr-only">
									{" "}
									(opens in new tab)
								</span>
							</a>
						</li>
					))}
				</ul>

				<ul
					aria-label="Areas of interest"
					className="num flex flex-wrap gap-x-6 gap-y-1 text-graphite md:col-span-12"
				>
					{areas.map((a) => (
						<li key={a} className="flex items-center gap-2">
							<span
								aria-hidden="true"
								className="inline-block size-2 bg-plum"
							/>
							{a}
						</li>
					))}
				</ul>
			</Container>

			{/* ── 01 · Work Experience ──────────────────────── */}
			<Section id="experience" index="01" label="Work Experience">
				<ol className="list-none" aria-label="Career timeline">
					{experience.map((job) => (
						<li
							key={job.company + job.period}
							className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-rule py-6 first:border-t-0 first:pt-0 md:grid-cols-9"
						>
							<p className="num text-graphite md:col-span-2">
								{job.period}
							</p>
							<div className="md:col-span-3">
								<h3 className="text-xl leading-tight">
									{job.role}
									{job.current && (
										<span
											aria-hidden="true"
											className="ml-2 inline-block size-2 bg-plum align-middle"
										/>
									)}
									{job.current && (
										<span className="sr-only">
											{" "}
											(current)
										</span>
									)}
								</h3>
								<p className="mt-1 text-graphite">
									{job.company}
									{job.internship && " · Internship"}
								</p>
							</div>
							<div className="md:col-span-4">
								<p className="leading-snug">
									{job.description}
								</p>
								<p
									className="num mt-3 text-graphite"
									aria-label={`Technologies used at ${job.company}`}
								>
									{job.tags.join(", ")}
								</p>
							</div>
						</li>
					))}
				</ol>
			</Section>

			{/* ── 02 · Technical Skills ─────────────────────── */}
			<Section id="skills" index="02" label="Technical Skills">
				<dl>
					{skills.map(({ category, items }) => (
						<div
							key={category}
							className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-rule py-4 first:border-t-0 first:pt-0 md:grid-cols-9"
						>
							<dt className="text-graphite md:col-span-3">
								{category}
							</dt>
							<dd className="md:col-span-6">
								{items.join(", ")}
							</dd>
						</div>
					))}
				</dl>
			</Section>

			{/* ── 03 · Selected Projects ────────────────────── */}
			<Section id="projects" index="03" label="Selected Projects">
				<ol className="list-none">
					{projects.slice(0, 5).map((project, i) => (
						<li
							key={project.id}
							className="border-t border-rule first:border-t-0"
						>
							<Link
								href={`/projects/${project.id}`}
								className="group grid grid-cols-9 gap-x-6 py-5 transition-colors hover:text-plum"
							>
								<span className="num col-span-1 pt-1.5 text-graphite">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="col-span-8 text-2xl leading-tight md:col-span-4">
									{project.title}
								</span>
								<span className="num col-span-8 col-start-2 mt-1 text-graphite md:col-span-4 md:col-start-auto md:mt-0 md:pt-1.5">
									{project.tags.slice(0, 3).join(", ")}
								</span>
							</Link>
						</li>
					))}
				</ol>
				<Link
					href="/projects"
					className="link mt-8 inline-block text-sm"
				>
					All projects<span aria-hidden="true"> →</span>
				</Link>
			</Section>
		</main>
	);
}
