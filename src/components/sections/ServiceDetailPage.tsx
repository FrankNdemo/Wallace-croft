"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  Layers3,
  Lightbulb,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { ServiceDetail } from "@/data/serviceDetails";
import animeAi from "@/assets/bright-resources.webp";
import animeAutomation from "@/assets/bright-services.webp";
import animeSystems from "@/assets/bright-strategy.webp";

const icons = [Sparkles, Layers3, Database, Lightbulb, Smartphone, Code2, Cloud, BarChart3, Gauge];

type ExperienceConfig = {
  label: string;
  title: string;
  body: string;
  layout: "lab" | "map" | "dashboard" | "checkout" | "product" | "mobile" | "studio" | "pipeline" | "board";
  visual: "ai" | "transformation" | "analytics" | "commerce" | "product" | "mobile" | "design" | "cloud" | "strategy";
  anime?: string;
  steps: string[];
  topics: Array<{ title: string; body: string }>;
  stats: Array<{ value: string; label: string }>;
  demoTitle: string;
  code: string;
  output: string[];
};

const experienceBySlug: Record<string, ExperienceConfig> = {
  "generative-ai": {
    label: "Live AI pattern",
    title: "Prototype an assistant before it touches production.",
    body: "A useful AI service starts with a small, governed workflow: retrieve the right knowledge, check confidence, draft the action, and leave a clean review trail.",
    layout: "lab",
    visual: "ai",
    anime: animeAi,
    steps: ["Retrieve policy sources", "Score confidence", "Draft response", "Escalate risky cases"],
    topics: [
      { title: "Grounded retrieval", body: "Connect policy files, CRM records, PDFs, and help content so answers cite approved sources instead of guessing." },
      { title: "Evaluation harness", body: "Test model behavior against real tickets, risky prompts, refusal rules, latency targets, and cost limits before launch." },
      { title: "Human approval", body: "Route sensitive actions through reviewers with notes, source trails, and escalation reasons preserved for audit." },
    ],
    stats: [
      { value: "RAG", label: "Grounded answers" },
      { value: "Human", label: "Review loop" },
      { value: "Audit", label: "Every action logged" },
    ],
    demoTitle: "AI triage demo",
    code: `const ticket = await classify(message)
const sources = await retrieve(ticket.topic)

return agent.draft({
  tone: "clear",
  sources,
  escalate: ticket.risk > 0.72,
})`,
    output: ["Ticket classified: billing + policy", "3 approved sources attached", "Draft ready with escalation note"],
  },
  transformation: {
    label: "Transformation map",
    title: "Turn a large change into visible workstreams.",
    body: "We break transformation into operating-model moves, technology changes, adoption rituals, and measurable checkpoints so leaders can see what is moving.",
    layout: "map",
    visual: "transformation",
    anime: animeAutomation,
    steps: ["Baseline current work", "Prioritize value streams", "Sequence releases", "Measure adoption"],
    topics: [
      { title: "Operating model reset", body: "Clarify ownership, decision forums, governance rhythms, and delivery ceremonies so change has a place to live." },
      { title: "Legacy modernization", body: "Sequence integrations, workflow rebuilds, ERP-adjacent improvements, and data cleanup without forcing a risky big-bang rewrite." },
      { title: "Adoption measurement", body: "Track usage, cycle time, training completion, bottlenecks, and leader decisions so transformation is visible week by week." },
    ],
    stats: [
      { value: "90d", label: "Launch plan" },
      { value: "4", label: "Workstreams" },
      { value: "KPI", label: "Outcome cadence" },
    ],
    demoTitle: "Roadmap scoring demo",
    code: `const roadmap = initiatives
  .map(scoreByImpactRisk)
  .sort(byFastestValue)

publish({
  now: roadmap.slice(0, 3),
  next: roadmap.slice(3, 7),
})`,
    output: ["3 quick wins selected", "2 legacy risks isolated", "Adoption review added to release rhythm"],
  },
  analytics: {
    label: "Decision layer",
    title: "Move from dashboards to decisions people trust.",
    body: "Analytics pages get a stronger operating model here: source health, metric definitions, warehouse models, and action-ready views for leaders and teams.",
    layout: "dashboard",
    visual: "analytics",
    steps: ["Ingest source data", "Validate quality", "Model trusted KPIs", "Push alerts to teams"],
    topics: [
      { title: "Metric governance", body: "Define revenue, conversion, churn, fulfillment, and operational KPIs once so teams stop debating spreadsheet versions." },
      { title: "Warehouse modeling", body: "Shape raw system events into marts, semantic layers, and executive views that can survive daily decision pressure." },
      { title: "Operational alerts", body: "Move beyond passive charts by sending anomalies, thresholds, and recommended actions into the workflows teams already use." },
    ],
    stats: [
      { value: "15+", label: "Governed KPIs" },
      { value: "1", label: "Source of truth" },
      { value: "BI", label: "Action views" },
    ],
    demoTitle: "KPI model demo",
    code: `select
  channel,
  sum(revenue) as revenue,
  safe_divide(orders, sessions) as conversion
from commerce_mart
where event_date >= current_date - 30
group by channel`,
    output: ["Revenue model refreshed", "Conversion anomaly detected", "Sales channel alert queued"],
  },
  commerce: {
    label: "Checkout flow",
    title: "Design commerce around payment confidence and recovery.",
    body: "Commerce details include the operational layer behind storefronts: catalog logic, checkout status, M-Pesa callbacks, reconciliation, CRM, and loyalty triggers.",
    layout: "checkout",
    visual: "commerce",
    steps: ["Load catalog", "Create checkout", "Verify callback", "Trigger loyalty"],
    topics: [
      { title: "Payment reliability", body: "Design STK Push, callback validation, receipt status, retry messaging, and reconciliation so customers know exactly what happened." },
      { title: "Catalog intelligence", body: "Organize pricing, availability, bundles, promotions, and merchandising rules around how buyers actually decide." },
      { title: "Retention engine", body: "Connect orders, CRM profiles, loyalty actions, support history, and lifecycle campaigns into one revenue feedback loop." },
    ],
    stats: [
      { value: "99%", label: "Callback trace" },
      { value: "360", label: "Customer view" },
      { value: "CRM", label: "Lifecycle sync" },
    ],
    demoTitle: "Payment status demo",
    code: `const payment = await daraja.stkPush(order)

onCallback(payment.id, async (status) => {
  await reconcile(order, status)
  await notifyCustomer(order.customer)
})`,
    output: ["STK push sent", "Callback validated", "Receipt synced to customer timeline"],
  },
  "product-development": {
    label: "Product lab",
    title: "Take an idea from sketch to a usable release.",
    body: "Product development pages show how discovery, prototypes, architecture, delivery, analytics, and launch learning connect into one practical build system.",
    layout: "product",
    visual: "product",
    anime: animeSystems,
    steps: ["Frame the bet", "Prototype the riskiest flow", "Ship MVP", "Read launch signals"],
    topics: [
      { title: "Product discovery", body: "Clarify users, pain, alternatives, willingness to pay, and launch constraints before engineering effort gets expensive." },
      { title: "MVP architecture", body: "Build the smallest useful release with authentication, analytics, CI/CD, integrations, and room to grow." },
      { title: "Learning loop", body: "Instrument activation, task completion, retention, support issues, and feature demand so the roadmap learns from use." },
    ],
    stats: [
      { value: "MVP", label: "Launchable scope" },
      { value: "CI", label: "Release checks" },
      { value: "UX", label: "Validated flow" },
    ],
    demoTitle: "Experiment demo",
    code: `const experiment = defineMvp({
  user: "operations lead",
  promise: "approve work in 2 minutes",
  metric: "cycle_time",
})`,
    output: ["Primary user locked", "Risky workflow prototyped", "Launch metric attached"],
  },
  "mobile-development": {
    label: "Mobile workflow",
    title: "Design for the device, the field, and the offline moments.",
    body: "Mobile service pages now include device-first flows: push, offline sync, payments, app analytics, release tracks, and support signals.",
    layout: "mobile",
    visual: "mobile",
    steps: ["Capture task", "Cache offline", "Sync safely", "Notify user"],
    topics: [
      { title: "Offline-first workflows", body: "Support field capture, local queues, conflict handling, and sync recovery for teams working through weak connectivity." },
      { title: "Mobile payments", body: "Embed M-Pesa, wallet, card, receipt, and status flows with clear recovery paths when a transaction stalls." },
      { title: "Release operations", body: "Manage app store tracks, crash reporting, push preferences, analytics events, and support signals after launch." },
    ],
    stats: [
      { value: "iOS", label: "Native path" },
      { value: "Android", label: "Native path" },
      { value: "Sync", label: "Offline-first" },
    ],
    demoTitle: "Offline sync demo",
    code: `queue.save(fieldReport)

whenOnline(async () => {
  await api.sync(queue.pending())
  queue.markComplete()
})`,
    output: ["Report saved offline", "Network restored", "2 records synced without conflict"],
  },
  design: {
    label: "Experience studio",
    title: "Make complex work feel obvious before engineering starts.",
    body: "Design detail pages now show the research, flow, prototype, and system decisions that reduce rework and make adoption easier.",
    layout: "studio",
    visual: "design",
    steps: ["Map user friction", "Sketch flow", "Prototype key states", "Create system rules"],
    topics: [
      { title: "Research synthesis", body: "Turn interviews, workflow observation, and stakeholder input into clear design principles and decision-ready journeys." },
      { title: "Prototype testing", body: "Test navigation, forms, edge states, language, and confidence cues before development locks the experience in place." },
      { title: "Design systems", body: "Create components, tokens, interaction states, content rules, and implementation notes for consistent delivery." },
    ],
    stats: [
      { value: "5d", label: "Sprint format" },
      { value: "UI", label: "Clickable flow" },
      { value: "DS", label: "Reusable system" },
    ],
    demoTitle: "Prototype state demo",
    code: `const flow = createPrototype()
  .screen("Start")
  .state("Loading")
  .state("Success")
  .testWith(users)`,
    output: ["3 friction points found", "Primary CTA moved", "Prototype ready for build review"],
  },
  "cloud-devops": {
    label: "Release pipeline",
    title: "Make delivery visible from commit to production.",
    body: "Cloud and DevOps pages highlight the operating system: environments, CI/CD gates, observability, cost controls, backups, and incident loops.",
    layout: "pipeline",
    visual: "cloud",
    steps: ["Build artifact", "Run checks", "Deploy preview", "Promote safely"],
    topics: [
      { title: "Cloud foundation", body: "Plan environments, identity, networking, secrets, backups, and security boundaries before workloads expand." },
      { title: "Release automation", body: "Use tests, previews, scans, approvals, rollbacks, and deployment gates to make shipping calmer and repeatable." },
      { title: "Observability and cost", body: "Track logs, traces, SLOs, alerts, usage, and spend ownership so teams see reliability and cost in one rhythm." },
    ],
    stats: [
      { value: "CI/CD", label: "Release path" },
      { value: "SLO", label: "Reliability target" },
      { value: "Cost", label: "Usage owner" },
    ],
    demoTitle: "Pipeline demo",
    code: `pipeline
  .test()
  .scanSecrets()
  .deployPreview()
  .promote({ when: checks.pass })`,
    output: ["Tests passed", "Preview deployed", "Production gate waiting for approval"],
  },
  strategy: {
    label: "Strategy board",
    title: "Choose the next move with evidence, not guesswork.",
    body: "Strategy pages now focus on decisions: opportunity sizing, tradeoffs, roadmaps, ownership, and measurement systems that keep execution honest.",
    layout: "board",
    visual: "strategy",
    steps: ["Size opportunity", "Compare tradeoffs", "Pick first move", "Assign measures"],
    topics: [
      { title: "Opportunity sizing", body: "Quantify customer value, operational drag, technical readiness, cost, and risk so priorities become easier to defend." },
      { title: "Roadmap logic", body: "Separate now, next, and later decisions while keeping dependencies, owners, milestones, and proof points visible." },
      { title: "Execution bridge", body: "Translate strategy into sprintable work, measurement dashboards, governance rituals, and launch checkpoints." },
    ],
    stats: [
      { value: "Now", label: "Priority lane" },
      { value: "Next", label: "Build lane" },
      { value: "Later", label: "Option lane" },
    ],
    demoTitle: "Prioritization demo",
    code: `const firstMove = options
  .filter(hasOwner)
  .sort(byValueConfidenceEffort)[0]

assign(firstMove, "next sprint")`,
    output: ["Highest-confidence move selected", "Owner assigned", "Measurement plan created"],
  },
};

