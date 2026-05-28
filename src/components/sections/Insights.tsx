"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui-pro/Reveal";
import manufacturingImage from "@/assets/bright-industries.webp";

const insightImages = {
  manufacturing: manufacturingImage,
  implementation:
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1400&q=85",
  supplyChain:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
};

const items = [
  {
    cat: "AI",
    read: "22 Mins",
    date: "August 2025",
    img: insightImages.manufacturing,
    title: "Top 5 Generative AI Use Cases Transforming Manufacturing",
    to: "/blog/top-5-generative-ai-use-cases-transforming-manufacturing",
  },
  {
    cat: "AI",
    read: "15 Mins",
    date: "July 2025",
    img: insightImages.implementation,
    title: "How to Implement AI in Your Business for Maximum Impact: A Practical Guide",
    to: "/blog/how-to-implement-ai-in-your-business-for-maximum-impact",
  },
  {
    cat: "AI",
    read: "15 Mins",
    date: "July 2025",
    img: insightImages.supplyChain,
    title: "Top 5 Generative AI Use Cases Transforming Supply Chains",
    to: "/blog/top-5-generative-ai-use-cases-transforming-supply-chains",
  },
];

export function Insights() {
  return (
    <section id="insights" className="insights-section bg-white py-16 lg:py-20">
      <div className="container-pro">
        <Reveal>
          <div className="insights-heading flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-[1.9rem] font-normal leading-none text-navy sm:text-[2.35rem]">
              Insights
            </h2>
            <Link
              to="/blog"
              className="insights-heading__link inline-flex items-center gap-3 border border-navy px-5 py-3 text-xs font-normal text-navy transition hover:bg-navy hover:text-white"
            >
              View All Blogs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="insights-list mt-9 grid gap-10 md:grid-cols-3 lg:gap-14">
          {items.map((post, index) => (
            <Reveal key={post.title} i={index}>
              <article className="insight-card border-t border-[#dfdfdf] pt-7">
                <Link to={post.to} className="insight-card__image group block overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="h-[204px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[220px] lg:h-[204px]"
                  />
                </Link>
                <div className="insight-card__body">
                  <div className="insight-card__meta flex flex-wrap items-center gap-2 text-[9px] font-normal uppercase tracking-[0.14em] text-orange">
                    <span>{post.cat}</span>
                    <span className="h-1 w-1 rounded-full bg-orange/60" aria-hidden />
                    <span>{post.read}</span>
                    <span className="h-1 w-1 rounded-full bg-orange/60" aria-hidden />
                    <span>{post.date}</span>
                  </div>
                  <Link to={post.to} className="group mt-5 block">
                    <h3 className="insight-card__title max-w-[28rem] font-display text-[1.1rem] font-normal leading-[1.45] text-navy transition group-hover:text-orange sm:text-[1.25rem]">
                      {post.title}
                    </h3>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Link
          to="/blog"
          className="insights-mobile-link mt-10 hidden items-center justify-center gap-3 border border-navy px-5 py-3 text-xs font-normal text-navy transition hover:bg-navy hover:text-white"
        >
          View All Blogs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
