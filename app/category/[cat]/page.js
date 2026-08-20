import { notFound } from "next/navigation";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import ArticleCard from "@/components/ArticleCard";

const categoryMeta = {
  "how-to": {
    title: "How-To Guides",
    description:
      "Step-by-step tech tutorials — deployment, coding tips, error fixes, and tool guides for students.",
  },
  career: {
    title: "Career Guidance",
    description:
      "Career paths, job preparation, freelancing tips, and course suggestions for BCA, BSc IT, and CS students.",
  },
};

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ cat }));
}

export async function generateMetadata({ params }) {
  const meta = categoryMeta[params.cat];

  if (!meta) {
    return { title: "Category Not Found" };
  }

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function CategoryPage({ params }) {
  const meta = categoryMeta[params.cat];

  if (!meta) {
    notFound();
  }

  const posts = getPostsByCategory(params.cat);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="gradient-text">{meta.title}</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {meta.description}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400">
          No articles in this category yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
