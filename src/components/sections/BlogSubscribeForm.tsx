import { type FormEvent, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight } from "lucide-react";
import { subscribeNewsletter } from "@/server-fns/newsletter";

type BlogSubscribeFormProps = {
  id: string;
  source: string;
};

export function BlogSubscribeForm({ id, source }: BlogSubscribeFormProps) {
  const subscribe = useServerFn(subscribeNewsletter);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("submitting");
    setMessage("");

    try {
      const result = await subscribe({
        data: {
          email: String(formData.get("email") ?? ""),
          source,
        },
      });

      if (!result.ok) {
        setState("error");
        setMessage(result.message ?? "Enter a valid email.");
        return;
      }

      form.reset();
      setState("success");
      setMessage("Thanks. You are subscribed.");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor={id}>Enter work email *</label>
      <input id={id} name="email" type="email" required />
      <div>
        <button type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <span className="submit-spinner" aria-hidden />
              Subscribing
            </>
          ) : (
            <>
              Subscribe <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <span>2500 people are reading this blog every week</span>
      </div>
      {message ? (
        <p
          className={`contact-form__status ${state === "error" ? "contact-form__status--error" : "contact-form__status--success"}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
