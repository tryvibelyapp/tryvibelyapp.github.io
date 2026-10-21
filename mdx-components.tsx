import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Screenshot, { MarkerHeading } from "@/app/(site)/_components/Screenshot";
import { Caution, LearnMore, Step, Steps, Tip } from "@/app/(site)/_components/Callouts";

// How plain Markdown looks in handbook and article pages, plus the components
// every MDX file can use without importing them: Screenshot, MarkerHeading,
// Steps and Step, Tip, Caution and LearnMore.
const components: MDXComponents = {
  Screenshot,
  MarkerHeading,
  Steps,
  Step,
  Tip,
  Caution,
  LearnMore,
  h2: ({ children }) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-50">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-zinc-50">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-7 text-zinc-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 ml-6 list-disc space-y-2 text-base leading-7 text-zinc-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 ml-6 list-decimal space-y-2 text-base leading-7 text-zinc-300">
      {children}
    </ol>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-50">{children}</strong>
  ),
  a: ({ href = "", children }) =>
    href.startsWith("/") ? (
      <Link href={href} className="font-medium text-zinc-50 underline underline-offset-4">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-zinc-50 underline underline-offset-4"
      >
        {children}
      </a>
    ),
  hr: () => <hr className="my-8 border-zinc-800" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
