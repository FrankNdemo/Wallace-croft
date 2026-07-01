"use client";

import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const links = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Approach", to: "/approach" },
  { label: "About", to: "/about" },
] as const;

type NavbarProps = {
  variant?: "dark" | "light";
};

export function Navbar({ variant = "dark" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLight = variant === "light";

  return (
    <header
      className={`relative z-50 ${isLight ? "border-b border-navy/10 bg-white text-navy" : "bg-navy-deep text-white"}`}
    >
      <div>
        <div
          className={`container-pro flex ${isLight ? "h-[66px]" : "h-[78px]"} items-center gap-6 py-4`}
        >
          <Link to="/" aria-label="Wallace Croft home" className="shrink-0">
            <Logo light={!isLight} />
          </Link>

          <nav className="ml-auto hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.to;

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`nav-link-slide group relative px-1 py-2 text-[15px] font-medium leading-none transition ${
                    isLight
                      ? active
                        ? "is-active text-navy"
                        : "text-navy/72 hover:text-navy"
                      : active
                        ? "is-active text-white"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-3 hidden md:block">
            <Link
              to="/contact"
              className={`group inline-flex items-center justify-center gap-3 border px-5 py-2.5 text-[15px] font-medium leading-none transition ${
                isLight
                  ? "border-navy text-navy hover:bg-navy-deep hover:text-white"
                  : "border-white/40 text-white hover:border-white hover:bg-white hover:text-navy-deep"
              }`}
            >
              Contact Us <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            className="ml-auto grid h-10 w-12 place-items-center md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="grid w-9 gap-2" aria-hidden>
              <span className={`block h-0.5 w-full ${isLight ? "bg-navy" : "bg-white"}`} />
              <span className={`block h-0.5 w-full ${isLight ? "bg-navy" : "bg-white"}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-0 z-50 h-[75svh] overflow-y-auto bg-navy-deep text-white shadow-2xl animate-in fade-in slide-in-from-top-2 lg:hidden">
          <div className="container-pro flex h-[78px] items-center justify-between py-4">
            <Link to="/" aria-label="Wallace Croft home" onClick={() => setOpen(false)}>
              <Logo light />
            </Link>
            <button
              className="grid h-10 w-10 place-items-center border border-white/18"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="container-pro grid gap-4 pb-10 pt-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-3 text-[1.15rem] font-normal"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-3 text-sm font-normal text-white transition hover:bg-white hover:text-navy-deep"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
