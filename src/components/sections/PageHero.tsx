import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  imageAlt: string;
  visual?: "mark" | "brain" | "factory" | "resources" | "case" | "advisor";
  align?: "split" | "center";
  showVisual?: boolean;
  className?: string;
};

function PageHeroArtwork({
  images,
  visual = "mark",
  label,
}: {
  images: string[];
  visual?: PageHeroProps["visual"];
  label: string;
}) {
  const isCarousel = images.length > 1;
  const cycleDuration = images.length * 4;
  const entryLead = 0.65;

  if (images.length === 0) {
    return <GeneratedPageHeroArtwork visual={visual} label={label} />;
  }

  return (
    <div
      className={`page-hero-media page-hero-media--${visual} ${isCarousel ? "page-hero-media--carousel" : "page-hero-media--single"}`}
      role="img"
      aria-label={label}
    >
      <div className="page-hero-media__frames" aria-hidden>
        {images.map((src, index) => (
          <div
            className="page-hero-media__frame"
            key={src}
            style={
              isCarousel
                ? {
                    animationDelay: `${index * 4 - entryLead}s`,
                    animationDuration: `${cycleDuration}s`,
                  }
                : undefined
            }
          >
            <img className="page-hero-media__object" src={src} alt="" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

function GeneratedPageHeroArtwork({
  visual = "mark",
  label,
}: {
  visual?: PageHeroProps["visual"];
  label: string;
}) {
  return (
    <div className={`page-hero-art page-hero-art--${visual}`} role="img" aria-label={label}>
      <div className="page-hero-art__glow" />
      <div className="page-hero-art__floor" aria-hidden>
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} style={{ ["--floor-index" as "--floor-index"]: index }} />
        ))}
      </div>

      {visual === "brain" ? (
        <div className="page-hero-building" aria-hidden>
          <span className="page-hero-building__block page-hero-building__block--one" />
          <span className="page-hero-building__block page-hero-building__block--two" />
          <span className="page-hero-building__block page-hero-building__block--three" />
        </div>
      ) : null}

      {visual === "mark" ? (
        <svg className="page-hero-mark" viewBox="0 0 420 420" fill="none" aria-hidden>
          <path d="M330 92C286 40 198 46 151 103C108 155 111 238 157 287C204 338 286 332 327 278" />
          <path d="M296 125C268 93 215 93 185 126C155 159 155 211 184 244C214 279 267 281 297 248" />
          <path d="M263 158C248 142 221 141 204 157C187 174 186 204 203 222C220 241 249 241 266 223" />
        </svg>
      ) : null}

      {visual === "factory" ? (
        <div className="page-hero-grid-object" aria-hidden>
          <span />
          <span />
          <span />
          <span />
        </div>
      ) : null}

      {visual === "resources" ? (
        <div className="page-hero-book-stack" aria-hidden>
          <span className="page-hero-book page-hero-book--one" />
          <span className="page-hero-book page-hero-book--two" />
          <span className="page-hero-book page-hero-book--three" />
        </div>
      ) : null}

      {visual === "case" ? (
        <div className="page-hero-device" aria-hidden>
          <span className="page-hero-device__bar" />
          <span className="page-hero-device__card page-hero-device__card--one" />
          <span className="page-hero-device__card page-hero-device__card--two" />
        </div>
      ) : null}

      {visual === "advisor" ? (
        <div className="page-hero-advisor" aria-hidden>
          <span className="page-hero-advisor__ring" />
          <span className="page-hero-advisor__node page-hero-advisor__node--one" />
          <span className="page-hero-advisor__node page-hero-advisor__node--two" />
          <span className="page-hero-advisor__node page-hero-advisor__node--three" />
        </div>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  images,
  imageAlt,
  visual = "mark",
  align = "split",
  showVisual = true,
  className = "",
}: PageHeroProps) {
  const centered = align === "center";
  const heroImages = images ?? [];
  const hasVisual = showVisual;

  return (
    <section className={`page-hero-section relative overflow-hidden bg-navy-deep text-white ${className}`}>
      <div className="page-hero-ambient" aria-hidden />
      <div className="container-pro page-hero-shell relative z-10 flex flex-col">
        <div className="page-hero-breadcrumb">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>{eyebrow}</span>
        </div>

        <div
          className={
            centered
              ? "page-hero-layout page-hero-layout--center"
              : `page-hero-layout ${hasVisual ? "" : "page-hero-layout--no-visual"}`
          }
        >
          <div className={centered ? "page-hero-copy page-hero-copy--center" : "page-hero-copy"}>
            <h1 className="page-hero-title font-display font-normal leading-[1.04] text-white">
              {title}
            </h1>
            <p
              className={
                centered
                  ? "page-hero-description page-hero-description--center"
                  : "page-hero-description"
              }
            >
              {description}
            </p>
          </div>

          {hasVisual ? (
            <div
              className={
                centered
                  ? "page-hero-visual-slot page-hero-visual-slot--center"
                  : "page-hero-visual-slot"
              }
            >
              <PageHeroArtwork images={heroImages} visual={visual} label={imageAlt} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
