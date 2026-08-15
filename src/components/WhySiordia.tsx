"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { useI18n } from "@/lib/i18n";

export default function WhySiordia() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="about" className="border-t border-line">
      <Container className="py-28 md:py-44">
        <Reveal>
          <Eyebrow index="( 05 )">{t.why.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-14 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            {t.why.line1}
            <br />
            <span className="text-muted">{t.why.line2}</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
                {t.why.label}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                {t.why.body}
              </p>
            </Reveal>

            <div className="mt-12">
              {t.why.disciplines.map((discipline, i) => {
                const open = openIndex === i;
                return (
                  <Reveal key={discipline.label} delay={i * 0.05}>
                    <div className="border-t border-line">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(open ? null : i)}
                        aria-expanded={open}
                        className="group flex w-full items-center justify-between py-6 text-left"
                      >
                        <span className="font-display text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-3xl">
                          {discipline.label}
                        </span>
                        <span
                          className="font-display text-xl text-accent transition-transform duration-300 group-hover:rotate-90"
                          aria-hidden="true"
                        >
                          {open ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-muted">
                              {discipline.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
              <div className="border-t border-line" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
