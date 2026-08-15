"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";

const languages: { code: Language; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "Switch to English" },
  { code: "es", label: "ES", name: "Cambiar a español" },
];

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "px-4 pt-4" : "",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex w-full items-center justify-between transition-all duration-500",
            scrolled
              ? "h-[72px] max-w-[760px] rounded-2xl border border-line bg-white/45 px-5 backdrop-blur-xl shadow-lg shadow-[#0e1c38]/5 md:px-8"
              : "h-[72px] max-w-[1400px] border border-transparent bg-transparent px-6 md:px-10 lg:px-16",
          )}
          aria-label="Main"
        >
          <Link
            href="/"
            className="flex items-center rounded-lg p-1"
            aria-label="AGBA Consulting — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-transparent.png"
              alt="AGBA Consulting"
              className="h-[56px] w-auto opacity-100"
            />
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {t.nav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative text-[13px] transition-colors duration-300",
                    scrolled
                      ? "text-[#3f4b61] hover:text-[#0a1628]"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-1 text-[11px] font-medium tracking-[0.2em]">
              {languages.map((item, i) => (
                <span key={item.code} className="flex items-center gap-1">
                  {i > 0 && (
                    <span className="text-muted/50" aria-hidden="true">
                      /
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setLang(item.code)}
                    aria-label={item.name}
                    aria-pressed={lang === item.code}
                    className={cn(
                      "uppercase transition-colors duration-300",
                      lang === item.code
                        ? scrolled
                          ? "text-[#0a1628]"
                          : "text-foreground"
                        : scrolled
                          ? "text-[#3f4b61] hover:text-[#0a1628]"
                          : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                </span>
              ))}
            </div>

            <Link
              href="/#contact"
              className={cn(
                "text-[13px] transition-colors hover:text-accent",
                scrolled ? "text-[#0a1628]" : "text-foreground",
              )}
            >
              {t.hero.ctaPrimary}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={cn(
                "h-px w-6 transition-transform duration-300",
                scrolled ? "bg-[#0a1628]" : "bg-foreground",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 transition-transform duration-300",
                scrolled ? "bg-[#0a1628]" : "bg-foreground",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-background md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <div className="flex items-center gap-1 text-[11px] font-medium tracking-[0.2em]">
                {languages.map((item, i) => (
                  <span key={item.code} className="flex items-center gap-1">
                    {i > 0 && (
                      <span className="text-muted/50" aria-hidden="true">
                        /
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setLang(item.code)}
                      aria-label={item.name}
                      aria-pressed={lang === item.code}
                      className={cn(
                        "uppercase transition-colors duration-300",
                        lang === item.code
                          ? "text-accent"
                          : "text-muted hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <nav
              className="flex flex-1 flex-col justify-between px-6 pb-10"
              aria-label="Mobile"
            >
              <ul className="pt-8">
                {t.nav.map((link, i) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-5 font-display text-4xl font-medium uppercase tracking-tight text-foreground transition-colors hover:text-accent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08 + i * 0.06,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {link.label}
                      <span className="text-sm text-muted">0{i + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
              <motion.p
                className="text-[11px] uppercase tracking-[0.3em] text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t.hero.eyebrowRight}
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
