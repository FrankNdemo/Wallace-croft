import "@tanstack/react-start/server-only";

import { defaultContactEmail } from "./config";
import type { ContactInput } from "@/lib/validation";

const brand = {
  navy: "#030c19",
  navyDeep: "#020a14",
  orange: "#f27622",
  orangeSoft: "#ffb067",
  inkMuted: "#4b5563",
  surface: "#f8fafc",
};

type Lead = ContactInput & { id: string };

type EmailPayload = {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  tag: "admin" | "customer";
};

type BrevoAddress = {
  email: string;
  name?: string;
};

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fullName(lead: Lead) {
  return [lead.firstName, lead.lastName].filter(Boolean).join(" ").trim();
}

function parseEmailAddress(value: string): BrevoAddress {
  const trimmed = value.trim();
  const match = trimmed.match(/^(.*?)\s*<([^>]+)>$/);

  if (match) {
    const name = match[1].trim().replace(/^"|"$/g, "");
    return { email: match[2].trim(), ...(name ? { name } : {}) };
  }

  return { email: trimmed };
}

function normalizeRecipients(to: string | string[]): BrevoAddress[] {
  return (Array.isArray(to) ? to : [to])
    .flatMap((value) => value.split(","))
    .map((value) => value.trim())
    .filter(Boolean)
    .map(parseEmailAddress);
}

function addressesOverlap(to: string | string[], email: string) {
  const target = email.trim().toLowerCase();

  if (!target) return false;

  return normalizeRecipients(to).some((recipient) => recipient.email.toLowerCase() === target);
}

function detailRow(label: string, value: unknown) {
  const safeValue = escapeHtml(value || "Not provided");

  return `
    <tr>
      <td style="padding: 12px 0; color: ${brand.inkMuted}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; width: 150px;">${label}</td>
      <td style="padding: 12px 0; color: ${brand.navy}; font-size: 15px; line-height: 1.55;">${safeValue}</td>
    </tr>
  `;
}

function emailShell(preview: string, body: string) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light only" />
        <title>${escapeHtml(preview)}</title>
      </head>
      <body style="margin: 0; background: #ffffff; font-family: Manrope, Aptos, 'Segoe UI', Arial, sans-serif;">
        <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${escapeHtml(preview)}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width: 100%; background: #ffffff; padding: 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width: 100%; max-width: 680px; overflow: hidden; background: #ffffff;">
                <tr>
                  <td style="background: ${brand.navyDeep}; padding: 34px 28px 18px;">
                    <div style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1; letter-spacing: 0;">
                      Wallace Croft<span style="display: inline-block; width: 7px; height: 7px; margin-left: 5px; vertical-align: top; background: ${brand.orange};"></span>
                    </div>
                    <div style="margin-top: 14px; height: 3px; width: 80px; background: linear-gradient(90deg, ${brand.orange}, ${brand.orangeSoft});"></div>
                  </td>
                </tr>
                ${body}
                <tr>
                  <td style="padding: 24px 32px; background: ${brand.navy}; color: rgba(255,255,255,0.72); font-size: 12px; line-height: 1.7;">
                    Wallace Croft designs, builds, and operates durable digital systems.<br />
                    <a href="https://www.wallacecroft.com" style="color: ${brand.orangeSoft}; text-decoration: none;">www.wallacecroft.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function adminEmailHtml(lead: Lead) {
  const name = fullName(lead) || "Website visitor";
  const message = escapeHtml(lead.message || "No message provided.").replaceAll("\n", "<br />");

  return emailShell(
    `New Wallace Croft inquiry: ${name}`,
    `
      <tr>
        <td style="padding: 30px 28px 12px;">
          <h1 style="margin: 0; color: ${brand.navy}; font-size: 30px; line-height: 1.15;">New website inquiry from ${escapeHtml(name)}.</h1>
          <p style="margin: 16px 0 0; color: ${brand.inkMuted}; font-size: 15px; line-height: 1.7;">A fresh project conversation just came in through the Wallace Croft website. Review the context below, spot the best next move, and reply while the request is still warm.</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 16px 28px 8px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            ${detailRow("Lead ID", lead.id)}
            ${detailRow("Name", name)}
            ${detailRow("Email", lead.email)}
            ${detailRow("Phone", lead.phone)}
            ${detailRow("Company", lead.company)}
            ${detailRow("Role", lead.role)}
            ${detailRow("Country", lead.country)}
            ${detailRow("Source", lead.source)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 18px 28px 36px;">
          <div style="border-left: 4px solid ${brand.orange}; background: ${brand.surface}; padding: 18px 20px; color: ${brand.navy}; font-size: 15px; line-height: 1.7;">${message}</div>
        </td>
      </tr>
    `,
  );
}

