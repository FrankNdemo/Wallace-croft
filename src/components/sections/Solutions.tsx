"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui-pro/Reveal";
import { CheckCircle2 } from "lucide-react";
import fintech from "@/assets/bright-strategy.webp";
import health from "@/assets/case-health.webp";
import retail from "@/assets/bright-resources.webp";
import mfg from "@/assets/case-manufacturing.webp";
import publicSector from "@/assets/bright-industries.webp";

const tabs = [
  {
    id: "fin",
    label: "Financial Services",
    title: "Modern banking at scale",
    body: "Secure platforms for data-heavy teams.",
    points: ["Core systems", "Risk intelligence", "Embedded finance"],
    img: fintech,
  },
  {
    id: "health",
    label: "Healthcare",
    title: "Connected care",
    body: "Digital journeys for patients and teams.",
    points: ["EHR integration", "Patient platforms", "Clinical analytics"],
    img: health,
  },
  {
    id: "retail",
    label: "Retail & Commerce",
    title: "Commerce that converts",
    body: "Connected stores, search, and operations.",
    points: ["Headless stores", "Unified data", "AI personalization"],
    img: retail,
  },
  {
    id: "mfg",
    label: "Manufacturing",
    title: "Smart manufacturing",
    body: "Connected operations from floor to forecast.",
    points: ["IoT platforms", "Predictive maintenance", "Supply chain"],
    img: mfg,
  },
  {
    id: "pub",
    label: "Public Sector",
    title: "Better public services",
    body: "Accessible systems built for trust.",
    points: ["Identity", "Modern services", "Cloud foundations"],
    img: publicSector,
  },
];

export function Solutions() {
  const [active, setActive] = useState(tabs[0].id);
  const cur = tabs.find((t) => t.id === active)!;

  return (
    <section id="industries" className="bg-white py-16 lg:py-20">
      <div className="container-pro">
        <Reveal>
          <div className="text-[10px] font-normal uppercase tracking-[0.14em] text-orange">Industries</div>
          <h2 className="mt-3 max-w-3xl font-display text-[1.9rem] font-normal text-navy sm:text-[2.35rem]">
            Built for your industry.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[250px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`whitespace-nowrap border px-4 py-3 text-left text-xs font-normal transition ${
                  active === t.id ? "border-navy bg-navy text-white" : "border-border bg-white text-ink hover:border-navy/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="relative min-h-[420px] overflow-hidden border border-border bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid min-h-[420px] lg:grid-cols-[0.94fr_1.06fr]"
              >
                <div className="relative min-h-[260px] overflow-hidden">
                  <img src={cur.img} alt={cur.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/42 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <h3 className="font-display text-[1.65rem] font-normal text-navy">{cur.title}</h3>
                  <p className="mt-4 max-w-2xl text-[0.86rem] leading-6 text-ink-muted">{cur.body}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                    {cur.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 border border-border bg-white p-4 text-xs font-normal text-navy">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
