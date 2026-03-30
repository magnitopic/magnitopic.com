import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getAllSlugs, getPostBySlug } from "../../../lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return getAllSlugs();
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	try {
		const { frontmatter } = getPostBySlug(slug);
		return {
			title: frontmatter.title,
			description: frontmatter.description,
		};
	} catch {
		return { title: "Post not found" };
	}
}

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export default async function BlogPost({ params }) {
	const { slug } = await params;

	let post;
	try {
		post = getPostBySlug(slug);
	} catch {
		notFound();
	}

	// Drafts are not publicly accessible
	if (post.frontmatter.draft) notFound();

	const { frontmatter, content } = post;

	return (
		<main className="max-w-3xl mx-auto px-6 pt-32 pb-24 min-h-screen">
			{/* Back link */}
			<Link
				href="/blog"
				aria-label="Back to all posts"
				className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-blue-300 transition-colors mb-12"
			>
				<span aria-hidden="true">←</span>
				All posts
			</Link>

			{/* Post header */}
			<header className="mb-12">
				{/* Tags */}
				{frontmatter.tags?.length > 0 && (
					<ul
						aria-label="Post tags"
						className="flex flex-wrap gap-2 mb-5 list-none"
					>
						{frontmatter.tags.map((tag) => (
							<li
								key={tag}
								className="text-xs font-mono px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.03] text-blue-400/70"
							>
								{tag}
							</li>
						))}
					</ul>
				)}

				<h1 className="text-4xl md:text-5xl font-bold pb-2 mb-5 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent leading-tight">
					{frontmatter.title}
				</h1>

				{frontmatter.description && (
					<p className="text-lg text-white/55 leading-relaxed mb-6">
						{frontmatter.description}
					</p>
				)}

				<div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
					<time
						dateTime={frontmatter.date}
						className="text-xs font-mono text-white/35"
					>
						{formatDate(frontmatter.date)}
					</time>
				</div>
			</header>

			{/* Markdown content */}
			<article className="blog-content" aria-label={frontmatter.title}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
				>
					{content}
				</ReactMarkdown>
			</article>

			{/* Footer */}
			<footer className="mt-16 pt-8 border-t border-white/[0.06]">
				<Link
					href="/blog"
					aria-label="Back to all posts"
					className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-blue-300 transition-colors"
				>
					<span aria-hidden="true">←</span>
					Back to all posts
				</Link>
			</footer>
		</main>
	);
}
