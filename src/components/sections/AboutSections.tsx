"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Circle,
  Code2,
  Gauge,
  Layers,
  Quote,
  Sparkles,
  Square,
} from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
import { Reveal } from "@/components/ui-pro/Reveal";
import broadbandLogo from "@/assets/partner-logo-broadband-real.png";
import jobuLogo from "@/assets/partner-logo-jobu-real.png";
import mtakaLogo from "@/assets/partner-logo-mtaka-clean.webp";
import wellnessLogo from "@/assets/partner-logo-wellness-floating.png";

const values = [
  {
    icon: Sparkles,
    title: "Outstanding Software",
    body: "We deliver premium quality and reliable software, without shortcuts.",
  },
  {
    icon: Circle,
    title: "Highly Skilled People",
    body: "We hire carefully and invest in people so every team has the right craft.",
  },
  {
    icon: Square,
    title: "Battle-tested Process",
    body: "We use practical delivery habits shaped by real products and live operations.",
  },
  {
    icon: Gauge,
    title: "Exceeding Expectation",
    body: "We go above and beyond for clients and never let the standard drift.",
  },
  {
    icon: Layers,
    title: "Blazing-fast Delivery",
    body: "We stay lean, move fast, and deliver tangible products in days, not months.",
  },
  {
    icon: BarChart3,
    title: "Unbeatable ROI",
    body: "We offer the best time, cost, and value equation to every customer.",
  },
];

const teamCards = [
  {
    title: "Move Fast. Build Bold.",
    body: "Experiment quickly, fail fast, learn faster, and turn ideas into working systems.",
    img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Stay Hungry",
    body: "Stay curious, learn new skills, and keep growing with the work.",
    img: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Focus on Impact",
    body: "Deliver real value and exceed expectations in every release.",
    img: "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Seek Excellence",
    body: "Make complex work clear, dependable, and sharp from end to end.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=85",
  },
  {
    title: "Own the Outcome",
    body: "Operate with accountability, clarity, and care for the people using what we build.",
    img: "https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=1100&q=85",
  },
];

const communityImages = [
  "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1734255026082-82fdc81991f0?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1655720359248-eeace8c709c5?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1765018028697-2baae4577cdd?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1751666526244-40239a251eae?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1637856794303-d864ce316444?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&w=900&q=85",
];

const partnerLogos = [
  { src: jobuLogo, alt: "JOBU" },
  { src: mtakaLogo, alt: "mTAKA" },
  { src: broadbandLogo, alt: "Broadband Communication Network" },
  { src: wellnessLogo, alt: "The Wellness Hub" },
  { label: "CLOUD" },
  { label: "DATA" },
  { label: "COMMERCE" },
  { label: "AI OPS" },
  { label: "SECURE" },
];

const aboutTrustLogos = partnerLogos.filter((logo) => "alt" in logo && logo.alt !== "mTAKA");

const quickLinks = [
  {
    to: "/services",
    title: "Our Services",
    body: "Turn data into intelligence, automations, and scalable digital experiences.",
  },
  {
    to: "/case-studies",
    title: "Our Work",
    body: "Discover how we have helped businesses like yours reach their full potential.",
  },
] as const;

const founderStories = [
  {
    quote: "We build with purpose and innovate with intention.",
    body: "My mission is to design solutions that don't just solve problems - but create lasting impact for businesses and communities.",
    image: "/founder-purpose-laptop.png",
    alt: "Business leader working on a laptop",
    imageClass: "about-founder-card__image--top",
  },
  {
    quote: "Great systems don't happen by chance. They're built with vision and discipline.",
    body: "I focus on building the left-brain systems and structures that give space for ideas, people, and teams to do their best work.",
    image: "/founder-systems-real.jpeg",
    alt: "Systems leader standing in a server room",
    imageClass: "about-founder-card__image--middle",
    reverse: true,
  },
  {
    quote: "The future belongs to those who build with clarity and courage.",
    body: "I partner with founders and organizations to turn bold ideas into sustainable, scalable realities.",
    image: "/founder-clarity-real.png",
    alt: "Business leader smiling in a blue striped shirt",
    imageClass: "about-founder-card__image--bottom",
  },
] as const;

