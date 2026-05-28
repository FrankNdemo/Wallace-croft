import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  BlogListingPage,
  slugToCategory,
} from "@/components/sections/BlogListingPage";
import { blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/category/$category")({
  component: BlogCategoryPage,
  head: ({ params }) => {
    const category = slugToCategory(params.category);
    const title = category ? `${category} Insights - Wallace Croft` : "Blog - Wallace Croft";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: category
            ? `Wallace Croft ${category.toLowerCase()} insights and practical transformation thinking.`
            : "Wallace Croft insights on digital, data, AI, and transformation.",
        },
      ],
    };
  },
});

function BlogCategoryPage() {
  const { category: categorySlug } = Route.useParams();
  const category = slugToCategory(categorySlug);

  if (!category || category === "Explore") {
    throw notFound();
  }

  return (
    <BlogListingPage
      activeCategory={category}
      breadcrumbLabel={category}
      latestTitle="Latest Insights"
      posts={blogPosts.filter((post) => post.category === category)}
    />
  );
}
