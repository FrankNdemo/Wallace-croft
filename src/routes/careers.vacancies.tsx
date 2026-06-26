import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, BriefcaseBusiness, ChevronRight } from "lucide-react";
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
    <SiteLayout>
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
            <p className="vacancies-empty__eyebrow">Open roles</p>
            <h1>No open positions available</h1>
            <p>
              There are currently no vacancies at Wallace Croft. Please check back later for new
              opportunities.
            </p>
            <Link to="/careers" className="about-outline-button">
              <ArrowLeft className="h-4 w-4" />
              Back to careers
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
