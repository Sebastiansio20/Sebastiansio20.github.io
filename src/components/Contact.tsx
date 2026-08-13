"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { PLACEHOLDER_EMAIL } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const fieldClasses =
  "mt-3 w-full border-b border-line bg-transparent pb-3 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent";

export default function Contact() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    );
    console.info("Contact form payload", payload);
    setSubmitted(true);
  }

  const budgets = t.contact.budgets;

  return (
    <section id="contact" className="border-t border-line">
      <Container className="py-28 md:py-44">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow index="( 07 )">{t.contact.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-10 font-display text-[clamp(2.4rem,5vw,4.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.02em]">
                {t.contact.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted">
                {t.contact.body}
              </p>
              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted/70">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${PLACEHOLDER_EMAIL}`}
                  className="mt-2 inline-block text-sm text-foreground transition-colors hover:text-accent"
                >
                  {PLACEHOLDER_EMAIL}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex h-full min-h-[420px] flex-col items-start justify-center border border-line bg-surface/40 p-10 md:p-14">
                  <p className="font-display text-2xl font-medium text-foreground">
                    {t.contact.successTitle}
                  </p>
                  <p className="mt-4 max-w-md text-muted">
                    {t.contact.successBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[11px] uppercase tracking-[0.3em] text-muted"
                    >
                      {t.contact.fields.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t.contact.placeholders.name}
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-[11px] uppercase tracking-[0.3em] text-muted"
                    >
                      {t.contact.fields.company}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={t.contact.placeholders.company}
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase tracking-[0.3em] text-muted"
                    >
                      {t.contact.fields.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t.contact.placeholders.email}
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="text-[11px] uppercase tracking-[0.3em] text-muted"
                    >
                      {t.contact.fields.budget}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue={budgets[0]}
                      className={`${fieldClasses} appearance-none text-muted`}
                    >
                      {budgets.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                          className="bg-background text-foreground"
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-[11px] uppercase tracking-[0.3em] text-muted"
                    >
                      {t.contact.fields.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.placeholders.message}
                      className={`${fieldClasses} resize-none`}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent-bright"
                    >
                      {t.contact.submit}
                      <span
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
