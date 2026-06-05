export type ContactAttachmentInput = {
  name?: string;
  type?: string;
  size?: number;
  content?: string;
};

export type ContactInput = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  country?: string;
  company?: string;
  role?: string;
  message?: string;
  source?: string;
  consentContact?: boolean;
  consentMarketing?: boolean;
  consentPrivacy?: boolean;
  attachment?: ContactAttachmentInput;
};

export type NewsletterInput = {
  email?: string;
  source?: string;
};

function cleanText(value: unknown, max = 500) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

function cleanLongText(value: unknown, max = 4_000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function cleanBoolean(value: unknown) {
  return value === true || value === "true" || value === "on";
}

const allowedAttachmentTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/png",
  "image/jpeg",
  "text/plain",
]);

const maxAttachmentSize = 5 * 1024 * 1024;

function decodedBase64Size(value: string) {
  const normalized = value.replace(/\s/g, "");

  if (!normalized || normalized.length % 4 !== 0 || /[^A-Za-z0-9+/=]/.test(normalized)) {
    return 0;
  }

  const padding = normalized.endsWith("==") ? 2 : normalized.endsWith("=") ? 1 : 0;
  return (normalized.length / 4) * 3 - padding;
}

function cleanAttachment(attachment: ContactAttachmentInput | undefined) {
  if (!attachment) return undefined;

  const name = cleanText(attachment.name, 180);
  const type = cleanText(attachment.type, 120);
  const size = Number(attachment.size ?? 0);
  const content =
    typeof attachment.content === "string" ? attachment.content.replace(/\s/g, "") : "";
  const decodedSize = decodedBase64Size(content);

  if (
    !name ||
    !allowedAttachmentTypes.has(type) ||
    size <= 0 ||
    size > maxAttachmentSize ||
    decodedSize <= 0 ||
    decodedSize > maxAttachmentSize ||
    decodedSize !== size
  ) {
    return undefined;
  }

  return { name, type, size, content };
}

export function normalizeContactInput(input: ContactInput) {
  return {
    firstName: cleanText(input.firstName, 120),
    lastName: cleanText(input.lastName, 120),
    email: cleanText(input.email, 320).toLowerCase(),
    phone: cleanText(input.phone, 80),
    country: cleanText(input.country, 8),
    company: cleanText(input.company, 180),
    role: cleanText(input.role, 180),
    message: cleanLongText(input.message),
    source: cleanText(input.source || "website", 120),
    consentContact: cleanBoolean(input.consentContact),
    consentMarketing: cleanBoolean(input.consentMarketing),
    consentPrivacy: cleanBoolean(input.consentPrivacy),
    attachment: cleanAttachment(input.attachment),
  };
}

export function normalizeNewsletterInput(input: NewsletterInput) {
  return {
    email: cleanText(input.email, 320).toLowerCase(),
    source: cleanText(input.source || "website", 120),
  };
}

export function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
