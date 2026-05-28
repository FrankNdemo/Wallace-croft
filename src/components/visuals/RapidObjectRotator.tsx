"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const avatars = ["ST", "DX", "AI", "OP"];

type Variant = {
  key: string;
  title: string;
  value: string;
  title2: string;
  value2: string;
  render: () => ReactNode;
};

const variants: Variant[] = [
  {
    key: "basket",
    title: "Commerce operations",
    value: "Unified touchpoints",
    title2: "Transformation signal",
    value2: "Live data in motion",
    render: () => <BasketVisual />,
  },
  {
    key: "loop",
    title: "AI operating model",
    value: "Connected workflows",
    title2: "Design to delivery",
    value2: "Sharper release cycles",
    render: () => <LoopVisual />,
  },
  {
    key: "orbit",
    title: "Connected platforms",
    value: "Cloud, data, and AI",
    title2: "Always-on operations",
    value2: "Telemetry + orchestration",
    render: () => <OrbitVisual />,
  },
];

type RapidObjectRotatorProps = {
  compact?: boolean;
  mode?: "framed" | "open";
};

function Stage({ compact, mode, children }: { compact: boolean; mode: "framed" | "open"; children: ReactNode }) {
  return (
    <div className={`rapid-object-stage ${compact ? "rapid-object-stage--compact" : ""} ${mode === "open" ? "rapid-object-stage--open" : ""}`}>
      <div className={`rapid-object-shell ${mode === "open" ? "rapid-object-shell--open" : ""}`}>
        <div className="rapid-object-shell__grid" />
        <div className="rapid-object-shell__glow" />
        <div className="rapid-object-shell__floor" aria-hidden>
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} style={{ ["--ring-index" as "--ring-index"]: index }} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-10">{children}</div>
      </div>
    </div>
  );
}

function BasketVisual() {
  return (
    <div className="rapid-wire-basket" aria-hidden>
      <svg viewBox="0 0 520 520" fill="none">
        <defs>
          <linearGradient id="croftBasketStroke" x1="88" y1="102" x2="402" y2="388" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f37f21" />
            <stop offset="0.48" stopColor="#ffb067" />
            <stop offset="1" stopColor="#030c19" />
          </linearGradient>
        </defs>
        <g stroke="url(#croftBasketStroke)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.5">
          <path d="M150 182h224l-28 130H182z" />
          <path d="M184 182l22-52h154l24 52" />
          <path d="M206 210v92" />
          <path d="M240 206v104" />
          <path d="M274 204v108" />
          <path d="M308 206v104" />
          <path d="M340 210v92" />
          <path d="M174 236h184" />
          <path d="M168 270h178" />
          <path d="M162 304h170" />
          <path d="M203 336l-26 20" />
          <path d="M320 336l36 10" />
          <path d="M332 132l32 58" />
          <path d="M364 190l24 6" />
          <circle cx="210" cy="372" r="26" />
          <circle cx="332" cy="372" r="26" />
        </g>
      </svg>
    </div>
  );
}

function LoopVisual() {
  return (
    <div className="rapid-wire-loop" aria-hidden>
      <svg viewBox="0 0 520 520" fill="none">
        <defs>
          <linearGradient id="croftLoopStroke" x1="120" y1="108" x2="402" y2="410" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f37f21" />
            <stop offset="0.5" stopColor="#ffb067" />
            <stop offset="1" stopColor="#030c19" />
          </linearGradient>
        </defs>
        <g stroke="url(#croftLoopStroke)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.5">
          <path d="M161 238c-8-17-10-28-10-42 0-44 35-80 78-80 12-34 44-58 82-58 48 0 87 37 91 84 32 8 57 38 57 73 0 42-33 77-76 80" />
          <path d="M195 311c22-27 48-40 74-40 24 0 45 11 60 31l27 37c18 25 37 38 60 38 33 0 59-27 59-59 0-19-7-35-22-48-15-12-31-18-47-18-24 0-44 10-62 30l-45 51c-17 20-39 31-62 31-16 0-32-5-47-16-14-11-24-25-29-43-5-18-2-35 7-51z" />
        </g>
      </svg>
    </div>
  );
}

function OrbitVisual() {
  return (
    <div className="rapid-orbit-visual" aria-hidden>
      <span className="rapid-orbit-visual__ring" />
      <span className="rapid-orbit-visual__ring" />
      <span className="rapid-orbit-visual__ring" />
      <span className="rapid-orbit-visual__core" />
    </div>
  );
}

export function RapidObjectRotator({ compact = false, mode = "framed" }: RapidObjectRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % variants.length);
    }, 4300);

    return () => window.clearInterval(interval);
  }, []);

  const current = variants[index];

  return (
    <Stage compact={compact} mode={mode}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -14 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center p-8 lg:p-10"
        >
          {current.render()}
        </motion.div>
      </AnimatePresence>

      {mode === "framed" ? (
        <div className="rapid-object-panels" aria-hidden>
          <div className="rapid-object-panel rapid-object-panel--left">
            <span>{current.title}</span>
            <strong>{current.value}</strong>
          </div>
          <div className="rapid-object-panel rapid-object-panel--right">
            <span>{current.title2}</span>
            <strong>{current.value2}</strong>
          </div>
          <div className="rapid-live-avatars">
            {avatars.map((avatar) => (
              <span key={avatar}>{avatar}</span>
            ))}
          </div>
        </div>
      ) : null}
    </Stage>
  );
}
