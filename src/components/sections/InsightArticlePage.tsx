import { Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Linkedin, ShieldCheck, Twitter, Youtube } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BlogSubscribeForm } from "@/components/sections/BlogSubscribeForm";
import { articleRelatedPosts, type InsightArticle } from "@/data/insightArticles";
import { getPostMeta } from "@/data/blog";

type InsightArticlePageProps = {
  article: InsightArticle;
};

type DiagramKind = NonNullable<InsightArticle["sections"][number]["diagram"]>;

const diagramCopy: Record<DiagramKind, { title: string; caption: string }> = {
  flow: {
    title: "Data-to-action workflow",
    caption: "Insight becomes useful when signals move cleanly from data to decision to delivery.",
  },
  forecast: {
    title: "Transformation value forecast",
    caption: "The best transformation work compounds through clearer priorities, adoption, and measurable growth.",
  },
  systems: {
    title: "Connected enterprise systems",
    caption: "Connected platforms create the operating visibility transformation programs need.",
  },
  journey: {
    title: "Customer journey loop",
    caption: "Design creates value when every interaction makes the next action easier to understand.",
  },
};

const insightDiagramData: Record<DiagramKind, { metrics: Array<{ label: string; value: string }>; bars: number[]; steps: string[] }> = {
  flow: {
    metrics: [
      { label: "Signals captured", value: "12k" },
      { label: "Actions queued", value: "46" },
      { label: "Time to decision", value: "2d" },
    ],
    bars: [34, 48, 62, 76, 88],
    steps: ["Signal", "Model", "Prioritize", "Ship"],
  },
  forecast: {
    metrics: [
      { label: "Value upside", value: "24%" },
      { label: "Adoption target", value: "80%" },
      { label: "Payback window", value: "2Q" },
    ],
    bars: [28, 42, 57, 74, 91],
    steps: ["Baseline", "Pilot", "Scale", "Compound"],
  },
  systems: {
    metrics: [
      { label: "Systems linked", value: "9" },
      { label: "Freshness", value: "15m" },
      { label: "Owners aligned", value: "5" },
    ],
    bars: [40, 55, 63, 79, 86],
    steps: ["Source", "Integrate", "Govern", "Activate"],
  },
  journey: {
    metrics: [
      { label: "Tasks simplified", value: "18" },
      { label: "Drop-off reduced", value: "32%" },
      { label: "Reuse patterns", value: "14" },
    ],
    bars: [64, 57, 45, 36, 29],
    steps: ["Discover", "Design", "Test", "Repeat"],
  },
};

