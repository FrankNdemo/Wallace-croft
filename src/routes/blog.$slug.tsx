import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BlogSubscribeForm } from "@/components/sections/BlogSubscribeForm";
import { blogPosts, getArticleSections, getBlogPost, getPostMeta, type BlogDiagramKind } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
});

const diagramLabels: Record<BlogDiagramKind, string> = {
  intelligence: "Signal intelligence map",
  roadmap: "Roadmap sequence",
  workflow: "Workflow improvement loop",
  systems: "Connected systems model",
  growth: "Growth impact forecast",
  ai: "AI operating model",
  commerce: "Digital commerce flow",
  partnership: "Partnership delivery model",
};

const diagramCaptions: Record<BlogDiagramKind, string> = {
  intelligence: "A clean operating view that links signals, confidence, and the next decision.",
  roadmap: "A sequenced path from near-term fixes to reusable transformation capability.",
  workflow: "A practical loop for finding friction, improving the handoff, and measuring change.",
  systems: "A connected systems graph that shows where data and ownership need to meet.",
  growth: "A business-value forecast that compares current performance with compounding gains.",
  ai: "An AI operating model with retrieval, review, evaluation, and controlled workflow action.",
  commerce: "A revenue flow that connects discovery, checkout, fulfillment, support, and retention.",
  partnership: "A delivery model that keeps executive intent, product work, and operations aligned.",
};

const diagramMetrics: Record<BlogDiagramKind, Array<{ label: string; value: string }>> = {
  intelligence: [
    { label: "Signals unified", value: "7" },
    { label: "Decision confidence", value: "82%" },
    { label: "Action owners", value: "4" },
  ],
  roadmap: [
    { label: "Horizon", value: "90d" },
    { label: "Risk reduced", value: "38%" },
    { label: "Releases", value: "5" },
  ],
  workflow: [
    { label: "Cycle-time gain", value: "31%" },
    { label: "Handoffs fixed", value: "6" },
    { label: "Adoption", value: "74%" },
  ],
  systems: [
    { label: "Core systems", value: "9" },
    { label: "Data freshness", value: "15m" },
    { label: "Shared records", value: "3.2k" },
  ],
  growth: [
    { label: "Upside modeled", value: "24%" },
    { label: "Payback", value: "2Q" },
    { label: "Margin lift", value: "8%" },
  ],
  ai: [
    { label: "Review gates", value: "3" },
    { label: "Grounded answers", value: "91%" },
    { label: "Tasks automated", value: "12" },
  ],
  commerce: [
    { label: "Checkout lift", value: "18%" },
    { label: "Order visibility", value: "96%" },
    { label: "Repeat rate", value: "22%" },
  ],
  partnership: [
    { label: "Decision rhythm", value: "7d" },
    { label: "Shared milestones", value: "8" },
    { label: "Escalation time", value: "1d" },
  ],
};

const diagramBars: Record<BlogDiagramKind, number[]> = {
  intelligence: [42, 58, 74, 86, 81],
  roadmap: [22, 35, 49, 67, 84],
  workflow: [68, 54, 46, 35, 29],
  systems: [34, 52, 64, 73, 88],
  growth: [28, 39, 55, 71, 90],
  ai: [25, 44, 63, 78, 83],
  commerce: [48, 57, 69, 76, 88],
  partnership: [36, 50, 61, 75, 86],
};

