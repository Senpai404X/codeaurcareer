export const metadata = {
  title: "About",
  description:
    "Learn about CodeAurCareer — a tech tutorial and career guidance blog for students by Lakshya Mishra.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
        About <span className="gradient-text">CodeAurCareer</span>
      </h1>

      <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          CodeAurCareer is a student-focused tech blog that combines practical
          coding tutorials with real career guidance. Whether you are learning
          React, deploying your first app, or figuring out what to do after
          BCA — this blog is built for you.
        </p>
        <p>
          I am <strong className="text-slate-900 dark:text-white">Lakshya Mishra</strong>,
          a developer and student who writes about the tools, mistakes, and
          lessons I pick up along the way. Every article is written to be
          actionable — not just theory.
        </p>
        <p>
          Topics covered include web development tutorials, deployment guides,
          error-fix walkthroughs, career path comparisons, job preparation tips,
          and freelancing advice for Indian students.
        </p>
      </div>
    </section>
  );
}
