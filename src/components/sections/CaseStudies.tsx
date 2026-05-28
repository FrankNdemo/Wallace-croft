"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  CalendarCheck,
  Cable,
  ChartNoAxesCombined,
  ChevronDown,
  DatabaseZap,
  HeartPulse,
  Network,
  PanelsTopLeft,
  RadioTower,
  Server,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { useContactSubmit } from "@/hooks/use-contact-submit";

const capabilityIcons = {
  bot: Bot,
  brain: Brain,
  calendar: CalendarCheck,
  cable: Cable,
  chart: ChartNoAxesCombined,
  database: DatabaseZap,
  heart: HeartPulse,
  network: Network,
  panel: PanelsTopLeft,
  radio: RadioTower,
  server: Server,
  sparkle: Sparkles,
} as const;

const items = [
  {
    tag: "BROADCOM | CASE STUDY",
    title: "Leading the way in communication technologies",
    desc: "A clearer ICT service journey for operators, regulators, utilities, and enterprise network buyers.",
    img: "https://www.broadcom.co.ke/images/caro1.webp",
    cardImage:
      "https://rpfasixbozhsawdgbswy.supabase.co/storage/v1/object/public/services/d48ba2cb-01ea-4ae6-a330-e953fb4009af_DSC_4967.jpg",
    metric: "24+",
    metricLabel: "Years of telecom and ICT delivery clarified",
    bg: "#eef1f4",
    accent: "Network ops",
    search: "Data center",
    visual: "broadband",
    cardTitle: "Fiber capability",
    capabilities: [
      { label: "SFPs", icon: "radio" },
      { label: "LC fiber", icon: "cable" },
      { label: "Patch panels", icon: "panel" },
      { label: "Data racks", icon: "server" },
    ],
    to: "/case-studies/broadcom-network-operations",
  },
  {
    tag: "THE WELLNESS HUB | CASE STUDY",
    title: "Discover your best self",
    desc: "A gentle care platform for enquiry, exploration calls, session booking, and trusted mental-health support.",
    img: "https://the-hub-pied.vercel.app/assets/hero-wellness-custom-opzVLQyh.png",
    cardImage: "https://the-hub-pied.vercel.app/assets/about-therapy-C2q198g7.jpg",
    metric: "3",
    metricLabel: "Clear action paths for sensitive care journeys",
    bg: "#f1f3ee",
    accent: "Care journey",
    search: "Book session",
    visual: "wellness",
    cardTitle: "Care pathways",
    capabilities: [
      { label: "Therapy", icon: "heart" },
      { label: "Explore call", icon: "calendar" },
      { label: "Wellbeing", icon: "sparkle" },
      { label: "Family care", icon: "brain" },
    ],
    to: "/case-studies/wellness-hub-care-platform",
  },
  {
    tag: "AI OPERATIONS | CASE STUDY",
    title: "Building agent workflows for service teams",
    desc: "AI-assisted work queues that help teams move faster.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    cardImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
    metric: "42%",
    metricLabel: "Faster completion across pilot workflows",
    bg: "#eef1f4",
    accent: "AI routing",
    search: "Lead scoring",
    visual: "ai",
    cardTitle: "AI operations",
    capabilities: [
      { label: "Routing", icon: "bot" },
      { label: "Triage", icon: "network" },
      { label: "Scoring", icon: "chart" },
      { label: "Insights", icon: "brain" },
    ],
    to: "/case-studies/ai-commerce-personalization",
  },
  {
    tag: "DATA PLATFORM | CASE STUDY",
    title: "Unifying data for sharper enterprise decisions",
    desc: "A trusted intelligence layer for growth and operations.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    cardImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    metric: "70%",
    metricLabel: "Less manual reporting in risk reviews",
    bg: "#eef3f7",
    accent: "Analytics",
    search: "Risk trend",
    visual: "data",
    cardTitle: "Data layer",
    capabilities: [
      { label: "Pipelines", icon: "database" },
      { label: "Dashboards", icon: "chart" },
      { label: "Governance", icon: "network" },
      { label: "Forecasts", icon: "brain" },
    ],
    to: "/case-studies/enterprise-risk-management-platform",
  },
] as const;