export function AboutStory() {
  return (
    <section className="about-story bg-white py-14 text-navy lg:py-20">
      <div className="about-story-stack container-pro">
        <Reveal>
          <div className="about-story-main">
            <h3 className="font-display text-[2.1rem] font-normal leading-[1.08] sm:text-[3rem]">
              Wallace Croft is Kenya's digital,data and AI growth partner in web development,
              mobile, analytics and AI that drives real impact.
            </h3>
            <div className="mt-7 grid gap-5 text-[0.95rem] leading-7 text-navy/70">
              <p>
                Since 2023, we have been trusted by industry leaders, builders, and entrepreneurs to
                create modern platforms, mobile solutions, and data foundations that help
                organizations operate, compete, and grow with speed and confidence.
              </p>
              <p>
                Whether it is a new opportunity, a multi-year transformation initiative, or a tough
                data challenge, we turn complexity into a clear strategy, focus on the right
                problems, and build future-proof products.
              </p>
            </div>
            <Link to="/services" className="about-outline-button mt-8">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal i={1}>
          <div className="about-trust-panel">
            <h3>Elevating Brands Through Technology</h3>
            <p>
              Fortune-minded, fast-growing companies and ambitious teams trust us to deliver
              mission-critical products and solutions.
            </p>
            <div className="about-trust-logos" aria-label="Trusted companies">
              {aboutTrustLogos.map((logo) => (
                <span key={logo.alt}>
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutFounders() {
  return (
    <section className="about-founders bg-white text-navy" aria-label="Founder perspectives">
      <div className="about-founders__heading container-pro">
        <Reveal>
          <div>
            <h2>The Minds Behind the Mission</h2>
            <p>
              Meet the professionals behind the ideas, systems, and innovations that power
              meaningful transformation.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="about-founders__inner">
        {founderStories.map((story, index) => (
          <Reveal key={story.quote} i={index}>
            <article className={`about-founder-card${story.reverse ? " about-founder-card--reverse" : ""}`}>
              <div className="about-founder-card__copy">
                <span className="about-founder-card__quote-icon" aria-hidden>
                  {"\u201c"}
                </span>
                <h2>{story.quote}</h2>
                <span className="about-founder-card__rule" aria-hidden />
                <p>{story.body}</p>
              </div>
              <figure className={`about-founder-card__image ${story.imageClass}`}>
                <img
                  src={story.image}
                  alt={story.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding={index === 0 ? "sync" : "async"}
                />
              </figure>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutReasons() {
  return (
    <section className="about-reasons bg-white py-14 text-navy lg:py-20">
      <div className="container-pro">
        <Reveal>
          <div className="about-reasons-panel">
            <h2 className="font-display text-[2rem] font-normal leading-[1.08] sm:text-[2.75rem]">
              Reasons why smart brands choose us
            </h2>

            <div className="about-reason-list">
              {values.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className="about-reason-item" key={item.title}>
                    <div className="about-reason-heading">
                      <div className="about-reason-icon">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>

            <Link to="/about" className="about-outline-button mt-10">
              More on Our Approach <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutTeam() {
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
      const stickyHeight = Math.min(window.innerHeight, Math.max(520, window.innerHeight * 0.68));
      const scrollDistance = Math.max(distance * 0.48, 480);
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
      const travel = Math.max(1, section.offsetHeight - pinnedHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      x.set(-maxX * progress);

      if (rect.top > 0) {
        setPinState("before");
      } else if (rect.bottom <= pinnedHeight) {
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
      className="about-team-section bg-white py-16 lg:py-0"
      style={sectionHeight ? { height: `${sectionHeight}px` } : undefined}
    >
      <div
        ref={viewportRef}
        data-pin-state={pinState}
        className="about-team-viewport container-pro lg:flex lg:flex-col lg:overflow-hidden"
        style={pinHeight ? { height: `${pinHeight}px` } : undefined}
      >
        <div className="about-team-heading">
          <Reveal>
            <div>
              <h2 className="font-display text-[2.1rem] font-normal leading-[1.04] text-navy sm:text-[3rem] lg:text-[3.45rem]">
                Small teams empowered to create big impact.
              </h2>
              <p>
                We are defined by our people, passion, and culture. We are not only building the
                best software but also breeding the industry&apos;s best talent, people who can
                dream, drive, and deliver.
              </p>
            </div>
          </Reveal>
          <Link to="/contact" className="about-outline-button">
            Join Our Team
          </Link>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          aria-label="Our team values"
          className="about-team-rail mt-12 flex gap-8 overflow-x-auto pb-4 lg:w-max lg:overflow-visible lg:pb-0"
        >
          {teamCards.map((item, index) => {
            const imageFirst = index % 2 === 0;
            return (
              <article key={item.title} className="about-team-card shrink-0">
                {imageFirst ? (
                  <>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="eager"
                      decoding="sync"
                      width={1200}
                      height={900}
                    />
                    <div className="about-team-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="about-team-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="eager"
                      decoding="sync"
                      width={1200}
                      height={900}
                    />
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

export function AboutWellnessTestimonial() {
  const [photoReady, setPhotoReady] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="about-wellness-testimonial bg-white py-16 text-navy lg:py-20">
      <div className="container-pro">
        <Reveal>
          <figure className="about-wellness-quote">
            <blockquote>
              <Quote className="about-wellness-quote__icon" aria-hidden />
              <p>
                Working with Wallace Croft on The Wellness Hub was an outstanding experience. They
                delivered a reliable, modern, and user-focused system that perfectly aligned with
                our vision. Their team demonstrated professionalism, innovation, and a deep
                understanding of our business needs from start to finish.
              </p>
            </blockquote>

            <figcaption className="about-wellness-quote__footer">
              <div className="about-wellness-quote__author">
                <span className="about-wellness-quote__avatar" aria-hidden>
                  {!photoFailed ? (
                    <img
                      className={photoReady ? "is-ready" : undefined}
                      src="/caroline-gichia.webp"
                      alt=""
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                      onLoad={() => setPhotoReady(true)}
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : null}
                  <span>CG</span>
                </span>
                <span>
                  <strong>Caroline Gichia</strong>
                  <small>CBT Psychologist</small>
                </span>
              </div>

              <img
                className="about-wellness-quote__logo"
                src={wellnessLogo}
                alt="The Wellness Hub"
                loading="eager"
                decoding="sync"
              />
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutCommunity() {
  return (
    <section className="about-community bg-white py-16 text-navy lg:py-24">
      <div className="container-pro">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="font-display text-[2rem] font-normal leading-[1.08] sm:text-[2.8rem]">
              We contribute back to community
            </h2>
            <p className="mt-5 max-w-3xl text-[0.92rem] leading-7 text-navy/70">
              We believe businesses have the power to build a more sustainable, responsible, and
              inclusive world. We invest in people and ideas that help organizations do better work.
            </p>
          </div>
        </Reveal>
        <div className="about-community-grid mt-10">
          {communityImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Wallace Croft community moment ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPartnersAwards() {
  return (
    <section className="about-partners bg-white pb-16 text-navy lg:pb-24">
      <div className="container-pro">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[2rem] font-normal leading-[1.08] sm:text-[2.8rem]">
              Partners & Alliances
            </h2>
            <p className="mt-4 text-[0.9rem] leading-7 text-navy/68">
              We partner with technology leaders that enrich our skills to transform companies and
              unlock new opportunities.
            </p>
          </div>
        </Reveal>

        <div className="about-partner-grid mt-10">
          {partnerLogos.map((partner) => (
            <span key={"src" in partner ? partner.alt : partner.label}>
              {"src" in partner ? (
                <img src={partner.src} alt={partner.alt} loading="lazy" />
              ) : (
                partner.label
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutQuickLinks() {
  return (
    <section className="about-quick-links bg-white pb-16 text-navy lg:pb-24">
      <div className="container-pro">
        <div className="about-quick-link-grid">
          {quickLinks.map((item) => (
            <Link key={item.title} to={item.to} className="about-quick-link-card">
              <span className="about-quick-link-icon" aria-hidden>
                <Code2 className="h-7 w-7" />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.body}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
