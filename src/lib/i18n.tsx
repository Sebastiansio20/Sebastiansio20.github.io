"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { en, es } from "@/lib/translations";
import type { Dictionary } from "@/lib/translations";

export type Language = "en" | "es";

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const t = lang === "en" ? en : es;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
