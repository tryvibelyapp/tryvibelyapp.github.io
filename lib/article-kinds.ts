// The kinds of article, kept apart from lib/articles.ts so the list's filter,
// which runs in the browser, doesn't pull in the articles themselves.
export const articleKinds = ["tutorial", "news"] as const;
export type ArticleKind = (typeof articleKinds)[number];

export const kindTitles: Record<ArticleKind, string> = {
  tutorial: "Tutorial",
  news: "News",
};

// What every article MDX file exports as `meta`. Dates are YYYY-MM-DD.
export type ArticleMeta = {
  title: string;
  description: string;
  kind: ArticleKind;
  date: string;
  updated?: string;
  cover: string;
};

export type ArticleSummary = ArticleMeta & { slug: string; href: string };

// "22 October 2026", the way the legal pages write dates.
export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
