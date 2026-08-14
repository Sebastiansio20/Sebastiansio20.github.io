"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

const artImage: Record<string, string> = {
  "supply-chain-intelligence": "/work/supply-chain.jpg",
  "process-automation": "/work/automation.svg",
  "digital-transformation": "/work/transformation.jpg",
};

export default function WorkDetailContent({ slug }: { slug: string }) {
  const { t } = useI18n();
  const project = t.work.projects.find((p) => p.slug === slug);
  if (!project) return null;

  const others = t.work.projects.filter((p) => p.slug !== slug);

  return (
    <main className="pt-32 md:pt-40">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span> {t.workDetail.back}
        </Link>

        <div className="mt-16">
          <Eyebrow index={`( ${project.index} )`}>{project.category}</Eyebrow>
          <h1 className="mt-8 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artImage[slug] ?? artImage["supply-chain-intelligence"]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(74,127,214,0.1), transparent 65%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-line pt-6 md:border-t-0 md:pt-0">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
                {t.workDetail.label}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {t.workDetail.placeholder}
              </p>
            </div>
            <Link
              href="/#contact"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-foreground"
            >
              {t.workDetail.cta}
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </Container>

      {others.length > 0 && (
        <Container className="py-28 md:py-40">
          <Eyebrow index="( more )">{t.workDetail.other}</Eyebrow>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group flex items-baseline justify-between border-b border-line pb-6"
              >
                <span className="font-display text-2xl font-medium tracking-tight transition-colors group-hover:text-accent">
                  {p.title}
                </span>
                <span
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      )}
    </main>
  );
}
