// The handbook's chapters in reading order. Each chapter's articles are the MDX
// files in the folder named after its slug, ordered by their own `meta.order`.
// A chapter with no articles yet is left out of the sidebar.
export const chapters = [
  { slug: "getting-started", title: "Getting started" },
  { slug: "music", title: "Music" },
  { slug: "editor", title: "Editor" },
  { slug: "background", title: "Background" },
  { slug: "layers", title: "Layers" },
  { slug: "reacting-to-music", title: "Reacting to music" },
  { slug: "effects", title: "Effects" },
  { slug: "export", title: "Export" },
  { slug: "settings", title: "Settings" },
];

// The app version the handbook describes. `/release` bumps it.
export const appVersion = "4.0.2";
