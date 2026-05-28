import { type FormEvent, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/server-fns/contact";

type SubmitState = "idle" | "submitting" | "success" | "error";

type ContactSubmitOptions = {
  source: string;
  country?: string;
  successMessage?: string;
};

function splitFullName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = parts.shift() ?? "";

  return {
    firstName,
    lastName: parts.join(" "),
  };
}

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

export function useContactSubmit({
  source,
  country = "KE",
  successMessage = "Thanks. We received your message and will reply soon.",
}: ContactSubmitOptions) {
  const submitContactForm = useServerFn(submitContact);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = field(formData, "fullName");
    const fallbackName = splitFullName(fullName);
    const firstName = field(formData, "firstName") || fallbackName.firstName;
    const lastName = field(formData, "lastName") || fallbackName.lastName;

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const result = await submitContactForm({
        data: {
          firstName,
          lastName,
          email: field(formData, "email"),
          phone: field(formData, "phone"),
          country,
          company: field(formData, "company"),
          role: field(formData, "role"),
          message: field(formData, "message"),
          source,
          consentContact: formData.get("consentContact") === "on",
          consentMarketing: formData.get("consentMarketing") === "on",
          consentPrivacy: formData.get("consentPrivacy") === "on",
        },
      });

      if (!result.ok) {
        setSubmitState("error");
        setSubmitMessage(result.message ?? "Please check the form and try again.");
        return;
      }

      form.reset();
      setSubmitState("success");
      setSubmitMessage(successMessage);
    } catch {
      setSubmitState("error");
      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  return {
    handleSubmit,
    isSubmitting: submitState === "submitting",
    submitMessage,
    submitState,
  };
}
