import { Link, Outlet, createFileRoute, useMatches } from "@tanstack/react-router";
import { ArrowRight, Check, Circle, Sparkles, Zap } from "lucide-react";
import careersHeroImage from "@/assets/page-hero-careers.png";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/sections/PageHero";

const careerValues = [
  {
    icon: Sparkles,
    title: "Be Bold",
    body: "Dream big, take risks, and speak up with purpose.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    body: "Build quickly, fail fast, and learn from clear feedback.",
  },
  {
    icon: Circle,
    title: "Stay Hungry",
    body: "Stay curious, learn new skills, and keep growing.",
  },
  {
    icon: Circle,
    title: "Focus on Impact",
    body: "Deliver real value and exceed expectations, always.",
  },
  {
    icon: Sparkles,
    title: "Seek Excellence",
    body: "Make complex work clear, dependable, and sharp.",
  },
  {
    icon: Circle,
    title: "Embrace Humanity",
    body: "Be caring, open-minded, and generous along the way.",
  },
];

const benefits = [
  "Competitive Salary",
  "Parental Leave & Support",
  "Paid Sabbatical",
  "Health Insurance",
  "Annual Trips",
  "Celebrations & Events",
  "Awards & Recognition",
  "Sports Tournaments",
  "Flexible Work Hours",
  "Training & Development",
  "Continuous Learning",
  "Outstanding Colleagues",
];

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers - Wallace Croft" },
      {
        name: "description",
        content:
          "Explore careers at Wallace Croft and learn how our teams grow, build, and create impact.",
      },
      { property: "og:title", content: "Careers - Wallace Croft" },
      {
        property: "og:description",
        content:
          "Explore careers at Wallace Croft and learn how our teams grow, build, and create impact.",
      },
    ],
  }),
});

function CareersPage() {
  const matches = useMatches();
  const hasChildMatch = matches.some(
    (match) => match.routeId !== "/careers" && match.pathname.startsWith("/careers"),
  );

  if (hasChildMatch) {
    return <Outlet />;
  }

  return (
    <div className="careers-page">
      <SiteLayout>
        <PageHero
          className="page-hero-section--lower-copy page-hero-section--mobile-lift-visual careers-page-hero"
          eyebrow="Careers"
          title="Learn, grow & impact"
          description="Are you inspired to shape the world with your work?"
          image={careersHeroImage}
          images={[careersHeroImage]}
          imageAlt="Glowing staircase leading to a summit flag"
          visual="career"
        />

        <nav className="careers-tabs" aria-label="Careers sections">
          <a href="#overview">Overview</a>
          <a href="#values">Our Values</a>
          <a href="#work-life">Work Life</a>
        </nav>

        <section id="overview" className="careers-impact bg-white text-navy">
          <div className="container-pro">
            <div className="careers-impact__copy">
              <h2>Driven by impact<sup>TM</sup></h2>
              <p>
                We need voices that tell us how to build software that delivers lasting impact. It
                does not matter who you are, where you come from, or what your interest is. At
                Wallace Croft, you will find products, teammates, and insight to fuel your people,
                companies, and society.
              </p>
              <p>
                How can you lead the next wave of your life? At Wallace Croft, we provide you the
                teams, culture, and opportunities that help you grow, have fun, and create your own
                impact that matters.
              </p>
              <Link to="/careers/vacancies" className="about-outline-button mt-8">
                View open roles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="values" className="careers-values bg-white text-navy">
          <div className="container-pro">
            <div className="careers-values__panel">
              <h2>Our Values</h2>
              <p>
                These are the core traits that we live by. They guide everything - what we do, why
                we do it, and how we do it.
              </p>
              <div className="careers-values__grid">
                {careerValues.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="careers-value-card">
                      <span className="careers-value-card__icon" aria-hidden>
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="work-life" className="careers-work-life bg-white text-navy">
          <div className="container-pro">
            <h2>Live Your Best Work Life</h2>
            <p>
              Along with the limitless opportunity to pursue, we offer outstanding benefits and a
              culture that helps you be happy, healthy, and successful in your work and personal
              life.
            </p>
            <ul className="careers-benefits">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <Check className="h-4 w-4" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </SiteLayout>
    </div>
  );
}