function BlogArticleDiagram({ kind, index }: { kind: BlogDiagramKind; index: number }) {
  const titleId = `blog-diagram-${kind}-${index}`;
  const gradientId = `blog-diagram-gradient-${kind}-${index}`;
  const metrics = diagramMetrics[kind];
  const bars = diagramBars[kind];
  const variant = index % 3;
  const steps = {
    intelligence: ["Collect", "Normalize", "Decide", "Act"],
    roadmap: ["Now", "Next", "Scale", "Operate"],
    workflow: ["Observe", "Remove", "Automate", "Measure"],
    systems: ["CRM", "ERP", "Data", "Ops"],
    growth: ["Baseline", "Lift", "Compound", "Defend"],
    ai: ["Retrieve", "Reason", "Review", "Execute"],
    commerce: ["Find", "Buy", "Fulfill", "Return"],
    partnership: ["Align", "Build", "Review", "Improve"],
  }[kind];

  return (
    <figure className={`blog-article-diagram blog-article-diagram--${kind} blog-article-diagram--variant-${variant}`}>
      <svg viewBox="0 0 920 520" role="img" aria-labelledby={titleId}>
        <title id={titleId}>{diagramLabels[kind]}</title>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9fafb" />
            <stop offset="48%" stopColor="#eef6f4" />
            <stop offset="100%" stopColor="#fff3e8" />
          </linearGradient>
        </defs>
        <rect width="920" height="520" className="blog-article-diagram__bg" />
        <rect x="28" y="28" width="864" height="464" rx="28" fill={`url(#${gradientId})`} />
        <g className="blog-article-diagram__grid">
          <path d="M70 420h780M70 342h780M70 264h780M70 186h780M70 108h780" />
          <path d="M170 76v380M310 76v380M450 76v380M590 76v380M730 76v380" />
        </g>
        <text x="72" y="86" className="blog-article-diagram__kicker">
          {diagramLabels[kind]}
        </text>
        <text x="72" y="124" className="blog-article-diagram__title">
          Live operating view
        </text>
        <g className="blog-article-diagram__metric-row">
          {metrics.map((metric, metricIndex) => (
            <g key={metric.label} transform={`translate(${72 + metricIndex * 162} 158)`}>
              <rect width="132" height="82" rx="14" />
              <text x="18" y="32" className="blog-article-diagram__metric-value">
                {metric.value}
              </text>
              <text x="18" y="58" className="blog-article-diagram__metric-label">
                {metric.label}
              </text>
            </g>
          ))}
        </g>
        {variant === 1 ? <BlogBarStack bars={bars} steps={steps} kind={kind} /> : null}
        {variant === 2 ? <BlogArcMap steps={steps} /> : null}
        {variant === 0 ? <BlogNodeMatrix bars={bars} steps={steps} /> : null}
      </svg>
      <figcaption>{diagramCaptions[kind]}</figcaption>
    </figure>
  );
}

function BlogBarStack({ bars, steps, kind }: { bars: number[]; steps: string[]; kind: BlogDiagramKind }) {
  return (
    <>
      <g className="blog-article-diagram__bar-chart" transform="translate(86 302)">
        <path d="M0 126h366" className="blog-article-diagram__axis" />
        {bars.map((height, barIndex) => (
          <g key={`${kind}-${height}-${barIndex}`} transform={`translate(${barIndex * 72} 0)`}>
            <rect x="0" y={126 - height} width="42" height={height} rx="8" />
            <text x="1" y="158">Q{barIndex + 1}</text>
          </g>
        ))}
        <path
          d={`M21 ${126 - bars[0]}L93 ${126 - bars[1]}L165 ${126 - bars[2]}L237 ${126 - bars[3]}L309 ${126 - bars[4]}`}
          className="blog-article-diagram__accent blog-article-diagram__sparkline"
        />
      </g>
      <g className="blog-article-diagram__flow-stack" transform="translate(562 148)">
        {steps.map((step, stepIndex) => (
          <g key={step} transform={`translate(0 ${stepIndex * 72})`}>
            <rect width="244" height="52" rx="14" />
            <circle cx="28" cy="26" r="13" />
            <text x="58" y="33">{step}</text>
            {stepIndex < steps.length - 1 ? <path d="M122 54v18" className="blog-article-diagram__flow-line" /> : null}
          </g>
        ))}
      </g>
    </>
  );
}

function BlogArcMap({ steps }: { steps: string[] }) {
  return (
    <g className="blog-article-diagram__arc-map" transform="translate(108 286)">
      <path d="M80 132C130-14 292-24 376 86c74 98 194 94 282-36" className="blog-article-diagram__accent blog-article-diagram__thick" />
      {steps.map((step, index) => {
        const points = [
          [42, 144],
          [224, 28],
          [424, 130],
          [640, 42],
        ];
        return (
          <g key={step} transform={`translate(${points[index][0]} ${points[index][1]})`}>
            <circle cx="0" cy="0" r="42" />
            <text x="-34" y="68">{step}</text>
          </g>
        );
      })}
    </g>
  );
}

function BlogNodeMatrix({ bars, steps }: { bars: number[]; steps: string[] }) {
  return (
    <g className="blog-article-diagram__matrix-map" transform="translate(98 292)">
      {steps.map((step, index) => (
        <g key={step} transform={`translate(${(index % 2) * 360} ${Math.floor(index / 2) * 86})`}>
          <rect width="292" height="58" rx="14" />
          <text x="22" y="37">{step}</text>
          <rect x="196" y="18" width={Math.max(34, bars[index])} height="18" rx="9" />
        </g>
      ))}
      <path d="M292 29h68M146 58v28M506 58v28M292 115h68" className="blog-article-diagram__line" />
    </g>
  );
}

function AnimeFigure({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g className="blog-article-diagram__anime" transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M58 42c-16-32 2-62 38-66 42-5 72 24 64 62-8 36-34 58-66 58-18 0-28-14-36-54z" />
      <circle cx="100" cy="62" r="42" />
      <path d="M48 240c8-86 26-136 54-136s46 50 54 136z" />
      <path d="M60 118l42 58 44-58 22 42-66 78-66-78z" />
      <rect x="78" y="132" width="48" height="68" rx="12" />
      <path d="M82 82c14 8 28 8 42 0M92 104c14 9 30 9 44-2" />
    </g>
  );
}

