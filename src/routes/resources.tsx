import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleDot,
  Compass,
  Database,
  Layers,
  PenTool,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import approachHero from "@/assets/page-hero-approach-cutout.webp";
import { Logo } from "@/components/brand/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SocialIcon } from "@/components/sections/CaseStudies";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui-pro/Reveal";
import { useContactSubmit } from "@/hooks/use-contact-submit";

const approachValues = [
  {
    title: "Value Creation",
    body: "Every engagement starts with a clear business outcome, then moves through evidence, design, engineering, and adoption.",
    icon: Sparkles,
  },
  {
    title: "Hungry & Unstoppable",
    body: "We stay close to the problem, move quickly through unknowns, and keep momentum visible from discovery to launch.",
    icon: Compass,
  },
  {
    title: "Full-stack, Fully-managed",
    body: "Strategy, UX, software, data, cloud, and operations work together so the whole system is owned end to end.",
    icon: Layers,
  },
  {
    title: "User-centric Design",
    body: "Interfaces, workflows, and service moments are shaped around how real teams decide, act, and recover.",
    icon: UsersRound,
  },
  {
    title: "Quality Engineering",
    body: "Architecture, testing, security, observability, and maintainability are built into the delivery rhythm.",
    icon: ShieldCheck,
  },
  {
    title: "Iterative Delivery",
    body: "We ship in useful increments, learn from feedback, and make the next release clearer than the last.",
    icon: CircleDot,
  },
  {
    title: "Teamwork",
    body: "Our teams work as one unit with yours, sharing context, ownership, and the practical work of delivery.",
    icon: UsersRound,
  },
  {
    title: "True Partnership",
    body: "We advise, build, and operate with transparent tradeoffs, practical governance, and long-term accountability.",
    icon: Check,
  },
] as const;

