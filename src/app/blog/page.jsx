import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import { Container, DotGrid } from "../../components/ui";

export const metadata = {
	title: "Blog",
};

function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
	});
}

export default function Blog() {
	const posts = getAllPosts();
	const years = [...new Set(posts.map((p) => new Date(p.date).getFullYear()))];

	return (
		<main>
			<Container
				as="header"
				className="grid grid-cols-1 gap-x-6 gap-y-6 pb-16 pt-12 md:grid-cols-12 md:pb-24 md:pt-20"
			>
				<h1 className="display font-medium md:col-span-9">Blog</h1>
				<p className="max-w-xs text-lg leading-snug text-graphite md:col-span-3 md:self-end">
					Thoughts, ideas and projects I&apos;ve been working on.
				</p>
			</Container>

			{posts.length === 0 ? (
				<div className="border-t border-rule">
					<Container className="flex items-center gap-4 py-16">
						<DotGrid size={32} title="Empty" />
						<p>Posts are on their way. Check back later.</p>
					</Container>
				</div>
			) : (
				years.map((year) => (
					<section
						key={year}
						aria-label={`Posts from ${year}`}
						className="border-t border-rule"
					>
						<Container className="grid grid-cols-1 gap-x-6 py-8 md:grid-cols-12 md:py-12">
							<h2 className="num mb-4 text-graphite md:col-span-3 md:mb-0">
								{year}
							</h2>
							<ol className="list-none md:col-span-9">
								{posts
									.filter((p) => new Date(p.date).getFullYear() === year)
									.map((post) => (
										<li
											key={post.slug}
											className="border-t border-rule first:border-t-0"
										>
											<Link
												href={`/blog/${post.slug}`}
												className="group grid grid-cols-1 gap-x-6 gap-y-2 py-6 first:pt-0 hover:text-plum md:grid-cols-9"
											>
												<time
													dateTime={post.date}
													className="num pt-1.5 text-graphite md:col-span-2"
												>
													{formatDate(post.date)}
												</time>
												<div className="md:col-span-7">
													<h3 className="text-2xl leading-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
														{post.title}
													</h3>
													{post.description && (
														<p className="mt-2 line-clamp-2 max-w-[40rem] text-graphite">
															{post.description}
														</p>
													)}
													{post.tags?.length > 0 && (
														<p className="num mt-3 text-graphite">
															{post.tags.join(", ")}
														</p>
													)}
												</div>
											</Link>
										</li>
									))}
							</ol>
						</Container>
					</section>
				))
			)}
		</main>
	);
}
