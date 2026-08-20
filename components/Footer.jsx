import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">
              <span className="gradient-text">CodeAurCareer</span>
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Tech tutorials aur career guidance for students
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-slate-400 transition hover:text-violet-500"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Senpai404X/codeaurcareer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="inline-flex items-center gap-2 text-slate-400 transition hover:text-fuchsia-500"
            >
              <Github size={16} />
              <span>View on GitHub</span>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-violet-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>&copy; {currentYear} CodeAurCareer. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-violet-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-violet-500">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-violet-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