export const caseStudyStories = [
  {
    slug: "broadcom-network-operations",
    eyebrow: "Telecom / ICT transformation",
    client: "Broadband Communication Networks",
    title: "Leading the way in communication technologies",
    subtitle:
      "A sharper digital presence for a 24-year technology solutions provider serving communication network operators, ISPs, regulators, utilities, and enterprise ICT buyers across Africa.",
    cardDescription:
      "A service-led website that makes Broadcom's telecom, enterprise network, data-center, power, and support capabilities easier to understand.",
    sourceUrl: "https://www.broadcom.co.ke",
    image:
      "https://rpfasixbozhsawdgbswy.supabase.co/storage/v1/object/public/media-images/9fcba073-f585-484f-a495-01ea9fef1e5d_CA_QoSMS_Launch_2018.jpg",
    heroImage: "https://www.broadcom.co.ke/images/caro1.webp",
    services: ["Telecom website", "Enterprise content", "Service architecture"],
    overview: [
      "Broadband Communication Networks needed a web experience that could carry the weight of a mature telecom and ICT business without making the offer feel fragmented.",
      "We shaped the site around its strongest market signals: advanced communication technologies, solutions for operators and regulators, enterprise ICT services, network implementation, managed services, green energy, and data-center infrastructure.",
      "The result presents Broadcom as a dependable technology partner for Africa's digital infrastructure, balancing technical credibility with a clearer buyer journey.",
    ],
    stats: [
      ["24+", "years in telecom"],
      ["6", "core solution areas"],
      ["Africa", "market focus"],
    ],
    galleryImages: [
      {
        title: "Telecom Operations Environment",
        image:
          "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Network Infrastructure Detail",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    sections: [
      {
        title: "A Hero Built Around Infrastructure Trust",
        body: "The homepage leads with the company as a technology solution provider for communication network operators, ISPs, regulators, and enterprise ICT customers, immediately grounding the story in real infrastructure work.",
        image:
          "https://rpfasixbozhsawdgbswy.supabase.co/storage/v1/object/public/services/d48ba2cb-01ea-4ae6-a330-e953fb4009af_DSC_4967.jpg",
      },
      {
        title: "Core Solutions Made Easier to Navigate",
        body: "The service structure clarifies project implementation, enterprise networks, maintenance and support, network solutions, green energy, and data-center solutions so technical visitors can find the right path quickly.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Partnerships and Delivery Confidence",
        body: "The content highlights long-standing expertise, trusted partnerships with global technology leaders, and dependable delivery across modern telecom and ICT environments.",
        image:
          "https://rpfasixbozhsawdgbswy.supabase.co/storage/v1/object/public/services/11b93eac-cc30-4bbd-a293-1e05bafe7737_DJI_0052.JPG",
      },
      {
        title: "Sustainability in Network Operations",
        body: "Green energy and sustainable network power are treated as part of the core offer, showing that infrastructure modernization can also reduce operating cost and environmental impact.",
        image:
          "https://rpfasixbozhsawdgbswy.supabase.co/storage/v1/object/public/media-images/b31b227c-254a-4ebf-be8f-6e80ef3e2d5c_Hybrid_System-Solar__Wind_1.webp",
      },
    ],
    features: [
      "Project implementation",
      "Enterprise networks",
      "Maintenance and support",
      "Network solutions",
      "Green energy",
      "Data-center solutions",
    ],
    featureCards: [
      {
        title: "ICT Solution Hub",
        body: "A central service structure for Broadcom's telecom and enterprise ICT capabilities, helping buyers understand the full infrastructure offer.",
        bullets: ["Operator-ready services", "Enterprise ICT paths", "Regional delivery"],
        visual: "network",
      },
      {
        title: "Core Solutions",
        body: "A clean presentation of project implementation, enterprise network, support, network solutions, green energy, and data-center services.",
        bullets: ["Clear service selection", "Buyer-friendly hierarchy", "Technical credibility"],
        visual: "tiles",
      },
      {
        title: "Partner Confidence",
        body: "Trust signals highlight 24+ years of telecom delivery and partnerships with leading global technology providers.",
        bullets: ["Trusted partnerships", "Long-term support", "Proven expertise"],
        visual: "stack",
      },
      {
        title: "Sustainable Infrastructure",
        body: "Green energy and power solutions are framed as practical infrastructure modernization, not a side message.",
        bullets: ["Lower operating cost", "Cleaner network power", "Sustainable delivery"],
        visual: "files",
      },
    ],
    impact:
      "A clearer brand and service journey for a telecom partner whose work spans mobile broadband, transmission networks, enterprise ICT, power systems, quality-of-service optimization, and long-term support.",
  },
  {
    slug: "wellness-hub-care-platform",
    eyebrow: "Healthcare / wellbeing",
    client: "The Wellness Hub",
    title: "Discover your best self",
    subtitle:
      "A calm digital experience for compassionate psychotherapy and mental-health consultancy for corporates, adults, adolescents, and families in Nairobi.",
    cardDescription:
      "A soft, reassuring web platform for therapy, mental-health consultancy, enquiry, calls, and session booking.",
    sourceUrl: "https://the-hub-pied.vercel.app",
    image: "https://the-hub-pied.vercel.app/assets/cta-therapy-bj2N_TWB.jpg",
    heroImage: "https://the-hub-pied.vercel.app/assets/hero-wellness-custom-opzVLQyh.png",
    services: ["Healthcare UX", "Brand experience", "Responsive web"],
    overview: [
      "The Wellness Hub needed a site that could make mental-health support feel approachable from the first interaction, especially for visitors arriving with sensitive or personal needs.",
      "The experience uses a gentle visual language, clear action paths, and grounded messaging around therapy and consultancy for corporates, adults, adolescents, and families.",
      "Instead of overwhelming visitors, the site gives them a quiet path into enquiry, exploration calls, booking, team context, approach, and client stories.",
    ],
    stats: [
      ["4", "primary audiences"],
      ["3", "clear action paths"],
      ["Nairobi", "care base"],
    ],
    galleryImages: [
      {
        title: "Thoughtful Therapy Session",
        image:
          "https://images.pexels.com/photos/5234624/pexels-photo-5234624.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        title: "Calm Support Conversation",
        image:
          "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
    sections: [
      {
        title: "A Gentle First Impression",
        body: "The hero pairs a calm wellness setting with direct language around compassionate therapy and consultancy, making the first screen feel warm, trustworthy, and easy to act on.",
        image: "https://the-hub-pied.vercel.app/assets/hero-calm-therapy-BrH20wk6.jpg",
      },
      {
        title: "Care Paths for Different Audiences",
        body: "The content frames support for corporates, adults, adolescents, and families so each visitor can recognize themselves without digging through dense clinical language.",
        image: "https://the-hub-pied.vercel.app/assets/blog-vulnerability-CA0phqdK.jpg",
      },
      {
        title: "Healing That Feels Human",
        body: "The site carries the line 'Healing that feels human, thoughtful, and grounded' into its approach section, reinforcing a care model that feels personal rather than transactional.",
        image: "https://the-hub-pied.vercel.app/assets/about-therapy-C2q198g7.jpg",
      },
      {
        title: "Clear Next Steps",
        body: "Make an enquiry, request an exploration call, or book a session are presented as simple next steps, helping visitors move at the pace that feels right for them.",
        image: "https://the-hub-pied.vercel.app/assets/about-approach-bg-CoVhSxOk.jpg",
      },
    ],
    features: [
      "Adult therapy",
      "Adolescent support",
      "Family care",
      "Corporate consultancy",
      "Exploration calls",
      "Session booking",
    ],
    featureCards: [
      {
        title: "Care Journey Hub",
        body: "A calm entry point that gives visitors clear ways to make an enquiry, request an exploration call, or book a session.",
        bullets: ["Low-friction enquiry", "Clear care options", "Warm first step"],
        visual: "network",
      },
      {
        title: "Audience Pathways",
        body: "The site organizes therapy and consultancy around corporates, adults, adolescents, and families so each visitor can find their place.",
        bullets: ["Adult support", "Adolescent care", "Family services"],
        visual: "tiles",
      },
      {
        title: "Human-Led Trust",
        body: "Team, approach, and client story sections help the experience feel personal, thoughtful, and grounded.",
        bullets: ["Practitioner context", "Client stories", "Grounded tone"],
        visual: "stack",
      },
      {
        title: "Booking Readiness",
        body: "The experience keeps next steps visible without making sensitive service discovery feel rushed or transactional.",
        bullets: ["Exploration calls", "Session booking", "Contact path"],
        visual: "files",
      },
    ],
    impact:
      "A softer, more credible web presence that makes therapy and mental-health consultancy easier to understand, trust, and approach.",
  },
  {
    slug: "ai-commerce-personalization",
    eyebrow: "AI / retail",
    client: "Retail commerce",
    title: "AI-powered personalization for commerce teams",
    subtitle:
      "A product intelligence layer that helps retail teams recommend the next best product, message, and offer.",
    cardDescription:
      "Personalized shopping journeys powered by product, customer, and behavior signals.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=88",
    services: ["AI strategy", "Data activation", "Commerce UX"],
    overview: [
      "Retail teams needed a way to turn scattered customer and product data into timely, useful shopping recommendations.",
      "The platform combines customer behavior, inventory, and campaign signals into a guided personalization workflow.",
    ],
    stats: [
      ["31%", "higher product discovery"],
      ["18%", "larger average basket"],
      ["2x", "faster campaign setup"],
    ],
    galleryImages: [
      {
        title: "Commerce Intelligence Dashboard",
        image:
          "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Retail Personalization Workflow",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    sections: [
      {
        title: "Customer Intelligence",
        body: "Behavior and preference data were translated into practical segments that marketing and merchandising teams could use.",
        image:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Recommendation Workflow",
        body: "A guided workflow helped teams build campaigns, validate recommendations, and monitor conversion impact.",
        image:
          "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    features: [
      "Customer segments",
      "Offer logic",
      "Campaign testing",
      "Product affinity",
      "Analytics dashboards",
      "Automated recommendations",
    ],
    impact:
      "Commerce teams gained a more repeatable personalization engine with clearer measurement loops.",
  },
  {
    slug: "enterprise-risk-management-platform",
    eyebrow: "Risk / enterprise",
    client: "Enterprise operations",
    title: "Enterprise risk management platform",
    subtitle:
      "A decision workspace for risk owners to track exposure, controls, incidents, and remediation progress.",
    cardDescription:
      "Digitized risk workflows with executive visibility and accountable remediation.",
    image:
      "https://images.pexels.com/photos/6949913/pexels-photo-6949913.jpeg?auto=compress&cs=tinysrgb&w=1400",
    heroImage:
      "https://images.pexels.com/photos/3869649/pexels-photo-3869649.jpeg?auto=compress&cs=tinysrgb&w=1800",
    services: ["Workflow design", "Platform engineering", "Executive dashboards"],
    overview: [
      "Risk work was spread across spreadsheets, email, and disconnected review cycles.",
      "We designed a single operating view for risks, ownership, control status, and escalation.",
    ],
    stats: [
      ["40%", "faster reviews"],
      ["1", "risk source of truth"],
      ["70%", "less manual reporting"],
    ],
    galleryImages: [
      {
        title: "Governance Review Session",
        image:
          "https://images.pexels.com/photos/9034230/pexels-photo-9034230.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        title: "Executive Risk Discussion",
        image:
          "https://images.pexels.com/photos/5685763/pexels-photo-5685763.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
    sections: [
      {
        title: "Risk Workspace",
        body: "Teams can see open risk items, owners, deadlines, and control status in one place.",
        image:
          "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
      {
        title: "Executive Signals",
        body: "Leadership views focus on exposure, urgency, trend, and response confidence.",
        image:
          "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1400",
      },
    ],
    features: [
      "Risk register",
      "Control tracking",
      "Escalation paths",
      "Executive reporting",
      "Evidence capture",
      "Audit-ready logs",
    ],
    impact: "Risk teams moved from reactive reporting to clearer operating control.",
  },
  {
    slug: "b2b-sales-portal",
    eyebrow: "B2B / manufacturing",
    client: "Industrial sales",
    title: "B2B sales portal for field teams",
    subtitle:
      "A portal for account managers and distributors to configure orders, track availability, and speed up quote cycles.",
    cardDescription: "Self-service B2B ordering and account workflows for distributed sales teams.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1581091215367-59ab6b74c7b4?auto=format&fit=crop&w=1800&q=88",
    services: ["B2B commerce", "Portal UX", "ERP integration"],
    overview: [
      "Sales reps were losing time to manual quote requests and disconnected product availability checks.",
      "The portal brought products, accounts, pricing rules, and order status into a single sales workflow.",
    ],
    stats: [
      ["35%", "faster quoting"],
      ["22%", "fewer order errors"],
      ["1", "sales workspace"],
    ],
    galleryImages: [
      {
        title: "Industrial Operations Floor",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Field Sales Planning",
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    sections: [
      {
        title: "Account Ordering",
        body: "Sales teams can configure orders, compare availability, and submit requests from a guided interface.",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Operational Visibility",
        body: "ERP and inventory signals are surfaced directly in the portal to reduce back-and-forth.",
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    features: [
      "Quote builder",
      "Account pricing",
      "Order tracking",
      "Inventory signals",
      "Distributor access",
      "Approval rules",
    ],
    impact: "Sales teams gained a cleaner workflow for complex B2B ordering and customer support.",
  },
  {
    slug: "omnichannel-commerce-platform",
    eyebrow: "Commerce / retail",
    client: "Consumer retail",
    title: "Omnichannel commerce platform",
    subtitle:
      "A unified experience connecting store, web, content, customer service, and fulfillment journeys.",
    cardDescription: "Modern commerce foundations for consistent buying journeys across channels.",
    image:
      "https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&w=1400&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=1800&q=88",
    services: ["Commerce architecture", "Customer experience", "Integrations"],
    overview: [
      "The business needed one connected customer experience across digital and physical channels.",
      "We aligned product discovery, ordering, support, and fulfillment into a shared commerce operating model.",
    ],
    stats: [
      ["28%", "checkout lift"],
      ["3", "channels unified"],
      ["19%", "repeat purchase growth"],
    ],
    galleryImages: [
      {
        title: "Retail Service Counter",
        image:
          "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Connected Commerce Team",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    sections: [
      {
        title: "Unified Customer Journey",
        body: "Customers move more naturally between discovery, product detail, support, and checkout.",
        image:
          "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Channel Operations",
        body: "Teams manage content, availability, and service workflows with better visibility.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
      },
    ],
    features: [
      "Headless storefront",
      "CRM integration",
      "Content workflows",
      "Order visibility",
      "Service channels",
      "Analytics",
    ],
    impact:
      "A stronger commerce foundation improved customer continuity and operational visibility.",
  },
] as const;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 96 : -96,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -96 : 96,
  }),
};

const CASE_STUDY_AUTOPLAY_DELAY = 10000;
const CASE_STUDY_MOBILE_AUTOPLAY_DELAY = 11000;
const CASE_STUDY_TRANSITION_DURATION = 1.1;

export const caseStudyImagePreloadUrls = Array.from(
  new Set(items.flatMap((item) => [item.img, item.cardImage])),
);

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const current = items[active];

  const next = () => {
    setDirection(1);
    setActive((value) => (value + 1) % items.length);
  };

  const previous = () => {
    setDirection(-1);
    setActive((value) => (value - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timeout = window.setTimeout(
      () => {
        setDirection(1);
        setActive((value) => (value + 1) % items.length);
      },
      isMobile ? CASE_STUDY_MOBILE_AUTOPLAY_DELAY : CASE_STUDY_AUTOPLAY_DELAY,
    );

    return () => window.clearTimeout(timeout);
  }, [active, isMobile, isPaused]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const updateMobileState = () => setIsMobile(media.matches);

    updateMobileState();
    media.addEventListener("change", updateMobileState);

    return () => media.removeEventListener("change", updateMobileState);
  }, []);

  useEffect(() => {
    const preloadedImages = caseStudyImagePreloadUrls.map((src) => {
      const image = new Image();
      image.decoding = "sync";
      image.loading = "eager";
      image.src = src;
      return image;
    });

    return () => {
      preloadedImages.length = 0;
    };
  }, []);

  return (
    <section
      className="case-studies-section overflow-hidden bg-white py-16 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container-pro">
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-display text-[1.75rem] font-normal leading-none text-navy sm:text-[2.2rem]">
            What We Have Done
          </h2>
          <div className="flex items-center gap-5 text-navy">
            <button
              type="button"
              onClick={previous}
              className="transition hover:text-orange"
              aria-label="Previous case study"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="min-w-12 text-center text-xs font-medium">
              {active + 1} / {items.length}
            </div>
            <button
              type="button"
              onClick={next}
              className="transition hover:text-orange"
              aria-label="Next case study"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          <motion.article
            key={current.title}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) {
                next();
              } else if (info.offset.x > 60 || info.velocity.x > 500) {
                previous();
              }
            }}
            transition={{ duration: CASE_STUDY_TRANSITION_DURATION, ease: [0.22, 1, 0.36, 1] }}
            className="case-study-motion"
          >
            <div
              className={`case-study-showcase case-study-showcase--${current.visual} mt-9`}
              style={{ backgroundColor: current.bg }}
            >
              <span className="case-study-showcase__spark case-study-showcase__spark--one" />
              <span className="case-study-showcase__spark case-study-showcase__spark--two" />
              <div className="case-study-showcase__scene">
                <svg
                  className="case-study-showcase__connectors"
                  viewBox="0 0 1180 540"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    className="case-study-showcase__connector case-study-showcase__connector--left"
                    d="M190 250 C285 250 305 225 395 225"
                  />
                  <path
                    className="case-study-showcase__connector case-study-showcase__connector--right-top"
                    d="M785 165 C875 165 905 118 990 118"
                  />
                  <path
                    className="case-study-showcase__connector case-study-showcase__connector--right-bottom"
                    d="M785 370 C885 370 910 430 995 430"
                  />
                  <circle className="case-study-showcase__node" cx="190" cy="250" r="7" />
                  <circle className="case-study-showcase__node" cx="395" cy="225" r="7" />
                  <circle className="case-study-showcase__node" cx="785" cy="165" r="7" />
                  <circle className="case-study-showcase__node" cx="990" cy="118" r="7" />
                  <circle className="case-study-showcase__node" cx="785" cy="370" r="7" />
                  <circle className="case-study-showcase__node" cx="995" cy="430" r="7" />
                </svg>
                <Link
                  to={current.to}
                  className="case-study-showcase__access-panel"
                  aria-label={`View ${current.title} case study`}
                >
                  <span className="case-study-showcase__dot" />
                  <strong>{current.cardTitle}</strong>
                  <div className="case-study-showcase__tools">
                    {current.capabilities.map((capability) => {
                      const Icon = capabilityIcons[capability.icon];

                      return (
                        <span key={capability.label}>
                          <Icon className="case-study-showcase__tool-icon" />
                          {capability.label}
                        </span>
                      );
                    })}
                  </div>
                </Link>
                <div className="case-study-showcase__laptop">
                  <div className="case-study-showcase__browser">
                    <span />
                    <span />
                    <span />
                    <strong>{current.accent}</strong>
                  </div>
                  <img
                    src={current.img}
                    alt={current.title}
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    width={1600}
                    height={1000}
                  />
                </div>
                <span className="case-study-showcase__base" />
                <Link
                  to={current.to}
                  className="case-study-showcase__metric-card"
                  aria-label={`Open ${current.title} impact`}
                >
                  <span>{current.accent}</span>
                  <img
                    src={current.cardImage}
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    width={260}
                    height={180}
                  />
                  <div className="case-study-showcase__mini-row">
                    <strong>{current.metric}</strong>
                    <small>{current.metricLabel.split(" ").slice(0, 2).join(" ")}</small>
                  </div>
                </Link>
                <Link
                  to={current.to}
                  className="case-study-showcase__search-card"
                  aria-label={`Explore ${current.search} for ${current.title}`}
                >
                  <span>Search</span>
                  <strong>{current.search}</strong>
                  <small>{current.search} for business</small>
                </Link>
              </div>
            </div>

            <div className="case-study-detail mt-6 grid gap-8 lg:grid-cols-[1fr_310px] lg:items-start">
              <div>
                <div className="text-[9px] font-normal uppercase tracking-[0.12em] text-navy/55">
                  {current.tag}
                </div>
                <h3 className="mt-3 max-w-3xl font-display text-[1.25rem] font-normal leading-[1.22] text-navy sm:text-[1.55rem]">
                  {current.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[0.82rem] leading-6 text-ink-muted">
                  {current.desc}
                </p>
              </div>
              <div className="case-study-detail__metric grid grid-cols-[auto_1fr] items-center gap-5 lg:justify-self-end">
                <div className="font-display text-[2.4rem] font-light leading-none text-navy sm:text-[3rem]">
                  {current.metric}
                </div>
                <p className="max-w-[190px] text-[0.78rem] leading-5 text-ink-muted">
                  {current.metricLabel}
                </p>
              </div>
              <Link
                to={current.to}
                className="case-study-detail__link inline-flex items-center gap-3 border border-navy px-4 py-2.5 text-xs font-normal text-navy transition hover:bg-navy hover:text-white lg:col-start-1 lg:row-start-2 lg:w-fit"
              >
                View Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function CaseStudyListing() {
  return (
    <section className="case-story-listing bg-white">
      <div className="container-pro">
        <div className="case-story-listing__intro">
          <h2>Success Stories</h2>
          <p>
            Discover how focused digital, data, and product work turns complex needs into measurable
            business outcomes.
          </p>
        </div>

        <div className="case-story-grid">
          {caseStudyStories.map((story) => (
            <Link
              className="case-story-card"
              key={story.slug}
              to="/case-studies/$slug"
              params={{ slug: story.slug }}
            >
              <span className="case-story-card__media">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  width={900}
                  height={700}
                />
              </span>
              <div className="case-story-card__meta">{story.eyebrow}</div>
              <h3>{story.title}</h3>
              <p>{story.cardDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyContact() {
  const { handleSubmit, isSubmitting, submitMessage, submitState } = useContactSubmit({
    source: "case-studies-contact",
  });

  return (
    <section className="approach-contact case-study-contact container-pro">
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

export function CaseStudyFooter() {
  const [openSections, setOpenSections] = useState(() => new Set(["Industries"]));
  const columns = [
    ["Company", "About", "Services", "Case Studies", "Resources", "Approach", "Contact"],
    [
      "Digital Services",
      "AI Development Services",
      "Digital Transformation",
      "Commerce Acceleration",
      "Technology Innovation",
      "Digital Strategy",
      "Data Analytics & AI",
    ],
    [
      "Industries",
      "Retail",
      "Manufacturing",
      "Distribution",
      "Specializations",
      "Healthcare",
      "Finance",
    ],
    [
      "GenAI Services",
      "GenAI Software Development",
      "AI Agent Development",
      "LLM Development",
      "AI Strategy Consulting",
    ],
  ] as const;
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
    <footer className="approach-footer case-study-footer">
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
        <div className="case-study-footer__columns">
          {columns.map(([title, ...items]) => {
            const expanded = openSections.has(title);

            return (
              <nav className="approach-footer__col" key={title} data-expanded={expanded}>
                <button
                  type="button"
                  className="approach-footer__toggle"
                  onClick={() => toggleSection(title)}
                  aria-expanded={expanded}
                  aria-controls={`footer-${title.toLowerCase().replaceAll(" ", "-")}`}
                >
                  <span>{title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <ul id={`footer-${title.toLowerCase().replaceAll(" ", "-")}`}>
                  {items.map((item) => (
                    <li key={item}>
                      <Link to={getFooterLink(item)}>{item}</Link>
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

function getFooterLink(item: string) {
  if (item === "About") return "/about";
  if (item === "Case Studies") return "/case-studies";
  if (item === "Resources" || item === "Approach") return "/resources";
  if (item === "Contact") return "/contact";
  if (
    [
      "Retail",
      "Manufacturing",
      "Distribution",
      "Specializations",
      "Healthcare",
      "Finance",
    ].includes(item)
  ) {
    return "/industries";
  }

  return "/services";
}

export function SocialIcon({
  type,
}: {
  type: "facebook" | "linkedin" | "x" | "medium" | "youtube" | "instagram";
}) {
  const paths = {
    facebook: (
      <path d="M14 8.6h2.1V5h-2.7C10.2 5 9 6.9 9 9.6V12H6v3.8h3V23h4.1v-7.2h2.8l.5-3.8h-3.3V10c0-.9.2-1.4.9-1.4Z" />
    ),
    linkedin: (
      <>
        <path d="M5.3 8.7a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7Z" />
        <path d="M3.2 10.4h4.2V23H3.2Z" />
        <path d="M10 10.4h4v1.7h.1c.6-1.1 2-2.1 4-2.1 4.3 0 5.1 2.8 5.1 6.5V23H19v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V23H10Z" />
      </>
    ),
    x: (
      <path d="M15.2 10.5 22.7 2h-1.8l-6.5 7.4L9.2 2H3.2l7.9 11.2L3.2 22h1.8l6.9-7.8 5.5 7.8h6.1Zm-2.4 2.7-.8-1.1L5.6 3.3h2.8l5.1 7.1.8 1.1 6.7 9.3h-2.8Z" />
    ),
    medium: (
      <>
        <path d="M13.6 12c0 5.1-3 9.2-6.8 9.2S0 17.1 0 12s3-9.2 6.8-9.2 6.8 4.1 6.8 9.2Z" />
        <path d="M21.1 12c0 4.8-1.5 8.7-3.4 8.7s-3.4-3.9-3.4-8.7 1.5-8.7 3.4-8.7 3.4 3.9 3.4 8.7Z" />
        <path d="M24 12c0 4.3-.5 7.8-1.2 7.8s-1.2-3.5-1.2-7.8.5-7.8 1.2-7.8S24 7.7 24 12Z" />
      </>
    ),
    youtube: (
      <path d="M23.5 6.6a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.5A3 3 0 0 0 .5 6.6 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.4 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.4ZM9.6 15.5v-7l6.2 3.5Z" />
    ),
    instagram: (
      <>
        <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm9.4 2H7.4A3.4 3.4 0 0 0 4 7.4v9.2A3.4 3.4 0 0 0 7.4 20h9.2a3.4 3.4 0 0 0 3.4-3.4V7.4A3.4 3.4 0 0 0 16.6 4Z" />
        <path d="M12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
        <path d="M17 6.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      {paths[type]}
    </svg>
  );
}
