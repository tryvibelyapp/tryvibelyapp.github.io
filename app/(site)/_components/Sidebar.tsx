"use client";

import Link from "next/link";
import { useState } from "react";
import type { HandbookChapter } from "@/lib/handbook";

// The handbook's table of contents. A chapter folds open to list its articles;
// the one holding the current page starts open. At phone width the whole list
// sits behind a Contents button.
export default function Sidebar({
  introduction,
  chapters,
  currentHref,
}: {
  introduction: { href: string; title: string };
  chapters: HandbookChapter[];
  currentHref: string;
}) {
  const [isOpenOnPhone, setOpenOnPhone] = useState(false);
  const [openChapters, setOpenChapters] = useState<Set<string>>(
    () =>
      new Set(
        chapters
          .filter((c) => c.articles.some((a) => a.href === currentHref))
          .map((c) => c.slug),
      ),
  );

  function toggle(slug: string) {
    setOpenChapters((open) => {
      const next = new Set(open);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <nav aria-label="Handbook contents" className="text-sm">
      <button
        type="button"
        onClick={() => setOpenOnPhone((open) => !open)}
        aria-expanded={isOpenOnPhone}
        className="flex w-full items-center justify-between rounded-xl border border-zinc-800 px-4 py-3 font-medium xl:hidden"
      >
        Contents
        <Chevron isOpen={isOpenOnPhone} />
      </button>
      <ul className={`${isOpenOnPhone ? "mt-3 block" : "hidden"} space-y-1 xl:mt-0 xl:block`}>
        <li>
          <PageLink
            href={introduction.href}
            title={introduction.title}
            isCurrent={introduction.href === currentHref}
          />
        </li>
        {chapters.map((chapter) => {
          const isOpen = openChapters.has(chapter.slug);
          return (
            <li key={chapter.slug}>
              <button
                type="button"
                onClick={() => toggle(chapter.slug)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-zinc-400 hover:text-zinc-50"
              >
                <Chevron isOpen={isOpen} />
                {chapter.title}
              </button>
              {isOpen && (
                <ul className="ml-6 space-y-1">
                  {chapter.articles.map((article) => (
                    <li key={article.href}>
                      <PageLink
                        href={article.href}
                        title={article.title}
                        isCurrent={article.href === currentHref}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function PageLink({
  href,
  title,
  isCurrent,
}: {
  href: string;
  title: string;
  isCurrent: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={`block rounded-lg px-2 py-1.5 ${
        isCurrent ? "font-semibold text-zinc-50" : "text-zinc-400 hover:text-zinc-50"
      }`}
    >
      {title}
    </Link>
  );
}

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={`h-3 w-3 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
    >
      <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
