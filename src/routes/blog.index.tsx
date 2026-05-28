import { createFileRoute } from "@tanstack/react-router";
import { BlogListingPage } from "@/components/sections/BlogListingPage";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return <BlogListingPage activeCategory="Explore" />;
}
