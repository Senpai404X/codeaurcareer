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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
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