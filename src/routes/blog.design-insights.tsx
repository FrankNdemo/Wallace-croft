import { createFileRoute } from "@tanstack/react-router";
import { InsightArticlePage } from "@/components/sections/InsightArticlePage";
import { insightArticles } from "@/data/insightArticles";

export const Route = createFileRoute("/blog/design-insights")({
  component: DesignInsightsPage,
  head: () => ({
    meta: [
      { title: "Design Insights - Wallace Croft" },
      {
        name: "description",
        content: "Wallace Croft design insights for scalable digital products and transformation adoption.",
      },
    ],
  }),
});

function DesignInsightsPage() {
  return <InsightArticlePage article={insightArticles["design-insights"]} />;
}
