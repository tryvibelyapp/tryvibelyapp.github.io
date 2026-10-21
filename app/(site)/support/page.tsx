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

      <h2 className="text-2xl font-semibold">Know Issues</h2>
      <ul className="max-w-2xl list-disc ml-6 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        <li>
          <strong>Slow export</strong> - Currently exporting takes very long
          especially for longer audio files and high export settings like
          60fsp/4k resolution. The rendering process is complex by its nature
          especially if there are lots of visual effects and visualizers playing
          simultaneously. However I&apos;m working on optimizing the render
          pipeline and making it faster in future updates. Please be aware with
          me, I&apos;m trying my best.
        </li>
        <li>
          <strong>Export breaks on 100%</strong> - Some of you reported to me
          that export fails towards the end (100%) and the video is lost. The
          common reason is because your device storage is full. Try removing
          some media files from Photos app and cleaning the trash making more
          space for Vibely videos.
        </li>
      </ul>

      <div className="w-full max-w-2xl border-t border-zinc-200 dark:border-zinc-800" />

      <h2 className="text-2xl font-semibold">Bug reports</h2>
      <ul className="max-w-2xl list-disc ml-6 space-y-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        <li>
          <strong>Export delay</strong> - Amazing app, but the export always
          delays anything with dynamic sound or the waveform visualiser - video
          and sound never line up so need to edit this in a different app after
          exporting.
        </li>
        <li>
          <strong>White line on background video</strong> - A visible white
          line/artifact appears when using a video as background. Reproduce with
          video background and fix rendering or compositing.
        </li>
        <li>
          <strong>4K export at 60 fps</strong> - 4K resolution with 60 fps
          export fails, is unavailable, or produces incorrect output. Verify and
          fix 4K + 60 fps export path.
        </li>
        <li>
          <strong>4K export produces mirrored output</strong> - Exporting at 4K
          results in mirrored (flipped) footage; same heat/settings previously
          worked. Fix orientation or transform in 4K export pipeline.
        </li>
        <li>
          <strong>Gradient color picker dismisses too quickly</strong> - The
          color picker for gradient background closes before users can
          comfortably adjust sliders, type hex codes, or use options other than
          the color grid. Improve dismiss behavior or keep picker open until
          explicit dismiss.
        </li>
        <li>
          <strong>Crashes with large audio files</strong> - App crashes when
          loading or processing very large audio files. Add size checks,
          streaming, or chunked processing and graceful handling to avoid crash.
        </li>
      </ul>
    </div>
  );
}