function InsightDiagram({ kind, index }: { kind: DiagramKind; index: number }) {
  const { title, caption } = diagramCopy[kind];
  const data = insightDiagramData[kind];
  const titleId = `insight-diagram-${kind}-${index}`;
  const gradientId = `insight-diagram-gradient-${kind}-${index}`;
  const variant = index % 3;

  return (
    <figure className={`insight-diagram insight-diagram--${kind} insight-diagram--variant-${variant}`}>
      <svg viewBox="0 0 920 560" role="img" aria-labelledby={titleId}>
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#ecf7f3" />
            <stop offset="100%" stopColor="#fff2e6" />
          </linearGradient>
        </defs>
        <rect width="920" height="560" rx="0" className="insight-diagram__bg" />
        <rect x="30" y="30" width="860" height="500" rx="30" fill={`url(#${gradientId})`} />
        <g className="insight-diagram__grid">
          <path d="M72 448h776M72 370h776M72 292h776M72 214h776M72 136h776" />
          <path d="M180 96v386M320 96v386M460 96v386M600 96v386M740 96v386" />
        </g>
        <text x="78" y="92" className="insight-diagram__kicker">
          {title}
        </text>
        <text x="78" y="130" className="insight-diagram__title">
          Decision-ready visual
        </text>
        <g className="insight-diagram__metric-row">
          {data.metrics.map((metric, metricIndex) => (
            <g key={metric.label} transform={`translate(${78 + metricIndex * 164} 166)`}>
              <rect width="134" height="86" rx="14" />
              <text x="18" y="34" className="insight-diagram__metric-value">
                {metric.value}
              </text>
              <text x="18" y="62" className="insight-diagram__metric-label">
                {metric.label}
              </text>
            </g>
          ))}
        </g>
        {variant === 0 ? <InsightTimelineVisual data={data} /> : null}
        {variant !== 0 && kind === "flow" ? <InsightFlowVisual data={data} variant={variant} /> : null}
        {variant !== 0 && kind === "forecast" ? <InsightForecastVisual data={data} variant={variant} /> : null}
        {variant !== 0 && kind === "systems" ? <InsightSystemsVisual data={data} variant={variant} /> : null}
        {variant !== 0 && kind === "journey" ? <InsightJourneyVisual data={data} variant={variant} /> : null}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function InsightTimelineVisual({ data }: { data: (typeof insightDiagramData)[DiagramKind] }) {
  return (
    <g className="insight-diagram__timeline" transform="translate(102 326)">
      <path d="M16 86c116-116 228 92 344-24s226-88 340 10" className="insight-diagram__accent-stroke" />
      {data.steps.map((step, index) => (
        <g key={step} transform={`translate(${index * 182} ${index % 2 === 0 ? 62 : 0})`}>
          <circle cx="36" cy="36" r="34" />
          <text x="88" y="43">{step}</text>
        </g>
      ))}
    </g>
  );
}

function InsightFlowVisual({ data, variant }: { data: (typeof insightDiagramData)[DiagramKind]; variant: number }) {
  if (variant === 2) {
    return (
      <g className="insight-diagram__loop-map" transform="translate(118 302)">
        <path d="M188 26c120-58 282-16 338 86 56 104-10 190-154 184-132-6-250-78-246-172" className="insight-diagram__accent-stroke" />
        {data.steps.map((step, index) => {
          const points = [
            [132, 70],
            [392, 42],
            [560, 178],
            [260, 250],
          ];
          return (
            <g key={step} transform={`translate(${points[index][0]} ${points[index][1]})`}>
              <circle cx="0" cy="0" r="38" />
              <text x="-28" y="58">{step}</text>
            </g>
          );
        })}
      </g>
    );
  }

  return (
    <>
      <g className="insight-diagram__anime-node" transform="translate(694 104)">
        <circle cx="40" cy="32" r="26" />
        <path d="M16 106c5-48 14-70 24-70s19 22 24 70z" />
        <path d="M25 54l15 24 16-24 10 18-26 34-26-34z" />
      </g>
      <g className="insight-diagram__flow-stack" transform="translate(92 318)">
        {data.steps.map((step, stepIndex) => (
          <g key={step} transform={`translate(${stepIndex * 178} 0)`}>
            <rect width="140" height="74" rx="14" />
            <circle cx="32" cy="36" r="14" />
            <text x="58" y="44">{step}</text>
            {stepIndex < data.steps.length - 1 ? <path d="M142 37h36" className="insight-diagram__flow-line" /> : null}
          </g>
        ))}
      </g>
      <path d="M140 458c132-98 250-116 354-58 96 54 178 34 260-60" className="insight-diagram__accent-stroke insight-diagram__sparkline" />
    </>
  );
}

function InsightForecastVisual({ data, variant }: { data: (typeof insightDiagramData)[DiagramKind]; variant: number }) {
  if (variant === 2) {
    return (
      <g className="insight-diagram__radial-score" transform="translate(128 302)">
        {data.bars.map((value, index) => (
          <g key={value} transform={`translate(${index * 138} 0)`}>
            <circle cx="48" cy="68" r="44" />
            <path d={`M48 24a44 44 0 1 1 -1 0`} />
            <text x="24" y="76">{value}%</text>
            <text x="28" y="136">S{index + 1}</text>
          </g>
        ))}
      </g>
    );
  }

  return (
    <g className="insight-diagram__bar-chart" transform="translate(98 322)">
      <path d="M0 132h682" className="insight-diagram__axis" />
      {data.bars.map((height, barIndex) => (
        <g key={`${height}-${barIndex}`} transform={`translate(${barIndex * 132} 0)`}>
          <rect x="0" y={132 - height} width="72" height={height} rx="10" />
          <text x="14" y="164">Q{barIndex + 1}</text>
        </g>
      ))}
      <path
        d={`M36 ${132 - data.bars[0]}L168 ${132 - data.bars[1]}L300 ${132 - data.bars[2]}L432 ${132 - data.bars[3]}L564 ${132 - data.bars[4]}`}
        className="insight-diagram__accent-stroke insight-diagram__sparkline"
      />
    </g>
  );
}

function InsightSystemsVisual({ data, variant }: { data: (typeof insightDiagramData)[DiagramKind]; variant: number }) {
  if (variant === 2) {
    return (
      <g className="insight-diagram__matrix-map" transform="translate(116 316)">
        {data.steps.map((step, index) => (
          <g key={step} transform={`translate(${(index % 2) * 318} ${Math.floor(index / 2) * 112})`}>
            <rect width="260" height="82" rx="14" />
            <text x="24" y="50">{step}</text>
            <path d="M170 28h54M170 52h36" />
          </g>
        ))}
        <path d="M260 41h58M130 82v30M448 82v30M260 153h58" />
      </g>
    );
  }

  return (
    <g className="insight-diagram__systems-map" transform="translate(98 316)">
      {[0, 1, 2, 3].map((item) => {
        const x = item % 2 === 0 ? 0 : 492;
        const y = item < 2 ? 0 : 122;
        return (
          <g key={data.steps[item]} transform={`translate(${x} ${y})`}>
            <rect width="184" height="72" rx="14" />
            <text x="24" y="43">{data.steps[item]}</text>
          </g>
        );
      })}
      <circle cx="338" cy="98" r="64" />
      <path d="M184 36h90M402 36h90M184 158h90M402 158h90M338 34v128" />
      <text x="288" y="106">Unified</text>
    </g>
  );
}

function InsightJourneyVisual({ data, variant }: { data: (typeof insightDiagramData)[DiagramKind]; variant: number }) {
  if (variant === 2) {
    return (
      <g className="insight-diagram__expectation-arc" transform="translate(120 304)">
        <path d="M130 48c58 102 378 102 436 0" className="insight-diagram__accent-stroke" />
        <circle cx="348" cy="92" r="48" />
        {data.steps.map((step, index) => {
          const points = [
            [26, 126],
            [198, 16],
            [498, 16],
            [640, 126],
          ];
          return (
            <g key={step} transform={`translate(${points[index][0]} ${points[index][1]})`}>
              <rect width="118" height="58" rx="12" />
              <text x="18" y="36">{step}</text>
            </g>
          );
        })}
      </g>
    );
  }

  return (
    <g className="insight-diagram__journey-loop" transform="translate(106 318)">
      <g className="insight-diagram__anime-node insight-diagram__anime-node--small" transform="translate(604 -192)">
        <circle cx="34" cy="28" r="22" />
        <path d="M14 92c5-40 13-58 20-58s15 18 20 58z" />
        <path d="M21 48l13 20 14-20 8 15-22 29-22-29z" />
      </g>
      <path d="M86 104C118 20 246-4 340 54c88 54 164 48 232-14" className="insight-diagram__accent-stroke" />
      <path d="M580 46l-6-44 42 16" className="insight-diagram__accent-stroke" />
      {data.steps.map((step, index) => (
        <g key={step} transform={`translate(${index * 164} ${index % 2 === 0 ? 104 : 14})`}>
          <rect width="126" height="62" rx="14" />
          <text x="22" y="39">{step}</text>
        </g>
      ))}
    </g>
  );
}

function FlowDiagram() {
  return (
    <>
      <g className="insight-diagram__card">
        <rect x="86" y="180" width="190" height="150" rx="18" />
        <path d="M118 236h58M118 268h118M118 300h82" />
        <circle cx="228" cy="228" r="26" />
      </g>
      <g className="insight-diagram__card">
        <rect x="365" y="110" width="190" height="150" rx="18" />
        <path d="M397 166h58M397 198h118M397 230h82" />
        <rect x="476" y="154" width="44" height="44" rx="12" />
      </g>
      <g className="insight-diagram__card">
        <rect x="644" y="190" width="190" height="150" rx="18" />
        <path d="M676 246h58M676 278h118M676 310h82" />
        <path d="M752 238l28 28 44-60" className="insight-diagram__accent-stroke" />
      </g>
      <path d="M276 254c48-88 82-88 118-72" className="insight-diagram__dash" />
      <path d="M555 188c50 2 72 32 89 70" className="insight-diagram__dash" />
      <g className="insight-diagram__person">
        <circle cx="459" cy="348" r="42" />
        <path d="M390 484c8-76 32-118 69-118s61 42 69 118z" />
        <rect x="414" y="402" width="92" height="74" rx="12" />
      </g>
      <path d="M138 438h644" className="insight-diagram__accent-stroke insight-diagram__base-line" />
      <text x="112" y="358">Signals</text>
      <text x="400" y="288">Analysis</text>
      <text x="676" y="368">Action</text>
    </>
  );
}

function ForecastDiagram() {
  return (
    <>
      <g className="insight-diagram__bars">
        <rect x="150" y="380" width="94" height="78" />
        <rect x="294" y="324" width="94" height="134" />
        <rect x="438" y="270" width="94" height="188" />
        <rect x="582" y="206" width="94" height="252" />
      </g>
      <path d="M144 348h126l82-74h116l84-92h136" className="insight-diagram__accent-stroke insight-diagram__trend" />
      <circle cx="170" cy="150" r="58" className="insight-diagram__coin" />
      <circle cx="244" cy="212" r="38" className="insight-diagram__coin" />
      <text x="151" y="171" className="insight-diagram__coin-text">$</text>
      <text x="232" y="225" className="insight-diagram__coin-text">$</text>
      <g className="insight-diagram__card">
        <rect x="346" y="132" width="210" height="112" rx="18" />
        <path d="M378 188h62M378 216h132" />
        <rect x="462" y="168" width="50" height="42" rx="10" />
      </g>
      <g className="insight-diagram__person insight-diagram__person--small">
        <circle cx="682" cy="150" r="31" />
        <path d="M632 294c8-66 25-102 50-102s42 36 50 102z" />
        <path d="M672 116c-16-42 2-76 42-80" className="insight-diagram__accent-stroke" />
      </g>
      <g className="insight-diagram__person insight-diagram__person--small">
        <circle cx="382" cy="314" r="28" />
        <path d="M334 458c8-64 24-98 48-98s40 34 48 98z" />
      </g>
      <text x="132" y="502">Baseline</text>
      <text x="560" y="502">Compounding value</text>
    </>
  );
}

function SystemsDiagram() {
  return (
    <>
      <g className="insight-diagram__system-lines">
        <path d="M300 178h140" />
        <path d="M488 178h134" />
        <path d="M380 276h160" />
        <path d="M460 238v118" />
        <path d="M300 376h322" />
      </g>
      <g className="insight-diagram__node">
        <rect x="126" y="122" width="174" height="112" rx="18" />
        <path d="M158 172h54M158 200h96" />
      </g>
      <g className="insight-diagram__node">
        <rect x="374" y="106" width="174" height="112" rx="18" />
        <path d="M406 156h54M406 184h96" />
      </g>
      <g className="insight-diagram__node">
        <rect x="622" y="132" width="174" height="112" rx="18" />
        <path d="M654 182h54M654 210h96" />
      </g>
      <g className="insight-diagram__node">
        <rect x="250" y="322" width="174" height="112" rx="18" />
        <path d="M282 372h54M282 400h96" />
      </g>
      <g className="insight-diagram__node">
        <rect x="500" y="322" width="174" height="112" rx="18" />
        <path d="M532 372h54M532 400h96" />
      </g>
      <circle cx="461" cy="278" r="44" className="insight-diagram__hub" />
      <path d="M439 278l16 16 32-42" className="insight-diagram__accent-stroke" />
      <text x="396" y="486">One operating picture</text>
    </>
  );
}

function JourneyDiagram() {
  return (
    <>
      <path d="M260 292c18-138 172-202 296-114 74 52 104 128 78 214" className="insight-diagram__dash insight-diagram__journey-arc" />
      <g className="insight-diagram__card">
        <rect x="98" y="246" width="196" height="128" rx="18" />
        <rect x="130" y="296" width="76" height="54" rx="10" />
        <path d="M222 304h44M222 332h34" />
      </g>
      <g className="insight-diagram__card">
        <rect x="632" y="214" width="150" height="154" rx="18" />
        <rect x="666" y="246" width="82" height="66" rx="12" />
        <path d="M666 334h82" />
      </g>
      <g className="insight-diagram__bubble">
        <rect x="268" y="96" width="112" height="62" rx="18" />
        <path d="M292 124c18-30 62-22 62 10 0 28-62 42-62-10z" />
      </g>
      <g className="insight-diagram__bubble">
        <rect x="540" y="86" width="146" height="64" rx="12" />
        <text x="568" y="125">Act again</text>
      </g>
      <g className="insight-diagram__person">
        <circle cx="454" cy="218" r="42" />
        <path d="M386 430c8-104 30-168 68-168s60 64 68 168z" />
        <rect x="421" y="286" width="66" height="92" rx="13" />
      </g>
      <path d="M140 448h636" className="insight-diagram__accent-stroke insight-diagram__base-line" />
      <text x="130" y="406">Before</text>
      <text x="646" y="402">Repeat</text>
    </>
  );
}

export function InsightArticlePage({ article }: InsightArticlePageProps) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar variant="light" />
      <main className="insight-article">
        <section className="insight-article-hero container-pro">
          <div className="blog-breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <span>{article.title}</span>
          </div>
          <img src={article.heroImage} alt={article.heroAlt} />
          <div className="insight-article-hero__card">
            <div className="blog-meta">{article.eyebrow}</div>
            <h1>{article.title}</h1>
          </div>
          <div className="insight-article-inside">
            <h2>What's inside</h2>
            <div>
              {article.inside.map((item, index) => (
                <a href={`#section-${index + 1}`} key={item} className={index === 0 ? "is-active" : ""}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="insight-article-body container-pro">
          <article>
            <p className="insight-article-lede">{article.summary}</p>
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.diagram ? <InsightDiagram kind={section.diagram} index={index + 1} /> : null}
                {section.image ? (
                  <figure>
                    <img src={section.image.src} alt={section.image.alt} />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                ) : null}
              </section>
            ))}
          </article>
        </section>

        <section className="insight-article-cta container-pro">
          <div>
            <h2>Let's build the next big thing!</h2>
            <p>Share your ideas and we will shape them into scalable, high-impact digital solutions.</p>
          </div>
          <Link to="/contact">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="blog-article-related container-pro">
          <h2>Similar Stories</h2>
          <div className="blog-post-grid blog-post-grid--wide">
            {articleRelatedPosts.map((item) => (
              <Link
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="blog-post-card"
                key={item.slug}
              >
                <img src={item.image} alt={item.title} />
                <div className="blog-meta">{getPostMeta(item)}</div>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <section className="blog-subscribe container-pro">
        <div className="blog-subscribe__lines" aria-hidden="true" />
        <div>
          <h2>Receive articles like this in your mailbox</h2>
          <p>Sign up to get weekly insights & inspiration in your inbox.</p>
        </div>
        <BlogSubscribeForm id="insight-email" source="insight-article" />
      </section>
      <footer className="blog-footer">
        <div className="container-pro">
          <div className="blog-footer__top">
            <span>Company</span>
          </div>
          <div className="blog-footer__bottom">
            <span>(c) 2026 Wallace Croft. All rights reserved.</span>
            <nav>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/about">About</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
            <div className="blog-footer__socials">
              <Linkedin className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Cpu className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
