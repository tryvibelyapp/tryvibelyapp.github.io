import type { ReactNode } from "react";

// Shared details and building blocks for the Privacy, Terms and Impressum pages.

export const LEGAL_NAME = "Aibek Mazhitov";
export const LEGAL_EMAIL = "heyaibek@gmail.com";
export const LEGAL_ADDRESS = [
  "Friedenauer Höhe 22",
  "12159 Berlin",
  "Germany",
];
export const EFFECTIVE_DATE = "22 September 2026";

export function LegalPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-6 text-zinc-900 dark:text-zinc-100">
      {children}
    </div>
  );
}

export function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl font-semibold leading-10 tracking-tight">
      {children}
    </h1>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-semibold mt-6">{children}</h2>;
}

export function Subsection({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold mt-4">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
      {children}
    </p>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="max-w-2xl list-disc ml-6 space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: ReactNode }) {
  return (
    <ol className="max-w-2xl list-decimal ml-6 space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
      {children}
    </ol>
  );
}

export function A({ href, children }: { href: string; children?: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="underline underline-offset-4 hover:opacity-80 break-words"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children ?? href}
    </a>
  );
}

export function Email() {
  return <A href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</A>;
}

export function Address() {
  return (
    <>
      {LEGAL_NAME}
      {LEGAL_ADDRESS.map((line) => (
        <span key={line}>
          <br />
          {line}
        </span>
      ))}
    </>
  );
}