const overviewBySlug: Record<string, { headline: string; points: string[] }> = {
  "generative-ai": {
    headline:
      "We design AI services around the work they must perform: ChatGPT-style assistants, knowledge-base search, RAG over PDFs and policies, model behavior, tool permissions, human review, and measurable quality. The goal is a reliable workflow that can answer, recommend, draft, escalate, and improve with evidence.",
    points: [
      "Use-case selection, RAG architecture, prompt systems, OpenAI or model routing, vector search, and tool-call design.",
      "Evaluation suites for accuracy, refusal behavior, risk, latency, and cost before launch.",
      "Governance layers for access control, source grounding, audit logs, and review loops.",
    ],
  },
  transformation: {
    headline:
      "Transformation work is organized into clear workstreams: operating model, process redesign, platform modernization, automation, adoption, and measurement. We help teams move from broad ambition to visible releases without disrupting core operations.",
    points: [
      "Roadmaps that connect business outcomes to owners, milestones, dependencies, and KPIs.",
      "Modernization around existing systems through integrations, workflow rebuilds, and staged change.",
      "Adoption planning with training, governance rituals, feedback loops, and executive visibility.",
    ],
  },
  analytics: {
    headline:
      "Analytics becomes useful when data is modeled around decisions, not just charts. We help teams move from scattered Excel files and disconnected reports into trusted Power BI dashboards, BigQuery models, governed KPI definitions, and operational alerts that people can actually use.",
    points: [
      "Excel cleanup, report consolidation, source profiling, ingestion, transformation models, metric governance, and quality checks.",
      "Power BI dashboards, executive scorecards, operational alerts, predictive signals, and self-serve reporting layers.",
      "BigQuery warehouses, CRM data sync, commerce analytics, marketing segments, support insights, and workflow activation.",
    ],
  },
  commerce: {
    headline:
      "Commerce is treated as a connected revenue system: storefront, catalog, checkout, M-Pesa/Daraja, payment status, reconciliation, CRM, fulfillment, and retention. We focus on customer trust and operational visibility from first click to repeat purchase.",
    points: [
      "Shopify-style storefronts, custom B2B portals, product catalogs, pricing logic, promotions, and checkout UX.",
      "Daraja/M-Pesa flows, callbacks, receipts, reconciliation, and payment recovery states.",
      "Order operations, CRM sync, loyalty triggers, lifecycle campaigns, and commerce analytics.",
    ],
  },
  "product-development": {
    headline:
      "Product development connects discovery, design, engineering, integrations, analytics, and launch learning. We help teams test the riskiest assumption quickly while still building on foundations that can become a real product.",
    points: [
      "Product discovery, MVP scope, architecture, UI flows, APIs, and release planning.",
      "Web platforms, portals, dashboards, automation tools, payment flows, and data features.",
      "CI/CD, analytics instrumentation, launch metrics, feedback loops, and iteration planning.",
    ],
  },
  "mobile-development": {
    headline:
      "Mobile work is designed around device behavior, field conditions, payments, notifications, and release operations. We build experiences that remain clear when connectivity is weak, tasks are urgent, or payment status needs trust.",
    points: [
      "Native or cross-platform apps with user journeys, architecture, APIs, and secure identity.",
      "Offline queues, sync handling, push notifications, mobile payments, and device-specific UX.",
      "App analytics, crash monitoring, release tracks, store support, and post-launch iteration.",
    ],
  },
  design: {
    headline:
      "Design reduces delivery risk by making user needs, flows, states, and system rules visible before build. We combine research, UX, UI, Figma prototypes, product branding, and design systems so teams can ship clearer products with less rework.",
    points: [
      "Research synthesis, journey mapping, workflow analysis, and usability testing.",
      "Interface design for web, mobile, dashboards, commerce, enterprise tools, and portals.",
      "Figma design systems with components, tokens, states, content rules, and engineering-ready specs.",
    ],
  },
  "cloud-devops": {
    headline:
      "Cloud and DevOps work is focused on reliable delivery: AWS, Azure, Google Cloud, Vercel, environments, CI/CD pipelines, observability, security, cost, and incident response. We make releases easier to see, test, approve, recover, and improve.",
    points: [
      "Cloud assessment, landing zones, migration plans, networking, identity, and environment setup.",
      "GitHub Actions-style CI/CD pipelines, previews, automated checks, deployment gates, rollback, and release governance.",
      "Logs, metrics, traces, alerts, SLOs, cost controls, backups, and security hardening.",
    ],
  },
  strategy: {
    headline:
      "Digital strategy turns scattered ideas into choices teams can execute. We clarify opportunity, customer value, technology readiness, investment logic, roadmaps, ownership, and measurement so the next move is defensible.",
    points: [
      "Opportunity sizing, product strategy, technology assessment, and business case development.",
      "Now-next-later roadmaps with dependencies, owners, milestones, risks, and delivery pathways.",
      "Measurement systems, governance cadence, launch checkpoints, and implementation planning.",
    ],
  },
};

