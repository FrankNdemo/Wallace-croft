import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms and Conditions - Wallace Croft" }] }),
});

function TermsPage() {
  return (
    <SiteLayout>
      <main className="legal-page bg-white text-navy">
        <div className="container-pro legal-page__content">
          <p className="legal-page__eyebrow">Legal</p>
          <h1>Terms and Conditions</h1>
          <p>
            By using this website, you agree to use its content and services lawfully and without
            interfering with the site or the experience of other visitors.
          </p>
          <h2>Website content</h2>
          <p>
            Content is provided for general information and may be updated without notice. Project
            scope, pricing, and delivery commitments are governed by the written agreement for each
            engagement.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, Wallace Croft owns the website content, branding, and original
            materials. They may not be reproduced commercially without permission.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:info@wallacecroft.com">info@wallacecroft.com</a>.
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
