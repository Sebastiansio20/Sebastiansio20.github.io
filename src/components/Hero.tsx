"use client";

import { useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Button from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const mxSpring = useSpring(mx, { stiffness: 50, damping: 20 });
  const mySpring = useSpring(my, { stiffness: 50, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 18);
    my.set((e.clientY / innerHeight - 0.5) * 18);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh flex-col overflow-hidden pt-32 md:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(74,127,214,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 md:px-10 lg:px-16">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-transparent.png"
            alt="AGBA Consulting"
            className="h-[200px] w-auto"
          />

          <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-muted md:mt-10">
            <span>{t.hero.eyebrowLeft}</span>
            <span className="hidden md:block">{t.hero.eyebrowRight}</span>
          </div>

          <motion.h1
            style={{ x: mxSpring, y: mySpring }}
            className="mt-14 font-display text-[clamp(3.2rem,10.5vw,9.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-foreground"
          >
            <span className="block reveal-line">
              <span style={{ "--d": "0.05s" } as CSSProperties}>
                {t.hero.line1}
              </span>
            </span>
            <span className="block reveal-line">
              <span style={{ "--d": "0.25s" } as CSSProperties}>
                {t.hero.line2}
              </span>
            </span>
            <span className="block reveal-line">
              <span style={{ "--d": "0.45s" } as CSSProperties}>
                {t.hero.line3}
                <span className="text-accent">.</span>
              </span>
            </span>
          </motion.h1>

          <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              {t.hero.tagline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/#contact">{t.hero.ctaPrimary}</Button>
              <Button href="/#work" variant="ghost">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pb-10 md:px-10 lg:px-16">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted">
          <span
            className="relative flex h-6 w-px items-start justify-center overflow-hidden bg-line"
            aria-hidden="true"
          >
            <motion.span
              className="absolute top-0 h-3 w-px bg-accent"
              animate={{ y: [-12, 24] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </span>
          {t.hero.scroll}
        </div>
        <div className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-muted md:flex">
          {t.hero.meta.map((item, i) => (
            <span key={item} className="flex items-center gap-6">
              {i > 0 && (
                <span className="text-accent" aria-hidden="true">
                  /
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
