import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import industriesImage from "@/assets/page-hero-industries.webp";
import { Logo } from "@/components/brand/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageHero } from "@/components/sections/PageHero";
import { SocialIcon } from "@/components/sections/CaseStudies";
import { Reveal } from "@/components/ui-pro/Reveal";
import { useContactSubmit } from "@/hooks/use-contact-submit";

const industries = [
  {
    title: "Retail",
    body: "Enabling digital experiences for retail and FMCG consumer experiences.",
    image:
      "https://images.pexels.com/photos/27175531/pexels-photo-27175531.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Manufacturing",
    body: "Build smart factories, deploy IoT, and automate processes.",
    image:
      "https://images.pexels.com/photos/31321050/pexels-photo-31321050.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Distribution",
    body: "Digitize processes, reduce costs, and seize emerging opportunities.",
    image:
      "https://images.pexels.com/photos/4483772/pexels-photo-4483772.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Building Materials",
    body: "Develop robust B2B and D2C capabilities and provide exceptional experiences.",
    image:
      "https://images.pexels.com/photos/28906310/pexels-photo-28906310.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Healthcare",
    body: "Build secure patient portals, care coordination systems, health data integrations, and intelligent clinical workflows.",
    image:
      "https://images.pexels.com/photos/6303646/pexels-photo-6303646.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Financial Services",
    body: "Develop trusted banking platforms, payment systems, risk engines, and real-time financial analytics.",
    image:
      "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Logistics",
    body: "Create fleet, warehouse, inventory, and delivery systems that make every movement visible and efficient.",
    image:
      "https://images.pexels.com/photos/6169640/pexels-photo-6169640.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
] as const;

const footerCols = [
  {
    title: "Company",
    items: ["About", "Services", "Case Studies", "Resources", "Approach", "Careers"],
  },
  {
    title: "Digital Services",
    items: [
      "AI Development Services",
      "Digital Transformation",
      "Custom Software",
      "Technology Modernization",
      "Data Strategy",
      "Web Development",
    ],
  },
  {
    title: "Industries",
    items: [
      "Retail",
      "Manufacturing",
      "Distribution",
      "Building Materials",
      "Healthcare",
      "Finance",
    ],
  },
  {
    title: "GenAI Services",
    items: [
      "GenAI Software Development",
      "AI Agent Development",
      "LLM Development",
      "AI Strategy & Consulting",
    ],
  },
] as const;

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries - Wallace Croft" },
      {
        name: "description",
        content:
          "See how Wallace Croft adapts enterprise transformation across retail, manufacturing, distribution, healthcare, finance, and logistics.",
      },
      { property: "og:title", content: "Industries - Wallace Croft" },
      {
        property: "og:description",
        content:
          "See how Wallace Croft adapts enterprise transformation across retail, manufacturing, distribution, healthcare, finance, and logistics.",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <div className="industries-page min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar />
      <main>
        <PageHero
          className="page-hero-section--lower-copy page-hero-section--mobile-lift-visual"
          eyebrow="Industries"
          title="All Industries"
          description="Become a leader by moving early and building smarter."
          image={industriesImage}
          images={[industriesImage]}
          imageAlt="Wallace Croft industries collaboration environment"
          visual="factory"
        />

        <section className="industries-grid-section">
          <div className="container-pro industries-grid">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} i={index % 2}>
                <article
                  className={`industry-card ${index % 2 === 1 ? "industry-card--copy-first" : ""}`}
                >
                  <div className="industry-card__copy">
                    <h2>{industry.title}</h2>
                    <p>{industry.body}</p>
                  </div>
                  <img src={industry.image} alt={`${industry.title} industry`} loading="lazy" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <IndustryContact />
      </main>
      <IndustriesFooter />
    </div>
  );
}
function IndustryContact() {
  const { handleSubmit, isSubmitting, submitMessage, submitState } = useContactSubmit({
    source: "industries-contact",
  });

  return (
    <section className="industries-contact">
      <div className="industries-contact__glow" aria-hidden />
      <div className="industries-contact__copy">
        <h2>Let's find out what we can do for you!</h2>
        <p>Tell us about your needs</p>
      </div>
      <form className="industries-contact__form" method="post" onSubmit={handleSubmit}>
        <div className="industries-form-grid">
          <input name="fullName" placeholder="Full Name *" required />
          <input name="email" type="email" placeholder="Email *" required />
          <input name="company" placeholder="Company *" required />
          <input name="role" placeholder="Role" />
        </div>
        <textarea name="message" rows={3} placeholder="How can we help? *" required />
        <label className="industries-check">
          <input name="consentContact" type="checkbox" />
          <span>I agree to receive communications from Wallace Croft.</span>
        </label>
        <label className="industries-check">
          <input name="consentMarketing" type="checkbox" />
          <span>I agree to receive information about products, services, and events.</span>
        </label>
        {submitMessage ? (
          <p
            className={`contact-form__status ${submitState === "error" ? "contact-form__status--error" : "contact-form__status--success"}`}
            role="status"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        ) : null}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="submit-spinner" aria-hidden />
              Submitting
            </>
          ) : (
            <>
              Submit <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </section>
  );
}

