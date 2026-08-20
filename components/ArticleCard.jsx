import Link from "next/link";
import Image from "next/image";

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

export default function ArticleCard({ post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-navy-900">
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-navy-800">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="category-badge">{categoryLabel(post.category)}</span>
          <time dateTime={post.date} className="text-xs text-slate-500 dark:text-slate-400">
            {formatDate(post.date)}
          </time>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
            {post.title}
          </h2>
        </Link>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-violet-600 transition hover:text-pink-500 dark:text-violet-400"
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}