function IntelligenceDiagram() {
  return (
    <>
      <g className="blog-article-diagram__panel">
        <rect x="96" y="152" width="192" height="132" rx="18" />
        <path d="M130 208h52M130 236h112M130 264h76" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="364" y="92" width="192" height="132" rx="18" />
        <path d="M398 148h52M398 176h112M398 204h76" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="632" y="166" width="192" height="132" rx="18" />
        <path d="M666 222h52M666 250h112M666 278h76" />
      </g>
      <path d="M288 218c44-92 84-104 126-74M556 160c50 2 78 28 96 72" className="blog-article-diagram__dash" />
      <circle cx="460" cy="326" r="54" className="blog-article-diagram__hub" />
      <path d="M434 326l18 18 38-54" className="blog-article-diagram__accent" />
      <text x="380" y="426">Decide with context</text>
    </>
  );
}

function RoadmapDiagram() {
  return (
    <>
      <path d="M116 358h156l72-96h136l78-92h210" className="blog-article-diagram__accent blog-article-diagram__thick" />
      {[140, 320, 500, 690].map((x, i) => (
        <g className="blog-article-diagram__step" key={x}>
          <circle cx={x} cy={i % 2 ? 264 : 358} r="38" />
          <text x={x - 11} y={(i % 2 ? 272 : 366)}>{i + 1}</text>
        </g>
      ))}
      <g className="blog-article-diagram__panel">
        <rect x="330" y="96" width="260" height="86" rx="16" />
        <path d="M364 134h78M364 160h166" />
      </g>
    </>
  );
}

function WorkflowDiagram() {
  return (
    <>
      <path d="M262 260c18-136 168-208 298-120 82 56 110 140 82 232" className="blog-article-diagram__dash" />
      <g className="blog-article-diagram__panel">
        <rect x="92" y="248" width="198" height="126" rx="18" />
        <rect x="126" y="292" width="72" height="50" rx="10" />
        <path d="M214 302h48M214 330h34" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="270" y="88" width="110" height="66" rx="18" />
        <path d="M294 122c16-28 56-18 56 8 0 26-56 40-56-8z" className="blog-article-diagram__heart" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="638" y="224" width="156" height="154" rx="18" />
        <rect x="674" y="258" width="84" height="58" rx="12" />
        <path d="M674 338h84" />
      </g>
      <g className="blog-article-diagram__bubble">
        <rect x="534" y="74" width="148" height="64" rx="12" />
        <text x="558" y="113">Act again</text>
      </g>
      <AnimeFigure x={364} y={190} scale={1.06} />
      <path d="M118 438h684" className="blog-article-diagram__accent blog-article-diagram__base" />
      <text x="124" y="410">Before</text>
      <text x="656" y="410">Repeat</text>
    </>
  );
}

function SystemsDiagram() {
  return (
    <>
      <g className="blog-article-diagram__node">
        <rect x="112" y="128" width="152" height="100" rx="18" />
        <rect x="384" y="88" width="152" height="100" rx="18" />
        <rect x="656" y="128" width="152" height="100" rx="18" />
        <rect x="246" y="330" width="152" height="100" rx="18" />
        <rect x="522" y="330" width="152" height="100" rx="18" />
      </g>
      <path d="M264 178h120M536 138h120M460 188v116M322 330l100-128M598 330 498 202" className="blog-article-diagram__line" />
      <circle cx="460" cy="260" r="52" className="blog-article-diagram__hub" />
      <path d="M438 260h44M460 238v44" className="blog-article-diagram__accent" />
    </>
  );
}

function GrowthDiagram() {
  return (
    <>
      <g className="blog-article-diagram__bars">
        <rect x="158" y="360" width="92" height="70" />
        <rect x="302" y="306" width="92" height="124" />
        <rect x="446" y="246" width="92" height="184" />
        <rect x="590" y="170" width="92" height="260" />
      </g>
      <path d="M132 334h116l78-76h130l82-96h174" className="blog-article-diagram__accent blog-article-diagram__thick" />
      <circle cx="182" cy="142" r="54" className="blog-article-diagram__coin" />
      <circle cx="260" cy="198" r="34" className="blog-article-diagram__coin" />
      <text x="164" y="158">$</text>
      <text x="250" y="210">$</text>
      <AnimeFigure x={640} y={196} scale={0.72} />
      <path d="M692 176c18-44 44-70 78-78" className="blog-article-diagram__accent" />
    </>
  );
}

