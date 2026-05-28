import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Boxes, Check, FileText, Network, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CaseStudyContact, CaseStudyFooter, caseStudyStories } from "@/components/sections/CaseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseDetail,
});

function CaseDetail() {
  const { slug } = Route.useParams();
  const study = caseStudyStories.find((item) => item.slug === slug) ?? caseStudyStories[0];
  const moreStories = caseStudyStories.filter((item) => item.slug !== study.slug).slice(0, 3);
  const galleryImages =
    "galleryImages" in study
      ? study.galleryImages
      : study.sections.slice(0, 2).map((section) => ({
          title: section.title,
          image: section.image,
        }));
  const featureCards =
    "featureCards" in study
      ? study.featureCards
      : study.features.map((feature, index) => ({
          title: feature,
          body: `${feature} was shaped into a clearer, more usable part of the client experience.`,
          bullets: ["Clear structure", "User-ready content", "Responsive delivery"],
          visual: ["network", "tiles", "stack", "files"][index % 4],
        }));
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setFeatureIndex((value) => (value + 1) % featureCards.length);
    }, 4200);

    return () => window.clearTimeout(timeout);
  }, [featureCards.length, featureIndex]);

  const visibleFeatures = useMemo(
    () => [0, 1].map((offset) => featureCards[(featureIndex + offset) % featureCards.length]),
    [featureCards, featureIndex],
  );

  const nextFeature = () => setFeatureIndex((value) => (value + 1) % featureCards.length);
  const previousFeature = () => setFeatureIndex((value) => (value - 1 + featureCards.length) % featureCards.length);

  return (
    <SiteLayout hideFooter navVariant="light">
      <article className="case-detail-page bg-white">
        <div className="container-pro case-detail-hero">
          <nav className="case-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <Link to="/case-studies">Case Studies</Link>
            <span>&gt;</span>
            <span>{study.title}</span>
          </nav>

          <div className="case-detail-hero__grid">
            <h1>{study.title}</h1>
            <p>{study.subtitle}</p>
          </div>

          <img
            className="case-detail-hero__image"
            src={study.heroImage}
            alt={study.title}
            width={1800}
            height={980}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        <section className="container-pro case-detail-overview">
          <aside>
            <span>Services</span>
            {study.services.map((service) => (
              <strong key={service}>{service}</strong>
            ))}
            {study.sourceUrl ? (
              <a href={study.sourceUrl} target="_blank" rel="noreferrer">
                Visit Website <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </aside>
          <div>
            <h2>Overview</h2>
            {study.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="container-pro case-detail-stats">
          {study.stats.map(([value, label]) => (
            <div key={`${value}-${label}`}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="container-pro case-detail-gallery" aria-label={`${study.title} website visuals`}>
          {galleryImages.map((section) => (
            <figure key={section.title}>
              <img
                src={section.image}
                alt={section.title}
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            </figure>
          ))}
        </section>

        <section className="container-pro case-detail-foundation">
          <div>
            <h2>Building the Foundation for a Clearer Digital Experience</h2>
            <p>
              The work focused on turning the client website into a confident first conversation: strong enough for
              first-time visitors, structured enough for decision makers, and calm enough for people comparing service
              options.
            </p>
            <p>
              Each section was shaped to connect the hero promise with practical service paths, trust signals, and clear
              next steps so the site feels complete when a case is opened from the listing.
            </p>
          </div>
        </section>

        <section className="container-pro case-detail-feature-band">
          <div className="case-detail-feature-band__heading">
            <h2>Key Features</h2>
            <div>
              <button type="button" onClick={previousFeature} aria-label="Previous feature">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={nextFeature} aria-label="Next feature">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="case-detail-feature-slider" aria-live="polite">
            <div className="case-detail-feature-track" key={featureIndex}>
              {visibleFeatures.map((feature) => (
                <article key={`${featureIndex}-${feature.title}`} className="case-detail-feature-card">
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.body}</p>
                    <ul>
                      {feature.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check className="h-3.5 w-3.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <FeatureVisual type={feature.visual} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-detail-sections">
          {study.sections.map((section, index) => (
            <div className="container-pro case-detail-split" key={section.title}>
              <img
                src={section.image}
                alt={section.title}
                width={1200}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <div className={index % 2 === 1 ? "case-detail-split__copy case-detail-split__copy--first" : "case-detail-split__copy"}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="container-pro case-detail-impact">
          <div>
            <h2>Impact</h2>
            <p>{study.impact}</p>
            <div className="case-detail-impact__stats">
              {study.stats.map(([value, label]) => (
                <div key={`impact-${value}-${label}`}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={study.image} alt="" width={900} height={700} loading="eager" fetchPriority="high" decoding="sync" />
        </section>

        <section className="container-pro case-detail-cta">
          <div>
            <h2>Want this kind of clarity for your next digital experience?</h2>
            <Link to="/contact">
              Talk to An Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="container-pro case-detail-more">
          <h2>More Stories</h2>
          <div>
            {moreStories.map((story) => (
              <Link key={story.slug} to="/case-studies/$slug" params={{ slug: story.slug }}>
                <span className="case-detail-more__media">
                  <img
                    src={story.image}
                    alt={story.title}
                    width={700}
                    height={520}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </span>
                <span>{story.eyebrow}</span>
                <h3>{story.title}</h3>
                <p>{story.cardDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <CaseStudyContact />
      <CaseStudyFooter />
    </SiteLayout>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "tiles") {
    return (
      <div className="case-feature-visual case-feature-visual--tiles" aria-hidden="true">
        {["CRM", "Cloud", "Web", "Data", "Ops", "AI", "API", "UX", "BI"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  }

  if (type === "stack") {
    return (
      <div className="case-feature-visual case-feature-visual--stack" aria-hidden="true">
        <span />
        <span />
        <span />
        <strong>
          <Sparkles className="h-5 w-5" />
          Experience layer
        </strong>
      </div>
    );
  }

  if (type === "files") {
    return (
      <div className="case-feature-visual case-feature-visual--files" aria-hidden="true">
        {["TXT", "PDF", "WEB", "DATA"].map((item) => (
          <span key={item}>
            <FileText className="h-4 w-4" />
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="case-feature-visual case-feature-visual--network" aria-hidden="true">
      <strong>
        <Network className="h-5 w-5" />
      </strong>
      <span><Boxes className="h-4 w-4" /> Core</span>
      <span><Boxes className="h-4 w-4" /> Teams</span>
      <span><Boxes className="h-4 w-4" /> Support</span>
    </div>
  );
}
