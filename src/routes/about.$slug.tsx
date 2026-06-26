import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Facebook, Globe, Instagram, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { founderProfiles } from "@/components/sections/AboutSections";

export const Route = createFileRoute("/about/$slug")({
  component: FounderProfilePage,
  head: ({ params }) => {
    const founder = founderProfiles.find((item) => item.slug === params.slug);
    const title = founder ? `${founder.name} - Wallace Croft` : "About - Wallace Croft";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: founder?.bio ?? "Learn more about Wallace Croft founders.",
        },
      ],
    };
  },
});

function FounderProfilePage() {
  const { slug } = Route.useParams();
  const founder = founderProfiles.find((item) => item.slug === slug);
  const otherFounders = founderProfiles.filter((item) => item.slug !== slug);

  if (!founder) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <section id="founder-bio" className="founder-profile-page bg-white py-16 text-navy lg:py-20">
        <div className="container-pro">
          <nav className="founder-profile-breadcrumb" aria-label="Breadcrumb">
            <Link to="/about" hash="founders" className="founder-profile-breadcrumb__link">
              About
            </Link>
            <span className="founder-profile-breadcrumb__divider">&gt;</span>
            <span className="founder-profile-breadcrumb__name">{founder.name}</span>
          </nav>

          <div className="founder-profile-hero mt-10 grid gap-12 lg:grid-cols-[minmax(320px,36rem)_1fr] lg:items-center">
            <div className="founder-profile-hero__image overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-[0_35px_85px_-45px_rgba(15,23,42,0.22)]">
              <img
                src={founder.image}
                alt={founder.alt}
                className="founder-profile-hero__photo"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="founder-profile-hero__copy max-w-3xl">
              <h1 className="founder-profile-name font-display text-[3rem] font-normal leading-[1.02] sm:text-[3.75rem]">
                {founder.name}
              </h1>
              <p className="founder-profile-title mt-4 text-[0.95rem] uppercase tracking-[0.18em] text-navy/75">
                {founder.title}
              </p>
              <div className="founder-profile-follow mt-6 flex flex-wrap items-center gap-4 text-[0.95rem] text-navy/75">
                <span className="font-semibold text-navy">Follow on:</span>
                <a href="#" className="founder-profile-social" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="founder-profile-social" aria-label="Globe">
                  <Globe className="h-4 w-4" />
                </a>
                <a href="#" className="founder-profile-social" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="founder-profile-details mt-16 space-y-6 text-[0.95rem] leading-8 text-navy/80">
            {founder.bio.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="founder-profile-more mt-14" aria-label="Other founder profiles">
            {otherFounders.map((item) => (
              <Link
                key={item.slug}
                to="/about/$slug"
                params={{ slug: item.slug }}
                hash="founder-bio"
                className="founder-profile-more__card"
              >
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.title}</small>
                </span>
                <em>Read bio</em>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/about"
              hash="founders"
              className="flex items-center gap-2 text-orange hover:text-orange/80 transition-colors font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