function IndustriesFooter() {
  const [openSections, setOpenSections] = useState(() => new Set(["Industries"]));
  const socialLinks = [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/wallace-croft" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/wallacecroft/" },
  ] as const;

  const toggleSection = (title: string) => {
    setOpenSections((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  return (
    <footer className="industries-footer">
      <div className="container-pro">
        <div className="industries-footer__grid">
          <div className="industries-footer__brand">
            <Logo />
            <div className="industries-footer__socials" aria-label="Social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={`Wallace Croft on ${item.label}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon type={item.icon} />
                </a>
              ))}
            </div>
            <p>&copy;{new Date().getFullYear()} Wallace Croft. All rights reserved.</p>
            <div className="industries-footer__legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </div>
          </div>
          {footerCols.map((col) => {
            const expanded = openSections.has(col.title);

            return (
              <nav key={col.title} className="industries-footer__col" data-expanded={expanded}>
                <button
                  type="button"
                  onClick={() => toggleSection(col.title)}
                  aria-expanded={expanded}
                  aria-controls={`industries-footer-${col.title.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {col.title}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <ul id={`industries-footer-${col.title.toLowerCase().replaceAll(" ", "-")}`}>
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link to={col.title === "Industries" ? "/industries" : "/services"}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
function IndustriesFooterLegacy() {
  const [openSections, setOpenSections] = useState(() => new Set(["Industries"]));
  const socialLinks = [
    { label: "Facebook", icon: "facebook" },
    { label: "LinkedIn", icon: "linkedin" },
    { label: "X", icon: "x" },
    { label: "Medium", icon: "medium" },
    { label: "YouTube", icon: "youtube" },
    { label: "Instagram", icon: "instagram" },
  ] as const;

  const toggleSection = (title: string) => {
    setOpenSections((current) => {
      const next = new Set(current);

      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }

      return next;
    });
  };

  return (
    <footer className="industries-footer">
      <div className="container-pro">
        <div className="industries-footer__grid">
          <div className="industries-footer__brand">
            <Logo />
            <div className="industries-footer__socials" aria-label="Social links">
              {["f", "in", "x", "m", "▶", "◎"].map((item) => (
                <a
                  key={item}
                  href="https://www.linkedin.com/company/wallace-croft"
                  aria-label={item}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item}
                </a>
              ))}
            </div>
            <p>&copy;{new Date().getFullYear()} Wallace Croft. All rights reserved.</p>
            <div className="industries-footer__legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </div>
          </div>
          {footerCols.map((col) => (
            <nav key={col.title} className="industries-footer__col">
              <button type="button">
                {col.title}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>
                    <Link to={col.title === "Industries" ? "/industries" : "/services"}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
