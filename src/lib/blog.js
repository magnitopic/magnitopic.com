import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Returns all published posts (draft: false), sorted newest first.
 * Files starting with "_" are always skipped (e.g. _template.md).
 */
export function getAllPosts() {
	if (!fs.existsSync(POSTS_DIR)) return [];

	const files = fs
		.readdirSync(POSTS_DIR)
		.filter((f) => f.endsWith(".md") && !f.startsWith("_"));

	return files
		.map((filename) => {
			const slug = filename.replace(/\.md$/, "");
			const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
			const { data } = matter(raw);
			return { slug, ...data };
		})
		.filter((post) => !post.draft)
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns a single post's frontmatter + raw markdown content by slug.
 * Throws if the file doesn't exist.
 */
export function getPostBySlug(slug) {
	const filepath = path.join(POSTS_DIR, `${slug}.md`);
	const raw = fs.readFileSync(filepath, "utf8");
	const { data: frontmatter, content } = matter(raw);
	return { slug, frontmatter, content };
}

/**
 * Returns all slugs for published posts — used by generateStaticParams.
 */
export function getAllSlugs() {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}
