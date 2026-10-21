"use client";

import { useState } from "react";
import { articleKinds, kindTitles, type ArticleKind, type ArticleSummary } from "@/lib/article-kinds";
import ArticleCard from "./ArticleCard";

type Filter = "all" | ArticleKind;

// The /articles list with its All / Tutorials / News filter.
export default function ArticleList({ articles }: { articles: ArticleSummary[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? articles : articles.filter((a) => a.kind === filter);
  const filters: { value: Filter; title: string }[] = [
    { value: "all", title: "All" },
    ...articleKinds.map((kind) => ({
      value: kind,
      title: kind === "tutorial" ? "Tutorials" : kindTitles[kind],
    })),
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <div role="tablist" aria-label="Kind" className="flex gap-2">
        {filters.map(({ value, title }) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={filter === value}
            onClick={() => setFilter(value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              filter === value
                ? "bg-zinc-50 text-black"
                : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      {shown.length > 0 ? (
        <div className="flex flex-col gap-4">
          {shown.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-zinc-800 p-6 text-base text-zinc-400">
          Nothing here yet. Check back soon.
        </p>
      )}
    </div>
  );
}