const overviewVisualBySlug: Record<
  string,
  {
    label: string;
    title: string;
    image: string;
    stats: Array<{ value: string; label: string }>;
  }
> = {
  "generative-ai": {
    label: "AI command view",
    title: "RAG quality, source confidence, and review status in one operating panel.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "RAG", label: "Grounded answers" },
      { value: "Eval", label: "Prompt scoring" },
      { value: "Audit", label: "Logged actions" },
    ],
  },
  transformation: {
    label: "Roadmap cockpit",
    title: "A practical transformation board for workstreams, adoption, risks, and milestones.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "90d", label: "Launch horizon" },
      { value: "4", label: "Workstreams" },
      { value: "KPI", label: "Review cadence" },
    ],
  },
  analytics: {
    label: "Power BI style view",
    title: "Excel sources, Power BI dashboards, BigQuery models, and KPI alerts connected.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "Excel", label: "Source cleanup" },
      { value: "Power BI", label: "Dashboards" },
      { value: "BigQuery", label: "Warehouse" },
    ],
  },
  commerce: {
    label: "Commerce control",
    title: "Checkout, Daraja/M-Pesa status, order recovery, and CRM lifecycle visibility.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "STK", label: "Payment flow" },
      { value: "CRM", label: "Customer sync" },
      { value: "360", label: "Order view" },
    ],
  },
  "product-development": {
    label: "Product lab",
    title: "MVP scope, user signals, release health, and product analytics mapped together.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "MVP", label: "Scope" },
      { value: "CI/CD", label: "Release path" },
      { value: "UX", label: "Validated flow" },
    ],
  },
  "mobile-development": {
    label: "Mobile ops",
    title: "Offline sync, payment status, app analytics, crash signals, and release tracks.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "iOS", label: "App track" },
      { value: "Android", label: "App track" },
      { value: "Sync", label: "Offline queue" },
    ],
  },
  design: {
    label: "Design board",
    title: "Research notes, Figma components, prototype states, and system rules together.",
    image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "Figma", label: "Prototype" },
      { value: "UX", label: "User flow" },
      { value: "DS", label: "Design system" },
    ],
  },
  "cloud-devops": {
    label: "Delivery console",
    title: "CI/CD, cloud health, logs, incidents, security, and cost control in one view.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "CI/CD", label: "Pipeline" },
      { value: "SLO", label: "Reliability" },
      { value: "Cost", label: "Spend owner" },
    ],
  },
  strategy: {
    label: "Strategy board",
    title: "Opportunity sizing, roadmap tradeoffs, business case, and execution measures.",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1400",
    stats: [
      { value: "Now", label: "Priority" },
      { value: "Next", label: "Roadmap" },
      { value: "ROI", label: "Business case" },
    ],
  },
};

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceExperience service={service} />
      <ServiceCapabilities service={service} />
      <ServiceWork service={service} />
      <ServiceInnovationBand service={service} />
      <ServiceInsights service={service} />
      <ServiceFaq service={service} />
    </>
  );
}

