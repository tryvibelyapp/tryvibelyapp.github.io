import { readdir } from "node:fs/promises";
import path from "node:path";
import type { ComponentType } from "react";
import { cache } from "react";
import { chapters } from "@/content/handbook/chapters";

// What every handbook MDX file exports as `meta`.
export type HandbookMeta = {
  title: string;
  description: string;
  order: number;
};

type HandbookModule = {
  default: ComponentType;
  meta: HandbookMeta;
};

export type HandbookPage = {
  href: string;
  title: string;
  chapter?: { slug: string; title: string };
};

export type HandbookChapter = {
  slug: string;
  title: string;
  articles: { slug: string; href: string; title: string }[];
};

const root = path.join(process.cwd(), "content", "handbook");

export const introductionHref = "/handbook";

export function loadArticle(chapter: string, article: string): Promise<HandbookModule> {
  return import(`@/content/handbook/${chapter}/${article}.mdx`) as Promise<HandbookModule>;
}

export function loadIntroduction(): Promise<HandbookModule> {
  return import("@/content/handbook/introduction.mdx") as Promise<HandbookModule>;
}

async function articleSlugs(chapter: string): Promise<string[]> {
  try {
    const files = await readdir(path.join(root, chapter));
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.slice(0, -4));
  } catch {
    return [];
  }
}

// The chapters that have articles, each with its articles in order. Built from
// the files, so adding an article is adding one MDX file.
export const getChapters = cache(async (): Promise<HandbookChapter[]> => {
  const result: HandbookChapter[] = [];
  for (const chapter of chapters) {
    const slugs = await articleSlugs(chapter.slug);
    const articles = await Promise.all(
      slugs.map(async (slug) => {
        const { meta } = await loadArticle(chapter.slug, slug);
        return { slug, meta };
      }),
    );
    articles.sort((a, b) => a.meta.order - b.meta.order);
    if (articles.length === 0) continue;
    result.push({
      slug: chapter.slug,
      title: chapter.title,
      articles: articles.map(({ slug, meta }) => ({
        slug,
        href: `/handbook/${chapter.slug}/${slug}`,
        title: meta.title,
      })),
    });
  }
  return result;
});

// Every page in reading order: the Introduction, then each chapter's articles.
// Previous and Next walk this list.
export const getReadingOrder = cache(async (): Promise<HandbookPage[]> => {
  const { meta } = await loadIntroduction();
  const pages: HandbookPage[] = [{ href: introductionHref, title: meta.title }];
  for (const chapter of await getChapters()) {
    for (const article of chapter.articles) {
      pages.push({
        href: article.href,
        title: article.title,
        chapter: { slug: chapter.slug, title: chapter.title },
      });
    }
  }
  return pages;
});
