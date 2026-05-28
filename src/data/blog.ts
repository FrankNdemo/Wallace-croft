export type BlogCategory =
  | "Explore"
  | "Strategy"
  | "Design"
  | "Engineering"
  | "Analytics"
  | "Trends"
  | "Building Materials"
  | "Company"
  | "AI"
  | "Transformation";

export type BlogPost = {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "Explore">;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
    diagram?: BlogDiagramKind;
    image?: {
      src: string;
      alt: string;
      caption: string;
    };
  }>;
};

export type BlogPostSection = BlogPost["sections"][number];
export type BlogDiagramKind =
  | "intelligence"
  | "roadmap"
  | "workflow"
  | "systems"
  | "growth"
  | "ai"
  | "commerce"
  | "partnership";

export const blogCategories: BlogCategory[] = [
  "Explore",
  "Strategy",
  "Design",
  "Engineering",
  "Analytics",
  "Trends",
  "Building Materials",
  "Company",
  "AI",
  "Transformation",
];

const serviceBlogPosts: BlogPost[] = [
  {
    slug: "generative-ai-services-insight",
    title: "Explore Generative AI Services: From Useful Assistant to Trusted Workflow",
    category: "AI",
    readTime: "18 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Generative AI becomes valuable when it is grounded in real work, governed data, measurable quality, and human review where it matters.",
    featured: true,
    sections: [
      {
        heading: "Start with the work, not the model",
        body: "The strongest AI services begin with a repeatable workflow: a support question, an internal policy lookup, a reporting request, a proposal draft, or a decision that needs better context. Once the job is clear, the model, tools, data, and guardrails become easier to design.",
        bullets: ["Choose one high-friction workflow", "Define what a good answer must include", "Keep a human review point for risky actions"],
        diagram: "ai",
      },
      {
        heading: "Ground answers in approved knowledge",
        body: "Retrieval systems help AI work with company documents, databases, tickets, product data, and policies instead of guessing from broad model memory. The practical goal is simple: answers should cite trusted sources and know when the evidence is not strong enough.",
        image: {
          src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Engineer reviewing AI knowledge retrieval flows",
          caption: "A grounded AI service connects approved knowledge, permissions, and review signals before responding.",
        },
      },
      {
        heading: "Design the agent around permissions",
        body: "AI agents should not receive broad power by default. Tool access, approval steps, data visibility, and escalation rules need to match the business risk of each action.",
        bullets: ["Read-only tools for early pilots", "Approval gates for customer or finance actions", "Audit trails for every important decision"],
      },
      {
        heading: "Evaluate quality before launch",
        body: "Production AI needs test sets, edge cases, refusal checks, latency targets, cost tracking, and review loops. This turns AI quality from opinion into an operating practice.",
        diagram: "intelligence",
      },
      {
        heading: "Make adoption easy for teams",
        body: "People use AI when it fits the flow they already understand. Embed assistance inside service desks, dashboards, CRM records, product admin tools, and reporting workflows instead of forcing people into a separate novelty tool.",
      },
      {
        heading: "Measure business value",
        body: "Useful AI metrics go beyond prompts sent. Track cycle time, resolution quality, escalation accuracy, cost per successful task, user adoption, and the percentage of answers that include trusted sources.",
        bullets: ["Time saved per workflow", "Quality score from reviewers", "Deflection or completion rate"],
        diagram: "growth",
      },
      {
        heading: "Scale through reusable patterns",
        body: "Once one workflow works, teams can reuse retrieval, evaluation, prompt, logging, and approval patterns across other parts of the business.",
      },
      {
        heading: "What Wallace Croft helps build",
        body: "Wallace Croft helps teams select use cases, prepare data, design RAG systems, connect tools, test behavior, and launch AI services that are useful beyond the demo.",
      },
    ],
  },
  {
    slug: "transformation-services-insight",
    title: "Explore Transformation Services: Modernization That Keeps Moving",
    category: "Transformation",
    readTime: "17 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Transformation works when strategy, process, platforms, adoption, and measurement move together instead of becoming separate workstreams.",
    sections: [
      {
        heading: "Turn ambition into operating moves",
        body: "A transformation program should describe what will change in the business: decisions, workflows, customer experiences, systems, data ownership, and delivery rhythm. That makes progress easier to measure than a broad technology slogan.",
        diagram: "roadmap",
      },
      {
        heading: "Modernize around value streams",
        body: "The best starting point is often the value stream where customers, revenue, cost, and employee effort meet. Improving that flow creates visible value while revealing the platform work that matters next.",
        bullets: ["Quote-to-cash", "Customer onboarding", "Service resolution", "Inventory and fulfillment"],
      },
      {
        heading: "Avoid big-bang replacement",
        body: "Many organizations can reduce risk with staged integration, workflow redesign, data cleanup, and targeted platform replacement. The goal is to improve momentum without interrupting the core business.",
        image: {
          src: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Team planning enterprise transformation roadmap",
          caption: "Staged modernization keeps the business running while the operating model improves.",
        },
      },
      {
        heading: "Make adoption a design problem",
        body: "People adopt new systems when the work is clearer, faster, and better supported. Training matters, but so do better interfaces, useful dashboards, visible ownership, and feedback loops.",
      },
      {
        heading: "Connect governance to decisions",
        body: "Governance should help teams decide faster. A good cadence makes risks, dependencies, budget, adoption, and delivery evidence visible without slowing every release.",
        diagram: "partnership",
      },
      {
        heading: "Use automation where delay repeats",
        body: "Automation belongs where the same handoff, approval, reconciliation, or reporting task slows teams down repeatedly. Start where speed and accuracy both improve.",
      },
      {
        heading: "Measure change after launch",
        body: "Transformation is not done when software ships. Measure usage, cycle time, reliability, support demand, customer experience, and business impact after each release.",
        bullets: ["Adoption trend", "Workflow cycle time", "System reliability", "Customer friction"],
      },
      {
        heading: "Where Wallace Croft fits",
        body: "Wallace Croft connects advisory, design, engineering, data, cloud, and managed services so transformation can move from plan to working system.",
        diagram: "systems",
      },
    ],
  },
  {
    slug: "analytics-services-insight",
    title: "Explore Analytics Services: Build Decision Systems People Trust",
    category: "Analytics",
    readTime: "16 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Analytics creates value when data quality, metric definitions, dashboards, and operating decisions are designed as one system.",
    sections: [
      {
        heading: "Move past dashboard volume",
        body: "More dashboards do not automatically create better decisions. Useful analytics explains what changed, why it matters, who owns the response, and which action should happen next.",
        diagram: "intelligence",
      },
      {
        heading: "Define metrics once",
        body: "Revenue, conversion, churn, retention, service speed, inventory health, and margin should not mean different things in every department. Shared definitions are the foundation of trust.",
        bullets: ["Business owner", "Calculation logic", "Refresh cadence", "Known limitations"],
      },
      {
        heading: "Model data around decisions",
        body: "A useful warehouse or mart reflects how teams make decisions. It connects source systems into clean customer, product, order, finance, and operations views.",
        image: {
          src: "https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Analytics workspace with business dashboards",
          caption: "Decision-ready analytics combines clean models, shared definitions, and action rhythms.",
        },
      },
      {
        heading: "Add quality checks before trust breaks",
        body: "Freshness, completeness, anomalies, duplicate records, and schema changes should be visible before leaders see broken numbers in a report.",
      },
      {
        heading: "Bring analytics into workflows",
        body: "Insights should not sit in a portal waiting to be found. Send alerts, segments, forecasts, and recommendations into CRM, commerce, support, finance, and operations workflows.",
        diagram: "workflow",
      },
      {
        heading: "Use prediction with accountability",
        body: "Forecasting and machine learning are most useful when teams understand the inputs, confidence, business limits, and follow-up action.",
      },
      {
        heading: "Create a decision cadence",
        body: "Analytics needs a weekly or monthly rhythm where teams review signals, decide actions, assign owners, and check whether the last decision worked.",
        bullets: ["Review signal", "Choose action", "Assign owner", "Measure result"],
      },
      {
        heading: "What Wallace Croft helps build",
        body: "Wallace Croft supports analytics strategy, BigQuery-style modeling, data quality, dashboards, activation, and AI-assisted decision systems.",
        diagram: "systems",
      },
    ],
  },
  {
    slug: "commerce-services-insight",
    title: "Explore Commerce Services: Build Revenue Systems Customers Trust",
    category: "Strategy",
    readTime: "15 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Modern commerce connects storefronts, payments, catalog logic, fulfillment, CRM, and analytics into one revenue operating system.",
    sections: [
      {
        heading: "Commerce is more than a storefront",
        body: "Growth depends on the whole buying system: product discovery, pricing, checkout, payment confirmation, order status, support, loyalty, and repeat purchase.",
        diagram: "commerce",
      },
      {
        heading: "Design payment confidence",
        body: "Customers need clear payment status, retry paths, receipts, reconciliation, and support visibility. This matters especially for mobile payments and M-Pesa Daraja flows.",
        bullets: ["Clear checkout states", "Validated callbacks", "Receipt and status recovery", "Finance reconciliation"],
      },
      {
        heading: "Make catalog data operational",
        body: "Products, bundles, availability, pricing, substitutions, delivery rules, and promotions shape conversion. Strong catalog architecture helps teams sell without manual correction.",
      },
      {
        heading: "Build B2B portals around repeat buying",
        body: "Business buyers need account pricing, approvals, order history, invoices, inventory visibility, and support context. The portal should reduce calls, emails, and order uncertainty.",
        image: {
          src: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Commerce operations team reviewing order flow",
          caption: "Connected commerce makes order status, customer context, and fulfillment visible together.",
        },
      },
      {
        heading: "Connect CRM and lifecycle journeys",
        body: "Commerce improves when customer profiles, order history, loyalty actions, support moments, and campaign triggers share the same operating picture.",
        diagram: "growth",
      },
      {
        heading: "Use analytics across the journey",
        body: "Track acquisition, product views, basket movement, checkout drop-off, payment success, fulfillment exceptions, support contacts, and retention.",
      },
      {
        heading: "Protect the operations behind growth",
        body: "Teams need admin tools for order search, exception handling, payment review, product updates, customer timelines, and fulfillment communication.",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft builds commerce platforms, B2B portals, Daraja payment flows, CRM connections, lifecycle journeys, and analytics layers that help revenue systems learn.",
      },
    ],
  },
  {
    slug: "product-development-services-insight",
    title: "Explore Product Development Services: From Idea to Useful Release",
    category: "Engineering",
    readTime: "17 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Product development works best when discovery, design, engineering, analytics, and launch learning stay connected from the first sprint.",
    sections: [
      {
        heading: "Clarify the riskiest assumption",
        body: "Before building, teams need to know what must be true for the product to matter. That may be demand, usability, integration feasibility, willingness to pay, or operational adoption.",
        diagram: "roadmap",
      },
      {
        heading: "Build MVPs that can evolve",
        body: "An MVP should be focused, but not careless. Authentication, analytics, deployment, data structure, and integration choices should leave a path toward production.",
        bullets: ["Small useful scope", "Clean technical foundation", "Clear launch metric", "Room to learn"],
      },
      {
        heading: "Prototype before expensive build",
        body: "Clickable prototypes and technical spikes help teams test flow, language, feasibility, and stakeholder alignment before engineering effort compounds.",
        image: {
          src: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Product team designing a digital platform",
          caption: "Good product development reduces uncertainty before code becomes expensive to change.",
        },
      },
      {
        heading: "Use engineering as product strategy",
        body: "Architecture decisions shape what the product can become. APIs, data models, permissions, integrations, and release paths should support the business direction.",
        diagram: "systems",
      },
      {
        heading: "Instrument launch learning",
        body: "Track activation, task completion, feature demand, support issues, retention, performance, and conversion so roadmap decisions are grounded in real usage.",
      },
      {
        heading: "Connect integrations early",
        body: "Many products rely on payments, CRM, ERP, identity, analytics, messaging, or custom business systems. Integration design should be part of discovery, not a late surprise.",
      },
      {
        heading: "Create a delivery rhythm",
        body: "Small releases, automated checks, preview environments, and clear product reviews help teams learn quickly without losing quality.",
        diagram: "workflow",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft supports product discovery, UX/UI, MVP engineering, web platforms, integrations, analytics, CI/CD, and post-launch improvement.",
      },
    ],
  },
  {
    slug: "mobile-development-services-insight",
    title: "Explore Mobile Development Services: Device-First Products That Hold Up",
    category: "Engineering",
    readTime: "14 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Mobile products need clear journeys, reliable sync, payment confidence, analytics, and release operations designed around real device behavior.",
    sections: [
      {
        heading: "Design for the device context",
        body: "Mobile users may be moving, distracted, offline, using one hand, or handling a time-sensitive task. The product should respect those conditions with focused screens and resilient states.",
        diagram: "workflow",
      },
      {
        heading: "Plan native and cross-platform tradeoffs",
        body: "The right approach depends on performance, device features, budget, release timeline, long-term maintenance, and how much logic should be shared with web platforms.",
      },
      {
        heading: "Make offline behavior explicit",
        body: "Field teams and mobile customers need confidence when connectivity drops. Local storage, queues, retries, conflict handling, and sync feedback should be designed into the flow.",
        bullets: ["Save locally", "Show sync state", "Recover failed submissions", "Resolve conflicts clearly"],
        image: {
          src: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Mobile app workflow being reviewed on a phone",
          caption: "Reliable mobile products make offline, payment, and notification states visible to users.",
        },
      },
      {
        heading: "Treat payments as trust moments",
        body: "Wallet, card, and M-Pesa flows need clear status, receipts, retry messaging, reconciliation, and support visibility if something stalls.",
        diagram: "commerce",
      },
      {
        heading: "Use notifications carefully",
        body: "Push notifications work when they are timely, relevant, respectful, and controllable. Preference settings and lifecycle logic matter as much as the message.",
      },
      {
        heading: "Measure mobile product health",
        body: "Track crashes, activation, retention, task completion, payment success, load speed, feature usage, and support signals after launch.",
      },
      {
        heading: "Prepare release operations",
        body: "App store readiness, staged rollouts, analytics, crash monitoring, release notes, and support feedback should be part of the delivery plan.",
        diagram: "systems",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft designs and builds mobile apps, responsive workflows, payments, offline sync, app analytics, and release processes for iOS, Android, and hybrid products.",
      },
    ],
  },
  {
    slug: "design-services-insight",
    title: "Explore Design Services: Make Complex Work Feel Clear",
    category: "Design",
    readTime: "15 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Design reduces product risk by turning research, workflows, prototypes, interfaces, and systems into decisions teams can build from.",
    sections: [
      {
        heading: "Design starts with evidence",
        body: "Good product design begins by understanding users, tasks, constraints, language, and decision moments. This keeps teams from polishing the wrong idea.",
        diagram: "workflow",
      },
      {
        heading: "Map the journey before the screens",
        body: "Journey maps show where people slow down, repeat work, seek help, abandon tasks, or lose confidence. Those are the moments design should improve first.",
        bullets: ["User goal", "Context", "Decision point", "Failure mode", "Support need"],
      },
      {
        heading: "Prototype the risky parts",
        body: "Clickable prototypes reveal whether navigation, hierarchy, forms, content, and states make sense before development locks in the experience.",
        image: {
          src: "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Design team reviewing a prototype and interface system",
          caption: "Prototypes help teams test the experience while change is still cheap.",
        },
      },
      {
        heading: "Design enterprise tools for repeated use",
        body: "Operational interfaces need density, scanning, keyboard-friendly flows, permissions, error states, and fast recovery. They should feel calm under daily pressure.",
      },
      {
        heading: "Make design systems practical",
        body: "A design system should speed delivery with reusable components, states, content rules, accessibility guidance, and implementation notes.",
        diagram: "systems",
      },
      {
        heading: "Use visual identity with purpose",
        body: "Brand expression should make the product feel credible and memorable while supporting usability. In product UI, clarity still leads.",
      },
      {
        heading: "Measure experience quality",
        body: "Track task success, completion time, support demand, usability findings, adoption, conversion, accessibility issues, and qualitative feedback.",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft supports user research, UX/UI, prototypes, design systems, product branding, enterprise dashboards, mobile flows, and build reviews.",
        diagram: "roadmap",
      },
    ],
  },
  {
    slug: "cloud-devops-services-insight",
    title: "Explore Cloud & DevOps Services: Reliable Delivery Without the Drama",
    category: "Engineering",
    readTime: "16 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Cloud and DevOps services help teams ship with stronger foundations: environments, CI/CD, observability, security, cost control, and recovery practices.",
    sections: [
      {
        heading: "Start with a cloud operating model",
        body: "Cloud maturity is not only infrastructure. Teams need ownership, environments, access controls, deployment standards, observability, cost rules, and incident practices.",
        diagram: "systems",
      },
      {
        heading: "Build landing zones before scale",
        body: "Identity, networking, secrets, backups, permissions, and environment structure should be clear before workloads multiply.",
      },
      {
        heading: "Make CI/CD the default path",
        body: "Automated tests, scans, previews, approvals, deployment gates, and rollback paths make releases smaller and easier to recover.",
        bullets: ["Test", "Scan", "Preview", "Approve", "Promote", "Rollback"],
        diagram: "workflow",
      },
      {
        heading: "Observe what users feel",
        body: "Logs, metrics, traces, uptime checks, and alerts should connect technical health to user experience and business impact.",
        image: {
          src: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Cloud operations team monitoring deployment pipelines",
          caption: "Reliable delivery depends on visible pipelines, incidents, cost, and service health.",
        },
      },
      {
        heading: "Treat cost as a product signal",
        body: "Cloud cost control works when usage has owners, budgets, architecture reviews, rightsizing, and visibility inside team planning.",
      },
      {
        heading: "Harden security continuously",
        body: "Access control, secret management, dependency review, backups, network exposure, audit trails, and deployment permissions need regular attention.",
      },
      {
        heading: "Review incidents to improve the system",
        body: "Incident reviews should create better alerts, runbooks, ownership, tests, and architecture decisions rather than blame.",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft supports cloud strategy, migrations, CI/CD pipelines, observability, security hardening, cost visibility, backups, and managed operations.",
        diagram: "roadmap",
      },
    ],
  },
  {
    slug: "strategy-services-insight",
    title: "Explore Strategy Services: Choose the Right First Move",
    category: "Strategy",
    readTime: "15 Mins",
    date: "May 2026",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1800",
    excerpt:
      "Digital strategy turns business priorities, customer evidence, technology readiness, and delivery capacity into a roadmap teams can execute.",
    sections: [
      {
        heading: "Make strategy useful for decisions",
        body: "A strong strategy helps teams choose what to do now, what to defer, what to stop, and what evidence would change the plan.",
        diagram: "roadmap",
      },
      {
        heading: "Size the opportunity clearly",
        body: "Opportunity sizing should combine customer value, operational drag, revenue potential, cost, technical readiness, risk, and time to learn.",
        bullets: ["Customer pain", "Business value", "Technical readiness", "Adoption effort"],
      },
      {
        heading: "Use discovery to reduce guesswork",
        body: "Interviews, workflow review, analytics, market signals, and technical assessment help leaders see what is real before committing spend.",
        image: {
          src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Strategy workshop with product roadmap notes",
          caption: "Good strategy turns evidence into a small set of defendable choices.",
        },
      },
      {
        heading: "Build now-next-later roadmaps",
        body: "Roadmaps should show sequence, dependencies, owners, milestones, risk, and learning goals. This keeps strategy close to execution.",
      },
      {
        heading: "Connect technology investment to outcomes",
        body: "Platform work becomes easier to support when leaders can see its effect on speed, reliability, cost, risk, customer experience, or growth.",
        diagram: "growth",
      },
      {
        heading: "Design governance around momentum",
        body: "Decision forums should clarify tradeoffs, unblock delivery, and review evidence. Governance should make momentum visible.",
      },
      {
        heading: "Translate strategy into first releases",
        body: "The first implementation step should be small enough to ship, valuable enough to matter, and measurable enough to teach the next move.",
        diagram: "workflow",
      },
      {
        heading: "Where Wallace Croft helps",
        body: "Wallace Croft supports opportunity discovery, product strategy, technology assessment, business cases, roadmaps, measurement systems, and execution planning.",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  ...serviceBlogPosts,
  {
    slug: "why-digital-transformation-needs-a-different-approach",
    title: "Why B2B Digital Transformation Needs a Different Approach",
    category: "Transformation",
    readTime: "25 Mins",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "B2B transformation works best when teams improve systems, data, and customer workflows together.",
    featured: true,
    sections: [
      {
        heading: "Transformation is an operating model",
        body: "A strong transformation program does more than launch new tools. It changes how teams decide, measure, and deliver value across the business.",
        bullets: [
          "Map the customer journey",
          "Modernize the highest-friction workflows",
          "Measure adoption, not just delivery",
        ],
      },
      {
        heading: "Where leaders should start",
        body: "Start with business outcomes, then choose the technology. This keeps AI, automation, data, and cloud work tied to revenue, speed, and reliability.",
      },
    ],
  },
  {
    slug: "product-development-partner-checklist",
    title: "Top Product Development Companies to Partner With",
    category: "Strategy",
    readTime: "18 Mins",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "The right product partner brings strategy, engineering discipline, and a clear path from idea to launch.",
    featured: true,
    sections: [
      {
        heading: "What good partners make visible",
        body: "Great partners clarify scope early, expose risks before they become expensive, and keep delivery connected to the customer problem.",
        bullets: [
          "Clear discovery process",
          "Reusable technical foundations",
          "Transparent delivery rhythm",
        ],
      },
      {
        heading: "How to choose",
        body: "Look for teams that can challenge assumptions, simplify the roadmap, and prove progress with working software rather than long presentations.",
      },
    ],
  },
  {
    slug: "digital-product-strategy-that-wins",
    title: "How to Build a Digital Product Strategy That Wins",
    category: "Strategy",
    readTime: "20 Mins",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "A practical product strategy helps teams focus on the users, capabilities, and metrics that matter most.",
    featured: true,
    sections: [
      {
        heading: "Make the strategy useful",
        body: "A product strategy should help teams say yes and no. It should show who the product serves, what problem it solves, and why now is the right moment.",
        bullets: [
          "Define the user promise",
          "Choose measurable outcomes",
          "Sequence work by learning value",
        ],
      },
      {
        heading: "Keep it simple",
        body: "Short strategy documents are easier to use. A one-page strategy that guides decisions beats a long deck that no one opens during delivery.",
      },
    ],
  },
  {
    slug: "decision-intelligence-tools-for-business",
    title: "25 Best Decision Intelligence Tools Every Business Needs",
    category: "Analytics",
    readTime: "16 Mins",
    date: "November 2025",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Decision intelligence combines data, models, and workflows so teams can act with more confidence.",
    sections: [
      {
        heading: "What decision intelligence improves",
        body: "It helps teams turn scattered signals into repeatable choices. The best systems explain recommendations and show the tradeoffs behind them.",
        bullets: ["Forecast demand", "Prioritize opportunities", "Spot risk earlier"],
      },
    ],
  },
  {
    slug: "it-staff-augmentation-partner-guide",
    title: "How You Can Find the Right IT Staff Augmentation Partner",
    category: "Company",
    readTime: "14 Mins",
    date: "October 2025",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Staff augmentation works when talent, process, and accountability all fit the team you already have.",
    sections: [
      {
        heading: "Look beyond resumes",
        body: "The best partners help you onboard people quickly, define ownership, and keep communication healthy across internal and external teams.",
        bullets: [
          "Match skills to outcomes",
          "Agree on quality standards",
          "Review progress weekly",
        ],
      },
    ],
  },
  {
    slug: "modern-software-development-best-practices",
    title: "10 Best Practices for Modern Software Development",
    category: "Engineering",
    readTime: "15 Mins",
    date: "October 2025",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Modern engineering favors small releases, clear ownership, automated checks, and simple architecture.",
    sections: [
      {
        heading: "Make quality continuous",
        body: "Teams move faster when quality is part of every step, not a final gate. Tests, reviews, observability, and deployment habits all matter.",
        bullets: ["Ship smaller changes", "Automate tests and builds", "Monitor real user impact"],
      },
    ],
  },
  {
    slug: "enterprise-modernization-actually-means",
    title: "What Enterprise Modernization Actually Means Today",
    category: "Transformation",
    readTime: "16 Mins",
    date: "June 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Modernization is the steady work of replacing fragile systems with platforms that are easier to change.",
    sections: [
      {
        heading: "Modernization is selective",
        body: "Not every legacy system needs replacement. Good modernization protects what works, improves what slows the business down, and removes hidden risk.",
      },
    ],
  },
  {
    slug: "choosing-a-product-development-partner",
    title: "Things to Consider When Choosing a Product Development Partner",
    category: "Engineering",
    readTime: "13 Mins",
    date: "May 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "The best partner can think strategically, build responsibly, and stay accountable after launch.",
    sections: [
      {
        heading: "Choose for the full journey",
        body: "Product work does not end at launch. Pick a partner who can support discovery, build, adoption, measurement, and the next release.",
        bullets: ["Strong discovery", "Reliable engineering", "Clear post-launch support"],
      },
    ],
  },
  {
    slug: "building-materials-digital-sales",
    title: "How Building Materials Teams Can Modernize Sales",
    category: "Building Materials",
    readTime: "11 Mins",
    date: "April 2025",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Digital sales tools help building materials teams quote faster, manage inventory, and support buyers.",
    sections: [
      {
        heading: "Make complex buying easier",
        body: "Buyers need accurate product data, availability, pricing, and delivery visibility. Digital tools reduce back-and-forth and protect margin.",
      },
    ],
  },
  {
    slug: "design-systems-for-growth",
    title: "Design Systems That Help Products Scale",
    category: "Design",
    readTime: "12 Mins",
    date: "April 2025",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "A useful design system improves consistency while giving product teams enough room to solve real problems.",
    sections: [
      {
        heading: "Design systems are product infrastructure",
        body: "They reduce repeated decisions, speed up delivery, and make experiences more predictable for users.",
      },
    ],
  },
  {
    slug: "ai-trends-for-practical-teams",
    title: "AI Trends Practical Teams Should Watch",
    category: "Trends",
    readTime: "10 Mins",
    date: "March 2025",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "The most useful AI trends are the ones that improve work quality, decision speed, and customer support.",
    sections: [
      {
        heading: "Adoption beats hype",
        body: "Teams get value when AI is embedded into daily workflows with clear guardrails and measurable outcomes.",
      },
    ],
  },
  {
    slug: "generative-ai-for-retail-profits",
    title: "Generative AI for Retail Is Driving Profits Like Never Before",
    category: "AI",
    readTime: "10 Mins",
    date: "September 2024",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Retailers can use generative AI to personalize experiences, improve pricing, and reduce operational waste.",
    featured: true,
    sections: [
      {
        heading: "AI helps retailers act faster",
        body: "Generative AI can summarize customer signals, create product content, support teams, and improve merchandising decisions.",
        bullets: [
          "Personalized recommendations",
          "Dynamic product content",
          "Smarter inventory planning",
        ],
      },
      {
        heading: "Start where the value is visible",
        body: "Begin with a focused use case such as product descriptions, customer support summaries, or campaign testing. Expand after the workflow proves useful.",
      },
    ],
  },
  {
    slug: "roadmapping-ai-products-with-confidence",
    title: "How Leaders Can Roadmap AI Products With Confidence",
    category: "Strategy",
    readTime: "17 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "A practical roadmap helps leaders prioritize AI work by business value, readiness, and adoption risk.",
    sections: [
      {
        heading: "Strategy starts with clarity",
        body: "Effective AI roadmaps connect use cases to measurable outcomes, available data, and the teams responsible for adoption.",
        bullets: ["Rank use cases by value", "Confirm data readiness", "Sequence pilots by learning speed"],
      },
    ],
  },
  {
    slug: "ux-research-that-reduces-product-risk",
    title: "UX Research That Reduces Product Risk Before Build",
    category: "Design",
    readTime: "13 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Research helps teams make product bets with stronger evidence and fewer late-stage surprises.",
    sections: [
      {
        heading: "Use research to decide",
        body: "The best research programs turn customer signals into design choices, delivery priorities, and measurable product assumptions.",
      },
    ],
  },
  {
    slug: "designing-enterprise-workflows-people-use",
    title: "Designing Enterprise Workflows People Actually Use",
    category: "Design",
    readTime: "14 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Enterprise tools work when they respect the pace, context, and constraints of real teams.",
    sections: [
      {
        heading: "Design around the job",
        body: "Teams adopt software when it reduces friction in the moments where work is already happening.",
      },
    ],
  },
  {
    slug: "platform-engineering-for-faster-delivery",
    title: "Platform Engineering for Faster Product Delivery",
    category: "Engineering",
    readTime: "18 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Internal platforms help engineering teams ship safely by standardizing the foundations behind delivery.",
    sections: [
      {
        heading: "Standardize the repeated work",
        body: "A strong platform removes repeated decisions around environments, deployment, observability, and security.",
      },
    ],
  },
  {
    slug: "analytics-operating-model-for-growth",
    title: "Building an Analytics Operating Model for Growth",
    category: "Analytics",
    readTime: "15 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Analytics creates value when ownership, data quality, and decision workflows are designed together.",
    sections: [
      {
        heading: "Make data usable",
        body: "Growth teams need trusted metrics, shared definitions, and a rhythm for turning analysis into action.",
      },
    ],
  },
  {
    slug: "dashboards-that-drive-decisions",
    title: "Dashboards That Drive Better Business Decisions",
    category: "Analytics",
    readTime: "12 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Good dashboards focus attention on the few signals that help teams decide what to do next.",
    sections: [
      {
        heading: "Design for action",
        body: "A dashboard should reveal changes, explain context, and help owners choose the next move.",
      },
    ],
  },
  {
    slug: "automation-trends-for-operations-leaders",
    title: "Automation Trends Operations Leaders Should Track",
    category: "Trends",
    readTime: "11 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Automation is shifting from isolated scripts to connected workflows that improve whole operating systems.",
    sections: [
      {
        heading: "Connect automation to outcomes",
        body: "The most useful automation trends improve cycle time, quality, visibility, and customer response.",
      },
    ],
  },
  {
    slug: "cloud-trends-practical-enterprises",
    title: "Cloud Trends Practical Enterprises Should Watch",
    category: "Trends",
    readTime: "12 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Cloud strategy is moving toward better governance, cost visibility, and platforms that support faster teams.",
    sections: [
      {
        heading: "Cloud maturity is operational",
        body: "Mature teams balance speed, resilience, security, and cost with clear platform guardrails.",
      },
    ],
  },
  {
    slug: "building-materials-quote-to-cash",
    title: "Quote-to-Cash Modernization for Building Materials Teams",
    category: "Building Materials",
    readTime: "13 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Modern quote-to-cash workflows reduce manual effort and give sales teams clearer visibility.",
    sections: [
      {
        heading: "Remove friction from sales",
        body: "Accurate product data, pricing rules, approvals, and fulfillment visibility all shape buying speed.",
      },
    ],
  },
  {
    slug: "inventory-visibility-for-suppliers",
    title: "Inventory Visibility for Building Materials Suppliers",
    category: "Building Materials",
    readTime: "12 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Better inventory visibility helps suppliers respond faster, reduce errors, and protect customer trust.",
    sections: [
      {
        heading: "Make availability clear",
        body: "Customers and sales teams need reliable availability signals across locations, channels, and delivery windows.",
      },
    ],
  },
  {
    slug: "scaling-delivery-with-managed-services",
    title: "Scaling Delivery With Managed Services",
    category: "Company",
    readTime: "12 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Managed services help organizations keep core systems reliable while internal teams focus on growth.",
    sections: [
      {
        heading: "Reliability needs ownership",
        body: "Clear support models, service levels, and improvement plans help teams keep critical platforms healthy.",
      },
    ],
  },
  {
    slug: "what-to-expect-from-a-technology-partner",
    title: "What to Expect From a Technology Transformation Partner",
    category: "Company",
    readTime: "10 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Strong partners bring clarity, accountability, and a practical path from idea to measurable impact.",
    sections: [
      {
        heading: "Partnership should reduce uncertainty",
        body: "A good partner helps teams make decisions, expose risks, and move from plans to working systems.",
      },
    ],
  },
  {
    slug: "ai-agents-for-business-operations",
    title: "AI Agents for Business Operations: Where to Start",
    category: "AI",
    readTime: "14 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "AI agents work best when they are grounded in clear tasks, trusted data, and human review points.",
    sections: [
      {
        heading: "Start with contained workflows",
        body: "Good first agent use cases have repeatable inputs, visible success criteria, and low-risk escalation paths.",
      },
    ],
  },
  {
    slug: "responsible-ai-governance-practical-teams",
    title: "Responsible AI Governance for Practical Teams",
    category: "AI",
    readTime: "13 Mins",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "AI governance should help teams move faster by making risks, approvals, and accountability clear.",
    sections: [
      {
        heading: "Governance should be usable",
        body: "Lightweight review patterns help teams evaluate data, model behavior, security, and user impact.",
      },
    ],
  },
  {
    slug: "change-management-for-digital-programs",
    title: "Change Management for Digital Programs That Stick",
    category: "Transformation",
    readTime: "14 Mins",
    date: "January 2026",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "Transformation sticks when leaders design adoption, communication, and measurement into the work from day one.",
    sections: [
      {
        heading: "Adoption is designed",
        body: "Teams need visible sponsorship, practical training, feedback loops, and metrics that show whether new ways of working are taking hold.",
      },
    ],
  },
];

export function getPostMeta(post: BlogPost) {
  return `${post.category} - ${post.readTime} - ${post.date}`;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

const categorySectionAdditions: Record<Exclude<BlogCategory, "Explore">, BlogPostSection[]> = {
  Strategy: [
    {
      heading: "Why the decision matters now",
      body: "The window for useful strategy is getting shorter. Teams need priorities that connect market pressure, customer expectations, delivery capacity, and measurable business value.",
      diagram: "roadmap",
    },
    {
      heading: "Signals leaders should examine",
      body: "Strong decisions come from a practical view of customer behavior, revenue movement, operating constraints, delivery speed, and the quality of existing systems.",
      bullets: ["Customer friction", "Workflow delays", "Revenue or margin pressure"],
    },
    {
      heading: "How to turn insight into a roadmap",
      body: "A useful roadmap makes tradeoffs visible. It sequences the work that reduces risk, proves value quickly, and creates a stronger foundation for the next phase.",
      diagram: "growth",
    },
    {
      heading: "What successful teams do differently",
      body: "They keep strategy close to delivery, review evidence often, and make decisions small enough to test without losing sight of the larger business direction.",
    },
    {
      heading: "Where Wallace Croft helps",
      body: "Wallace Croft helps teams clarify priorities, shape practical roadmaps, and move from strategic intent to working digital systems.",
    },
  ],
  Design: [
    {
      heading: "Why experience quality matters",
      body: "Digital products create value when people can understand them quickly, trust the flow, and complete important work without unnecessary effort.",
      diagram: "workflow",
    },
    {
      heading: "What to learn from users first",
      body: "Teams should study the moments where users slow down, repeat work, abandon a task, or need support to make a confident decision.",
      bullets: ["High-friction tasks", "Unclear language", "Repeated manual steps"],
    },
    {
      heading: "How to simplify complex workflows",
      body: "Good design reduces visible complexity by grouping decisions, improving hierarchy, and making the next step obvious at the right moment.",
    },
    {
      heading: "How to test before building",
      body: "Prototype the riskiest moments first. Early feedback helps teams correct structure, content, and interaction patterns before implementation becomes expensive.",
      diagram: "roadmap",
    },
    {
      heading: "How to scale the design system",
      body: "Shared components, content patterns, and review practices help teams keep quality consistent as products expand across roles, markets, and use cases.",
    },
  ],
  Engineering: [
    {
      heading: "Why engineering discipline matters",
      body: "Modern software needs more than code. It needs clear ownership, reliable foundations, automated checks, and architecture that can keep changing safely.",
      diagram: "systems",
    },
    {
      heading: "What to stabilize first",
      body: "Teams should focus on the parts of the system that slow releases, create support issues, or make future changes risky.",
      bullets: ["Critical workflows", "Deployment reliability", "Shared platform foundations"],
    },
    {
      heading: "How to sequence delivery",
      body: "Smaller releases make learning easier. Each release should reduce a known risk, improve a measurable workflow, or create reusable capability.",
    },
    {
      heading: "How to keep quality visible",
      body: "Quality improves when tests, observability, reviews, and production signals are part of everyday delivery rather than a final gate.",
      diagram: "workflow",
    },
    {
      heading: "What strong partners contribute",
      body: "A strong engineering partner brings technical judgment, delivery rhythm, and a practical path from business need to maintainable software.",
    },
  ],
  Analytics: [
    {
      heading: "Why better intelligence changes decisions",
      body: "Analytics becomes valuable when it helps teams choose the next action, not when it adds another dashboard no one uses.",
      diagram: "intelligence",
    },
    {
      heading: "What data should be connected",
      body: "The most useful view brings together customer behavior, operational activity, financial signals, product usage, and support patterns.",
      bullets: ["Customer signals", "Operational performance", "Revenue and cost movement"],
    },
    {
      heading: "How teams move from data to action",
      body: "Teams need a repeatable rhythm for reviewing signals, identifying patterns, assigning owners, and turning insight into product or process changes.",
      diagram: "workflow",
    },
    {
      heading: "How to avoid shallow reporting",
      body: "Reports should explain what changed, why it matters, and what decision should happen next. Otherwise, the work stays descriptive instead of useful.",
    },
    {
      heading: "How to prove business value",
      body: "Tie analytics work to measurable outcomes such as conversion, retention, cycle time, service quality, forecasting accuracy, or margin improvement.",
    },
  ],
  Trends: [
    {
      heading: "Why this trend deserves attention",
      body: "Useful trends are not about novelty. They show where customer expectations, operating models, and technology capabilities are moving next.",
      diagram: "growth",
    },
    {
      heading: "What practical teams should watch",
      body: "Teams should look for signals that affect revenue, cost, adoption, security, delivery speed, or the quality of customer experience.",
      bullets: ["Customer behavior shifts", "Operational pressure", "New technical capability"],
    },
    {
      heading: "How to separate signal from hype",
      body: "A trend is worth acting on when it connects to a real workflow, has clear constraints, and can be tested with a focused pilot.",
    },
    {
      heading: "Where to start safely",
      body: "Start with a contained use case, define success before building, and expand only after the workflow proves useful in real conditions.",
      diagram: "roadmap",
    },
    {
      heading: "How to build momentum",
      body: "Momentum grows when teams share what they learned, standardize useful patterns, and connect experiments to the broader operating roadmap.",
    },
  ],
  "Building Materials": [
    {
      heading: "Why digital sales workflows matter",
      body: "Building materials teams compete on speed, accuracy, availability, and trust. Digital workflows help make those strengths visible to buyers and internal teams.",
      diagram: "commerce",
    },
    {
      heading: "What customers need to see",
      body: "Buyers need reliable product data, pricing, availability, delivery timing, and order status without waiting on manual back-and-forth.",
      bullets: ["Product availability", "Quote accuracy", "Delivery visibility"],
    },
    {
      heading: "How to reduce manual effort",
      body: "Connect quoting, inventory, approvals, order management, and customer communication so teams spend less time reconciling information.",
      diagram: "workflow",
    },
    {
      heading: "How to protect margin",
      body: "Better visibility into pricing rules, substitutions, freight, and fulfillment constraints helps sales teams move quickly without giving away value.",
    },
    {
      heading: "Where to modernize first",
      body: "Start with the workflows where sales speed, operational accuracy, and customer confidence meet, then expand into deeper platform integration.",
    },
  ],
  Company: [
    {
      heading: "Why partnership structure matters",
      body: "Digital work succeeds when responsibilities are clear, communication is steady, and every team understands how the work connects to business outcomes.",
      diagram: "partnership",
    },
    {
      heading: "What good collaboration looks like",
      body: "Strong collaboration makes scope, risks, decisions, and progress visible without slowing delivery.",
      bullets: ["Clear ownership", "Weekly decision rhythm", "Transparent risks"],
    },
    {
      heading: "How to keep teams aligned",
      body: "Teams stay aligned when discovery, roadmap planning, engineering, and support all work from the same priorities and evidence.",
      diagram: "systems",
    },
    {
      heading: "How to measure partner value",
      body: "Measure the partner by business progress, quality of delivery, clarity of communication, and the strength of the system left behind.",
    },
    {
      heading: "How Wallace Croft supports the journey",
      body: "Wallace Croft combines advisory, product, engineering, and managed services so clients can move from idea to durable digital capability.",
    },
  ],
  AI: [
    {
      heading: "Why AI needs a practical operating model",
      body: "AI creates value when it is grounded in real workflows, trusted data, clear review points, and measurable business outcomes.",
      diagram: "ai",
    },
    {
      heading: "Where AI can help first",
      body: "Good starting points are repeatable workflows where summarization, recommendation, generation, classification, or assisted decision-making can save time.",
      bullets: ["Content and knowledge work", "Support and service operations", "Forecasting and prioritization"],
    },
    {
      heading: "What guardrails should be in place",
      body: "Teams need clear rules for data access, human review, model behavior, security, and escalation before AI becomes part of critical work.",
    },
    {
      heading: "How to test AI value",
      body: "Start with a narrow pilot, compare results against the current workflow, and measure quality, speed, adoption, and risk.",
      diagram: "intelligence",
    },
    {
      heading: "How to scale responsibly",
      body: "Scale after the workflow proves useful, the data path is reliable, and teams know how to monitor quality over time.",
    },
  ],
  Transformation: [
    {
      heading: "Why transformation needs focus",
      body: "Transformation creates value when teams modernize the workflows and systems that most directly affect customers, revenue, speed, or resilience.",
      diagram: "systems",
    },
    {
      heading: "What leaders should diagnose",
      body: "Leaders should look for slow handoffs, fragile systems, duplicated data, manual controls, and experiences that make customers or employees work too hard.",
      bullets: ["Legacy friction", "Disconnected data", "Low adoption"],
    },
    {
      heading: "How to plan modernization",
      body: "Start with the desired business outcome, then decide which systems, workflows, data, and teams need to change to achieve it.",
      diagram: "roadmap",
    },
    {
      heading: "How to manage adoption",
      body: "Adoption improves when teams understand why the change matters, how their work will improve, and how feedback will shape each release.",
    },
    {
      heading: "How to sustain progress",
      body: "Sustained progress comes from measurement, ownership, support, and a roadmap that keeps improving the operating system after launch.",
    },
  ],
};

export function getArticleSections(post: BlogPost) {
  const existingHeadings = new Set(post.sections.map((section) => section.heading));
  const additions = categorySectionAdditions[post.category].filter(
    (section) => !existingHeadings.has(section.heading),
  );

  return [...post.sections, ...additions];
}
