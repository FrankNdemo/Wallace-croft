export type ServiceDetail = {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  overview: string;
  capabilities: Array<{
    title: string;
    body: string;
  }>;
  workTitle: string;
  work: Array<{
    type: string;
    title: string;
    body: string;
    image: string;
  }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
  insights: Array<{
    title: string;
    body: string;
    image: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const images = {
  generativeAi: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
  transformation: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
  commerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=85",
  integration: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
  innovation: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
  mobile: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
  design: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=85",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
  strategy: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
  workOne: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  workTwo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  workThree: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
  workFour: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  workFive: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85",
  workSix: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
  insightOne: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
  insightTwo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b?auto=format&fit=crop&w=1200&q=85",
  insightThree: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85",
};

const photoPool = [
  "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6801867/pexels-photo-6801867.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/7567558/pexels-photo-7567558.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/8297067/pexels-photo-8297067.jpeg?auto=compress&cs=tinysrgb&w=1400",
];

const onlineImage = (_query: string, sig: number) => photoPool[(sig - 1) % photoPool.length];

const sharedWork = [
  {
    type: "Platform",
    title: "Daraja payment implementation",
    body: "M-Pesa checkout, B2C payouts, callback validation, reconciliation, and admin visibility for finance teams.",
    image: images.workOne,
  },
  {
    type: "Engineering",
    title: "Web development operating system",
    body: "Conversion-focused portals, authenticated dashboards, CMS publishing, analytics events, and performance budgets.",
    image: images.workTwo,
  },
  {
    type: "Delivery",
    title: "CI/CD release automation",
    body: "Branch strategy, automated tests, preview environments, approvals, deployment gates, and rollback playbooks.",
    image: images.workThree,
  },
  {
    type: "Data",
    title: "BigQuery decision layer",
    body: "Modeled warehouse data, governed marts, executive reporting, activation feeds, and trusted KPI definitions.",
    image: images.workFour,
  },
  {
    type: "Operations",
    title: "AI service desk workflow",
    body: "Ticket triage, knowledge retrieval, response drafting, escalation rules, and quality review loops.",
    image: images.workFive,
  },
  {
    type: "Cloud",
    title: "Modernization roadmap",
    body: "Cloud landing zones, workload migration, observability, cost controls, and security-first delivery standards.",
    image: images.workSix,
  },
];

const serviceWork = {
  generativeAi: [
    { type: "AI Lab", title: "Knowledge assistant prototype", body: "Retrieval, source ranking, confidence checks, and reviewer handoff for customer support and internal teams.", image: onlineImage("ai assistant knowledge base dashboard", 101) },
    { type: "Governance", title: "Responsible AI control room", body: "Policy checks, prompt evaluations, audit trails, and release scoring before AI workflows reach production.", image: onlineImage("artificial intelligence governance dashboard", 102) },
    { type: "Automation", title: "Agent workflow orchestration", body: "Tool calls, escalation rules, ticket summaries, and quality review loops for repeatable business tasks.", image: onlineImage("automation workflow artificial intelligence office", 103) },
    { type: "Engineering", title: "Model integration layer", body: "Secure model routing, API tools, cost monitoring, and reusable prompt systems for product teams.", image: onlineImage("software engineer ai code screen", 104) },
    { type: "Operations", title: "Service desk copilot", body: "Ticket triage, recommended answers, customer context, and handoff notes for faster support resolution.", image: onlineImage("customer support technology dashboard", 105) },
    { type: "Data", title: "Private knowledge indexing", body: "Document ingestion, embeddings, freshness rules, and permissions-aware retrieval for enterprise knowledge.", image: onlineImage("data center knowledge graph ai", 106) },
  ],
  transformation: [
    { type: "Roadmap", title: "Transformation command plan", body: "Workstreams, adoption checkpoints, portfolio decisions, and measurable milestones for leadership teams.", image: onlineImage("digital transformation roadmap workshop", 201) },
    { type: "Automation", title: "Process modernization sprint", body: "Approvals, handoffs, reporting, and exception workflows rebuilt around faster operational movement.", image: onlineImage("business process automation team", 202) },
    { type: "Change", title: "Adoption enablement program", body: "Training, rituals, champions, and usage metrics that help new systems become daily habits.", image: onlineImage("team training digital transformation office", 203) },
    { type: "Platform", title: "Legacy workflow bridge", body: "Staged integrations and modernization around existing systems without forcing disruptive replacement.", image: onlineImage("enterprise software modernization server room", 204) },
    { type: "Governance", title: "Executive operating cadence", body: "Decision forums, risk reviews, KPI scorecards, and ownership models that keep change visible.", image: onlineImage("executive strategy meeting technology", 205) },
    { type: "Value", title: "Operational waste reduction", body: "Bottleneck analysis, automation opportunities, and value-stream sequencing for faster returns.", image: onlineImage("operations team process improvement", 206) },
  ],
  analytics: [
    { type: "BI", title: "Leadership KPI cockpit", body: "Revenue, conversion, operations, and finance metrics modeled into one trusted decision layer.", image: onlineImage("business intelligence analytics dashboard", 301) },
    { type: "Warehouse", title: "BigQuery decision mart", body: "Clean source models, governed definitions, and reporting-ready marts for every business unit.", image: onlineImage("data warehouse analytics engineer", 302) },
    { type: "Quality", title: "Data health monitor", body: "Freshness, completeness, anomaly, and drift checks before reports reach the boardroom.", image: onlineImage("data quality dashboard monitoring", 303) },
    { type: "Prediction", title: "Forecasting signal layer", body: "Demand, churn, stock, service load, and revenue signals made useful inside daily operations.", image: onlineImage("predictive analytics machine learning dashboard", 304) },
    { type: "Activation", title: "Customer segment sync", body: "Trusted segments and events pushed into CRM, commerce, support, and marketing workflows.", image: onlineImage("customer data platform analytics", 305) },
    { type: "Reporting", title: "Operations analytics hub", body: "Team-level views that turn performance data into action, alerts, and accountability.", image: onlineImage("operations analytics control room", 306) },
  ],
  commerce: [
    { type: "Payments", title: "Daraja checkout flow", body: "M-Pesa STK Push, callback validation, payment status, reconciliation, and finance visibility.", image: onlineImage("mobile payment checkout ecommerce", 401) },
    { type: "Storefront", title: "Conversion-ready commerce front", body: "Fast catalog pages, clear product journeys, basket recovery, and analytics events.", image: onlineImage("ecommerce storefront laptop shopping", 402) },
    { type: "B2B", title: "Customer ordering portal", body: "Account pricing, approval flows, order history, invoices, and support context for business buyers.", image: onlineImage("b2b ecommerce customer portal", 403) },
    { type: "CRM", title: "Lifecycle commerce engine", body: "Customer profiles, loyalty actions, retention campaigns, and support moments connected to orders.", image: onlineImage("crm customer lifecycle dashboard", 404) },
    { type: "Catalog", title: "Merchandising control panel", body: "Availability, bundles, pricing, promotions, and product rules shaped around buyer intent.", image: onlineImage("product catalog management ecommerce", 405) },
    { type: "Fulfillment", title: "Order operations visibility", body: "Routing, status updates, exceptions, notifications, and admin tools for reliable delivery.", image: onlineImage("warehouse fulfillment ecommerce technology", 406) },
  ],
  integration: [
    { type: "Architecture", title: "Enterprise integration map", body: "Systems, owners, data flows, dependencies, and risk points mapped into a practical connectivity plan.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85" },
    { type: "API", title: "Reusable API layer", body: "Secure endpoints, events, permissions, rate limits, and documentation for dependable system communication.", image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=85" },
    { type: "Data", title: "Interoperability pipeline", body: "Validated data movement across CRM, ERP, commerce, finance, support, and operations platforms.", image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=85" },
    { type: "Workflow", title: "Cross-system automation", body: "Approvals, notifications, handoffs, and exception flows connected across business tools.", image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=85" },
    { type: "Legacy", title: "Legacy-to-modern bridge", body: "Existing platforms extended with modern APIs and staged modernization patterns.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" },
    { type: "Visibility", title: "Operational control view", body: "Shared status, customer, order, service, and finance information made visible across teams.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=85" },
  ],
  product: [
    { type: "Discovery", title: "Product opportunity sprint", body: "User needs, market signals, risk mapping, and launch assumptions clarified before build.", image: onlineImage("product discovery design sprint team", 501) },
    { type: "MVP", title: "Release-ready pilot build", body: "Focused scope, clean architecture, analytics, CI/CD, and integrations from the first release.", image: onlineImage("software product development team laptop", 502) },
    { type: "Platform", title: "Operational web platform", body: "Dashboards, portals, APIs, authentication, CMS workflows, and admin tooling for growth.", image: onlineImage("web application dashboard development", 503) },
    { type: "Experiment", title: "Launch learning system", body: "Activation, retention, feature demand, task success, and support signals feeding the roadmap.", image: onlineImage("startup product analytics planning", 504) },
    { type: "Integration", title: "API ecosystem build", body: "Payments, CRM, ERP, identity, analytics, and custom business services connected safely.", image: onlineImage("api integration software architecture", 505) },
    { type: "Automation", title: "Workflow productization", body: "Manual processes converted into usable tools with permissions, notifications, and audit trails.", image: onlineImage("workflow automation product software", 506) },
  ],
  mobile: [
    { type: "Native", title: "iOS and Android product track", body: "Device-first journeys, clean interface states, and scalable release paths for both platforms.", image: onlineImage("mobile app development smartphone interface", 601) },
    { type: "Field", title: "Offline field reporting app", body: "Local queues, sync recovery, conflict handling, and task capture for low-connectivity work.", image: onlineImage("field worker smartphone app", 602) },
    { type: "Payments", title: "Mobile wallet checkout", body: "M-Pesa, card, wallet, receipt, and status recovery flows built into the app experience.", image: onlineImage("mobile wallet payment phone", 603) },
    { type: "Engagement", title: "Push notification journeys", body: "Preferences, triggers, lifecycle messages, and retention loops that respect the user.", image: onlineImage("smartphone notification app user", 604) },
    { type: "Operations", title: "App release monitoring", body: "Crash reporting, analytics, release tracks, store readiness, and post-launch improvements.", image: onlineImage("mobile app analytics dashboard", 605) },
    { type: "Hybrid", title: "Cross-platform service app", body: "Shared product logic, responsive flows, and maintainable builds across mobile and web.", image: onlineImage("cross platform mobile development", 606) },
  ],
  design: [
    { type: "Research", title: "User friction mapping", body: "Interviews, workflow observation, stakeholder context, and synthesis into clear experience priorities.", image: onlineImage("ux research workshop sticky notes", 701) },
    { type: "Interface", title: "Product UI system", body: "Screens, states, components, tokens, content rules, and interaction patterns ready for engineering.", image: onlineImage("ui design system interface components", 702) },
    { type: "Prototype", title: "Clickable journey test", body: "Navigation, forms, edge states, and language tested before development commits.", image: onlineImage("interactive prototype design testing", 703) },
    { type: "Brand", title: "Product expression kit", body: "Identity, tone, iconography, visual hierarchy, and launch assets for a coherent product feel.", image: onlineImage("brand identity product design studio", 704) },
    { type: "Enterprise UX", title: "Operational dashboard redesign", body: "Dense, scannable tools for repeated use, decisions, and confident task completion.", image: onlineImage("enterprise dashboard ux design", 705) },
    { type: "Mobile UX", title: "Responsive interaction model", body: "Small-screen flows, touch targets, state handling, and accessibility built into the design.", image: onlineImage("mobile ux design prototype", 706) },
  ],
  cloud: [
    { type: "Pipeline", title: "CI/CD release path", body: "Tests, scans, preview environments, approvals, deployments, and rollback playbooks.", image: onlineImage("devops cicd pipeline dashboard", 801) },
    { type: "Cloud", title: "Landing zone architecture", body: "Identity, networking, environments, secrets, backups, and security guardrails for scale.", image: onlineImage("cloud architecture server room", 802) },
    { type: "Observability", title: "Reliability monitoring layer", body: "Logs, metrics, tracing, alerts, SLOs, and incident review loops for production systems.", image: onlineImage("observability monitoring dashboard devops", 803) },
    { type: "Migration", title: "Workload modernization plan", body: "Application assessment, sequencing, risk controls, and staged migration execution.", image: onlineImage("cloud migration technology team", 804) },
    { type: "Security", title: "Platform hardening review", body: "Access controls, secret management, vulnerability review, backup policies, and audit readiness.", image: onlineImage("cybersecurity cloud infrastructure", 805) },
    { type: "Cost", title: "Cloud spend visibility", body: "Usage ownership, right-sizing, budgets, and practical cost controls for growing teams.", image: onlineImage("cloud cost dashboard finance technology", 806) },
  ],
  strategy: [
    { type: "Discovery", title: "Opportunity sizing workshop", body: "Customer value, operational drag, technical readiness, cost, and risk compared clearly.", image: onlineImage("business strategy workshop technology", 901) },
    { type: "Roadmap", title: "Now-next-later planning board", body: "Dependencies, milestones, owners, and proof points arranged into an executable roadmap.", image: onlineImage("product roadmap planning board", 902) },
    { type: "Assessment", title: "Technology stack review", body: "Architecture, integrations, data, security, delivery workflow, and modernization choices assessed.", image: onlineImage("technology assessment architecture meeting", 903) },
    { type: "Business Case", title: "Investment decision model", body: "Value, cost, tradeoffs, adoption needs, and implementation risk made visible for leaders.", image: onlineImage("business case financial model technology", 904) },
    { type: "Execution", title: "Delivery operating rhythm", body: "Governance, sprint planning, stakeholder decisions, and measurable launch checkpoints.", image: onlineImage("agile delivery planning team", 905) },
    { type: "Measurement", title: "Outcome dashboard blueprint", body: "KPIs, leading indicators, feedback loops, and review cadence tied to strategic goals.", image: onlineImage("strategy kpi dashboard meeting", 906) },
  ],
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "generative-ai",
    navLabel: "Generative AI",
    title: "Generative AI Services",
    eyebrow: "AI engineering",
    intro: "Design secure AI assistants, retrieval systems, and workflow copilots that help teams answer, act, and improve faster.",
    heroImage: images.generativeAi,
    overview:
      "We turn generative AI from a demo into a governed business capability: use-case discovery, data preparation, prompt systems, model routing, evaluation, guardrails, and rollout plans that fit real operations.",
    capabilities: [
      { title: "AI agent discovery", body: "Map work queues, policies, data access, escalation rules, and measurable moments where an agent can safely assist." },
      { title: "RAG knowledge systems", body: "Connect documents, databases, and service content into grounded responses with citations and freshness controls." },
      { title: "Prompt and tool design", body: "Build prompts, tool calls, approval flows, and human handoffs around the way teams already work." },
      { title: "Model evaluation", body: "Score quality, latency, cost, and risk with repeatable test suites before production release." },
      { title: "AI governance", body: "Add access control, logging, policy checks, and review dashboards for responsible adoption." },
      { title: "ChatGPT integration", body: "Embed conversational workflows into portals, CRMs, knowledge bases, and internal operating tools." },
    ],
    workTitle: "Our Work in Generative AI",
    work: serviceWork.generativeAi,
    metrics: [
      { value: "45%", label: "Faster response drafting in pilot workflows" },
      { value: "12+", label: "Agent use cases prioritized per discovery sprint" },
      { value: "24/7", label: "Knowledge access with governed escalation paths" },
    ],
    insights: [
      { title: "How to choose the first AI workflow", body: "Start where value, data readiness, and human review are already visible.", image: onlineImage("ai workflow planning team", 111, 1200, 760) },
      { title: "Guardrails that make agents usable", body: "Practical controls for approvals, source grounding, and audit trails.", image: onlineImage("ai security governance technology", 112, 1200, 760) },
      { title: "Measuring AI beyond novelty", body: "Track cycle time, deflection, quality, adoption, and cost per successful task.", image: onlineImage("ai analytics performance dashboard", 113, 1200, 760) },
    ],
    faqs: [
      { question: "What makes an AI service production-ready?", answer: "A production AI service needs clean data access, tested prompts, security boundaries, monitoring, fallback paths, and a clear owner for continuous improvement." },
      { question: "Can you connect AI to our existing systems?", answer: "Yes. We commonly connect AI workflows to CRMs, ERPs, ticketing tools, knowledge bases, databases, APIs, and custom business applications." },
      { question: "How do you reduce hallucinations?", answer: "We combine retrieval, source citations, strict tool schemas, evaluation sets, refusal behavior, and human review for high-impact actions." },
      { question: "Which AI use case should we start with?", answer: "Start with a workflow that has clear value, available knowledge sources, repeatable decisions, and a natural human review point, such as support triage, policy lookup, reporting, or internal knowledge search." },
      { question: "Do you build custom models or use existing ones?", answer: "We choose based on the problem. Many teams get faster value from retrieval, prompt systems, and model routing, while custom fine-tuning or specialist models make sense when the data, volume, and quality needs justify it." },
      { question: "How is AI usage monitored after launch?", answer: "We add logs, feedback capture, quality reviews, cost tracking, escalation reports, and evaluation runs so the AI service can keep improving safely after release." },
    ],
  },
  {
    slug: "transformation",
    navLabel: "Transformation",
    title: "Enterprise Transformation Services",
    eyebrow: "Modern operating models",
    intro: "Turn strategy into shipped change with roadmaps, platforms, teams, and measurable execution rhythms.",
    heroImage: images.transformation,
    overview:
      "Transformation succeeds when business goals, delivery systems, and technology investments move together. We help leaders modernize processes, retire friction, and launch scalable digital foundations.",
    capabilities: [
      { title: "Transformation roadmap", body: "Define target outcomes, investment horizons, operating model changes, and delivery milestones." },
      { title: "ERP-adjacent modernization", body: "Improve workflows around finance, inventory, procurement, and customer operations without risky big-bang change." },
      { title: "Process automation", body: "Automate approvals, notifications, data handoffs, reporting, and exception handling." },
      { title: "Change enablement", body: "Create adoption plans, training assets, governance rituals, and success metrics for teams." },
      { title: "Digital KPI systems", body: "Connect strategic goals to dashboards, scorecards, and executive operating reviews." },
      { title: "Delivery governance", body: "Set portfolio cadence, release planning, risk tracking, and decision forums that keep change moving." },
    ],
    workTitle: "Our Work in Transformation",
    work: serviceWork.transformation,
    metrics: [
      { value: "90", label: "Day transformation launch plans" },
      { value: "30%", label: "Operational waste targeted for reduction" },
      { value: "4", label: "Workstreams aligned from strategy to delivery" },
    ],
    insights: [
      { title: "Modernization without disruption", body: "Stage change around value streams, not system diagrams.", image: onlineImage("modernization roadmap technology team", 211, 1200, 760) },
      { title: "Operating models that stick", body: "Make governance useful by tying it to decisions and delivery signals.", image: onlineImage("operating model workshop business", 212, 1200, 760) },
      { title: "Where automation belongs first", body: "Start with repeatable bottlenecks that create measurable delays.", image: onlineImage("process automation office workflow", 213, 1200, 760) },
    ],
    faqs: [
      { question: "Do transformation projects need a full system replacement?", answer: "Not always. Many wins come from integration, workflow redesign, data visibility, and staged modernization around existing systems." },
      { question: "How do you keep transformation measurable?", answer: "We define outcomes early, connect them to operational KPIs, and review progress through delivery milestones and adoption metrics." },
      { question: "Can you support implementation after strategy?", answer: "Yes. Strategy, design, engineering, data, cloud, and delivery management can stay connected through launch." },
      { question: "How do you avoid disrupting daily operations?", answer: "We sequence change around value streams, pilot risky moves first, protect critical workflows, and use staged releases so teams can adopt improvements without stopping the business." },
      { question: "Who needs to be involved in transformation planning?", answer: "Leadership, operations owners, technology leads, finance, customer-facing teams, and the people doing the work should be represented so the roadmap reflects reality." },
      { question: "What happens after the first roadmap is approved?", answer: "We turn the roadmap into workstreams, owners, delivery cadence, adoption rituals, risk tracking, and measurable release plans." },
    ],
  },
  {
    slug: "analytics",
    navLabel: "Analytics",
    title: "Data Analytics Services",
    eyebrow: "Trusted intelligence",
    intro: "Build analytics foundations that make decisions faster, cleaner, and easier to defend.",
    heroImage: images.analytics,
    overview:
      "We help teams move from scattered reports to governed analytics products: pipelines, warehouses, BigQuery models, dashboards, predictive signals, and operational data activation.",
    capabilities: [
      { title: "Data strategy", body: "Prioritize data products, source systems, governance needs, and decision moments." },
      { title: "BigQuery warehousing", body: "Design datasets, dbt-style models, cost controls, partitioning, and reporting-ready marts." },
      { title: "Business dashboards", body: "Create executive, finance, operations, and customer dashboards that show what to do next." },
      { title: "Data quality checks", body: "Monitor freshness, completeness, anomalies, and metric drift before reports reach leaders." },
      { title: "Predictive analytics", body: "Forecast demand, churn, service load, inventory risk, and revenue opportunities." },
      { title: "Data activation", body: "Send trusted segments and events into marketing, commerce, CRM, and support workflows." },
    ],
    workTitle: "Our Work in Data Analytics",
    work: serviceWork.analytics,
    metrics: [
      { value: "1", label: "Source of truth for leadership reporting" },
      { value: "60%", label: "Less manual spreadsheet preparation" },
      { value: "15+", label: "Core KPIs governed across teams" },
    ],
    insights: [
      { title: "What a useful data mart includes", body: "Good models match how teams make decisions, not just source tables.", image: onlineImage("data mart warehouse analytics", 311, 1200, 760) },
      { title: "Reducing BI noise", body: "Remove duplicate metrics and align definitions before adding more charts.", image: onlineImage("business intelligence dashboard clean", 312, 1200, 760) },
      { title: "Analytics for operations", body: "Push insights into workflows so teams do not hunt for answers.", image: onlineImage("operations analytics team dashboard", 313, 1200, 760) },
    ],
    faqs: [
      { question: "Can you work with BigQuery?", answer: "Yes. We design BigQuery datasets, models, governance patterns, dashboards, and cost-aware query structures." },
      { question: "Do you build dashboards only?", answer: "Dashboards are one layer. We also handle ingestion, modeling, data quality, permissions, analytics engineering, and activation." },
      { question: "How do you handle messy source data?", answer: "We profile sources, define business rules, create transformation models, and add quality checks that make issues visible early." },
      { question: "Can you define our KPIs?", answer: "Yes. We help align business definitions, formulas, ownership, refresh cadence, and dashboard usage so teams trust the same numbers." },
      { question: "Can analytics connect to CRM or commerce tools?", answer: "Yes. Analytics can feed customer segments, alerts, campaign triggers, support views, and commerce personalization when the data foundation is reliable." },
      { question: "How do you control analytics costs?", answer: "We use partitioning, model design, query review, refresh planning, access controls, and usage monitoring to keep warehouse and dashboard costs visible." },
    ],
  },
  {
    slug: "integration-interoperability",
    navLabel: "Integration",
    title: "Integration & Interoperability Services",
    eyebrow: "Connected enterprise systems",
    intro: "Connect applications, data, workflows, and teams so business-critical systems work together without silos.",
    heroImage: images.integration,
    overview:
      "Integration works best when the business can trust the handoffs. We design API layers, middleware, data movement, workflow automation, and visibility patterns that help modern and legacy platforms cooperate safely.",
    capabilities: [
      { title: "Integration strategy", body: "Map systems, owners, data flows, dependencies, risk, and the integration patterns that fit each workflow." },
      { title: "API and middleware design", body: "Build secure, reusable APIs, event flows, orchestration layers, and documentation for reliable connectivity." },
      { title: "Data interoperability", body: "Move and reconcile data across platforms with validation, permissions, lineage, and operational visibility." },
      { title: "Legacy system bridges", body: "Extend older systems with modern interfaces while reducing disruption and replacement risk." },
      { title: "Workflow automation", body: "Connect approvals, notifications, status updates, and exception handling across business tools." },
      { title: "Operational visibility", body: "Unify customer, order, finance, support, and service information so teams can act from shared context." },
    ],
    workTitle: "Our Work in Integration",
    work: serviceWork.integration,
    metrics: [
      { value: "1", label: "Shared view across critical systems" },
      { value: "40%", label: "Manual handoffs targeted for reduction" },
      { value: "24/7", label: "Integration monitoring and recovery visibility" },
    ],
    insights: [
      { title: "Integration before replacement", body: "Many systems become more useful when the right data and workflows connect around them.", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=85" },
      { title: "APIs that teams can rely on", body: "Reusable contracts, permissions, and observability make integrations easier to maintain.", image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=85" },
      { title: "Interoperability creates speed", body: "Teams move faster when customer, order, finance, and service context is visible together.", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=85" },
    ],
    faqs: [
      { question: "Can you connect legacy systems?", answer: "Yes. We can design staged bridges, APIs, middleware, and data flows around existing platforms without forcing a full replacement first." },
      { question: "Do you integrate CRM, ERP, commerce, and finance tools?", answer: "Yes. We commonly connect customer, product, order, invoice, payment, support, and operational data across business systems." },
      { question: "How do you keep integrations secure?", answer: "We use access controls, scoped credentials, validation, audit logs, rate limits, monitoring, and clear ownership for each integration." },
      { question: "Can you automate cross-system workflows?", answer: "Yes. Approvals, notifications, status updates, data syncs, exception handling, and reporting can be automated across connected tools." },
      { question: "What if our data is inconsistent?", answer: "We profile sources, define matching rules, add validation, reconcile differences, and make data quality issues visible before they become operational problems." },
      { question: "Do you support integrations after launch?", answer: "Yes. We can add monitoring, alerting, retry logic, runbooks, incident reviews, and improvement cycles for business-critical integrations." },
    ],
  },
  {
    slug: "commerce",
    navLabel: "Commerce",
    title: "Commerce Acceleration Services",
    eyebrow: "Revenue systems",
    intro: "Launch connected digital commerce experiences with payments, inventory, CRM, analytics, and customer journeys in sync.",
    heroImage: images.commerce,
    overview:
      "Commerce growth depends on more than a storefront. We connect catalogs, checkout, M-Pesa Daraja payments, fulfillment, CRM, reporting, and lifecycle marketing into a system that sells and learns.",
    capabilities: [
      { title: "Digital storefronts", body: "Build fast product, service, and B2B commerce experiences with clear journeys and conversion tracking." },
      { title: "Daraja implementation", body: "Integrate M-Pesa STK Push, C2B, B2C, transaction callbacks, reconciliation, and finance reporting." },
      { title: "Catalog architecture", body: "Structure products, pricing, availability, promotions, and merchandising logic." },
      { title: "CRM and loyalty", body: "Connect customer profiles, lifecycle campaigns, loyalty actions, and support visibility." },
      { title: "Order operations", body: "Design order routing, fulfillment status, notifications, exceptions, and admin tooling." },
      { title: "Commerce analytics", body: "Track conversion, basket size, payment success, repeat purchase, and channel performance." },
    ],
    workTitle: "Our Work in Commerce",
    work: serviceWork.commerce,
    metrics: [
      { value: "99%", label: "Target payment callback traceability" },
      { value: "3x", label: "Faster launch with reusable commerce patterns" },
      { value: "360", label: "Degree customer and order visibility" },
    ],
    insights: [
      { title: "Payment journeys customers trust", body: "Clear status, reconciliation, and recovery paths reduce abandoned payments.", image: onlineImage("mobile checkout payment customer", 411, 1200, 760) },
      { title: "B2B commerce needs operations first", body: "Accounts, approvals, pricing, and fulfillment determine adoption.", image: onlineImage("b2b ecommerce operations warehouse", 412, 1200, 760) },
      { title: "Commerce analytics that matter", body: "Connect acquisition, checkout, payment, fulfillment, and retention.", image: onlineImage("ecommerce analytics dashboard", 413, 1200, 760) },
    ],
    faqs: [
      { question: "Can you implement Daraja?", answer: "Yes. We can implement M-Pesa payment flows, callbacks, validation, reconciliation, admin views, and reporting." },
      { question: "Do you build B2B and B2C commerce?", answer: "Yes. We support customer storefronts, account portals, product catalogs, quote flows, checkout, and order management." },
      { question: "Can commerce integrate with our ERP?", answer: "Yes. We can connect products, pricing, customers, inventory, orders, invoices, and fulfillment events through APIs or middleware." },
      { question: "How do you reduce abandoned checkout?", answer: "We improve payment status clarity, page speed, recovery messaging, trust cues, pricing visibility, and analytics around where customers drop off." },
      { question: "Can you support loyalty and CRM journeys?", answer: "Yes. We can connect customer profiles, order history, loyalty triggers, lifecycle campaigns, and support context into one commerce operating layer." },
      { question: "What admin tools are usually needed?", answer: "Teams often need order search, payment reconciliation, customer timelines, catalog controls, promotion management, fulfillment status, and exception handling." },
    ],
  },
  {
    slug: "product-development",
    navLabel: "Product Development",
    title: "Technology Innovation Services",
    eyebrow: "Product and platform innovation",
    intro: "Use software as the fuel and metal to build ideas, test demand, and scale the products that matter.",
    heroImage: images.innovation,
    overview:
      "We help teams move from idea to usable product: discovery, experience design, MVP engineering, web development, integrations, analytics, cloud foundations, and launch learning loops.",
    capabilities: [
      { title: "Discovery and ideation", body: "Shape market needs, user journeys, product hypotheses, and measurable launch bets." },
      { title: "Product strategy", body: "Prioritize features, architecture, releases, risks, and commercial assumptions." },
      { title: "Web development", body: "Build responsive sites, portals, dashboards, APIs, CMS workflows, and analytics instrumentation." },
      { title: "Minimum viable products", body: "Validate demand with focused prototypes and release-ready MVPs." },
      { title: "Enterprise platforms", body: "Create scalable platforms for operations, customers, partners, and internal teams." },
      { title: "Emerging tech", body: "Explore AI, IoT, automation, cloud-native systems, and data products with practical launch paths." },
      { title: "CI/CD foundations", body: "Automate tests, previews, deployment gates, and release rollback for confident shipping." },
      { title: "API integrations", body: "Connect payments, CRM, ERP, identity, analytics, and custom business services." },
      { title: "Data analytics and AI", body: "Add event tracking, warehouse models, predictive signals, and AI-assisted workflows." },
    ],
    workTitle: "Our Work in Technology Innovations",
    work: serviceWork.product,
    metrics: [
      { value: "16+", label: "Product experiments launched" },
      { value: "210+", label: "Production features delivered" },
      { value: "360+", label: "Team hours reclaimed through automation" },
    ],
    insights: [
      { title: "MVPs that are useful, not throwaway", body: "Validate the riskiest assumption while preserving the path to production.", image: onlineImage("mvp product development prototype", 511, 1200, 760) },
      { title: "Web development as a growth system", body: "Sites perform better when CMS, analytics, speed, and conversion are designed together.", image: onlineImage("web development growth analytics", 512, 1200, 760) },
      { title: "Why CI/CD belongs in MVPs", body: "Fast releases need quality checks from day one, not after scale.", image: onlineImage("software deployment pipeline laptop", 513, 1200, 760) },
    ],
    faqs: [
      { question: "What is digital product development?", answer: "It is the process of researching, designing, building, launching, and improving software products such as web platforms, mobile apps, internal tools, dashboards, and connected services." },
      { question: "Can you build both the prototype and production system?", answer: "Yes. We can start with discovery and prototypes, then continue into architecture, engineering, CI/CD, integrations, and launch support." },
      { question: "What technologies can you use?", answer: "We select tools around the goal, but commonly work with modern web stacks, APIs, cloud platforms, data warehouses, analytics, AI services, and payment integrations." },
      { question: "How do you decide MVP scope?", answer: "We focus on the smallest release that proves the riskiest assumption while still being useful, measurable, and technically sound enough to evolve." },
      { question: "Can you improve an existing product?", answer: "Yes. We can audit UX, performance, architecture, analytics, integrations, release process, and user feedback to define the next practical improvements." },
      { question: "Do you include analytics in product builds?", answer: "Yes. We add event tracking, dashboards, conversion signals, usage metrics, and feedback loops so product decisions are based on real behavior." },
    ],
  },
  {
    slug: "mobile-development",
    navLabel: "Mobile Development",
    title: "Mobile Development Services",
    eyebrow: "Mobile-first experiences",
    intro: "Create mobile apps and responsive workflows that help customers, teams, and field operations move with less friction.",
    heroImage: images.mobile,
    overview:
      "We design and build mobile products for iOS, Android, hybrid apps, internal operations, payments, notifications, and offline-aware field workflows.",
    capabilities: [
      { title: "Mobile app strategy", body: "Define audiences, journeys, device needs, releases, and adoption signals." },
      { title: "iOS and Android apps", body: "Build native or cross-platform experiences with clean UX and scalable architecture." },
      { title: "Mobile payments", body: "Connect wallet, card, M-Pesa, and transaction status flows into mobile experiences." },
      { title: "Offline workflows", body: "Support field data capture, sync, conflict handling, and low-connectivity environments." },
      { title: "Push and engagement", body: "Design notification systems, preferences, and lifecycle engagement journeys." },
      { title: "App operations", body: "Set analytics, crash reporting, release management, and store submission practices." },
    ],
    workTitle: "Our Work in Mobile Development",
    work: serviceWork.mobile,
    metrics: [
      { value: "2", label: "Mobile platforms supported from one roadmap" },
      { value: "30%", label: "Target reduction in field reporting delays" },
      { value: "1", label: "Unified release process across app stores" },
    ],
    insights: [
      { title: "Designing for low connectivity", body: "Field apps need sync strategy as much as screens.", image: onlineImage("field mobile app offline work", 611, 1200, 760) },
      { title: "Mobile payment reliability", body: "Status handling and reconciliation make checkout feel trustworthy.", image: onlineImage("mobile payment phone receipt", 612, 1200, 760) },
      { title: "App analytics for product teams", body: "Track activation, retention, errors, and task completion.", image: onlineImage("mobile app analytics product team", 613, 1200, 760) },
    ],
    faqs: [
      { question: "Do you build native or hybrid apps?", answer: "We can do either. The choice depends on performance, device features, timeline, budget, and long-term maintenance needs." },
      { question: "Can mobile apps connect to existing systems?", answer: "Yes. We integrate mobile apps with APIs, identity, CRM, payments, analytics, ERPs, and custom backends." },
      { question: "Do you handle release support?", answer: "Yes. We can support app store preparation, release notes, analytics, crash monitoring, and post-launch improvements." },
      { question: "Can you build offline mobile workflows?", answer: "Yes. We design local storage, sync queues, conflict handling, retry behavior, and user feedback for field teams working with unreliable connectivity." },
      { question: "Can mobile apps include M-Pesa or wallet payments?", answer: "Yes. We can integrate mobile payments, transaction status, receipts, reconciliation, and recovery flows inside the app experience." },
      { question: "How do you measure mobile app success?", answer: "We track activation, retention, task completion, crashes, payment success, feature usage, and support signals after launch." },
    ],
  },
  {
    slug: "design",
    navLabel: "Design",
    title: "Experience Design Services",
    eyebrow: "Human-centered systems",
    intro: "Design interfaces, journeys, and product systems that make complex work feel clear.",
    heroImage: images.design,
    overview:
      "Great design reduces risk before engineering begins. We combine research, journey mapping, interface design, prototypes, design systems, and usability feedback into practical product direction.",
    capabilities: [
      { title: "User research", body: "Understand users, tasks, context, blockers, and decision moments through focused research." },
      { title: "Journey mapping", body: "Map customer, employee, and operational flows to find friction and opportunity." },
      { title: "UX/UI design", body: "Create polished web, mobile, dashboard, commerce, and enterprise interfaces." },
      { title: "Interactive prototypes", body: "Test flows, concepts, and product assumptions before full build." },
      { title: "Design systems", body: "Build reusable components, patterns, tokens, and documentation for consistent delivery." },
      { title: "Product branding", body: "Shape visual identity, content tone, and product expression for launch." },
    ],
    workTitle: "Our Work in Experience Design",
    work: serviceWork.design,
    metrics: [
      { value: "5", label: "Day design sprint formats available" },
      { value: "40%", label: "Less rework through validated prototypes" },
      { value: "1", label: "Shared product language for teams" },
    ],
    insights: [
      { title: "Design for repeated use", body: "Operational tools need scanning, speed, and confidence more than decoration.", image: onlineImage("enterprise ux dashboard design", 711, 1200, 760) },
      { title: "Prototype before committing", body: "Clickable flows expose risk before engineering cost rises.", image: onlineImage("prototype usability testing design", 712, 1200, 760) },
      { title: "Design systems that ship", body: "Reusable patterns help teams move faster without losing quality.", image: onlineImage("design system components screen", 713, 1200, 760) },
    ],
    faqs: [
      { question: "Can you design before requirements are final?", answer: "Yes. Discovery and prototyping help clarify requirements by making options visible and testable." },
      { question: "Do you create design systems?", answer: "Yes. We can create component libraries, usage guidance, tokens, and implementation-ready specs." },
      { question: "Can design continue into development?", answer: "Yes. Designers can collaborate with engineers through build review, QA, and product iteration." },
      { question: "Do you conduct user research?", answer: "Yes. We can run stakeholder interviews, user interviews, workflow observation, usability reviews, and synthesis sessions to guide design decisions." },
      { question: "What makes enterprise UX different?", answer: "Enterprise tools need clarity, density, speed, permissions, error states, and repeat-use ergonomics more than decorative layouts." },
      { question: "Can you redesign an existing product?", answer: "Yes. We can audit current journeys, identify friction, prototype improvements, and create a practical rollout plan for redesign." },
    ],
  },
  {
    slug: "cloud-devops",
    navLabel: "Cloud & DevOps",
    title: "Cloud & DevOps Services",
    eyebrow: "Reliable delivery",
    intro: "Build cloud foundations, deployment pipelines, and operating practices that keep digital products resilient.",
    heroImage: images.cloud,
    overview:
      "We help teams migrate, modernize, and operate cloud workloads with secure architecture, CI/CD, observability, cost control, backups, and release practices.",
    capabilities: [
      { title: "Cloud strategy", body: "Assess workloads, architecture, cost, security, and migration sequencing." },
      { title: "Landing zones", body: "Set account structures, identity, networking, environments, and guardrails." },
      { title: "CI/CD pipelines", body: "Automate tests, builds, preview deployments, approvals, and production releases." },
      { title: "Observability", body: "Add logging, metrics, tracing, alerts, dashboards, and incident review loops." },
      { title: "Security hardening", body: "Apply access controls, secret management, vulnerability review, and backup policies." },
      { title: "Cost optimization", body: "Track usage, right-size infrastructure, and create spend visibility for owners." },
    ],
    workTitle: "Our Work in Cloud & DevOps",
    work: serviceWork.cloud,
    metrics: [
      { value: "50%", label: "Fewer manual release steps" },
      { value: "99.9%", label: "Reliability targets designed into platform plans" },
      { value: "24h", label: "Incident review loop after critical events" },
    ],
    insights: [
      { title: "CI/CD as risk reduction", body: "Automation makes releases smaller, testable, and easier to recover.", image: onlineImage("cicd devops automation dashboard", 811, 1200, 760) },
      { title: "What cloud migration misses", body: "Operating model, security, and observability decide long-term value.", image: onlineImage("cloud migration infrastructure planning", 812, 1200, 760) },
      { title: "Cost control without slowing teams", body: "Visibility and ownership beat surprise invoices.", image: onlineImage("cloud cost optimization dashboard", 813, 1200, 760) },
    ],
    faqs: [
      { question: "Can you set up CI/CD?", answer: "Yes. We build automated pipelines for tests, builds, previews, approvals, deployment, and rollback." },
      { question: "Do you migrate existing applications?", answer: "Yes. We assess workloads and design staged migration plans that reduce downtime and operational risk." },
      { question: "Can you improve an existing cloud setup?", answer: "Yes. We can review architecture, security, observability, cost, release process, and reliability practices." },
      { question: "Do you add monitoring and alerts?", answer: "Yes. We can implement logs, metrics, traces, dashboards, uptime checks, alert routing, and incident review practices." },
      { question: "How do you manage cloud costs?", answer: "We identify owners, monitor usage, right-size services, review architecture, set budgets, and make spend visible to the teams creating it." },
      { question: "Can you help with security hardening?", answer: "Yes. We can review access controls, secrets, network exposure, dependency risk, backups, audit trails, and deployment permissions." },
    ],
  },
  {
    slug: "strategy",
    navLabel: "Strategy",
    title: "Digital Strategy Services",
    eyebrow: "Direction to execution",
    intro: "Connect business priorities, customer needs, and technology decisions into a roadmap teams can actually deliver.",
    heroImage: images.strategy,
    overview:
      "Digital strategy should make choices clearer. We help leaders decide what to build, why it matters, how to measure it, and how to sequence delivery across people, process, data, and platforms.",
    capabilities: [
      { title: "Opportunity discovery", body: "Identify problems, audiences, value pools, constraints, and investment logic." },
      { title: "Product roadmaps", body: "Prioritize features, platforms, integrations, and release increments." },
      { title: "Technology assessment", body: "Review architecture, systems, data, team capacity, risk, and modernization needs." },
      { title: "Business cases", body: "Estimate value, cost, tradeoffs, dependencies, and adoption requirements." },
      { title: "Execution planning", body: "Translate strategy into owners, milestones, governance, and delivery rituals." },
      { title: "Measurement systems", body: "Define KPIs, decision dashboards, feedback loops, and review cadences." },
    ],
    workTitle: "Our Work in Digital Strategy",
    work: serviceWork.strategy,
    metrics: [
      { value: "4", label: "Weeks to a practical strategic roadmap" },
      { value: "3", label: "Decision horizons: now, next, later" },
      { value: "100%", label: "Initiatives tied to measurable outcomes" },
    ],
    insights: [
      { title: "Roadmaps that survive reality", body: "Good strategy plans for tradeoffs and learning, not just milestones.", image: onlineImage("digital roadmap strategy planning", 911, 1200, 760) },
      { title: "Choosing the right first move", body: "Prioritize where customer value and technical readiness overlap.", image: onlineImage("business priority matrix workshop", 912, 1200, 760) },
      { title: "Making technology investment visible", body: "Connect platform work to cost, speed, risk, and growth.", image: onlineImage("technology investment dashboard meeting", 913, 1200, 760) },
    ],
    faqs: [
      { question: "Do you only advise, or can you implement?", answer: "We can do both. Strategy can move directly into design, engineering, data, cloud, and delivery support." },
      { question: "How long does a strategy engagement take?", answer: "Focused strategy work can produce a practical roadmap in a few weeks, with deeper discovery added when the problem requires it." },
      { question: "Can you review our current technology stack?", answer: "Yes. We assess systems, architecture, integrations, data, security, team workflow, and modernization opportunities." },
      { question: "What do we receive from a strategy engagement?", answer: "Typical outputs include opportunity sizing, roadmap priorities, target outcomes, initiative briefs, ownership model, measurement plan, and execution recommendations." },
      { question: "Can strategy include customer research?", answer: "Yes. Customer interviews, journey analysis, market signals, and product discovery can be included when strategy depends on user behavior." },
      { question: "How do you keep strategy from becoming a document only?", answer: "We connect recommendations to owners, milestones, delivery rituals, KPIs, and first implementation steps so the plan moves into execution." },
    ],
  },
];

export const serviceDetailMap = serviceDetails.reduce<Record<string, ServiceDetail>>((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {});