function customerEmailHtml(lead: Lead) {
  const name = fullName(lead) || "there";

  return emailShell(
    "Wallace Croft received your message",
    `
      <tr>
        <td style="padding: 30px 28px 14px;">
          <h1 style="margin: 0; color: ${brand.navy}; font-size: 31px; line-height: 1.15;">Thanks, ${escapeHtml(name)}.</h1>
          <p style="margin: 16px 0 0; color: ${brand.inkMuted}; font-size: 16px; line-height: 1.75;">We received your inquiry and the Wallace Croft team will review it shortly. If there is a project brief, timeline, or technical context to add, you can reply directly to this email.</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 14px 28px 36px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: ${brand.surface}; border: 1px solid #e7eaf0;">
            <tr>
              <td style="padding: 20px;">
                <div style="color: ${brand.navy}; font-size: 16px; font-weight: 800;">What happens next</div>
                <p style="margin: 10px 0 0; color: ${brand.inkMuted}; font-size: 14px; line-height: 1.7;">We check the request, match it to the right advisory or engineering lead, and respond with a useful next step.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `,
  );
}

async function sendEmail({ to, subject, html, replyTo, tag }: EmailPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.EMAIL_FROM ?? "Wallace Croft <ndemofrank1@gmail.com>";
  const recipients = normalizeRecipients(to);

  if (!apiKey) {
    console.info("Email skipped because BREVO_API_KEY is not configured", {
      tag,
      to,
      subject,
    });
    return { ok: false, reason: "missing_brevo_api_key", tag, recipients };
  }

  if (!recipients.length) {
    console.info("Email skipped because no recipients were resolved", {
      tag,
      to,
      subject,
    });
    return { ok: false, reason: "missing_recipient", tag, recipients };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: parseEmailAddress(from),
      to: recipients,
      subject,
      htmlContent: html,
      ...(replyTo ? { replyTo: parseEmailAddress(replyTo) } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo email failed: ${response.status} ${errorText}`);
  }

  const payload = (await response.json().catch(() => ({}))) as { messageId?: string };
  console.info("Brevo email accepted", {
    tag,
    messageId: payload.messageId,
    recipients: recipients.map((recipient) => recipient.email),
  });

  return { ok: true, tag, messageId: payload.messageId, recipients };
}

export async function sendLeadNotification(lead: Lead) {
  const adminRecipient = process.env.LEAD_NOTIFICATION_EMAIL ?? defaultContactEmail;
  const senderReplyAddress = process.env.DEFAULT_CONTACT_EMAIL ?? defaultContactEmail;
  const customerRecipient = lead.email.trim();
  const failedResult = { ok: false, reason: "send_failed" };

  if (addressesOverlap(adminRecipient, customerRecipient)) {
    console.warn("Lead notification admin and customer recipients overlap", {
      leadId: lead.id,
      source: lead.source,
    });
  }

  const [adminResult, customerResult] = await Promise.allSettled([
    sendEmail({
      tag: "admin",
      to: adminRecipient,
      subject: `New Wallace Croft inquiry: ${fullName(lead) || lead.email}`,
      html: adminEmailHtml(lead),
      replyTo: lead.email,
    }),
    sendEmail({
      tag: "customer",
      to: customerRecipient || adminRecipient,
      subject: "Thanks for contacting Wallace Croft",
      html: customerEmailHtml(lead),
      replyTo: senderReplyAddress,
    }),
  ]);

  if (adminResult.status === "rejected") {
    console.error("Admin lead email failed", { leadId: lead.id, error: adminResult.reason });
  }

  if (customerResult.status === "rejected") {
    console.error("Customer email failed", { leadId: lead.id, error: customerResult.reason });
  }

  return {
    admin: adminResult.status === "fulfilled" ? adminResult.value : failedResult,
    customer: customerResult.status === "fulfilled" ? customerResult.value : failedResult,
  };
}
