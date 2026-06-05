import "@tanstack/react-start/server-only";

export const defaultContactEmail =
  process.env.DEFAULT_CONTACT_EMAIL ?? "ndemofrank@wallacecroft.com";

export const defaultLeadNotificationEmails = [
  "sales@wallacecroft.com",
  "alvisnjenga@wallacecroft.com",
  "ndemofrank@wallacecroft.com",
] as const;

export function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}
