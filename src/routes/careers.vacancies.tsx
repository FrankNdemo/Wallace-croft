import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, ChevronRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/careers/vacancies")({
  component: VacanciesPage,
  head: () => ({
    meta: [
      { title: "Vacancies - Wallace Croft" },
      {
        name: "description",
        content: "View open roles at Wallace Croft.",
      },
    ],
  }),
});

function VacanciesPage() {
  return (
    <SiteLayout footerVariant="light">
      <section className="vacancies-page bg-white text-navy">
        <div className="container-pro">
          <nav className="vacancies-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/careers">Careers</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>Vacancies</span>
          </nav>

          <div className="vacancies-empty">
            <span className="vacancies-empty__icon" aria-hidden>
              <BriefcaseBusiness className="h-8 w-8" />
            </span>
            <p className="vacancies-empty__eyebrow">What is next</p>
            <h1>No open roles yet.</h1>
            <p>
              We are always interested in thoughtful people who want to build useful technology.
              Send us your CV and we will keep it in mind when the right opportunity opens.
            </p>
            <div className="vacancies-empty__actions">
              <a
                href="mailto:info@wallacecroft.com?subject=Future%20opportunities%20at%20Wallace%20Croft"
                className="vacancies-email-link"
              >
                Send your CV to info@wallacecroft.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/careers" className="vacancies-back-link">
                <ArrowLeft className="h-4 w-4" />
                Back to careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
