"use client";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function Approach() {
  const { t } = useI18n();

  return (
    <section id="approach" className="border-t border-line">
      <Container className="py-28 md:py-44">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow index="( 03 )">{t.approach.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-10 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em]">
                {t.approach.heading}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-muted md:text-right">{t.approach.subtext}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-20 grid gap-10 md:grid-cols-4 md:gap-8">
            <div
              className="absolute inset-x-0 top-0 hidden h-px bg-line md:block"
              aria-hidden="true"
            />
            {t.approach.steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative border-l border-line pl-8 pb-12 last:pb-0 md:border-l-0 md:pb-0 md:pl-0 md:pt-10"
              >
                <span
                  className="absolute left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-line transition-colors duration-300 group-hover:bg-accent"
                  aria-hidden="true"
                />
                <div className="font-display text-sm text-muted transition-colors duration-300 group-hover:text-accent">
                  {step.number}
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium uppercase tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                  {step.description}
                </p>
                <span
                  className="absolute right-0 top-6 hidden font-display text-5xl text-foreground/[0.05] transition-colors duration-500 group-hover:text-accent/25 md:block"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
