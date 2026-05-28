import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import strategy from "@/assets/bright-strategy.webp";
import services from "@/assets/bright-services.webp";
import { SiteLayout } from "@/components/layout/SiteLayout";

const guides: Record<string, { title: string; label: string; image: string; summary: string }> = {
  "ai-agent-guide": {
    title: "The AI Agent Costly Mistakes Prevention Guide",
    label: "Informational Guide",
    image: strategy,
    summary:
      "Critical foundations for AI agent success, from workflow fit and data access to guardrails, measurement, and adoption planning.",
  },
  "ai-agents-use-cases": {
    title: "100 Real-world Use Cases of AI Agents for Enterprises",
    label: "Informational Guide",
    image: services,
    summary:
      "A practical catalog of enterprise AI agent opportunities across customer service, sales, operations, finance, supply chain, and field teams.",
  },
};

export const Route = createFileRoute("/resources/$slug")({
  component: ResourceDetail,
});

function ResourceDetail() {
  const { slug } = Route.useParams();
  const guide = guides[slug] ?? guides["ai-agent-guide"];

  return (
    <SiteLayout>
      <article className="bg-[#f4efe5] pt-36">
        <div className="container-pro pb-24">
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm text-navy/70 transition hover:text-orange">
            <ArrowLeft className="h-4 w-4" />
            Back to resources
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="text-[11px] font-normal uppercase text-orange">{guide.label}</div>
              <h1 className="mt-5 max-w-4xl font-display text-[2.65rem] font-normal leading-tight text-navy sm:text-[4.2rem]">
                {guide.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink-muted">{guide.summary}</p>
            </div>
            <img src={guide.image} alt={guide.title} className="h-[430px] w-full object-cover" width={1600} height={1000} />
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
