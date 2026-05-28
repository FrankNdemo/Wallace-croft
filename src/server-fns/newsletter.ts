import { createServerFn } from "@tanstack/react-start";
import {
  normalizeNewsletterInput,
  validateEmail,
  type NewsletterInput,
} from "@/lib/validation";

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((input: NewsletterInput) => input)
  .handler(async ({ data }) => {
    const { query } = await import("@/server/db");
    const subscriber = normalizeNewsletterInput(data);

    if (!subscriber.email || !validateEmail(subscriber.email)) {
      return { ok: false, message: "Enter a valid email address." };
    }

    const result = await query<{ id: string }>(
      `
        insert into public.newsletter_subscribers (email, source)
        values ($1, $2)
        on conflict (email)
        do update set
          source = excluded.source,
          updated_at = now()
        returning id
      `,
      [subscriber.email, subscriber.source],
    );

    return { ok: true, id: result.rows[0]?.id };
  });
