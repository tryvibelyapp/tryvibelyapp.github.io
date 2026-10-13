import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // A static site on GitHub Pages. Set here rather than left to the Pages
  // action, which can't edit a config wrapped in createMDX.
  output: "export",
  images: { unoptimized: true },
};

// Handbook and article pages are MDX files under content/, imported by their routes.
const withMDX = createMDX({});

export default withMDX(nextConfig);
