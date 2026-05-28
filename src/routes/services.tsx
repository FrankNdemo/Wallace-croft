import { Outlet, createFileRoute, useMatches } from "@tanstack/react-router";
import servicesCloudImage from "@/assets/services-hero-cloud.webp";
import servicesInnovationImage from "@/assets/services-hero-innovation.webp";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesDeepDive } from "@/components/sections/Services";

export const Route = createFileRoute("/services")({
  component: ServicesLayout,
  head: () => ({
    meta: [
      { title: "Services - Wallace Croft" },
      {
        name: "description",
        content:
          "Explore Wallace Croft services across consulting, AI, commerce, and enterprise transformation.",
      },
      { property: "og:title", content: "Services - Wallace Croft" },
      {
        property: "og:description",
        content:
          "Explore Wallace Croft services across consulting, AI, commerce, and enterprise transformation.",
      },
    ],
  }),
});

function ServicesLayout() {
  const matches = useMatches();
  const hasChildMatch = matches.some((match) => match.routeId !== "/services" && match.pathname.startsWith("/services"));

  return hasChildMatch ? <Outlet /> : <ServicesPage />;
}

function ServicesPage() {
  return (
    <div className="services-page">
      <SiteLayout>
        <PageHero
          className="page-hero-section--lower-copy"
          eyebrow="Services"
          title="Digital + Data + AI"
          description="End-to-end partner to build, scale, and transform businesses with technology."
          image={servicesCloudImage}
          images={[servicesCloudImage, servicesInnovationImage]}
          imageAlt="Wallace Croft services and operations center"
          visual="brain"
        />
        <ServicesDeepDive />
      </SiteLayout>
    </div>
  );
}
