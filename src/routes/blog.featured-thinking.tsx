import { createFileRoute } from "@tanstack/react-router";
import { InsightArticlePage } from "@/components/sections/InsightArticlePage";
import { insightArticles } from "@/data/insightArticles";

export const Route = createFileRoute("/blog/featured-thinking")({
  component: FeaturedThinkingPage,
  head: () => ({
    meta: [
      { title: "Featured Thinking - Wallace Croft" },
      {
        name: "description",
        content: "Featured Wallace Croft thinking on strategy, AI, engineering, and transformation.",
      },
    ],
  }),
});

function FeaturedThinkingPage() {
  return <InsightArticlePage article={insightArticles["featured-thinking"]} />;
}
