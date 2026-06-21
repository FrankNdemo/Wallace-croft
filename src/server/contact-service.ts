import "@tanstack/react-start/server-only";

import { normalizeContactInput, validateEmail, type ContactInput } from "@/lib/validation";

export async function handleContactSubmission(data: ContactInput) {
  const [{ query }, { sendLeadNotification }] = await Promise.all([
    import("@/server/db"),
    import("@/server/email"),
  ]);
  const lead = normalizeContactInput(data);

  if (!lead.email || !validateEmail(lead.email)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  if (!lead.firstName && !lead.lastName && !lead.company && !lead.message) {
    return { ok: false, message: "Add a few details so we can respond properly." };
  }

  let id = `website-${Date.now()}`;
  let saved = false;
  let emailSent = false;
  let notification: Awaited<ReturnType<typeof sendLeadNotification>> | undefined;

  try {
    const result = await query<{ id: string }>(
      `
        insert into public.leads (
          first_name,
          last_name,
          email,
          phone,
          country,
          company,
          role,
          message,
          source,
          consent_contact,
          consent_marketing,
          consent_privacy
        )
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        returning id
      `,
      [
        lead.firstName,
        lead.lastName,
        lead.email,
        lead.phone,
        lead.country,
        lead.company,
        lead.role,
        lead.message,
        lead.source,
        lead.consentContact,
        lead.consentMarketing,
        lead.consentPrivacy,
      ],
    );

    id = result.rows[0]?.id ?? id;
    saved = Boolean(result.rows[0]?.id);
  } catch (error) {
    console.error("Lead database save failed", { email: lead.email, source: lead.source, error });
  }

  try {
    notification = await sendLeadNotification({ ...lead, id });
    emailSent = Boolean(notification.admin.ok && notification.customer.ok);
  } catch (error) {
    console.error("Lead email notification failed", {
      leadId: id,
      error,
    });
  }

  if (!emailSent) {
    return {
      ok: false,
      id,
      saved,
      emailSent,
      notification,
      message: saved
        ? "Your message was saved, but email delivery failed. Please email info@wallacecroft.com directly if this is urgent."
        : "We could not send your request right now. Please email info@wallacecroft.com directly.",
    };
  }

  return { ok: true, id, saved, emailSent, notification };
}
