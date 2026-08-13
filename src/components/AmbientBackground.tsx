"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "motion/react";
import DataFlowCanvas from "@/components/DataFlowCanvas";

export default function AmbientBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const gx = useSpring(mx, { stiffness: 55, damping: 22 });
  const gy = useSpring(my, { stiffness: 55, damping: 22 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  useMotionValueEvent(gx, "change", (v) => {
    gridRef.current?.style.setProperty("--glow-x", `${(v * 100).toFixed(2)}%`);
  });
  useMotionValueEvent(gy, "change", (v) => {
    gridRef.current?.style.setProperty("--glow-y", `${(v * 100).toFixed(2)}%`);
  });

  const spotlightX = useTransform(gx, (v) => `${(v * 100).toFixed(2)}%`);
  const spotlightY = useTransform(gy, (v) => `${(v * 100).toFixed(2)}%`);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div className="mesh-blob mesh-blob-a" />
      <div className="mesh-blob mesh-blob-b" />
      <div className="mesh-blob mesh-blob-c" />
      <div className="mesh-blob mesh-blob-d" />

      <div className="absolute inset-0">
        <DataFlowCanvas />
      </div>

      <div className="grid-mask absolute inset-0" />
      <div ref={gridRef} className="grid-react absolute inset-0" />

      <motion.div
        className="ambient-spotlight"
        style={{ x: spotlightX, y: spotlightY }}
      />
    </div>
  );
}
