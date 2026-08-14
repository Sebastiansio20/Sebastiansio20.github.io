"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!finePointer || reduceMotion) return;

    document.body.classList.add("has-cursor");

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setInteractive(
        Boolean(
          target.closest(
            "a, button, input, textarea, select, label, [data-cursor]",
          ),
        ),
      );
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  return (
    <div
      className="cursor-outer pointer-events-none fixed inset-0 z-[90]"
      aria-hidden="true"
    >
      <motion.div
        className="cursor-crosshair absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
        animate={{ scale: interactive ? 1.5 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          stroke="#7aa6e8"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="5" y1="14" x2="23" y2="14" />
          <line x1="14" y1="5" x2="14" y2="23" />
          <circle cx="14" cy="14" r="1.6" fill="#7aa6e8" stroke="none" />
        </svg>
      </motion.div>
    </div>
  );
}
