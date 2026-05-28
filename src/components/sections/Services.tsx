import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui-pro/Reveal";
import { useContactSubmit } from "@/hooks/use-contact-submit";

const servicesExpertImage = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200";
const innovationLabImage = "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1400";
const teamAugmentationImage = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400";

const offerings = [
  {
    icon: "strategy",
    title: "Consulting & Advisory",
    desc: "Strategic insight and expert guidance to help teams make confident decisions and build the right path to success.",
  },
  {
    icon: "agent",
    title: "Managed Services",
    desc: "End-to-end management and support that ensures reliability, security, and performance so teams can focus on what matters.",
  },
  {
    icon: "software",
    title: "Engineering & Development",
    desc: "Robust, scalable, and future-ready software solutions that solve real business challenges.",
  },
  {
    icon: "commerce",
    title: "Integration & Interoperability",
    desc: "Connected systems, applications, and data for a unified, efficient, and agile digital ecosystem.",
  },
  {
    icon: "enterprise",
    title: "Enterprise Transformation",
    desc: "Optimize operations and deliver scalable digital solutions that create lasting impact.",
  },
  {
    icon: "innovation",
    title: "Data, Cloud & AI",
    desc: "Practical intelligence, resilient platforms, and automation that help organizations innovate forward.",
  },
];

