import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "../../_components/ShareButton";
import StillHaveQuestions from "../../_components/StillHaveQuestions";
import { formatDate, getArticles, kindTitles, loadArticle } from "@/lib/articles";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return (await getArticles()).map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await loadArticle(slug);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `/articles/${slug}` },
  };
}

// One article: no contents sidebar, the date, and when its pictures were
// last taken again.
export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const { default: Content, meta } = await loadArticle(slug);
  return (
    <article className="w-full min-w-0">
      <div className="flex items-center justify-between gap-4">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400"
        >
          <Link href="/articles" className="hover:text-zinc-50">
            Articles
          </Link>
          <span aria-hidden>›</span>
          <span>{kindTitles[meta.kind]}</span>
        </nav>
        <ShareButton title={meta.title} />
      </div>

      <h1 className="mt-4 text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
        {meta.title}
      </h1>
      <p className="mt-3 text-sm text-zinc-500">
        {formatDate(meta.date)}
        {meta.updated && meta.updated !== meta.date && <> · Updated {formatDate(meta.updated)}</>}
      </p>

      <Content />

      <StillHaveQuestions />
    </article>
  );
}
