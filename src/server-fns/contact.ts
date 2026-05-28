import { createServerFn } from "@tanstack/react-start";
import { type ContactInput } from "@/lib/validation";
import { handleContactSubmission } from "@/server/contact-service";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: ContactInput) => input)
  .handler(async ({ data }) => handleContactSubmission(data));