const howItWorks = [
  {
    title: "Deep Industry Knowledge",
    body: "We start with the operating context: customers, workflows, risks, economics, and the systems teams rely on every day.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "End-to-end Capabilities",
    body: "Strategy, UX, engineering, data, cloud, launch, and managed operations are connected into one accountable delivery path.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Born Agile",
    body: "We work in short cycles, make progress visible, test assumptions early, and turn feedback into the next release.",
    image: "https://images.pexels.com/photos/6804093/pexels-photo-6804093.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Top-down Capabilities, Bottom-up Spirit",
    body: "Leadership priorities and delivery realities stay connected so strategy becomes practical work, not shelfware.",
    image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Culture & Compliance Expertise",
    body: "Change, security, governance, adoption, and compliance are handled as part of the operating model from the beginning.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Mastery in Enterprise Technology",
    body: "We modernize platforms, data flows, integrations, automation, AI, and observability so systems can scale with confidence.",
    image: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
] as const;

const icon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const simpleIcon = (name: string, color: string) =>
  `https://cdn.simpleicons.org/${name}/${color}`;

const techIconFallbacks: Record<string, string> = {
  AWS: "AWS",
  GraphQL: "GQL",
  Redshift: "RS",
  "Microsoft Azure": "AZ",
  "Power BI": "BI",
  "Deck.gl": "D",
};

const techStacks = [
  {
    title: "Web",
    groups: [
      {
        items: [
          ["AngularJS", icon("angularjs")],
          ["Node.JS", icon("nodejs")],
          ["React.JS", icon("react")],
          ["JavaScript", icon("javascript")],
          ["Java", icon("java")],
          ["Python", icon("python")],
          ["TypeScript", icon("typescript")],
          ["Scala", icon("scala")],
          ["GO", icon("go")],
          ["Rust", icon("rust")],
        ],
      },
    ],
  },
  {
    title: "Mobile",
    groups: [
      {
        items: [
          ["Android", icon("android")],
          ["iOS", icon("apple")],
          ["Flutter", icon("flutter")],
          ["React Native", icon("react")],
          ["Swift", icon("swift")],
          ["Kotlin", icon("kotlin")],
          ["GraphQL", icon("graphql")],
          ["Java", icon("java")],
        ],
      },
    ],
  },
  {
    title: "Analytics",
    groups: [
      {
        label: "AI Toolkits & Frameworks",
        items: [
          ["Python", icon("python")],
          ["PyTorch", icon("pytorch")],
          ["TensorFlow", icon("tensorflow")],
          ["Jupyter", icon("jupyter")],
          ["Scala", icon("scala")],
        ],
      },
      {
        label: "Data Platforms & Analytics Tools",
        items: [
          ["Redshift", simpleIcon("amazonredshift", "8C4FFF")],
          ["Hadoop", simpleIcon("apachehadoop", "F6D54A")],
          ["Kafka", simpleIcon("apachekafka", "231F20")],
          ["Splunk", simpleIcon("splunk", "555555")],
          ["Grafana", icon("grafana")],
        ],
      },
      {
        label: "Data Visualization Technologies",
        items: [
          ["Deck.gl", simpleIcon("deckdotgl", "FF6F00")],
          ["Power BI", simpleIcon("powerbi", "F2C811")],
          ["Kibana", simpleIcon("kibana", "005571")],
          ["React.JS", icon("react")],
          ["D3", icon("d3js")],
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    groups: [
      {
        items: [
          ["AWS", simpleIcon("amazonwebservices", "FF9900")],
          ["Google Cloud", icon("googlecloud")],
          ["Microsoft Azure", simpleIcon("microsoftazure", "0078D4")],
          ["Puppet", simpleIcon("puppet", "FFAE1A")],
          ["ELK Stack", simpleIcon("elasticstack", "00BFB3")],
          ["Ansible", icon("ansible")],
          ["Grafana", icon("grafana")],
          ["Kubernetes", icon("kubernetes")],
          ["Datadog", simpleIcon("datadog", "632CA6")],
          ["Docker", icon("docker")],
          ["Github", simpleIcon("github", "181717")],
          ["Maven", simpleIcon("apachemaven", "C71A36")],
        ],
      },
    ],
  },
] as const;

const practices = [
  "Cloud-native Architecture",
  "Microservices",
  "Legacy Orchestration",
  "Responsive SPA/PWA",
  "Edge Computing",
  "CI/CD Automation",
  "Containerization",
  "Enterprise Security",
  "MLOps",
  "Streams & Event Analytics",
  "API-first Architecture",
  "Automated Testing",
  "Horizontal Scalability",
  "Distributed Systems",
  "Enterprise Search",
] as const;

const focusCards = [
  ["Enterprise Transformation", "Build durable operating systems connected to today's economy."],
  ["Data Analytics & AI", "Turn data into trusted reports, automation, and intelligence."],
  ["Product Innovations", "Launch new products with solid UX, architecture, and engineering craft."],
  ["Digital Strategy", "Define coherent moves across priorities, platforms, and opportunities."],
] as const;

const approachNavItems = [
  { id: "approach", label: "Approach" },
  { id: "how-it-works", label: "How It Works" },
  { id: "technology", label: "Technology Stack" },
  { id: "practices", label: "Engineering Practices" },
] as const;

export const Route = createFileRoute("/resources")({
  component: ApproachPage,
  head: () => ({
    meta: [
      { title: "APProach - Wallace Croft" },
      {
        name: "description",
        content:
          "See the Wallace Croft approach to strategy, design, software engineering, data, AI, and managed digital delivery.",
      },
      { property: "og:title", content: "APProach - Wallace Croft" },
      {
        property: "og:description",
        content:
          "How Wallace Croft designs, builds, and operates practical digital systems with orange-accented delivery discipline.",
      },
    ],
  }),
});

export function ApproachPage() {
  const [activeSection, setActiveSection] = useState(approachNavItems[0].id);
  const [isSubnavFixed, setIsSubnavFixed] = useState(false);
  const [subnavHeight, setSubnavHeight] = useState(0);
  const subnavAnchorRef = useRef<HTMLDivElement | null>(null);
  const subnavRef = useRef<HTMLElement | null>(null);
  const subnavScrollerRef = useRef<HTMLDivElement | null>(null);
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const sectionElements = approachNavItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateApproachNav = () => {
      const anchor = subnavAnchorRef.current;
      const nav = subnavRef.current;
      const currentHeight = nav?.offsetHeight ?? 0;

      if (currentHeight) {
        setSubnavHeight(currentHeight);
      }

      if (anchor) {
        const start = anchor.getBoundingClientRect().top + window.scrollY;
        setIsSubnavFixed(window.scrollY >= start);
      }

      const marker = window.scrollY + currentHeight + Math.min(window.innerHeight * 0.26, 230);
      const currentSection = sectionElements.reduce((current, section) => {
        return section.offsetTop <= marker ? section : current;
      }, sectionElements[0]);

      if (currentSection) {
        setActiveSection(currentSection.id as (typeof approachNavItems)[number]["id"]);
      }
    };

    updateApproachNav();
    window.addEventListener("scroll", updateApproachNav, { passive: true });
    window.addEventListener("resize", updateApproachNav);

    return () => {
      window.removeEventListener("scroll", updateApproachNav);
      window.removeEventListener("resize", updateApproachNav);
    };
  }, []);

  useEffect(() => {
    const activeLink = activeLinkRef.current;
    const scroller = subnavScrollerRef.current;

    if (!activeLink || !scroller) {
      return;
    }

    const targetLeft = activeLink.offsetLeft - scroller.clientWidth / 2 + activeLink.clientWidth / 2;
    scroller.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="approach-page min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our APProach"
          title="How we design, build & deliver"
          description="Our approach blends strategy, design, technology, data, and operations into one clear delivery system."
          images={[approachHero]}
          imageAlt="Croft digital product design workstation"
          visual="advisor"
        />

        <div className="approach-subnav-anchor" ref={subnavAnchorRef} aria-hidden />
        <nav
          className={`approach-subnav${isSubnavFixed ? " is-fixed" : ""}`}
          ref={subnavRef}
          aria-label="APProach sections"
        >
          <div className="container-pro" ref={subnavScrollerRef}>
            {approachNavItems.map((item) => (
              <a
                key={item.id}
                ref={activeSection === item.id ? activeLinkRef : null}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : undefined}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="approach-subnav-spacer" style={{ height: isSubnavFixed ? subnavHeight : 0 }} aria-hidden />

        <section id="approach" className="approach-values">
          <div className="container-pro">
            <div className="approach-panel">
              <h2>Our Approach</h2>
              <div className="approach-value-grid">
                {approachValues.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} i={index % 3}>
                      <article>
                        <Icon className="h-7 w-7" />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.body}</p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="approach-process container-pro">
          <div className="approach-section-heading">
            <h2>Agile Process</h2>
            <p>
              We always focus on delivering greater and measurable business impact with less time and effort.
              That is why we love our agile process: shipping software frequently, gathering real feedback,
              and improving with each iteration.
            </p>
          </div>
          <div className="approach-orbit">
            <ProcessNode className="approach-orbit__node approach-orbit__node--one" title="Talent" body="Elite experts with engineering, design, and delivery skills available on demand." />
            <ProcessNode className="approach-orbit__node approach-orbit__node--two" title="Tactics" body="Been-there-done-that expertise and tactical advice for strategy and flawless execution." />
            <ProcessNode className="approach-orbit__node approach-orbit__node--three" title="Tools" body="Out-of-the-box tools, components, and products that accelerate the delivery." />
            <ProcessNode className="approach-orbit__node approach-orbit__node--four" title="Technology" body="Cutting-edge tech stack that offers cost savings, faster ROI, and future-proof foundation." />
            <div className="approach-orbit__graphic" aria-hidden>
              <span className="approach-orbit__ring" />
              <span className="approach-orbit__petal approach-orbit__petal--one" />
              <span className="approach-orbit__petal approach-orbit__petal--two" />
              <span className="approach-orbit__petal approach-orbit__petal--three" />
              <span className="approach-orbit__petal approach-orbit__petal--four" />
              <span className="approach-orbit__core">Wallace Croft<br />Approach</span>
            </div>
          </div>
        </section>

        <ApproachHowItWorks />

        <section id="technology" className="approach-tech container-pro">
          <h2>Technology Stack</h2>
          <div className="approach-tech__grid">
            {techStacks.map((stack) => (
              <article key={stack.title}>
                <h3>{stack.title}</h3>
                {stack.groups.map((group, groupIndex) => (
                  <div className="approach-tech__group" key={`${stack.title}-${groupIndex}`}>
                    {"label" in group && group.label ? <p>{group.label}</p> : null}
                    <ul>
                      {group.items.map(([item, logo]) => (
                        <li key={item}>
                          <TechIcon name={item} logo={logo} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section id="practices" className="approach-practices container-pro">
          <h2>Engineering Practices</h2>
          <div className="approach-practices__grid">
            {practices.map((item) => (
              <div className={item.length > 19 ? "approach-practice--wide" : undefined} key={item}>
                <Check className="h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="approach-focus container-pro">
          {focusCards.map(([title, body], index) => (
            <article key={title}>
              {index % 2 === 0 ? <PenTool className="h-7 w-7" /> : <Database className="h-7 w-7" />}
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>

        <ApproachContact />
      </main>
      <ApproachFooter />
    </div>
  );
}

function ProcessNode({ className, title, body }: { className: string; title: string; body: string }) {
  return (
    <article className={className}>
      <span />
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

function ApproachHowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxX, setMaxX] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | undefined>();
  const [pinHeight, setPinHeight] = useState<number | undefined>();
  const [pinState, setPinState] = useState<"before" | "fixed" | "after">("before");
  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track || window.innerWidth < 1024) {
        setMaxX(0);
        setSectionHeight(undefined);
        setPinHeight(undefined);
        return;
      }

      const viewportStyle = window.getComputedStyle(viewport);
      const viewportPadding =
        parseFloat(viewportStyle.paddingLeft) + parseFloat(viewportStyle.paddingRight);
      const visibleWidth = viewport.clientWidth - viewportPadding;
      const distance = Math.max(0, track.scrollWidth - visibleWidth);
      const stickyHeight = Math.min(window.innerHeight, Math.max(500, window.innerHeight * 0.64));
      const scrollDistance = Math.max(distance * 0.46, 460);
      setMaxX(distance);
      setPinHeight(stickyHeight);
      setSectionHeight(stickyHeight + scrollDistance);
    };

    const updatePinState = () => {
      const section = sectionRef.current;
      const pinnedHeight = pinHeight ?? window.innerHeight;

      if (!section || window.innerWidth < 1024) {
        setPinState("before");
        x.set(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const sectionBottom = rect.bottom;
      const travel = Math.max(1, section.offsetHeight - pinnedHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      x.set(-maxX * progress);

      if (rect.top > 0) {
        setPinState("before");
      } else if (sectionBottom <= pinnedHeight) {
        setPinState("after");
      } else {
        setPinState("fixed");
      }
    };

    const frame = window.requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", updatePinState, { passive: true });

    const pinFrame = window.requestAnimationFrame(updatePinState);

    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(pinFrame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", updatePinState);
    };
  }, [maxX, pinHeight, x]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="approach-work differentiators-section bg-white py-16 lg:py-0"
      style={sectionHeight ? { height: `${sectionHeight}px` } : undefined}
    >
      <div
        ref={viewportRef}
        data-pin-state={pinState}
        className="approach-work__viewport differentiator-viewport container-pro lg:flex lg:flex-col lg:overflow-hidden"
        style={pinHeight ? { height: `${pinHeight}px` } : undefined}
      >
        <Reveal>
          <h2>How It Works</h2>
        </Reveal>
        <motion.div
          ref={trackRef}
          style={{ x }}
          aria-label="How It Works features"
          className="approach-work__rail differentiator-rail mt-12 flex gap-8 overflow-x-auto pb-4 lg:w-max lg:overflow-visible lg:pb-0"
        >
          {howItWorks.map((item, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article key={item.title} className="approach-work-card differentiator-card shrink-0">
                {imageFirst ? (
                  <>
                    <img src={item.image} alt={item.title} loading="lazy" width={1600} height={1000} />
                    <div className="approach-work-card__copy differentiator-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="approach-work-card__copy differentiator-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                    <img src={item.image} alt={item.title} loading="lazy" width={1600} height={1000} />
                  </>
                )}
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TechIcon({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const stableFallback = techIconFallbacks[name];
  const initials = name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (stableFallback || failed) {
    return (
      <span className={`approach-tech__icon-fallback approach-tech__icon-fallback--${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} aria-hidden>
        {stableFallback ?? initials}
      </span>
    );
  }

  return <img src={logo} alt="" loading="lazy" onError={() => setFailed(true)} />;
}

function ApproachContact() {
  const { handleSubmit, isSubmitting, submitMessage, submitState } = useContactSubmit({
    source: "resources-contact",
  });

  return (
    <section className="approach-contact container-pro">
      <div className="approach-contact__shell">
        <div className="approach-contact__copy">
          <h2>Let's find out what we can do for you!</h2>
          <p>Tell us about your needs</p>
        </div>
        <form className="approach-contact__form" method="post" onSubmit={handleSubmit}>
          <input name="fullName" placeholder="Full Name *" required />
          <input name="email" type="email" placeholder="Email *" required />
          <div className="approach-contact__row">
            <input name="company" placeholder="Company *" required />
            <input name="role" placeholder="Role" />
          </div>
          <textarea name="message" rows={3} placeholder="How can we help? *" required />
          <label>
            <input name="consentContact" type="checkbox" />
            <span>I agree to receive communication from Wallace Croft.</span>
          </label>
          <label>
            <input name="consentMarketing" type="checkbox" />
            <span>I agree to receive product, service, and event updates.</span>
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
      </div>
    </section>
  );
}

function ApproachFooter() {
  const socialLinks = [
    { label: "Facebook", icon: "facebook" },
    { label: "LinkedIn", icon: "linkedin" },
    { label: "X", icon: "x" },
    { label: "Medium", icon: "medium" },
    { label: "YouTube", icon: "youtube" },
    { label: "Instagram", icon: "instagram" },
  ] as const;

  return (
    <footer className="approach-footer">
      <div className="container-pro approach-footer__grid">
        <div>
          <Logo />
          <div className="approach-footer__socials" aria-label="Social links">
            {socialLinks.map((item) => (
              <a key={item.label} href="#" aria-label={item.label}>
                <SocialIcon type={item.icon} />
              </a>
            ))}
          </div>
          <p>&copy;{new Date().getFullYear()} Wallace Croft. All rights reserved.</p>
          <div className="approach-footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
        <FooterColumn title="Company" items={["About", "Services", "Case Studies", "APProach", "Careers"]} />
        <FooterColumn title="Digital Services" items={["AI Development Services", "Digital Transformation", "Custom Software", "Technology Modernization", "Data Strategy", "Web Development"]} />
        <FooterColumn title="Industries" items={["Retail", "Manufacturing", "Distribution", "Building Materials", "Healthcare", "Finance"]} />
        <FooterColumn title="GenAI Services" items={["GenAI Software Development", "AI Agent Development", "LLM Development", "AI Strategy & Consulting"]} />
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <nav className="approach-footer__col">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Link to={item === "APProach" ? "/resources" : item === "About" ? "/about" : item === "Case Studies" ? "/case-studies" : "/services"}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
