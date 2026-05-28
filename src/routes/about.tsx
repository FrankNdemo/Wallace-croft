import { createFileRoute } from "@tanstack/react-router";
import impactImage from "@/assets/page-hero-about.webp";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import {
  AboutCommunity,
  AboutFounders,
  AboutPartnersAwards,
  AboutQuickLinks,
  AboutReasons,
  AboutStory,
  AboutTeam,
  AboutWellnessTestimonial,
} from "@/components/sections/AboutSections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About - Wallace Croft" },
      { name: "description", content: "Learn about Wallace Croft, our differentiators, and the enterprise scale behind our transformation work." },
      { property: "og:title", content: "About - Wallace Croft" },
      { property: "og:description", content: "Learn about Wallace Croft, our differentiators, and the enterprise scale behind our transformation work." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        className="page-hero-section--lower-copy page-hero-section--mobile-lift-visual"
        eyebrow="About"
        title="Driven by impact"
        description="We build businesses and transform industries with advanced technology."
        image={impactImage}
        images={[impactImage]}
        imageAlt="Wallace Croft about page strategy collaboration"
        visual="mark"
      />
      <AboutStory />
      <AboutFounders />
      <AboutReasons />
      <AboutTeam />
      <AboutWellnessTestimonial />
      <AboutCommunity />
      <AboutPartnersAwards />
      <AboutQuickLinks />
    </SiteLayout>
  );
}
