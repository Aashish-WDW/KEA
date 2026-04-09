"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterPullUpProps {
  words: string;
  className?: string;
  delay?: number;
}

export function LetterPullUp({ words, className, delay = 0 }: LetterPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = words.split("");

  return (
    <span ref={ref} className={cn("inline-flex", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: delay + i * 0.035,
            duration: 0.3,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
}
