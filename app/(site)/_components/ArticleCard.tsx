import Link from "next/link";
import { formatDate, kindTitles, type ArticleSummary } from "@/lib/article-kinds";

// One article in the /articles list: cover, kind and date, title, one line.
export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link
      href={article.href}
      className="group flex gap-4 rounded-2xl border border-zinc-800 p-3 hover:border-zinc-600 sm:gap-5"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.cover}
        alt=""
        loading="lazy"
        className="aspect-[9/16] w-20 shrink-0 rounded-xl object-cover object-top sm:w-24"
      />
      <div className="flex min-w-0 flex-col justify-center gap-1.5 py-1">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {kindTitles[article.kind]} · {formatDate(article.date)}
        </p>
        <h2 className="text-lg font-semibold leading-snug text-zinc-50 group-hover:underline group-hover:underline-offset-4">
          {article.title}
        </h2>
        <p className="text-sm leading-6 text-zinc-400">{article.description}</p>
      </div>
    </Link>
  );
}
