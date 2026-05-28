"use client";

import { Handshake, Mountain, PackageCheck, UsersRound } from "lucide-react";
import { Counter } from "@/components/ui-pro/Counter";
import { Reveal } from "@/components/ui-pro/Reveal";

const stats = [
  {
    n: 5,
    Icon: Mountain,
    title: "Years in business",
    d: "Still moving ahead with relentless energy to achieve practical results.",
  },
  {
    n: 50,
    Icon: PackageCheck,
    title: "Products delivered",
    d: "Experiences and systems built for measurable operational impact.",
  },
  {
    n: 15,
    Icon: UsersRound,
    title: "Team members",
    d: "A focused team connected by shared standards and delivery habits.",
  },
  {
    n: 200,
    Icon: Handshake,
    title: "Clients served",
    d: "Organizations supported with technology that moves work forward.",
  },
];

export function Stats() {
  return (
    <section className="stats-section stats-story bg-[#f7f8f7] py-12 text-navy lg:py-16">
      <div className="stats-story__inner container-pro">
        <Reveal>
          <div className="stats-story__copy">
            <span className="stats-story__dash" aria-hidden="true" />
            <h2>
              <span>We do not just</span>
              <strong>deliver solutions.</strong>
              <span>We create</span>
              <em>lasting value.</em>
            </h2>
            <span className="stats-story__dash stats-story__dash--short" aria-hidden="true" />
            <p>
              Client focused, innovation driven, built for growth. Cloud, AI, data, APIs, and
              product engineering move together here with practical execution guiding every idea.
            </p>
            <div className="stats-story__city" aria-hidden="true">
              <span className="stats-story__swoosh" />
              <svg viewBox="0 0 760 340" role="img">
                <path className="stats-story__brush stats-story__brush--navy" d="M-28 272c50-8 92-9 139-2 55 8 95 7 139-5-39 16-86 31-143 43-50 11-95 16-135 14z" />
                <path className="stats-story__brush stats-story__brush--navy stats-story__brush--deep" d="M-34 288c49-12 102-15 157-9 37 4 74 2 111-7-26 14-63 27-111 40-55 15-108 22-157 21z" />
                <path className="stats-story__brush stats-story__brush--navy stats-story__brush--dry" d="M-18 258c41-5 83-5 126 1 32 4 67 3 105-5-35 10-75 17-119 20-45 3-82-2-112-16z" />
                <path className="stats-story__brush stats-story__brush--orange" d="M176 311c19-4 34-5 49-2-14 6-30 10-48 11-10 1-18 0-25-2 8-2 16-4 24-7z" />
                <path className="stats-story__scribble" d="M18 50c58-22 108-17 149 13M544 32c36-12 71-6 104 18M606 88c22-18 47-18 72 0M80 111c24-18 52-18 82 1M468 70c25-17 54-17 84 2M34 224c48-26 93-34 137-24 56 12 108 6 156-19 44-22 92-24 145-5 50 18 100 20 149 6 39-11 77-7 115 13" />
                <path className="stats-story__ground" d="M22 279h690M42 265c88-18 168-17 240 3 61 16 125 14 190-6 68-22 142-20 222 7" />
                <path className="stats-story__building" d="M52 263V213h28v50M62 213v-16h9v16M89 263V190h34v73M100 190v-25h12v25M134 263V154h42v109M148 154v-27l15-18 13 18v27M187 263V116h45v147M202 116V85l9-18 9 18v31M244 263V145h48v118M257 145v-31h21v31M304 263V98h54v165M322 98V62l9-20 12 20v36M374 263V57h74v206M397 57V23h25v34M462 263V118h48v145M477 118V82l18-18 15 18v36M522 263V148h44v115M536 148v-23h17v23M578 263V106h58v157M598 106V71h19v35M650 263V174h34v89M662 174v-23h11v23" />
                <path className="stats-story__building-detail" d="M58 225h16M58 242h16M96 205h20M96 226h20M96 246h20M142 171h26M142 194h26M142 217h26M142 240h26M195 135h29M195 160h29M195 185h29M195 210h29M195 235h29M253 164h31M253 188h31M253 212h31M253 236h31M315 119h34M315 148h34M315 177h34M315 206h34M315 235h34M386 82h50M386 113h50M386 144h50M386 175h50M386 206h50M386 237h50M471 139h29M471 166h29M471 193h29M471 220h29M529 168h30M529 192h30M529 216h30M529 240h30M588 128h39M588 157h39M588 186h39M588 215h39M588 244h39M656 193h22M656 216h22M656 239h22" />
                <path className="stats-story__sketch-line" d="M66 263l59-73M91 263l84-109M134 263l97-146M187 263l105-118M243 263L356 98M303 263L447 57M376 263l134-145M462 263l104-115M523 263l113-157M578 263l106-89" />
                <path className="stats-story__scribble stats-story__scribble--fine" d="M74 268c31-10 68-12 111-6M212 265c45-7 91-16 138-28M412 262c41-13 84-15 131-7M615 242c28-10 57-10 88 0M42 83c37-14 73-16 108-6M500 111c44-18 89-21 134-8M82 303c33 0 72-5 118-15M118 151c18-12 39-13 63-4M252 105c24-16 52-17 82-2M430 86c27-15 59-15 96 0" />
                <path className="stats-story__foreground" d="M0 299c104-18 194-18 270 0 77 18 151 17 222-4 83-24 172-22 268 8" />
              </svg>
            </div>
          </div>
        </Reveal>

        <div className="stats-story__grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.title} i={index}>
              <article className="stats-story__item">
                <div className="stats-story__sketch" aria-hidden="true">
                  <span />
                  <stat.Icon strokeWidth={1.15} />
                </div>
                <div className="stats-story__number">
                  <Counter to={stat.n} />
                  <span>+</span>
                </div>
                <h3>{stat.title}</h3>
                <span className="stats-story__dash stats-story__dash--mini" aria-hidden="true" />
                <p>{stat.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
