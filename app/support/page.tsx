import type { Metadata } from "next";

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
      <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Pick one of the email templates below so we can help faster:
      </p>
      <ul className="max-w-2xl list-disc ml-6 space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="mailto:contact@moonkata.com?subject=Feature%20Request%20for%20Vibely%20-%20Music%20Visualizer&body=What%20feature%20you%20would%20like%20to%20request%3F%20Be%20specific%20and%20provide%20examples%0D%0A%0D%0A___%0D%0A%0D%0AAttach%20example%20screenshots%20or%20screen%20recordings%20or%20YouTube%2C%20TikTok%2C%20Instagram%20links%0D%0A"
          >
            Feature request email
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="mailto:contact@moonkata.com?subject=Bug%20Report%20for%20Vibely%20-%20Music%20Visualizer&body=What%E2%80%99s%20not%20working%20in%20Vibely%20for%20you%3F%20Be%20specific%20and%20provide%20examples.%20Steps%20to%20reproduce%20are%20welcomed%20%F0%9F%99%8F%F0%9F%8F%BB%0D%0A%0D%0A___%0D%0A%0D%0AApp%20version%20(For%20example%20v3.8.6)%3A%0D%0A%0D%0A___%0D%0A%0D%0AOS%20version%20(For%20example%20iOS%2026.3)%3A%0D%0A%0D%0A___%0D%0A%0D%0AAttach%20screenshots%20or%20screen%20recordings"
          >
            Bug report email
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href="mailto:contact@moonkata.com?subject=General%20Question%20about%20Vibely%20-%20Music%20Visualizer&body=How%20can%20we%20help%20you%3F%0D%0A%0D%0A___%0D%0A%0D%0APlease%20include%20any%20helpful%20details%2C%20screenshots%2C%20or%20links."
          >
            General support email
          </a>
        </li>
      </ul>
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