function ServiceExperience({ service }: { service: ServiceDetail }) {
  const experience = experienceBySlug[service.slug] ?? experienceBySlug.strategy;
  const [activeStep, setActiveStep] = useState(0);
  const [ranDemo, setRanDemo] = useState(false);

  useEffect(() => {
    setActiveStep(0);
    setRanDemo(false);
  }, [service.slug]);

  useEffect(() => {
    if (!ranDemo) return;

    const interval = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % experience.steps.length);
    }, 1100);

    return () => window.clearInterval(interval);
  }, [experience.steps.length, ranDemo]);

  const runDemo = () => {
    setRanDemo(true);
    setActiveStep(0);
  };

  const output = ranDemo ? experience.output : ["Ready. Click Run Demo to simulate the workflow."];

  if (experience.layout === "map") {
    return (
      <section className="service-showcase service-showcase--timeline">
        <div className="container-pro service-showcase__timeline">
          <ServiceShowcaseIntro experience={experience} />
          <div className="service-timeline">
            {experience.steps.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>{experience.output[index % experience.output.length]}</p>
              </article>
            ))}
          </div>
          <ServiceImagePanel service={service} index={1} />
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "dashboard") {
    return (
      <section className="service-showcase service-showcase--dashboard">
        <div className="container-pro service-dashboard-layout">
          <ServiceShowcaseIntro experience={experience} />
          <div className="service-dashboard-board">
            {experience.stats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
            <div className="service-dashboard-board__chart" />
          </div>
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "checkout") {
    return (
      <section className="service-showcase service-showcase--commerce">
        <div className="container-pro service-commerce-layout">
          <ServiceImagePanel service={service} index={0} />
          <div className="service-receipt">
            <ServiceShowcaseIntro experience={experience} />
            {experience.steps.map((step, index) => (
              <p key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </p>
            ))}
          </div>
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "mobile") {
    return (
      <section className="service-showcase service-showcase--mobile-app">
        <div className="container-pro service-mobile-layout">
          <div className="service-phone-frame">
            <img src={service.work[0]?.image} alt={service.work[0]?.title} loading="lazy" />
            <div>
              <strong>{experience.steps[activeStep]}</strong>
              <small>{experience.output[activeStep % experience.output.length]}</small>
            </div>
          </div>
          <ServiceShowcaseIntro experience={experience} />
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "studio") {
    return (
      <section className="service-showcase service-showcase--studio">
        <div className="container-pro service-studio-layout">
          <ServiceShowcaseIntro experience={experience} />
          <div className="service-moodboard">
            {service.work.slice(0, 4).map((item, index) => (
              <figure key={item.title} className={`service-moodboard__item service-moodboard__item--${index + 1}`}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <figcaption>{item.type}</figcaption>
              </figure>
            ))}
          </div>
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "pipeline") {
    return (
      <section className="service-showcase service-showcase--pipeline">
        <div className="container-pro service-pipeline-layout">
          <ServiceShowcaseIntro experience={experience} />
          <div className="service-pipeline-lanes">
            {experience.steps.map((step, index) => (
              <article key={step}>
                <span>{step}</span>
                <b>{experience.output[index % experience.output.length]}</b>
              </article>
            ))}
          </div>
          <ServiceTopicRail experience={experience} />
        </div>
      </section>
    );
  }

  if (experience.layout === "board") {
    return (
      <section className="service-showcase service-showcase--strategy-board">
        <div className="container-pro service-board-layout">
          <ServiceShowcaseIntro experience={experience} />
          {experience.topics.map((topic, index) => (
            <article key={topic.title}>
              <span>{experience.stats[index]?.value}</span>
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={`service-showcase service-showcase--${experience.layout}`}>
      <div className="container-pro service-lab-layout">
        <ServiceShowcaseIntro experience={experience} />
        <ServiceImagePanel service={service} index={0} />
        <ServiceTopicRail experience={experience} />
        <div className="service-demo service-demo--light">
          <div className="service-demo__header">
            <div>
              <span>Executable pattern</span>
              <h3>{experience.demoTitle}</h3>
            </div>
            <button type="button" onClick={runDemo}>
              {ranDemo ? "Restart Demo" : "Run Demo"} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="service-simulator">
            <div className="service-simulator__flow" aria-label={`${service.navLabel} animated workflow`}>
              {experience.steps.map((step, index) => (
                <button
                  key={step}
                  type="button"
                  className={index === activeStep ? "is-active" : index < activeStep ? "is-complete" : undefined}
                  onClick={() => {
                    setRanDemo(true);
                    setActiveStep(index);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </button>
              ))}
            </div>
            <div className="service-simulator__stage">
              <div className="service-simulator__pulse" aria-hidden="true">
                <i />
                <b />
                <em />
              </div>
              <article key={activeStep} className="service-simulator__card">
                <span>{ranDemo ? "Running now" : "Ready state"}</span>
                <h4>{experience.steps[activeStep]}</h4>
                <p>{ranDemo ? experience.output[activeStep % experience.output.length] : output[0]}</p>
              </article>
              <div className="service-simulator__log" aria-live="polite">
                {(ranDemo ? experience.output : output).map((line, index) => (
                  <p key={line} className={ranDemo && index === activeStep % experience.output.length ? "is-active" : undefined}>
                    <span />
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <pre>
              <code>{experience.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceShowcaseIntro({ experience }: { experience: ExperienceConfig }) {
  return (
    <div className="service-showcase__intro">
      <span>{experience.label}</span>
      <h2>{experience.title}</h2>
      <p>{experience.body}</p>
    </div>
  );
}

function ServiceTopicRail({ experience }: { experience: ExperienceConfig }) {
  return (
    <div className="service-topic-rail">
      {experience.topics.map((topic, index) => (
        <article key={topic.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{topic.title}</h3>
          <p>{topic.body}</p>
        </article>
      ))}
    </div>
  );
}

function ServiceImagePanel({ service, index }: { service: ServiceDetail; index: number }) {
  const item = service.work[index % service.work.length];

  return (
    <figure className="service-image-panel">
      <img src={item.image} alt={item.title} loading="lazy" width={1200} height={780} />
      <figcaption>
        <span>{item.type}</span>
        <strong>{item.title}</strong>
      </figcaption>
    </figure>
  );
}

function ServiceExperienceVisual({
  experience,
  activeStep,
}: {
  experience: ExperienceConfig;
  activeStep: number;
}) {
  return (
    <div className="service-experience-visual" aria-hidden="true">
      {experience.anime ? <img src={experience.anime} alt="" loading="lazy" /> : null}
      <div className="service-experience-visual__orb">
        <i />
        <b />
        <em />
      </div>
      <div className="service-experience-visual__nodes">
        {experience.steps.map((step, index) => (
          <span key={step} className={activeStep === index ? "is-active" : undefined}>
            {index + 1}
          </span>
        ))}
      </div>
      <div className="service-experience-visual__screen">
        <strong>{experience.steps[activeStep]}</strong>
        <small>{experience.output[activeStep % experience.output.length]}</small>
      </div>
    </div>
  );
}

function ServiceHero({ service }: { service: ServiceDetail }) {
  return (
    <section className="service-detail-hero">
      <div className="service-detail-hero__bg" aria-hidden="true">
        <img src={service.heroImage} alt="" />
      </div>
      <div className="container-pro service-detail-hero__inner">
        <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link to="/services">Services</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span>{service.navLabel}</span>
        </nav>
        <div className="service-detail-hero__content">
          <p>{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <span>{service.intro}</span>
        </div>
      </div>
    </section>
  );
}

function ServiceOverview({ service }: { service: ServiceDetail }) {
  const overview = overviewBySlug[service.slug] ?? overviewBySlug.strategy;
  const visual = overviewVisualBySlug[service.slug] ?? overviewVisualBySlug.strategy;

  return (
    <section className="service-detail-overview">
      <div className="container-pro service-detail-overview__grid">
        <div className="service-detail-overview__heading">
          <span>Overview</span>
          <h2>{service.overview}</h2>
        </div>
        <div className="service-detail-overview__detail">
          <p>{overview.headline}</p>
          <ul>
            {overview.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <figure className={`service-overview-visual service-overview-visual--${service.slug}`}>
          <img src={visual.image} alt={visual.title} loading="lazy" width={1200} height={780} />
          <figcaption>
            <span>{visual.label}</span>
            <strong>{visual.title}</strong>
            <div>
              {visual.stats.map((stat) => (
                <small key={stat.label}>
                  <b>{stat.value}</b>
                  {stat.label}
                </small>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function ServiceCapabilities({ service }: { service: ServiceDetail }) {
  return (
    <section className="service-capabilities">
      <div className="container-pro">
        <h2>Our Capabilities</h2>
        <div className="service-capabilities__grid">
          {service.capabilities.map((capability, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article key={capability.title} className="service-capability-card">
                <Icon className="h-6 w-6" />
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceWork({ service }: { service: ServiceDetail }) {
  const [index, setIndex] = useState(0);
  const total = service.work.length;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIndex((value) => (value + 1) % total);
    }, 4200);

    return () => window.clearTimeout(timeout);
  }, [index, total]);

  const visibleWork = useMemo(() => {
    return [0, 1, 2].map((offset) => service.work[(index + offset) % total]);
  }, [index, service.work, total]);

  const next = () => setIndex((value) => (value + 1) % total);
  const previous = () => setIndex((value) => (value - 1 + total) % total);

  return (
    <section className="service-work">
      <div className="container-pro">
        <div className="service-work__heading">
          <h2>{service.workTitle}</h2>
          <div>
            <button type="button" onClick={previous} aria-label="Previous work">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={next} aria-label="Next work">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="service-work__viewport" aria-live="polite">
          <div className="service-work__track" key={index}>
            {visibleWork.map((item) => (
              <article key={`${index}-${item.title}`} className="service-work-card">
                <img src={item.image} alt={item.title} loading="lazy" width={1200} height={780} />
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceInnovationBand({ service }: { service: ServiceDetail }) {
  return (
    <section className="service-innovation-band">
      <div className="container-pro">
        <div className="service-innovation-band__panel">
          <div>
            <h2>Fueling Innovation</h2>
            <div className="service-innovation-band__pillars">
              <article>
                <span />
                <h3>Rapid Labs</h3>
                <p>Prototype high-value workflows, integrations, and AI ideas before large-scale investment.</p>
              </article>
              <article>
                <span />
                <h3>Rapid Ventures</h3>
                <p>Shape product bets, launch MVPs, and scale the systems that prove commercial traction.</p>
              </article>
            </div>
          </div>
          <div className="service-innovation-band__metrics">
            {service.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <small>{metric.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceInsights({ service }: { service: ServiceDetail }) {
  const articleSlug = `${service.slug}-services-insight`;

  return (
    <section className="service-detail-insights">
      <div className="container-pro">
        <div className="service-detail-insights__heading">
          <h2>Insights</h2>
          <Link to="/blog">
            View All Blogs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="service-detail-insights__grid">
          {service.insights.map((insight) => (
            <Link to="/blog/$slug" params={{ slug: articleSlug }} key={insight.title}>
              <img src={insight.image} alt={insight.title} loading="lazy" width={1200} height={760} />
              <h3>{insight.title}</h3>
              <p>{insight.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFaq({ service }: { service: ServiceDetail }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="service-faq">
      <div className="container-pro">
        <span>Frequently asked questions</span>
        <h2>Got questions? We've got answers.</h2>
        <div className="service-faq__list">
          {service.faqs.map((faq, index) => (
            <article key={faq.question} className={open === index ? "is-open" : undefined}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <b>{open === index ? "-" : "+"}</b>
              </button>
              {open === index ? <p>{faq.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
