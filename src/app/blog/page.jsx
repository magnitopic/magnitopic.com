import Link from "next/link";
import { getAllPosts } from "../../lib/blog";

export const metadata = {
	title: "Blog",
};

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

export default function Blog() {
	const posts = getAllPosts();

	return (
		<main className="max-w-5xl mx-auto px-6 pt-32 pb-24 min-h-screen">
			{/* Page header */}
			<header className="mb-14">
				<p
					className="text-xs text-blue-400/70 font-mono tracking-[0.25em] uppercase mb-4"
					aria-hidden="true"
				>
					Writing
				</p>
				<h1 className="text-5xl md:text-6xl font-bold mb-5 pb-2 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
					Blog
				</h1>
				<p className="text-white/60 max-w-lg leading-relaxed">
					Thoughts on data engineering, AI, and things I&apos;ve been building
					or learning.
				</p>
			</header>

			{posts.length === 0 ? (
				<div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-12 text-center">
					<p className="text-white/30 font-mono text-sm mb-3">
						// coming soon
					</p>
					<p className="text-white/50 text-sm">
						Posts are on their way. Check back later.
					</p>
				</div>
			) : (
				<ol className="space-y-4 list-none" aria-label="Blog posts">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="group block rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-950/10 transition-all duration-200 p-7"
							>
								{/* Meta row */}
								<div className="flex flex-wrap items-center gap-3 mb-3">
									<time
										dateTime={post.date}
										className="text-xs font-mono text-white/35"
									>
										{formatDate(post.date)}
									</time>
									{post.tags?.map((tag) => (
										<span
											key={tag}
											className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/[0.07] text-blue-400/60"
										>
											{tag}
										</span>
									))}
								</div>

								<h2 className="text-lg font-medium text-white/90 mb-2 group-hover:text-white transition-colors">
									{post.title}
								</h2>

								{post.description && (
									<p className="text-sm text-white/55 leading-relaxed line-clamp-2">
										{post.description}
									</p>
								)}

								<span
									className="inline-block mt-4 text-xs font-mono text-blue-400/60 group-hover:text-blue-300 transition-colors"
									aria-hidden="true"
								>
									Read post →
								</span>
							</Link>
						</li>
					))}
				</ol>
			)}
		</main>
	);
}
