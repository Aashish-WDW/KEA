"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface FadeTextProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  inView?: boolean;
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 16 },
  down: { y: -16 },
  left: { x: 16 },
  right: { x: -16 },
};

export function FadeText({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  inView: useInViewProp = true,
}: FadeTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldAnimate = !useInViewProp || isInView;

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(4px)", ...offset }}
      animate={shouldAnimate ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 } : {}}
      transition={{ delay, duration, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
