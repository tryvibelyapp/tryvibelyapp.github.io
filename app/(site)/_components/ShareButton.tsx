"use client";

import { useState } from "react";

// Opens the share sheet on phones and tablets, and copies the link elsewhere.
export default function ShareButton({ title }: { title: string }) {
  const [didCopy, setDidCopy] = useState(false);

  async function share() {
    const url = window.location.href;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Cancelled by the user.
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setDidCopy(true);
    setTimeout(() => setDidCopy(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className="flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800"
    >
      <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5">
        <path
          d="M6.5 9.5l3-3M7 4.5l1.3-1.3a2.5 2.5 0 013.5 3.5L10.5 8M9 11.5l-1.3 1.3a2.5 2.5 0 01-3.5-3.5L5.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {didCopy ? "Copied" : "Share"}
    </button>
  );
}
