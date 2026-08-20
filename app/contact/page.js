export const metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeAurCareer for questions, feedback, collaborations, or guest post inquiries.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Contact <span className="gradient-text">Us</span>
      </h1>

      <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          Have a question, suggestion, or want to collaborate? I would love to
          hear from you. Fill out the form below or reach out directly.
        </p>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-navy-900">
          <p className="mb-2 font-semibold text-slate-900 dark:text-white">
            Email
          </p>
          <a
            href="mailto:hello@codeaurcareer.com"
            className="text-violet-600 hover:underline dark:text-violet-400"
          >
            hello@codeaurcareer.com
          </a>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-navy-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-navy-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-navy-800 dark:text-white"
            />
          </div>
          <button type="button" className="gradient-btn">
            Send Message
          </button>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Note: This is a static demo form. Connect it to a service like
            Formspree when you are ready.
          </p>
        </form>
      </div>
    </section>
  );
}
