import Link from "next/link";

// The card at the end of every help page.
export default function StillHaveQuestions() {
  return (
    <section className="mt-16 rounded-2xl border border-zinc-800 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-zinc-50">Still have questions?</h2>
      <p className="mt-2 max-w-xl text-base leading-7 text-zinc-400">
        If you didn&apos;t find what you were looking for, write to us or ask the
        community. We&apos;re happy to help.
      </p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
        <Link href="/support" className="rounded-full bg-zinc-50 px-4 py-2 text-black">
          Contact support
        </Link>
        <a
          href="https://discord.gg/zE3A44DEK8"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-100"
        >
          Discord
        </a>
        <a
          href="https://tiktok.com/@TryVibelyApp"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-100"
        >
          TikTok
        </a>
      </div>
    </section>
  );
}