const serviceGroups = [
  {
    id: "generative-ai",
    slug: "generative-ai",
    tab: "Generative AI",
    title: "Generative AI",
    body: "Build custom AI models and adaptive ChatGPT-native tooling.",
    cta: "Explore Generative AI Services",
    mark: "spark",
    items: [
      ["Content Generation", "Automate content production across marketing, support, and knowledge workflows."],
      ["Code Generation", "Accelerate software delivery with assistants tuned to your engineering standards."],
      ["Custom Generative AI Models", "Design models and retrieval systems that match your data, tone, and use cases."],
      ["On-demand Analytics", "Surface instant insights from operational data through natural-language interfaces."],
      ["ChatGPT Integration", "Connect secure conversational AI into internal tools, products, and customer journeys."],
    ],
  },
  {
    id: "transformation",
    slug: "transformation",
    tab: "Transformation",
    title: "Enterprise Transformation",
    body: "Invest in digital initiatives that reduce costs and grow revenue.",
    cta: "Explore Transformation Services",
    mark: "orbit",
    items: [
      ["Transformation Strategy", "Map priorities, operating models, and measurable roadmaps for enterprise change."],
      ["Enterprise Modernization", "Upgrade legacy systems, integrations, and ERP-adjacent workflows without losing momentum."],
      ["Digital Commerce", "Create connected B2B, B2C, and marketplace experiences that scale with demand."],
      ["Cloud Acceleration", "Move critical workloads to reliable cloud foundations with governance and cost control."],
      ["Talent & Culture", "Equip teams with the skills, rituals, and clarity to sustain transformation."],
    ],
  },
  {
    id: "analytics",
    slug: "analytics",
    tab: "Analytics",
    title: "Data Analytics",
    body: "Harness data with AI, BI, and engineering for faster decisions.",
    cta: "Explore Analytics Services",
    mark: "blocks",
    items: [
      ["Data Strategy", "Define architecture, governance, analytics priorities, and adoption plans."],
      ["Data Engineering", "Build pipelines, warehouses, marts, and data products that teams can trust."],
      ["AI / ML Analytics", "Forecast demand, predict outcomes, and automate decision support."],
      ["Deep Learning", "Model complex patterns across text, images, behavior, and operations."],
      ["Data Visualization", "Turn metrics into dashboards and executive views that reveal the next move."],
    ],
  },
  {
    id: "commerce",
    slug: "commerce",
    tab: "Commerce",
    title: "Commerce Acceleration",
    body: "Unlock revenue streams with connected digital commerce.",
    cta: "Explore Commerce Services",
    mark: "bubbles",
    items: [
      ["Omnichannel Commerce Strategy", "Unify retail, digital, and partner channels around one customer journey."],
      ["B2C / D2C Commerce Platforms", "Launch flexible storefronts, catalogs, carts, and fulfillment flows."],
      ["B2B Commerce & Customer Portals", "Give buyers self-service ordering, account visibility, and faster support."],
      ["Commerce Performance Optimization", "Improve conversion, merchandising, personalization, and checkout performance."],
      ["CRM & Loyalty Solutions", "Connect customer data, retention programs, and lifecycle marketing."],
    ],
  },
  {
    id: "innovation",
    slug: "product-development",
    tab: "Innovation",
    title: "Technology Innovation",
    body: "Partner on strategy and delivery for products, platforms, and automation.",
    cta: "Explore Product Development Services",
    mark: "diamond",
    items: [
      ["Discovery & Ideation", "Validate market needs, define users, and shape concepts into product bets."],
      ["Product Strategy", "Prioritize roadmaps, platforms, business models, and launch plans."],
      ["Data Visualization", "Prototype decision tools, operational views, and analytics experiences."],
      ["Minimum Viable Products", "Build focused pilots and release-ready MVPs with room to scale."],
      ["Emerging Technologies", "Explore AI, IoT, blockchain, AR/VR, automation, and cloud-native systems."],
    ],
  },
  {
    id: "development",
    slug: "mobile-development",
    tab: "Development",
    title: "Mobile Development",
    body: "Build mobile-first business and service experiences.",
    cta: "Explore Mobile Development Services",
    mark: "mobile",
    items: [
      ["iOS & Android Apps", "Deliver native and cross-platform applications for employees and customers."],
      ["Hybrid Apps", "Create cost-efficient mobile products across iOS, Android, and web."],
      ["Wearables", "Design connected experiences for sensors, watches, and field workflows."],
      ["Mobile Wallets & Payments", "Implement secure payment, wallet, and transaction experiences."],
    ],
  },
  {
    id: "design",
    slug: "design",
    tab: "Design",
    title: "Experience Design",
    body: "Craft simple, beautiful digital experiences people can adopt quickly.",
    cta: "Explore Design Services",
    mark: "design",
    items: [
      ["User Research", "Understand customers, stakeholders, workflows, and adoption barriers."],
      ["UX/UI Design", "Create intuitive interfaces for web, mobile, enterprise, and commerce platforms."],
      ["Interactive Prototyping", "Test flows, journeys, and concepts before committing engineering effort."],
      ["Product Branding", "Build visual systems, product identity, and digital expression."],
      ["Product Design", "Move from idea to architecture, screens, components, and launch-ready details."],
    ],
  },
  {
    id: "cloud",
    slug: "cloud-devops",
    tab: "Cloud",
    title: "Cloud & DevOps",
    body: "Achieve scale, agility, and resilience with cloud-first strategy.",
    cta: "Explore Cloud & DevOps Services",
    mark: "cloud",
    items: [
      ["Cloud Strategy", "Assess migration paths, cost models, security, and operating models."],
      ["Cloud Architecture", "Design modern cloud foundations for applications, data, and automation."],
      ["Cloud Migration", "Move applications and data safely with staged execution and observability."],
      ["Platform Support", "Operate reliable environments with monitoring, releases, and support."],
    ],
  },
  {
    id: "strategy",
    slug: "strategy",
    tab: "Strategy",
    title: "Digital Strategy",
    body: "Connect business, product, and technology consulting from idea to impact.",
    cta: "Explore Strategy Services",
    mark: "strategy",
    items: [
      ["Discovery & Ideation", "Define the problem, opportunity, customer need, and investment logic."],
      ["Design Sprints", "Prototype, test, and align teams around high-value ideas in focused cycles."],
      ["Audits & Assessments", "Evaluate systems, processes, experience quality, and readiness."],
      ["Strategy & Execution", "Translate direction into plans, owners, milestones, and measurable outcomes."],
      ["Product Management", "Shape roadmaps, delivery practices, and cross-functional product operations."],
    ],
  },
] as const;

const proofCards = [
  {
    title: "Innovation Lab",
    body: "Work with product, engineering, and AI specialists to explore opportunities and create proof points quickly.",
    image: innovationLabImage,
  },
  {
    title: "Team Augmentation",
    body: "Extend your delivery capacity with dedicated experts who plug into your roadmap and operating rhythm.",
    image: teamAugmentationImage,
  },
] as const;

