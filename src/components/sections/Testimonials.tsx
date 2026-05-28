"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  { q: "Wallace Croft didn't just deliver a platform — they reshaped how our teams operate, ship and learn.", a: "Helena Marsh", r: "CIO, Northwind Capital" },
  { q: "A rare partner that combines enterprise rigor with the speed of a great product team.", a: "Daniel Okafor", r: "VP Engineering, Vantage Health" },
  { q: "From advisory to managed services, the experience felt like one team — accountable end to end.", a: "Priya Raman", r: "COO, Meridian Retail Group" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, []);
  const cur = quotes[i];
  return (
    <section className="bg-surface py-28">
      <div className="container-pro grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">Testimonials</div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            We don't just deliver solutions. <span className="text-orange">We create lasting value.</span>
          </h2>
          <div className="mt-8 flex gap-3">
            <button onClick={() => setI((x) => (x - 1 + quotes.length) % quotes.length)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition" aria-label="Previous"><ChevronLeft className="h-4 w-4" /></button>
            <button onClick={() => setI((x) => (x + 1) % quotes.length)} className="grid h-11 w-11 place-items-center rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition" aria-label="Next"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="relative min-h-[260px]">
          <Quote className="absolute -left-2 -top-4 h-16 w-16 text-orange/30" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}
              className="relative pl-6"
            >
              <p className="font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">"{cur.q}"</p>
              <footer className="mt-6 text-sm">
                <span className="font-bold text-navy">{cur.a}</span>
                <span className="text-ink-muted"> — {cur.r}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex gap-2">
            {quotes.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Go to ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-orange" : "w-4 bg-navy/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
