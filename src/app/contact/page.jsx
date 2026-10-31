import ContactForm from "./ContactForm";
import { Container } from "../../components/ui";

export const metadata = {
	title: "Contact",
};

const socials = [
	{ href: "https://www.linkedin.com/in/magnitopic/", label: "LinkedIn" },
	{ href: "https://github.com/magnitopic", label: "GitHub" },
	{ href: "https://twitter.com/Magnitopic", label: "Twitter / X" },
	{ href: "https://www.youtube.com/@Magnitopic", label: "YouTube" },
	{ href: "https://www.flickr.com/photos/magnitopic/", label: "Flickr" },
];

export default function Contact() {
	return (
		<main>
			<Container
				as="header"
				className="grid grid-cols-1 gap-x-6 gap-y-6 pb-16 pt-12 md:grid-cols-12 md:pb-24 md:pt-20"
			>
				<h1 className="display font-medium md:col-span-9">
					Let&apos;s talk.
				</h1>
				<p className="max-w-xs text-lg leading-snug text-graphite md:col-span-3 md:self-end">
					A project, a question, or just a hello — reach out and
					I&apos;ll get back to you.
				</p>
			</Container>

			<div className="border-t border-rule">
				<Container className="grid grid-cols-1 gap-x-6 gap-y-14 py-12 md:grid-cols-12 md:py-20">
					<section
						aria-labelledby="form-heading"
						className="md:col-span-6 md:col-start-4"
					>
						<h2 id="form-heading" className="sr-only">
							Send a message
						</h2>
						<ContactForm />
					</section>

					<section
						aria-labelledby="socials-heading"
						className="md:col-span-3 md:col-start-10"
					>
						<h2 id="socials-heading" className="mb-3 text-sm text-graphite">
							Elsewhere
						</h2>
						<ul className="list-none space-y-1">
							{socials.map(({ href, label }) => (
								<li key={label}>
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										className="link"
									>
										{label}
										<span aria-hidden="true"> ↗</span>
										<span className="sr-only"> (opens in new tab)</span>
									</a>
								</li>
							))}
						</ul>
					</section>
				</Container>
			</div>
		</main>
	);
}
