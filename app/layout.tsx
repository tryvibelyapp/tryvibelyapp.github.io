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
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
