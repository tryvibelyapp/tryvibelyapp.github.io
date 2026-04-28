import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL("https://tryvibely.app");
const siteName = "Vibely - Music Visualizer";
const siteBannerURL = "/assets/banner.jpg";
const title = "Vibely - Music Visualizer";
const description = "Music Video Maker for Creators";
const keywords = [
  "vibely",
  "music",
  "visualizer",
  "ios",
  "app",
  "video",
  "maker",
  "tiktok",
  "reels",
  "shorts",
  "spotify",
  "canvas",
  "animate",
  "beat",
  "promo",
  "cover",
  "album",
  "intro",
  "audio",
  "song",
  "visualisation",
  "mp3",
];

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  applicationName: siteName,
  keywords: keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: title,
    description: description,
    siteName: siteName,
    images: [
      {
        url: siteBannerURL,
        width: 1024,
        height: 629,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [siteBannerURL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-6 py-16 px-16 bg-white dark:bg-black sm:items-start">
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
              <div className="flex flex-col gap-2 text-base font-medium flex-row">
                <Link href="/">Home</Link>
                <span>·</span>
                <Link href="/support">Support</Link>
                <span>·</span>
                <Link href="/privacy">Privacy</Link>
                <span>·</span>
                <Link href="/terms">Terms</Link>
              </div>
              <p className="font-mono text-xs">
                Built with ❤️ by Aibek &copy; {new Date().getFullYear()}
              </p>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
