"use client";

import { motion, useReducedMotion } from "motion/react";

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: SplitWordsProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className={className} aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={i}
            className="-mb-[0.12em] mr-[0.26em] inline-block overflow-hidden pb-[0.12em] align-bottom last:mr-0"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: reduceMotion ? "0%" : "118%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </>
  );
}
