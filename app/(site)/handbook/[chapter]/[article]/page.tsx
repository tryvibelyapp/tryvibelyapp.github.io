import type { Metadata } from "next";
import HandbookPage from "../../../_components/HandbookPage";
import { getChapters, loadArticle } from "@/lib/handbook";

type Params = { chapter: string; article: string };

export async function generateStaticParams(): Promise<Params[]> {
  const chapters = await getChapters();
  return chapters.flatMap((chapter) =>
    chapter.articles.map((article) => ({ chapter: chapter.slug, article: article.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { chapter, article } = await params;
  const { meta } = await loadArticle(chapter, article);
  return {
    title: { absolute: `${meta.title} - Vibely Handbook` },
    description: meta.description,
    alternates: { canonical: `/handbook/${chapter}/${article}` },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { chapter, article } = await params;
  const { default: Content, meta } = await loadArticle(chapter, article);
  return (
    <HandbookPage href={`/handbook/${chapter}/${article}`} title={meta.title}>
      <Content />
    </HandbookPage>
  );
}
