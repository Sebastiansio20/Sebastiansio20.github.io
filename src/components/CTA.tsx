"use client";

import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 120%, rgba(74,127,214,0.09), transparent 70%)",
        }}
      />

      <Container className="relative py-32 md:py-52">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-muted">
            {t.cta.eyebrow}
          </p>
        </Reveal>

        <h2 className="mt-12 font-display text-[clamp(3rem,9vw,8.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.02em] text-foreground">
          <span className="block reveal-line">
            <span style={{ "--d": "0.05s" } as CSSProperties}>
              {t.cta.line1}
            </span>
          </span>
          <span className="block reveal-line">
            <span style={{ "--d": "0.25s" } as CSSProperties}>
              {t.cta.line2}
            </span>
          </span>
        </h2>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-muted">
              {t.cta.body}
            </p>
            <Button href="/#contact" className="self-start md:self-auto">
              {t.cta.button}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
