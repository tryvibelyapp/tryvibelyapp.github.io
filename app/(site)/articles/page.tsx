import type { Metadata } from "next";
import ArticleList from "../_components/ArticleList";
import StillHaveQuestions from "../_components/StillHaveQuestions";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: { absolute: "Vibely Tutorials and News" },
  description:
    "Step-by-step tutorials for making music visualizer videos with Vibely on iPhone, and news about the app.",
  alternates: { canonical: "/articles" },
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <div className="flex w-full flex-col gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-50">Articles</h1>
      <p className="max-w-2xl text-base leading-7 text-zinc-400">
        Tutorials that walk you through making something with Vibely, step by step, and news
        about the app.
      </p>
      <ArticleList articles={articles} />
      <StillHaveQuestions />
    </div>
  );
}
