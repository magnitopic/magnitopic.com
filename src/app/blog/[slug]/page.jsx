import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getAllSlugs, getPostBySlug } from "../../../lib/blog";
import { notFound } from "next/navigation";
import { Container } from "../../../components/ui";

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

	const words = content.split(/\s+/).length;
	const minutes = Math.max(1, Math.round(words / 220));

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: frontmatter.title,
		description: frontmatter.description,
		datePublished: frontmatter.date,
		author: { "@type": "Person", name: "Alejandro Aparicio" },
	};

	return (
		<main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Container className="pt-8">
				<Link href="/blog" className="link text-sm">
					<span aria-hidden="true">← </span>All posts
				</Link>
			</Container>

			<Container
				as="header"
				className="grid grid-cols-1 gap-x-6 gap-y-6 pb-12 pt-12 md:grid-cols-12 md:pt-20"
			>
				<div className="num text-graphite md:col-span-3">
					<time dateTime={frontmatter.date}>
						{formatDate(frontmatter.date)}
					</time>
					<p>{minutes} min read</p>
				</div>
				<h1 className="text-4xl leading-[1.05] tracking-tight md:col-span-9 md:text-6xl">
					{frontmatter.title}
				</h1>
				{frontmatter.description && (
					<p className="max-w-[40rem] text-xl leading-snug text-graphite md:col-span-9 md:col-start-4">
						{frontmatter.description}
					</p>
				)}
				{frontmatter.tags?.length > 0 && (
					<ul
						aria-label="Post tags"
						className="num flex list-none flex-wrap gap-x-4 text-graphite md:col-span-9 md:col-start-4"
					>
						{frontmatter.tags.map((tag) => (
							<li key={tag}>{tag}</li>
						))}
					</ul>
				)}
			</Container>

			<div className="border-t border-rule">
				<Container className="grid grid-cols-1 gap-x-6 py-12 md:grid-cols-12 md:py-16">
					<article
						className="blog-content min-w-0 md:col-span-7 md:col-start-4"
						aria-label={frontmatter.title}
					>
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeHighlight]}
						>
							{content}
						</ReactMarkdown>
					</article>
				</Container>
			</div>
		</main>
	);
}
