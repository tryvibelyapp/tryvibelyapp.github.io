import Image from "next/image";

export default function Home() {
  return (
    <>
      <video
        muted
        loop
        autoPlay
        playsInline
        poster="/assets/preview.png"
        preload="none"
        className="max-w-[200px] rounded-[20px]"
      >
        <source src="/assets/preview.webm" type="video/webm" />
        <source src="/assets/preview.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Vibely - Music Visualizer for iOS & Mac
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <a
            href="https://tiktok.com/@dmsongs5"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-950 dark:text-zinc-50"
          >
            @dmsongs5
          </a>{" "}
          built 700K followers and 30M TikTok likes using Vibely. Now it's your
          turn. 12 visualizers. 4K/60fps export.
        </p>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Your music deserves great visuals.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <a
          className="flex items-center justify-center gap-2 rounded-full transition-colors"
          href="https://apps.apple.com/app/id1528056717"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/appstore.svg"
            alt="AppStore"
            width={200}
            height={200 * 0.29333333333}
          />
        </a>
      </div>
    </>
  );
}
