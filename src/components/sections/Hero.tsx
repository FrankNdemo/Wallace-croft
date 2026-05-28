"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="home-hero relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep pt-24 text-white">
      <div aria-hidden className="home-hero__background absolute inset-0 grid place-items-center">
        <div
          className="absolute h-[120vmin] w-[120vmin] rounded-full opacity-90"
          style={{
            background:
              "radial-gradient(circle, rgba(31,41,99,0.42) 0%, rgba(10,19,37,0.08) 42%, transparent 72%)",
          }}
        />
        <svg className="hero-spiral hero-spiral--main absolute h-[112vmin] w-[112vmin] opacity-75" viewBox="0 0 640 640" fill="none">
          <defs>
            <linearGradient id="croftHeroRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#030c19" stopOpacity="0" />
              <stop offset="46%" stopColor="#f37f21" stopOpacity="0.58" />
              <stop offset="100%" stopColor="#030c19" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 22 }).map((_, index) => (
            <ellipse
              key={index}
              cx="320"
              cy="320"
              rx={92 + index * 10}
              ry={62 + index * 7}
              stroke="url(#croftHeroRing)"
              strokeWidth="1.1"
              transform={`rotate(${index * 8} 320 320)`}
            />
          ))}
        </svg>
        <svg className="hero-spiral hero-spiral--echo absolute h-[82vmin] w-[82vmin] opacity-45" viewBox="0 0 640 640" fill="none">
          <defs>
            <linearGradient id="croftHeroRingEcho" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f37f21" stopOpacity="0" />
              <stop offset="50%" stopColor="#030c19" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#f37f21" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 18 }).map((_, index) => (
            <ellipse
              key={index}
              cx="320"
              cy="320"
              rx={74 + index * 9}
              ry={46 + index * 6}
              stroke="url(#croftHeroRingEcho)"
              strokeWidth="1"
              transform={`rotate(${index * 10} 320 320)`}
            />
          ))}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-navy-deep" />
      </div>

      <div className="home-hero__content container-pro relative z-10 py-20 text-center">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="mx-auto w-full max-w-[22rem] font-display text-[2.35rem] font-normal leading-[1.08] sm:max-w-5xl sm:text-[4rem] sm:leading-[1.02] lg:text-[4.9rem]"
        >
          The Innovation
          <br />
          Transformation <span className="text-orange">Company</span>
        </motion.h1>
        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.14 }}
          className="mx-auto mt-7 w-full max-w-[21rem] text-[0.86rem] font-medium leading-7 text-white/92 sm:max-w-2xl sm:text-[0.96rem]"
        >
          Wallace Croft helps respected enterprises unlock multi-million dollar growth through engineering, AI, and managed transformation.
        </motion.p>
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 border border-white/38 px-6 py-3 text-xs font-normal text-white transition hover:border-white hover:bg-white hover:text-navy-deep"
          >
            Explore Services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