export function Services() {
  return (
    <section className="offerings-section bg-white py-16 lg:py-24">
      <div className="container-pro">
        <div className="offerings-panel">
          <Reveal>
            <div className="offerings-heading">
              <h2 className="font-display text-[1.9rem] font-normal leading-none text-navy sm:text-[2.45rem]">
                Our Offerings
              </h2>
              <Link to="/services" className="offerings-panel__link">
                Explore All Offerings <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="offerings-list">
            {offerings.map((service, index) => (
              <Reveal key={service.title} i={index % 3}>
                <Link to="/services" className="offering-card group">
                  <span className={`offering-mark offering-mark--${service.icon}`} aria-hidden>
                    <i />
                    <b />
                    <em />
                  </span>
                  <span className="offering-card__copy">
                    <strong>{service.title}</strong>
                    <small>{service.desc}</small>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesDeepDive() {
  const [activeSection, setActiveSection] = useState(serviceGroups[0].id);
  const [isTabsFixed, setIsTabsFixed] = useState(false);
  const [tabsHeight, setTabsHeight] = useState(0);
  const tabsAnchorRef = useRef<HTMLDivElement | null>(null);
  const tabsNavRef = useRef<HTMLElement | null>(null);
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const tabsScrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionElements = serviceGroups
      .map((group) => document.getElementById(group.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateServicesNav = () => {
      const tabsAnchor = tabsAnchorRef.current;
      const tabsNav = tabsNavRef.current;
      const currentTabsHeight = tabsNav?.offsetHeight ?? 0;

      if (currentTabsHeight) {
        setTabsHeight(currentTabsHeight);
      }

      if (tabsAnchor) {
        const tabsStart = tabsAnchor.getBoundingClientRect().top + window.scrollY;
        setIsTabsFixed(window.scrollY >= tabsStart);
      }

      const marker = window.scrollY + currentTabsHeight + Math.min(window.innerHeight * 0.26, 230);
      const currentSection = sectionElements.reduce((current, section) => {
        return section.offsetTop <= marker ? section : current;
      }, sectionElements[0]);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    updateServicesNav();
    window.addEventListener("scroll", updateServicesNav, { passive: true });
    window.addEventListener("resize", updateServicesNav);

    return () => {
      window.removeEventListener("scroll", updateServicesNav);
      window.removeEventListener("resize", updateServicesNav);
    };
  }, []);

  useEffect(() => {
    const activeLink = activeLinkRef.current;
    const tabsScroller = tabsScrollerRef.current;

    if (!activeLink || !tabsScroller) {
      return;
    }

    const targetLeft = activeLink.offsetLeft - tabsScroller.clientWidth / 2 + activeLink.clientWidth / 2;
    tabsScroller.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [activeSection]);

  return (
    <section className="services-deep bg-white text-ink">
      <div className="services-deep__intro container-pro">
        <Reveal>
          <h2>On-demand and fully-managed strategy, design, engineering, and analytics services.</h2>
        </Reveal>
      </div>

      <div className="services-deep__tabs-anchor" ref={tabsAnchorRef} aria-hidden />
      <nav
        className={`services-deep__tabs${isTabsFixed ? " is-fixed" : ""}`}
        ref={tabsNavRef}
        aria-label="Service categories"
      >
        <div className="container-pro" ref={tabsScrollerRef}>
          {serviceGroups.map((group) => (
            <a
              key={group.id}
              ref={activeSection === group.id ? activeLinkRef : null}
              href={`#${group.id}`}
              className={activeSection === group.id ? "is-active" : undefined}
              aria-current={activeSection === group.id ? "true" : undefined}
            >
              {group.tab}
            </a>
          ))}
        </div>
      </nav>
      <div className="services-deep__tabs-spacer" style={{ height: isTabsFixed ? tabsHeight : 0 }} aria-hidden />

      <div className="container-pro services-deep__body">
        {serviceGroups.slice(0, 3).map((group, index) => (
          <ServiceGroup key={group.id} group={group} index={index} />
        ))}

        <ServicesContactPanel />

        {serviceGroups.slice(3, 6).map((group, index) => (
          <ServiceGroup key={group.id} group={group} index={index + 3} />
        ))}

        <ServicesInsightCard />

        {serviceGroups.slice(6).map((group, index) => (
          <ServiceGroup key={group.id} group={group} index={index + 6} />
        ))}

        <div className="services-deep__proof">
          {proofCards.map((card, index) => (
            <Reveal key={card.title} i={index}>
              <article className="services-proof-card">
                <img src={card.image} alt={card.title} loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="services-deep__tiles">
          <ServiceMiniTile title="About Wallace Croft" body="Transform technology, operations, and experiences with a practical delivery partner." />
          <ServiceMiniTile title="Our Work" body="See digital, AI, data, and engineering work shaped for lasting business value." />
        </div>

        <ServicesFinalContact />
      </div>
    </section>
  );
}

function ServiceGroup({ group, index }: { group: (typeof serviceGroups)[number]; index: number }) {
  return (
    <Reveal i={index % 3}>
      <article className="services-group" id={group.id}>
        <aside className="services-group__lead">
          <span className={`services-mark services-mark--${group.mark}`} aria-hidden>
            <i />
            <b />
            <em />
          </span>
          <h3>{group.title}</h3>
          <p>{group.body}</p>
          <Link to="/services/$slug" params={{ slug: group.slug }}>
            {group.cta} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </aside>
        <div className="services-group__items">
          {group.items.map(([title, body]) => (
            <div className="services-group__item" key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

function ServicesContactPanel() {
  const { handleSubmit, isSubmitting, submitMessage, submitState } = useContactSubmit({
    source: "services-expert-panel",
  });

  return (
    <Reveal>
      <aside className="services-contact-panel">
        <div className="services-contact-panel__copy">
          <h3>Speak to an expert</h3>
          <p>We specialize in solutions tailored to brave business moves.</p>
          <form method="post" onSubmit={handleSubmit}>
            <input name="fullName" type="text" placeholder="Full Name*" required />
            <input name="email" type="email" placeholder="Email*" required />
            <textarea name="message" rows={3} placeholder="Brief quiz: what do you need most?*" required />
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
                  Contact Us <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
        <img src={servicesExpertImage} alt="Wallace Croft expert consultation" loading="lazy" />
      </aside>
    </Reveal>
  );
}

function ServicesInsightCard() {
  return (
    <Reveal>
      <aside className="services-insight-card">
        <div>
          <span>Whitepaper</span>
          <h3>Explore how AI-driven personalization can increase your customers' cart size</h3>
          <p>
            Rapid first steps in data, commerce, and platform intelligence help teams personalize journeys and improve measurable outcomes.
          </p>
          <div className="services-insight-card__actions">
            <Link to="/resources">
              Download <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/resources">View all resources</Link>
          </div>
        </div>
        <div className="services-insight-card__cover" aria-hidden>
          <span>Wallace Croft</span>
          <strong>AI commerce playbook</strong>
          <small>Digital transformation through technology</small>
        </div>
      </aside>
    </Reveal>
  );
}

function ServiceMiniTile({ title, body }: { title: string; body: string }) {
  return (
    <Link to={title.includes("Work") ? "/case-studies" : "/about"} className="services-mini-tile">
      <span aria-hidden />
      <strong>{title}</strong>
      <small>{body}</small>
    </Link>
  );
}

function ServicesFinalContact() {
  const { handleSubmit, isSubmitting, submitMessage, submitState } = useContactSubmit({
    source: "services-final-contact",
  });

  return (
    <Reveal>
      <aside className="services-final-contact">
        <div className="services-final-contact__glow" aria-hidden />
        <div className="services-final-contact__copy">
          <h3>Let's find out what we can do for you!</h3>
          <p>Tell us about your needs.</p>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="services-final-contact__grid">
            <input name="fullName" type="text" placeholder="Full Name*" required />
            <input name="email" type="email" placeholder="Email*" required />
            <input name="company" type="text" placeholder="Company*" required />
            <input name="role" type="text" placeholder="Role" />
          </div>
          <textarea name="message" rows={3} placeholder="How can we help?*" required />
          <label>
            <input name="consentContact" type="checkbox" />
            <span>I agree to receive communications from Wallace Croft.</span>
          </label>
          <label>
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
                Submit <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>
      </aside>
    </Reveal>
  );
}