function AiDiagram() {
  return (
    <>
      <AnimeFigure x={394} y={158} scale={0.88} />
      <circle cx="458" cy="214" r="82" className="blog-article-diagram__hub blog-article-diagram__hub--behind" />
      <path d="M424 214h68M458 180v68M422 182l72 64M494 182l-72 64" className="blog-article-diagram__accent" />
      {[
        [176, 124],
        [714, 124],
        [176, 342],
        [714, 342],
      ].map(([x, y]) => (
        <g className="blog-article-diagram__panel" key={`${x}-${y}`}>
          <rect x={x - 82} y={y - 44} width="164" height="88" rx="18" />
          <path d={`M${x - 48} ${y - 4}h96M${x - 48} ${y + 22}h58`} />
          <path d={`M${x < 460 ? x + 82 : x - 82} ${y}Q460 246 ${x < 460 ? 374 : 546} 246`} className="blog-article-diagram__line" />
        </g>
      ))}
    </>
  );
}

function CommerceDiagram() {
  return (
    <>
      <path d="M256 246c16-124 150-188 268-108 76 52 102 124 78 204" className="blog-article-diagram__dash" />
      <g className="blog-article-diagram__panel">
        <rect x="82" y="252" width="200" height="126" rx="18" />
        <rect x="118" y="294" width="78" height="48" rx="10" />
        <path d="M212 304h44M212 330h32" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="626" y="232" width="164" height="150" rx="18" />
        <rect x="664" y="266" width="78" height="56" rx="12" />
        <path d="M664 342h78" />
      </g>
      <AnimeFigure x={360} y={164} scale={1.04} />
      <g className="blog-article-diagram__panel">
        <rect x="274" y="82" width="116" height="66" rx="18" />
        <path d="M298 116c16-28 56-18 56 8 0 26-56 40-56-8z" className="blog-article-diagram__heart" />
      </g>
      <g className="blog-article-diagram__bubble">
        <rect x="536" y="72" width="158" height="64" rx="12" />
        <text x="562" y="112">Buy again</text>
      </g>
      <path d="M112 438h690" className="blog-article-diagram__accent blog-article-diagram__base" />
    </>
  );
}

function PartnershipDiagram() {
  return (
    <>
      <g className="blog-article-diagram__people">
        <circle cx="270" cy="168" r="44" />
        <path d="M198 332c12-76 36-116 72-116s60 40 72 116z" />
        <circle cx="650" cy="168" r="44" />
        <path d="M578 332c12-76 36-116 72-116s60 40 72 116z" />
      </g>
      <g className="blog-article-diagram__panel">
        <rect x="358" y="262" width="204" height="112" rx="18" />
        <path d="M392 314h74M392 342h128" />
      </g>
      <path d="M326 210c84 88 184 88 268 0M344 322h-76M562 322h76" className="blog-article-diagram__accent" />
      <text x="348" y="432">Shared delivery rhythm</text>
    </>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug) ?? blogPosts[0];
  const sections = getArticleSections(post);
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar variant="light" />
      <main className="blog-article">
        <section className="blog-article-hero">
          <div className="container-pro">
            <div className="blog-breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <span>{post.title}</span>
            </div>
            <img src={post.image} alt={post.title} />
            <div className="blog-article-hero__card">
              <div className="blog-meta">{getPostMeta(post)}</div>
              <h1>{post.title}</h1>
            </div>
            <aside className="blog-article-inside">
              <h2>What's inside</h2>
              <div>
                {sections.map((section, index) => (
                  <a href={`#${index + 1}`} key={section.heading} className={index === 0 ? "is-active" : undefined}>
                    {section.heading}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="blog-article-body container-pro">
          <article>
            <p className="blog-article-lede">{post.excerpt}</p>
            {sections.map((section, index) => (
              <section id={`${index + 1}`} key={section.heading}>
                <h2>
                  {index + 1}. {section.heading}
                </h2>
                <p>{section.body}</p>
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.image ? (
                  <figure className="blog-article-image">
                    <img src={section.image.src} alt={section.image.alt} loading="lazy" />
                    <figcaption>{section.image.caption}</figcaption>
                  </figure>
                ) : null}
                {section.diagram ? <BlogArticleDiagram kind={section.diagram} index={index + 1} /> : null}
              </section>
            ))}
          </article>

        </section>

        <section className="blog-article-related container-pro">
          <h2>Similar Stories</h2>
          <div className="blog-post-grid blog-post-grid--wide">
            {relatedPosts.map((item) => (
              <Link
                to="/blog/$slug"
                params={{ slug: item.slug }}
                className="blog-post-card"
                key={item.slug}
              >
                <div className="blog-meta">{getPostMeta(item)}</div>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
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
        <BlogSubscribeForm id="article-email" source="blog-article" />
      </section>
      <footer className="blog-footer">
        <div className="container-pro blog-footer__bottom">
          <Link to="/blog" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          <span>(c) 2026 Wallace Croft. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
