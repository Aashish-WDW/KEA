"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BoxRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
  inView?: boolean;
}

export function BoxReveal({
  children,
  width = "fit-content",
  boxColor = "#C9A84C",
  duration = 0.5,
  delay = 0,
  className,
  inView: useInViewProp = true,
}: BoxRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldAnimate = !useInViewProp || isInView;

  return (
    <div ref={ref} className={className} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration, delay: delay + 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={shouldAnimate ? { left: "100%" } : {}}
        transition={{ duration, delay, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: boxColor,
          zIndex: 20,
        }}
      />
    </div>
  );
}
