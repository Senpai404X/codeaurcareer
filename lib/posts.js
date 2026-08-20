import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");
const categories = ["how-to", "career"];

function getMarkdownFilePaths() {
  const filePaths = [];

  for (const category of categories) {
    const categoryPath = path.join(contentDirectory, category);

    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith(".md"));

    for (const file of files) {
      filePaths.push(path.join(categoryPath, file));
    }
  }

  return filePaths;
}

function parsePost(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title,
    slug: data.slug,
    category: data.category,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    thumbnail: data.thumbnail,
    tags: data.tags || [],
    content,
  };
}

export function getAllPosts() {
  const posts = getMarkdownFilePaths().map(parsePost);

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return null;

  return post;
}

export async function getPostBySlugWithHtml(slug) {
  const post = getPostBySlug(slug);

  if (!post) return null;

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return {
    ...post,
    contentHtml,
  };
}

export function getPostsByCategory(category) {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function getAllCategories() {
  return categories;
}
