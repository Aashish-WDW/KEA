"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function AnimatedList({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: AnimatedListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={cn(className)}>
      {React.Children.map(children, (child, i) => (
        <motion.div
          initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: delay + i * stagger,
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
