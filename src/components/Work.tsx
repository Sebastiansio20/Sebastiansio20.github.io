"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import ProjectArt, { type ProjectArtVariant } from "@/components/ProjectArt";
import { useI18n } from "@/lib/i18n";

const artVariant: Record<string, ProjectArtVariant> = {
  "supply-chain-intelligence": "data",
  "process-automation": "automation",
  "digital-transformation": "transformation",
};

export default function Work() {
  const { t } = useI18n();

  return (
    <section id="work" className="border-t border-line">
      <Container className="py-28 md:py-44">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Eyebrow index="( 04 )">{t.work.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-10 font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
                {t.work.heading}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-muted md:text-right">{t.work.subtext}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.work.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group block"
                aria-label={`${project.title} — ${t.work.viewCase}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <ProjectArt variant={artVariant[project.slug] ?? "data"} />
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(74,127,214,0.12), transparent 65%)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute right-5 top-4 font-display text-6xl font-semibold text-white/[0.06] transition-colors duration-500 group-hover:text-accent/30"
                    aria-hidden="true"
                  >
                    {project.index}
                  </span>
                  <span className="absolute left-5 top-5 text-[11px] uppercase tracking-[0.28em] text-muted">
                    {project.category}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent md:text-[1.7rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <span
                    className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted">
                  <span
                    className="h-px w-10 bg-accent transition-all duration-500 group-hover:w-16"
                    aria-hidden="true"
                  />
                  <span className="transition-colors duration-300 group-hover:text-foreground">
                    {t.work.viewCase}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
