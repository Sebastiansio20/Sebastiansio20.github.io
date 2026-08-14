"use client";

import Container from "@/components/ui/Container";
import { PLACEHOLDER_EMAIL } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-line">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="AGBA Consulting"
              className="h-10 w-auto"
            />
            <p className="mt-5 text-sm text-muted">{t.footer.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
              {t.footer.sitemap}
            </p>
            <ul className="mt-6 space-y-3">
              {t.nav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
              {t.footer.connect}
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${PLACEHOLDER_EMAIL}`}
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  {PLACEHOLDER_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  {t.footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 text-[11px] uppercase tracking-[0.25em] text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 AGBA Consulting</span>
          <span className="hidden md:block">{t.footer.tagline}</span>
          <span>{t.footer.servicesLine}</span>
        </div>
      </Container>
    </footer>
  );
}
