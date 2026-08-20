import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPostBySlugWithHtml,
} from "@/lib/posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import GiscusComments from "@/components/GiscusComments";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function categoryLabel(category) {
  if (category === "how-to") return "How-To";
  if (category === "career") return "Career";
  return category;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlugWithHtml(params.slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlugWithHtml(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <Link
          href={`/category/${post.category}`}
          className="category-badge mb-4 inline-flex hover:bg-violet-500/20"
        >
          {categoryLabel(post.category)}
        </Link>

        <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>By {post.author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        {post.tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-navy-800 dark:text-slate-300"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      <MarkdownRenderer contentHtml={post.contentHtml} />

      <section className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-800">
        <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
          Comments
        </h2>
        <GiscusComments />
      </section>
    </article>
  );
}
