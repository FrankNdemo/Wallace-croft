import { createFileRoute } from "@tanstack/react-router";
import contactImage from "@/assets/page-hero-contact.webp";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact - Wallace Croft" },
      { name: "description", content: "Start a conversation with Wallace Croft about enterprise transformation, AI, and digital product delivery." },
      { property: "og:title", content: "Contact - Wallace Croft" },
      { property: "og:description", content: "Start a conversation with Wallace Croft about enterprise transformation, AI, and digital product delivery." },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        className="page-hero-section--lower-copy page-hero-section--mobile-lift-visual"
        eyebrow="Contact"
        title="Let's build what is next"
        description="Tell us the goal. We will shape the next move."
        image={contactImage}
        images={[contactImage]}
        imageAlt="Wallace Croft contact strategy session"
        visual="advisor"
      />
      <CtaBanner showLocationMedia />
    </SiteLayout>
  );
}
