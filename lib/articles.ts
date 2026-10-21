import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import { cache } from "react";
import type { ArticleMeta, ArticleSummary } from "./article-kinds";

export { formatDate, kindTitles } from "./article-kinds";

type ArticleModule = {
  default: ComponentType;
  meta: ArticleMeta;
};

const root = path.join(process.cwd(), "content", "articles");

export function loadArticle(slug: string): Promise<ArticleModule> {
  return import(`@/content/articles/${slug}.mdx`) as Promise<ArticleModule>;
}

// Every article, newest first. Built from the files, so adding an article is
// adding one MDX file.
export const getArticles = cache(async (): Promise<ArticleSummary[]> => {
  const files = (await readdir(root)).filter((f) => f.endsWith(".mdx"));
  const articles = await Promise.all(
    files.map(async (file) => {
      const slug = file.slice(0, -4);
      const { meta } = await loadArticle(slug);
      return { ...meta, slug, href: `/articles/${slug}` };
    }),
  );
  return articles.sort((a, b) => b.date.localeCompare(a.date));
});
