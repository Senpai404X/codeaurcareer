import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ArticleGrid from "@/components/ArticleGrid";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-violet-50 via-white to-pink-50 dark:border-slate-800 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Student Tech Blog
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">CodeAurCareer</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
            Tech tutorials aur career guidance for students
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/category/how-to" className="gradient-btn">
              Explore How-To Guides
            </Link>
            <Link
              href="/category/career"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-violet-500"
            >
              Career Advice
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Latest Articles
          </h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            Fresh tutorials and career tips for students
          </p>
        </div>

        <ArticleGrid posts={posts} />
      </section>
    </>
  );
}
