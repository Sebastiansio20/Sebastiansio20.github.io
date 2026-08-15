"use client";

import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { technologies } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function Technology() {
  const { t } = useI18n();
  const items = [...technologies, ...technologies];

  return (
    <section id="technology" className="border-t border-line">
      <Container className="py-20 md:py-24">
        <Reveal>
          <div className="flex items-center justify-between">
            <Eyebrow index="( 06 )">{t.technology.eyebrow}</Eyebrow>
            <span className="hidden text-[11px] uppercase tracking-[0.3em] text-muted md:block">
              {t.technology.note}
            </span>
          </div>
        </Reveal>
      </Container>

      <Reveal>
        <div className="marquee-mask overflow-hidden py-10 md:py-14">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10 hover:[animation-play-state:paused] md:gap-16 md:pr-16">
            {items.map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="flex items-center gap-10 md:gap-16"
              >
                <span className="whitespace-nowrap font-display text-4xl font-medium uppercase tracking-tight text-foreground/[0.12] transition-colors duration-300 hover:text-accent md:text-6xl">
                  {tech}
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent/60"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
