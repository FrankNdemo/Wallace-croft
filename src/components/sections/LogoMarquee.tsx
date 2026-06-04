import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui-pro/Reveal";
import broadbandLogo from "@/assets/partner-logo-broadband-real.png";
import jobuLogo from "@/assets/partner-logo-jobu-real.png";
import mtakaLogo from "@/assets/partner-logo-mtaka-clean.webp";
import wellnessLogo from "@/assets/partner-logo-wellness-floating.png";

const logos = [
  { src: jobuLogo, alt: "JOBU", tone: "jobu" },
  { src: mtakaLogo, alt: "mTAKA", tone: "eco" },
  { src: broadbandLogo, alt: "Broadband Communication Network", tone: "network" },
  { src: wellnessLogo, alt: "The Wellness Hub", tone: "wellness" },
];

export function LogoMarquee() {
  const row = [...logos, ...logos, ...logos, ...logos];

  return (
    <section aria-label="Trusted enterprises" className="home-logo-marquee bg-white py-16 lg:py-20">
      <div className="container-pro">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="font-display text-[2rem] font-normal leading-[1.08] text-navy sm:text-[2.8rem] lg:text-[3.35rem]">
              Shaping the future of retail, manufacturing, and distribution companies.
            </h2>
            <p className="mt-6 max-w-2xl text-[0.88rem] leading-7 text-ink-muted">
              We craft modern systems that redefine industry standards for sector pioneers and
              emerging enterprises.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee flex w-max items-center gap-8">
            {row.map((logo, index) => (
              <span key={index} className={`partner-logo-tile partner-logo-tile--${logo.tone}`}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/case-studies"
          className="mt-7 inline-flex items-center gap-5 border border-navy px-8 py-4 text-xs font-normal text-navy transition hover:bg-navy hover:text-white"
        >
          What We've Done for Them <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
