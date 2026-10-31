import Link from "next/link";
import { Container, DotGrid } from "./ui";

const Footer = () => (
	<footer className="mt-24 border-t border-rule">
		<Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 text-sm md:grid-cols-12">
			<div className="col-span-2 md:col-span-3">
				<DotGrid size={32} filled={[0, 4, 8]} title="Magnitopic mark" />
			</div>
			<p className="col-span-2 text-graphite md:col-span-5">
				Alejandro Aparicio, aka Magnitopic.
				<br />© {new Date().getFullYear()}
			</p>
			<ul className="col-span-1 space-y-1 md:col-span-2">
				<li><Link className="link" href="/projects">Projects</Link></li>
				<li><Link className="link" href="/blog">Blog</Link></li>
				<li><Link className="link" href="/contact">Contact</Link></li>
			</ul>
			<ul className="col-span-1 space-y-1 md:col-span-2">
				<li><a className="link" href="https://github.com/magnitopic" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
				<li><a className="link" href="https://www.linkedin.com/in/magnitopic/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>			</ul>
		</Container>
	</footer>
);

export default Footer;
