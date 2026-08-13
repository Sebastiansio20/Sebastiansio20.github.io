"use client";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function Intro() {
  const { t } = useI18n();

  return (
    <section className="border-t border-line">
      <Container className="py-28 md:py-44">
        <Reveal>
          <Eyebrow index="( 01 )">{t.intro.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2rem,4.6vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
                {t.intro.statement}{" "}
                <span className="text-accent">{t.intro.statementAccent}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4" />
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">
                {t.intro.body}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
