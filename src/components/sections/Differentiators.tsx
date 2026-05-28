"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Reveal } from "@/components/ui-pro/Reveal";

const differentiatorImages = {
  industry:
    "https://images.pexels.com/photos/10375897/pexels-photo-10375897.jpeg?auto=compress&cs=tinysrgb&w=1400",
  endToEnd:
    "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=1400",
  agile:
    "https://images.pexels.com/photos/3931504/pexels-photo-3931504.jpeg?auto=compress&cs=tinysrgb&w=1400",
  topDown:
    "https://images.pexels.com/photos/6476261/pexels-photo-6476261.jpeg?auto=compress&cs=tinysrgb&w=1400",
  compliance:
    "https://images.pexels.com/photos/5905836/pexels-photo-5905836.jpeg?auto=compress&cs=tinysrgb&w=1400",
  enterprise:
    "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1400",
};

const items = [
  {
    img: differentiatorImages.industry,
    title: "Deep Industry Knowledge",
    desc: "Retail, manufacturing, and distribution are where we do our deepest work, from strategy through scale and the daily systems teams depend on.",
  },
  {
    img: differentiatorImages.endToEnd,
    title: "End-to-end Capabilities",
    desc: "From finding the opportunities to developing strategy, experiences, and technology to achieving your business objectives, we can do it all end-to-end and own it with your team.",
  },
  {
    img: differentiatorImages.agile,
    title: "Born Agile",
    desc: "Agility is in our DNA. We stay lean, move fast, and deliver ROI in days and weeks while bringing fresh energy, expertise, and collaboration.",
  },
  {
    img: differentiatorImages.topDown,
    title: "Top-down Capabilities, Bottom-up Spirit",
    desc: "We do not just take the big game. We work with leaders on long-term vision, strategy, and roadmaps while staying hand-in-hand with delivery teams.",
  },
  {
    img: differentiatorImages.compliance,
    title: "Culture & Compliance Expertise",
    desc: "We challenge the status quo, increase agility, transform processes, drive adoption, and eliminate risks for leaders, stakeholders, and customers.",
  },
  {
    img: differentiatorImages.enterprise,
    title: "Mastery in Enterprise Technology",
    desc: "We unlock opportunities with enterprise tech stacks, ERPs, CRMs, cloud, data warehouses, analytics, integrations, and future-proof AI solutions.",
  },
];

export function Differentiators() {
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
      className="differentiators-section bg-white py-16 lg:py-0"
      style={sectionHeight ? { height: `${sectionHeight}px` } : undefined}
    >
      <div
        ref={viewportRef}
        data-pin-state={pinState}
        className="differentiator-viewport container-pro lg:flex lg:flex-col lg:overflow-hidden"
        style={pinHeight ? { height: `${pinHeight}px` } : undefined}
      >
        <Reveal>
          <h2 className="font-display text-[2.15rem] font-normal leading-none text-navy sm:text-[3rem] lg:text-[3.45rem]">
            Our Differentiators
          </h2>
        </Reveal>
        <motion.div
          ref={trackRef}
          style={{ x }}
          aria-label="Differentiators"
          className="differentiator-rail mt-12 flex gap-8 overflow-x-auto pb-4 lg:w-max lg:overflow-visible lg:pb-0"
        >
          {items.map((item, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article key={item.title} className="differentiator-card shrink-0">
                {imageFirst ? (
                  <>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={1600}
                      height={1000}
                    />
                    <div className="differentiator-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="differentiator-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={1600}
                      height={1000}
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
