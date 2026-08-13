"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24 });
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
        className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
      <motion.div
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: interactive ? 72 : 44,
          height: interactive ? 72 : 44,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}
