import { Outlet, createFileRoute, useMatches } from "@tanstack/react-router";
import { BlogListingPage } from "@/components/sections/BlogListingPage";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
  head: () => ({
    meta: [
      { title: "Blog - Wallace Croft" },
      {
        name: "description",
        content: "Wallace Croft insights on digital, data, AI, and transformation.",
      },
      { property: "og:title", content: "Blog - Wallace Croft" },
      {
        property: "og:description",
        content: "Wallace Croft insights on digital, data, AI, and transformation.",
      },
    ],
  }),
});

function BlogLayout() {
  const matches = useMatches();
  const hasChildMatch = matches.some((match) => match.routeId !== "/blog" && match.pathname.startsWith("/blog"));

  return hasChildMatch ? <Outlet /> : <BlogListingPage activeCategory="Explore" />;
}
