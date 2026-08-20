"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
};

function isGiscusConfigured() {
  return Object.values(giscusConfig).every(Boolean);
}

export default function GiscusComments() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!isGiscusConfigured()) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-navy-900">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Comments powered by Giscus
        </p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Add your Giscus credentials to{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs dark:bg-navy-800">
            .env.local
          </code>{" "}
          to enable comments. See{" "}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs dark:bg-navy-800">
            .env.example
          </code>
          .
        </p>
      </div>
    );
  }

  if (!mounted) return null;

  return (
    <Giscus
      repo={giscusConfig.repo}
      repoId={giscusConfig.repoId}
      category={giscusConfig.category}
      categoryId={giscusConfig.categoryId}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
