import Link from "next/link";
import type { ReactNode } from "react";
import { getChapters, getReadingOrder, introductionHref } from "@/lib/handbook";
import { appVersion } from "@/content/handbook/chapters";
import ShareButton from "./ShareButton";
import Sidebar from "./Sidebar";
import StillHaveQuestions from "./StillHaveQuestions";

// One handbook page inside the site's column: the article with its breadcrumb,
// Share, Previous/Next and the questions card, and the contents beside it.
export default async function HandbookPage({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  const chapters = await getChapters();
  const pages = await getReadingOrder();
  const index = pages.findIndex((p) => p.href === href);
  const page = pages[index];
  const previous = index > 0 ? pages[index - 1] : undefined;
  const next = index < pages.length - 1 ? pages[index + 1] : undefined;
  const chapter = chapters.find((c) => c.slug === page?.chapter?.slug);

  return (
    <div className="relative flex w-full flex-col gap-8">
      {/* Phones to laptops: a Contents button above the article. Wide screens:
          the full contents in the left margin, beside the site's column. */}
      <aside className="xl:absolute xl:inset-y-0 xl:right-full xl:mr-12 xl:w-56">
        <div className="xl:sticky xl:top-12">
          <Sidebar
            introduction={{ href: introductionHref, title: pages[0].title }}
            chapters={chapters}
            currentHref={href}
          />
          <p className="mt-6 hidden px-2 text-xs text-zinc-500 xl:block">
            Written for Vibely {appVersion}
          </p>
        </div>
      </aside>

      <article className="w-full min-w-0">
        <div className="flex items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-50">
              Vibely
            </Link>
            <span aria-hidden>›</span>
            <Link href={introductionHref} className="hover:text-zinc-50">
              Handbook
            </Link>
            {chapter && (
              <>
                <span aria-hidden>›</span>
                <Link href={chapter.articles[0].href} className="hover:text-zinc-50">
                  {chapter.title}
                </Link>
              </>
            )}
          </nav>
          <ShareButton title={title} />
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
          {title}
        </h1>

        {children}

        <div className="mt-12 flex items-center justify-between gap-4 text-sm font-medium">
          {previous ? (
            <Link
              href={previous.href}
              className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-200 hover:bg-zinc-800"
            >
              ‹ Previous
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={next.href}
              className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-200 hover:bg-zinc-800"
            >
              Next ›
            </Link>
          )}
        </div>

        <StillHaveQuestions />

        <p className="mt-6 text-xs text-zinc-500 xl:hidden">Written for Vibely {appVersion}</p>
      </article>
    </div>
  );
}
