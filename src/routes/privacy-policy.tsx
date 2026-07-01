import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({ meta: [{ title: "Privacy Policy - Wallace Croft" }] }),
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <main className="legal-page bg-white text-navy">
        <div className="container-pro legal-page__content">
          <p className="legal-page__eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            Wallace Croft collects the information you choose to provide through our contact and
            newsletter forms so we can respond to enquiries, deliver requested updates, and improve
            our services.
          </p>
          <h2>How we use information</h2>
          <p>
            We use submitted contact details only for legitimate business communication, service
            delivery, and security. We do not sell personal information.
          </p>
          <h2>Your choices</h2>
          <p>
            You may ask us to access, correct, or delete your information, or unsubscribe from
            marketing communication at any time.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, email{" "}
            <a href="mailto:info@wallacecroft.com">info@wallacecroft.com</a>.
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
