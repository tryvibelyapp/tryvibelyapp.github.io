import Link from "next/link";
import Image from "next/image";

// The narrow centred column shared by every page. It is `relative` so the
// handbook can hang its contents in the left margin on wide screens.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="relative flex min-w-0 flex-1 w-full max-w-3xl flex-col items-center gap-6 py-16 px-6 sm:px-16 bg-white dark:bg-black sm:items-start">
        <header className="w-full flex justify-center sm:justify-start">
          <Link href="/" aria-label="Go to home">
            <Image
              src="/assets/logo.png"
              alt="Vibely logo"
              width={70}
              height={70}
              className="rounded-2xl"
              priority
            />
          </Link>
        </header>
        {children}
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        <footer className="flex flex-col gap-6 items-center sm:items-start">
          <div className="flex flex-row flex-wrap justify-center gap-2 text-base font-medium sm:justify-start">
            <Link href="/">Home</Link>
            <span>·</span>
            <Link href="/handbook">Handbook</Link>
            <span>·</span>
            <Link href="/articles">Articles</Link>
            <span>·</span>
            <Link href="/support">Support</Link>
            <span>·</span>
            <Link href="/privacy">Privacy</Link>
            <span>·</span>
            <Link href="/terms">Terms</Link>
            <span>·</span>
            <Link href="/impressum">Impressum</Link>
          </div>
          <p className="font-mono text-xs">
            Built with ❤️ by Aibek &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}
