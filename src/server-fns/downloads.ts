import { createServerFn } from "@tanstack/react-start";
import { validateEmail } from "@/lib/validation";

type DownloadInput = {
  email?: string;
  resource?: string;
  source?: string;
};

export const requestDownload = createServerFn({ method: "POST" })
  .inputValidator((input: DownloadInput) => input)
  .handler(async ({ data }) => {
    const { query } = await import("@/server/db");
    const email = data.email?.trim().toLowerCase() ?? "";
    const resource = data.resource?.trim() || "mvp-planning-template";
    const source = data.source?.trim() || "website";

    if (!validateEmail(email)) {
      return { ok: false, message: "Enter a valid email address." };
    }

    const result = await query<{ id: string }>(
      `
        insert into public.download_requests (email, resource, source)
        values ($1, $2, $3)
        returning id
      `,
      [email, resource, source],
    );

    return { ok: true, id: result.rows[0]?.id };
  });
