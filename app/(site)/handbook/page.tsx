import type { Metadata } from "next";
import HandbookPage from "../_components/HandbookPage";
import { introductionHref, loadIntroduction } from "@/lib/handbook";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await loadIntroduction();
  return {
    title: { absolute: "Vibely Handbook" },
    description: meta.description,
    alternates: { canonical: introductionHref },
  };
}

export default async function IntroductionPage() {
  const { default: Content, meta } = await loadIntroduction();
  return (
    <HandbookPage href={introductionHref} title={meta.title}>
      <Content />
    </HandbookPage>
  );
}
