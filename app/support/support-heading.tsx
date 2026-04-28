"use client";

import { useSearchParams } from "next/navigation";

export default function SupportHeading() {
  const params = useSearchParams();
  const appVersion = params.get("app_version") || "";

  return (
    <h1 className="text-3xl font-semibold leading-10 tracking-tight">
      Support{appVersion ? ` for ${appVersion}` : ""}
    </h1>
  );
}
