import Link from "next/link";
import type { ReactNode } from "react";

// Small pieces articles use besides plain Markdown: numbered steps for
// tutorials, tip and caution notes, and "Learn more" links.

// Numbered steps. Each child is a <Step>; the numbers come from a CSS counter,
// so steps can be added or moved without renumbering.
export function Steps({ children }: { children: ReactNode }) {
  return <ol className="mt-6 space-y-10 [counter-reset:step]">{children}</ol>;
}

export function Step({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-11 [counter-increment:step] before:absolute before:left-0 before:top-0.5 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:rounded-full before:bg-zinc-800 before:text-sm before:font-semibold before:text-zinc-50 before:content-[counter(step)] [&>p:first-child]:mt-0">
      {children}
    </li>
  );
}

export function Tip({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 [&>p]:mt-0">
      <p className="text-sm font-semibold text-zinc-50">Tip</p>
      <div className="mt-1 text-base leading-7 text-zinc-300 [&>p]:mt-0">{children}</div>
    </aside>
  );
}

export function Caution({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-6 rounded-xl border border-amber-900/60 bg-amber-950/30 px-4 py-3">
      <p className="text-sm font-semibold text-amber-300">Caution</p>
      <div className="mt-1 text-base leading-7 text-zinc-300 [&>p]:mt-0">{children}</div>
    </aside>
  );
}

export function LearnMore({ href, children }: { href: string; children: ReactNode }) {
  return (
    <p className="mt-4 text-base">
      <Link href={href} className="font-medium text-zinc-50 underline underline-offset-4">
        Learn more about {children}
      </Link>
    </p>
  );
}
