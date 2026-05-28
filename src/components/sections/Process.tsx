"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { n: "01", t: "Discover", d: "We immerse in your business, technology and goals to surface the most valuable opportunities." },
  { n: "02", t: "Design", d: "Architecture, experience, and roadmap shaped by data and proven patterns." },
  { n: "03", t: "Build", d: "Cross-functional product squads ship in tight, transparent iterations." },
  { n: "04", t: "Deploy", d: "Resilient delivery pipelines move every change from idea to production safely." },
  { n: "05", t: "Evolve", d: "Operate, measure, and continuously improve with managed services and analytics." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth + 80;
      if (distance <= 0) return;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-28">
      <div className="container-pro">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">Our Approach</div>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
          A proven path from <span className="text-orange">discovery</span> to <span className="text-orange">evolution</span>.
        </h2>
      </div>
      <div className="mt-16 overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-6 lg:px-10 will-change-transform">
          {steps.map((s) => (
            <div key={s.n} className="relative w-[78vw] max-w-[520px] shrink-0 rounded-3xl border border-border bg-surface p-10 shadow-[0_18px_40px_-22px_rgba(0,27,91,0.25)]">
              <div className="font-display text-7xl font-extrabold text-orange/80">{s.n}</div>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-navy">{s.t}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{s.d}</p>
              <div className="absolute right-8 top-8 h-3 w-3 bg-orange" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
