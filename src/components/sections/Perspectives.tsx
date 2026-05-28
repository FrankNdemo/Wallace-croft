"use client";

import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui-pro/Reveal";

const perspectiveImages = {
  assistant:
    "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=1400",
  guide:
    "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1400",
  usecases:
    "https://images.pexels.com/photos/32755772/pexels-photo-32755772.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

const items = [
  {
    tag: "Case Study",
    title: "Modernizing Customer Service with AI Agent",
    sub: "An AI employee for a leading fashion retailer",
    to: "/case-studies/ai-employee-for-retailer",
    visual: "assistant",
    image: perspectiveImages.assistant,
  },
  {
    tag: "Informational Guide",
    title: "The AI Agent Costly Mistakes Prevention Guide",
    sub: "Uncover critical foundations for AI agent success",
    to: "/resources/ai-agent-guide",
    visual: "guide",
    image: perspectiveImages.guide,
  },
  {
    tag: "Informational Guide",
    title: "100 Real-world Use Cases of AI Agents for Enterprises",
    sub: "Know how AI agents are redefining workflows",
    to: "/resources/ai-agents-use-cases",
    visual: "usecases",
    image: perspectiveImages.usecases,
  },
] as const;

type PerspectiveVisualProps = {
  kind: (typeof items)[number]["visual"];
};

function PerspectiveVisual({ kind }: PerspectiveVisualProps) {
  const item = items.find((entry) => entry.visual === kind);

  return (
    <div className={`perspective-visual perspective-visual--image perspective-visual--${kind}`}>
      <span className="perspective-visual__halo" aria-hidden="true" />
      <span className="perspective-visual__trace perspective-visual__trace--one" aria-hidden="true" />
      <span className="perspective-visual__trace perspective-visual__trace--two" aria-hidden="true" />
      <img src={item?.image} alt="" loading="lazy" width={1200} height={780} />
    </div>
  );
}

export function Perspectives() {
  return (
    <section className="perspectives-section bg-white py-16 lg:pt-0 lg:pb-20">
      <div className="container-pro">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-[1.9rem] font-normal leading-none text-navy sm:text-[2.35rem]">
              Our Perspectives
            </h2>
            <Link
              to="/resources"
              className="inline-flex items-center gap-3 border border-navy px-5 py-3 text-xs font-normal text-navy transition hover:bg-navy hover:text-white"
            >
              All Resources <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-12">
          {items.map((item, index) => (
            <Reveal key={item.title} i={index}>
              <Link to={item.to} className="perspective-card group block">
                <PerspectiveVisual kind={item.visual} />
                <div className="mt-6 text-[9px] font-normal uppercase tracking-[0.22em] text-navy/55">
                  {item.tag}
                </div>
                <h3 className="mt-3 max-w-[24rem] font-display text-[1.35rem] font-normal leading-[1.28] text-navy transition group-hover:text-orange sm:text-[1.55rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.82rem] leading-6 text-ink-muted">{item.sub}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
