import { ArrowRight, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Logo } from "@/components/brand/Logo";
import { subscribeNewsletter } from "@/server-fns/newsletter";

const contactEmail = "ndemofrank@wallacecroft.com";

const cols = [
  {
    title: "Services",
    items: [
      { label: "Consulting + Advisory", to: "/services" },
      { label: "Managed Services", to: "/services" },
      { label: "Engineering + Delivery", to: "/services" },
      { label: "Cloud + Platform Ops", to: "/services" },
      { label: "Data + AI", to: "/services" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Financial Services", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Retail + Commerce", to: "/industries" },
      { label: "Manufacturing", to: "/industries" },
      { label: "Logistics", to: "/industries" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "APProach", to: "/resources" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [emailState, setEmailState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setEmailState("submitting");
    setMessage("");

    try {
      const result = await subscribe({
        data: {
          email: String(formData.get("email") ?? ""),
          source: "footer",
        },
      });

      if (!result.ok) {
        setEmailState("error");
        setMessage(result.message ?? "Enter a valid email.");
        return;
      }

      form.reset();
      setEmailState("success");
      setMessage("Subscribed.");
    } catch {
      setEmailState("error");
      setMessage("Could not subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-pro py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
          <div className="max-w-md">
            <Logo light />
            <p className="mt-5 text-sm font-medium leading-7 text-white/90">
              Wallace Croft partners with enterprises to design, build, and operate the systems
              behind durable transformation.
            </p>
            <form
              className="mt-7 flex max-w-sm overflow-hidden border border-white/18 bg-white/[0.03]"
              method="post"
              onSubmit={handleSubscribe}
            >
              <input
                name="email"
                type="email"
                placeholder="Work email"
                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/78"
              />
              <button
                type="submit"
                disabled={emailState === "submitting"}
                className="flex items-center gap-1 bg-orange px-4 text-sm font-medium text-white transition hover:bg-orange-soft"
              >
                {emailState === "submitting" ? (
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
            </form>
            {message ? <p className="mt-3 text-xs text-white/72">{message}</p> : null}
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-white/92 transition hover:text-orange">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.title === "Company" ? (
                  <li>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-white/92 transition hover:text-orange"
                    >
                      {contactEmail}
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/78">
            <span>&copy; {new Date().getFullYear()} Wallace Croft. All rights reserved.</span>
            <span className="text-white/24">|</span>
            <span>www.wallacecroft.com</span>
          </div>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Github, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center border border-white/15 transition hover:border-orange hover:text-orange"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
