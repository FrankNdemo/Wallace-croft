import { blogPosts } from "@/data/blog";

export type InsightArticle = {
  slug: "latest-insights" | "featured-thinking" | "design-insights";
  eyebrow: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  summary: string;
  inside: string[];
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
    diagram?: "flow" | "forecast" | "systems" | "journey";
    image?: {
      src: string;
      alt: string;
      caption: string;
    };
  }>;
};

export const insightArticles: Record<InsightArticle["slug"], InsightArticle> = {
  "latest-insights": {
    slug: "latest-insights",
    eyebrow: "Transformation - Analytics - 10 min read - May 2026",
    title: "What Leaders Should Know About Transformation Intelligence",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=85",
    heroAlt: "Technology leaders reviewing transformation dashboards in a modern office",
    summary:
      "Transformation intelligence gives leaders a clearer way to connect customer signals, operating data, and delivery priorities into decisions teams can act on.",
    inside: [
      "Customer and operational context in one view",
      "How the data-to-action flow works",
      "Core capabilities that make insight practical",
      "Turning intelligence into strategic clarity",
      "Why businesses need transformation intelligence now",
      "Technologies that power the model",
      "Preparing data without slowing the business",
      "What to prioritize first",
    ],
    sections: [
      {
        heading: "Customer and operational context in one view",
        body: [
          "Every click, workflow, order, ticket, and conversation tells part of the business story. The challenge is turning those signals into a shared view leaders can trust.",
          "Transformation intelligence brings those signals together so strategy, engineering, and operations teams can see the same reality and move with less friction.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
          alt: "Analytics dashboard showing business performance charts",
          caption: "Clear intelligence starts with visible signals that leaders and delivery teams can interpret together.",
        },
      },
      {
        heading: "How the data-to-action flow works",
        body: [
          "The strongest programs start with focused data collection, clean integration, and practical analysis. The goal is not more dashboards. The goal is better decisions.",
          "Teams need a rhythm for turning insight into backlog priorities, measurable experiments, and operational improvements.",
        ],
        bullets: [
          "Collect signals from customer, sales, support, and delivery systems",
          "Unify the data around clear business outcomes",
          "Translate patterns into product, process, and service changes",
        ],
        diagram: "flow",
      },
      {
        heading: "Core capabilities that make insight practical",
        body: [
          "Useful intelligence systems help teams segment customers, forecast demand, spot risks, and see where delivery slows down. They also keep insight close to the teams responsible for action.",
          "For Wallace Croft clients, the most valuable capability is clarity: knowing which problems deserve investment and which changes will create lasting impact.",
        ],
        image: {
          src: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Operations team reviewing business workflow data",
          caption: "Insight becomes practical when it is connected to the teams responsible for action.",
        },
      },
      {
        heading: "Turning intelligence into strategic clarity",
        body: [
          "The work does not end when a report is produced. Leaders need operating cadences, product roadmaps, and delivery teams that can absorb new information quickly.",
          "Wallace Croft pairs strategy with engineering execution so insight becomes shipped software, better workflows, and measurable business outcomes.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
          alt: "Strategy workshop with notes and planning boards",
          caption: "Strong operating cadences help teams convert evidence into decisions and shipped improvements.",
        },
      },
      {
        heading: "Why businesses need transformation intelligence now",
        body: [
          "Markets are moving faster than annual planning cycles. Customer expectations shift, operational costs rise, and teams need evidence they can act on before opportunities disappear.",
          "Transformation intelligence helps leaders see where revenue is leaking, where workflows are slowing people down, and where technology can create a measurable advantage.",
        ],
        bullets: [
          "Find customer and operational friction earlier",
          "Make investment decisions with clearer evidence",
          "Connect leadership priorities to delivery team action",
        ],
        image: {
          src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Leadership team reviewing digital transformation priorities",
          caption: "Faster markets reward teams that can see friction early and act before momentum is lost.",
        },
      },
      {
        heading: "Technologies that power the model",
        body: [
          "The foundation is usually a mix of customer data platforms, cloud data warehouses, integration layers, analytics tools, AI-assisted pattern detection, and product telemetry.",
          "The important part is not the tool stack alone. It is the way those tools are arranged around business questions, user journeys, and measurable outcomes.",
        ],
        diagram: "systems",
      },
      {
        heading: "Preparing data without slowing the business",
        body: [
          "Teams do not need perfect data before they begin. They need a practical view of the most important systems, the most valuable decisions, and the quality gaps that could distort those decisions.",
          "A strong readiness process identifies the data you have, the data you trust, the data you need next, and the owners who can keep it useful over time.",
        ],
        image: {
          src: "https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Data team reviewing charts across multiple screens",
          caption: "Data readiness should reveal what is useful now and what must improve next.",
        },
      },
      {
        heading: "What to prioritize first",
        body: [
          "Start with high-value use cases where better insight can change behavior quickly. Good candidates include customer retention, sales conversion, service response, inventory planning, delivery reliability, and executive reporting.",
          "The first project should prove the model, create momentum, and show teams that intelligence is not an abstract analytics exercise. It is a way to make better work visible.",
        ],
        bullets: [
          "Choose one measurable business outcome",
          "Map the data and workflow needed to improve it",
          "Build a small release that leaders and frontline teams can both use",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85",
          alt: "Team prioritizing product work on a collaborative board",
          caption: "The first intelligence release should be narrow enough to ship and useful enough to change behavior.",
        },
      },
    ],
  },
  "featured-thinking": {
    slug: "featured-thinking",
    eyebrow: "Featured Thinking - Strategy - 8 min read - May 2026",
    title: "Driving Business Transformation Through Technology",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85",
    heroAlt: "Business team discussing technology strategy around a laptop",
    summary:
      "Business transformation succeeds when strategy, systems, data, and adoption move together. Technology is the lever, but operating discipline creates the value.",
    inside: [
      "Transformation is an operating model",
      "Technology should remove friction",
      "Prioritize the changes that compound",
      "Measure adoption, not just launch",
      "Advisory and engineering need to move together",
      "Managed services protect momentum after launch",
      "Integration unlocks the full operating picture",
      "How to measure lasting value",
    ],
    sections: [
      {
        heading: "Transformation is an operating model",
        body: [
          "Modernization is not a one-time platform change. It is a way of deciding, building, measuring, and improving the systems that run the business.",
          "The best transformation work starts with business outcomes, then aligns architecture, data, delivery, and adoption around those outcomes.",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85",
          alt: "Executive technology planning session with laptops and notes",
          caption: "Transformation works best when business outcomes shape the operating model from the start.",
        },
      },
      {
        heading: "Technology should remove friction",
        body: [
          "The right platforms reduce manual work, improve visibility, and help teams serve customers with more speed and consistency.",
          "Wallace Croft focuses on systems that are robust, scalable, and built for growth, with practical pathways from strategy to implementation.",
        ],
        diagram: "forecast",
      },
      {
        heading: "Prioritize the changes that compound",
        body: [
          "Not every improvement deserves equal weight. Leaders should prioritize work that improves customer experience, reduces operational drag, or unlocks faster decision-making.",
          "That usually means starting with the workflows where revenue, cost, and customer trust meet.",
        ],
        bullets: [
          "Simplify critical customer journeys",
          "Connect fragmented systems and data",
          "Automate repeatable work with measurable controls",
        ],
        image: {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Business team selecting priorities during a planning meeting",
          caption: "Compounding change starts where customer trust, revenue, and operational effort meet.",
        },
      },
      {
        heading: "Measure adoption, not just launch",
        body: [
          "A system is only successful when teams use it and customers feel the difference. Adoption, speed, reliability, and business impact should stay visible after launch.",
          "This is how transformation keeps moving after the first release and becomes a durable advantage.",
        ],
        image: {
          src: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Team reviewing adoption results and user feedback",
          caption: "Launch is a milestone; adoption and behavior change are the proof.",
        },
      },
      {
        heading: "Advisory and engineering need to move together",
        body: [
          "Strategy loses power when it is disconnected from delivery. Engineering loses direction when it is disconnected from business outcomes. Transformation needs both disciplines in the same conversation.",
          "Wallace Croft works across advisory, architecture, product delivery, and operations so each decision has a path from boardroom intent to working system.",
        ],
        bullets: [
          "Define outcomes before platforms",
          "Shape roadmaps around value and risk",
          "Keep architecture decisions close to delivery reality",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=1600&q=85",
          alt: "Engineering and strategy team collaborating around a product plan",
          caption: "Advisory and engineering create more value when priorities and delivery constraints stay visible together.",
        },
      },
      {
        heading: "Managed services protect momentum after launch",
        body: [
          "A successful launch is not the finish line. Teams still need performance monitoring, user support, security practices, release management, and steady improvement.",
          "Managed services keep the transformation alive by making sure systems remain reliable, measurable, and ready for the next phase of growth.",
        ],
        image: {
          src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
          alt: "Technical operations team monitoring systems after launch",
          caption: "Post-launch operations protect the value created by the first release.",
        },
      },
      {
        heading: "Integration unlocks the full operating picture",
        body: [
          "Many organizations already have useful systems, but the value is trapped between disconnected tools, duplicated data, and manual handoffs.",
          "Integration and interoperability connect applications, workflows, and data so teams can work from one version of reality.",
        ],
        diagram: "systems",
      },
      {
        heading: "How to measure lasting value",
        body: [
          "Leaders should measure transformation through business performance, customer experience, employee adoption, system reliability, delivery speed, and the organization's ability to keep changing.",
          "The strongest scorecards show both near-term delivery progress and long-term capability growth.",
        ],
        bullets: [
          "Revenue growth or cost reduction tied to the initiative",
          "Cycle-time improvements in critical workflows",
          "Adoption, satisfaction, reliability, and support trends",
        ],
        image: {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
          alt: "Business dashboard with performance charts on a laptop",
          caption: "Lasting value needs a scorecard that captures business performance and operating capability.",
        },
      },
    ],
  },
  "design-insights": {
    slug: "design-insights",
    eyebrow: "Design - Product Strategy - 9 min read - May 2026",
    title: "Designing Digital Products That Create Lasting Value",
    heroImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1800&q=85",
    heroAlt: "Design team reviewing product interface concepts",
    summary:
      "Design insight helps teams turn complex services into clear, useful digital experiences that people can understand, trust, and adopt.",
    inside: [
      "Design is more than interface polish",
      "Simplify the moments that matter",
      "Design systems create repeatable quality",
      "How design supports business transformation",
      "Research turns opinion into evidence",
      "Prototypes reduce delivery risk",
      "Accessible design creates broader trust",
      "Scaling design across teams",
    ],
    sections: [
      {
        heading: "Design is more than interface polish",
        body: [
          "Strong digital products make complex work feel understandable. They help users know what matters, what to do next, and how to complete tasks with confidence.",
          "For enterprise teams, design is a practical operating tool. It reduces ambiguity, speeds delivery, and improves adoption.",
        ],
      },
      {
        heading: "Simplify the moments that matter",
        body: [
          "The most useful design work starts with real workflows: quoting, approvals, reporting, onboarding, service requests, and decision support.",
          "By mapping where users slow down or lose confidence, teams can design interfaces and systems that remove friction instead of adding another layer of process.",
        ],
        diagram: "journey",
      },
      {
        heading: "Design systems create repeatable quality",
        body: [
          "A good design system gives teams shared patterns for navigation, forms, dashboards, cards, tables, and feedback states. It keeps experiences consistent while still allowing product teams to solve real problems.",
          "This matters most as products grow across departments, user roles, and markets.",
        ],
      },
      {
        heading: "Design supports transformation adoption",
        body: [
          "New platforms only create value when people understand them and use them. Design connects business intent with daily behavior.",
          "Wallace Croft uses design to make transformation easier to adopt, easier to measure, and easier to keep improving.",
        ],
        bullets: [
          "Clarify high-value workflows before building",
          "Prototype decisions early with users and stakeholders",
          "Create reusable interface patterns for scale",
        ],
      },
      {
        heading: "Research turns opinion into evidence",
        body: [
          "Teams often begin with assumptions about what users need. Research helps separate what is true from what is merely familiar.",
          "Interviews, workflow observation, analytics review, and prototype testing reveal the moments where users hesitate, repeat work, or abandon a task.",
        ],
      },
      {
        heading: "Prototypes reduce delivery risk",
        body: [
          "A prototype gives teams a fast way to test structure, language, navigation, and interaction before committing engineering effort.",
          "This helps leaders see tradeoffs early and gives engineers a clearer target when implementation begins.",
        ],
        diagram: "flow",
      },
      {
        heading: "Accessible design creates broader trust",
        body: [
          "Accessible products are easier for everyone to use. Clear hierarchy, readable type, predictable controls, visible focus states, and strong contrast all improve confidence.",
          "In enterprise environments, accessibility also supports compliance, training, and adoption across diverse teams and devices.",
        ],
      },
      {
        heading: "Scaling design across teams",
        body: [
          "As products grow, teams need a shared language for components, content, interaction patterns, and quality expectations.",
          "Design operations, component libraries, and governance rituals help teams move faster without fragmenting the customer experience.",
        ],
        bullets: [
          "Create shared patterns for repeated workflows",
          "Document decisions in plain language",
          "Review product quality through user outcomes, not only visual polish",
        ],
      },
    ],
  },
};

export const articleRelatedPosts = blogPosts.slice(0, 3);
