// An iPhone screenshot inside the device mockup the App Store screenshots use.
// The screen rectangle is measured inside the mockup (Services/appstore/store/
// Vibely/shots.json in the iOS repo); the mockup paints over the screenshot so the
// Dynamic Island stays on top.
export default function Device({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[446/920] w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute object-cover"
        style={{
          left: "4.48%",
          top: "2.5%",
          width: "90.13%",
          height: "95%",
          borderRadius: "3.9% / 1.8%",
          objectPosition: "top",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/handbook/bezel-iphone.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
