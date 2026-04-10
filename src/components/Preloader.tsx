"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1C2D]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,_#1C3050,_transparent)]" />

          {/* Animated rings */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Outer ring — rotates slowly */}
            <motion.div
              className="absolute w-72 h-72 rounded-full border border-[#C9A84C]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Mid ring — counter-rotates */}
            <motion.div
              className="absolute w-56 h-56 rounded-full border border-[#C9A84C]/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbiting dot */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C9A84C]" />
            </motion.div>
            {/* Inner ring — static */}
            <div className="w-40 h-40 rounded-full border border-[#C9A84C]/50 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="KEA Logo" className="w-24 h-24 object-contain" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="text-white/70 text-[10px] tracking-[0.4em] uppercase mb-2">Karnataka Equestrian Association</div>
            {/* Loading bar */}
            <div className="w-40 mx-auto h-px bg-white/10 overflow-hidden mt-4">
              <motion.div
                className="h-full bg-[#C9A84C]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
