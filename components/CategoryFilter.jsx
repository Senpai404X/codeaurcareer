"use client";

const filters = [
  { id: "all", label: "All" },
  { id: "how-to", label: "How-To" },
  { id: "career", label: "Career" },
];

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeCategory === filter.id;

        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => onCategoryChange(filter.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md shadow-violet-500/25"
                : "border border-slate-200 bg-white text-slate-600 hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-navy-900 dark:text-slate-300 dark:hover:border-violet-500"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
