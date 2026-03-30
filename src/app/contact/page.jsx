import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
	title: "Contact",
};

const socials = [
	{
		href: "https://www.linkedin.com/in/magnitopic/",
		icon: "fa fa-linkedin",
		label: "LinkedIn",
	},
	{
		href: "https://github.com/magnitopic",
		icon: "fa fa-github",
		label: "GitHub",
	},
	{
		href: "https://twitter.com/Magnitopic",
		icon: "fa fa-twitter",
		label: "Twitter / X",
	},
	{
		href: "https://www.youtube.com/@Magnitopic",
		icon: "fa fa-youtube-play",
		label: "YouTube",
	},
	{
		href: "https://www.flickr.com/photos/magnitopic/",
		icon: "fa fa-flickr",
		label: "Flickr",
	},
];

export default function Contact() {
	return (
		<main className="max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen">
			{/* Page header */}
			<header className="mb-14">
				<p className="text-xs text-blue-400/70 font-mono tracking-[0.25em] uppercase mb-4" aria-hidden="true">
					Get in touch
				</p>
				<h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
					Contact
				</h1>
				<p className="text-white/60 max-w-lg leading-relaxed">
					Whether it&apos;s a project, a question, or just a hello — reach out
					and I&apos;ll get back to you.
				</p>
			</header>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Contact form */}
				<section aria-labelledby="form-heading" className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-8">
					<h2 id="form-heading" className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
						Send a message
					</h2>
					<ContactForm />
				</section>

				{/* Right column */}
				<div className="space-y-4">
					{/* Email */}
					<section aria-labelledby="email-heading" className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-7">
						<h2 id="email-heading" className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
							Email
						</h2>
						<a
							href="mailto:magnitopic@gmail.com"
							className="text-blue-400/80 hover:text-blue-300 transition-colors font-mono text-sm"
						>
							magnitopic@gmail.com
						</a>
					</section>

					{/* Social links */}
					<section aria-labelledby="socials-heading" className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-7">
						<h2 id="socials-heading" className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
							Online
						</h2>
						<ul className="space-y-4 list-none">
							{socials.map(({ href, icon, label }) => (
								<li key={label}>
									<Link
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`${label} (opens in new tab)`}
										className="flex items-center gap-3 text-white/60 hover:text-blue-300 transition-colors group"
									>
										{/* Icon is decorative — label on the link provides the name */}
										<i
											className={`${icon} w-4 text-center text-base text-white/30 group-hover:text-blue-400 transition-colors`}
											aria-hidden="true"
										/>
										<span className="text-sm font-mono">{label}</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}
