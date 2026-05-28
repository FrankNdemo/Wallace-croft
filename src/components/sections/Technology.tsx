"use client";
import { Cloud, Database, Cpu, GitBranch, Smartphone, Globe, Plug, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui-pro/Reveal";

const tech = [
  { icon: Cloud, label: "Cloud", items: "AWS / Azure / GCP" },
  { icon: Database, label: "Data", items: "Snowflake / Databricks / Kafka" },
  { icon: Cpu, label: "AI / ML", items: "OpenAI / LangChain / PyTorch" },
  { icon: GitBranch, label: "DevOps", items: "Kubernetes / Terraform / GitHub" },
  { icon: Smartphone, label: "Mobile", items: "iOS / Android / React Native" },
  { icon: Globe, label: "Web", items: "React / Next / Node" },
  { icon: Plug, label: "Integration", items: "MuleSoft / Kong / gRPC" },
  { icon: ShieldCheck, label: "Security", items: "Zero Trust / IAM / SOC 2" },
];

export function Technology() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white lg:py-20">
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="container-pro relative">
        <Reveal>
          <div className="text-[10px] font-normal uppercase tracking-[0.14em] text-orange">Technology</div>
          <h2 className="mt-3 max-w-3xl font-display text-[1.9rem] font-normal sm:text-[2.35rem]">
            Modern engineering across the stack.
          </h2>
          <p className="mt-5 max-w-2xl text-[0.86rem] font-medium leading-6 text-white/92">Practical tools chosen for outcomes.</p>
        </Reveal>
        <div className="technology-stack-grid mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {tech.map((t, i) => (
            <Reveal key={t.label} i={i % 4}>
              <div className="technology-stack-card group relative overflow-hidden bg-navy p-6 transition hover:bg-white/[0.08]">
                <div className="technology-stack-card__inner flex items-center gap-4">
                  <div className="technology-stack-card__icon grid h-11 w-11 place-items-center border border-white/15 text-orange transition group-hover:rotate-[-6deg]">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="technology-stack-card__label font-display text-[1rem] font-normal">{t.label}</div>
                    <div className="technology-stack-card__items text-xs font-medium text-white/82">{t.items}</div>
                  </div>
                </div>
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
