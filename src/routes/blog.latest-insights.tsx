import { createFileRoute } from "@tanstack/react-router";
import { InsightArticlePage } from "@/components/sections/InsightArticlePage";
import { insightArticles } from "@/data/insightArticles";

export const Route = createFileRoute("/blog/latest-insights")({
  component: LatestInsightsPage,
  head: () => ({
    meta: [
      { title: "Latest Insights - Wallace Croft" },
      {
        name: "description",
        content: "Wallace Croft latest thinking on transformation intelligence and technology strategy.",
      },
    ],
  }),
});

function LatestInsightsPage() {
  return <InsightArticlePage article={insightArticles["latest-insights"]} />;
}
