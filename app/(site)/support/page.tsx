import type { Metadata } from "next";
import { Suspense } from "react";
import SupportEmailLinks from "./support-email-links";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support for Vibely and contact the team.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-6 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight">
        Support
      </h1>
      <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Need help with Vibely? We are here for you.
      </p>
      <Suspense fallback={null}>
        <SupportEmailLinks />
      </Suspense>
      <p className="max-w-2xl text-sm leading-6 text-zinc-500 dark:text-zinc-400">
        We usually reply within 1-2 business days.
      </p>
    </div>
  );
}
