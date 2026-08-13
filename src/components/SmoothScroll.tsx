"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href") ?? "";

      if (href === "#") {
        e.preventDefault();
        return;
      }

      const isPlainHash = href.startsWith("#") && !href.startsWith("##");
      const isRootHash = href.startsWith("/#");
      if (!isPlainHash && !isRootHash) return;
      if (isPlainHash && window.location.pathname !== "/") return;

      const id = isPlainHash ? href.slice(1) : href.slice(2);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    }

    function onHashChange() {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
      }
    }

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return <>{children}</>;
}
