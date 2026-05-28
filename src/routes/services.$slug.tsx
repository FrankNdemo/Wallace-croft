import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ServiceDetailPage } from "@/components/sections/ServiceDetailPage";
import { serviceDetailMap } from "@/data/serviceDetails";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const service = serviceDetailMap[params.slug];
    const title = service ? `${service.title} - Wallace Croft` : "Services - Wallace Croft";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: service?.intro ?? "Explore Wallace Croft services.",
        },
      ],
    };
  },
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = serviceDetailMap[slug];

  if (!service) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <ServiceDetailPage service={service} />
    </SiteLayout>
  );
}
