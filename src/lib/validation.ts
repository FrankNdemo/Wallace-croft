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
