import { Outlet, createFileRoute, useMatches } from "@tanstack/react-router";
import caseStudiesImage from "@/assets/page-hero-case-studies.webp";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { AboutWellnessTestimonial } from "@/components/sections/AboutSections";
import { CaseStudyContact, CaseStudyFooter, CaseStudyListing } from "@/components/sections/CaseStudies";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesLayout,
  head: () => ({
    meta: [
      { title: "Case Studies - Wallace Croft" },
      { name: "description", content: "Explore Wallace Croft case studies through a motion-rich showcase of enterprise transformation work." },
      { property: "og:title", content: "Case Studies - Wallace Croft" },
      { property: "og:description", content: "Explore Wallace Croft case studies through a motion-rich showcase of enterprise transformation work." },
    ],
  }),
});

function CaseStudiesLayout() {
  const matches = useMatches();
  const hasChildMatch = matches.some(
    (match) => match.routeId !== "/case-studies" && match.pathname.startsWith("/case-studies"),
  );

  return hasChildMatch ? <Outlet /> : <CaseStudiesPage />;
}

function CaseStudiesPage() {
  return (
    <SiteLayout hideFooter>
      <PageHero
        className="page-hero-section--lower-copy page-hero-section--mobile-lift-visual case-studies-page-hero"
        eyebrow="Case Studies"
        title="What We Have Done"
        description="Real outcomes from product, data, and AI work."
        image={caseStudiesImage}
        images={[caseStudiesImage]}
        imageAlt="Wallace Croft case study strategy session"
        visual="case"
      />
      <CaseStudyListing />
      <AboutWellnessTestimonial />
      <CaseStudyContact />
      <CaseStudyFooter />
    </SiteLayout>
  );
}
