"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  className?: string;
  delayMultiple?: number;
  delay?: number;
  inView?: boolean;
}

export function WordPullUp({
  words,
  className,
  delayMultiple = 0.06,
  delay = 0,
  inView: useInViewProp = true,
}: WordPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldAnimate = !useInViewProp || isInView;

  const wordArr = words.split(" ");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {wordArr.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: delay + i * delayMultiple,
            duration: 0.4,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
