import { readFileSync } from "node:fs";
import path from "node:path";

// A screenshot of the app in an article, with optional numbered markers, an
// outlined control and a crop. Every position is a fraction (0 to 1) of the
// full picture, so a refreshed screenshot of the same screen keeps them in
// place and the image file itself is never edited.

type Point = { x: number; y: number };
type Rect = { x: number; y: number; w: number; h: number };

const accent = "#7A78FF";

// Width and height from a PNG's header, read when the page is built.
function pngSize(src: string): { width: number; height: number } {
  const file = readFileSync(path.join(process.cwd(), "public", src));
  return { width: file.readUInt32BE(16), height: file.readUInt32BE(20) };
}

const percent = (n: number) => `${n * 100}%`;

export default function Screenshot({
  src,
  alt,
  markers = [],
  outline,
  crop,
}: {
  src: string;
  alt: string;
  /** Numbered dots, numbered in order from 1. */
  markers?: Point[];
  /** A rounded box around one control. */
  outline?: Rect;
  /** Show only this part of the picture. */
  crop?: Rect;
}) {
  const { width, height } = pngSize(src);
  const area = crop ?? { x: 0, y: 0, w: 1, h: 1 };
  // Positions in the full picture, moved into the cropped area.
  const place = (p: Point) => ({
    left: percent((p.x - area.x) / area.w),
    top: percent((p.y - area.y) / area.h),
  });

  return (
    <figure className={`mt-6 ${crop ? "max-w-md" : "max-w-xs"}`}>
      <div
        className="relative overflow-hidden rounded-[1.25rem] border border-zinc-800"
        style={{ aspectRatio: `${area.w * width} / ${area.h * height}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute max-w-none"
          style={{
            width: percent(1 / area.w),
            height: percent(1 / area.h),
            left: percent(-area.x / area.w),
            top: percent(-area.y / area.h),
          }}
        />
        {outline && (
          <div
            aria-hidden
            className="absolute rounded-xl border-[3px]"
            style={{
              ...place(outline),
              width: percent(outline.w / area.w),
              height: percent(outline.h / area.h),
              borderColor: accent,
              boxShadow: `0 0 0 4px ${accent}40`,
            }}
          />
        )}
        {markers.map((marker, index) => (
          <span
            key={index}
            aria-hidden
            className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-semibold text-white ring-2 ring-black"
            style={{ ...place(marker), backgroundColor: accent }}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </figure>
  );
}

// The badge that matches a marker, shown beside the heading that explains it.
export function MarkerHeading({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h3 className="mt-8 flex items-center gap-3 text-lg font-semibold text-zinc-50">
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm text-white"
        style={{ backgroundColor: accent }}
      >
        {n}
      </span>
      {children}
    </h3>
  );
}
