import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Stats } from "@/components/sections/Stats";
import { Differentiators } from "@/components/sections/Differentiators";
import { Perspectives } from "@/components/sections/Perspectives";
import { Insights } from "@/components/sections/Insights";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Wallace Croft - Driving Business Transformation Through Technology" },
      {
        name: "description",
        content:
          "Wallace Croft partners with enterprises on consulting, engineering, cloud, AI, and managed services that create lasting impact.",
      },
      { property: "og:title", content: "Wallace Croft - Innovate Forward" },
      { property: "og:description", content: "Driving business transformation through technology." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Wallace Croft",
          slogan: "Innovate Forward",
          url: "https://www.wallacecroft.com",
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <LogoMarquee />
      <Services />
      <CaseStudies />
      <Stats />
      <Differentiators />
      <Perspectives />
      <Insights />
    </SiteLayout>
  );
}
