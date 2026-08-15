"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="border-t border-line">
      <Container className="pt-28 md:pt-44 pb-16 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow index="( 02 )">{t.services.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-10 font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
                {t.services.heading}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-muted md:text-right">{t.services.subtext}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          {t.services.items.map((service) => (
            <Reveal key={service.number}>
              <motion.article
                className="group grid cursor-default gap-6 border-t border-line py-10 transition-colors duration-500 hover:bg-foreground/[0.03] md:grid-cols-12 md:items-baseline md:py-14"
                whileHover={{ x: reduceMotion ? 0 : 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="font-display text-sm text-accent md:col-span-1">
                  {service.number}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-medium uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-4xl">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-3">
                  <p className="max-w-xs text-[15px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-foreground/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </Container>
    </section>
  );
}
