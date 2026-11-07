"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-[#EDECE8]/30 bg-[#1D150C]/80 backdrop-blur-md text-[#FA712A] flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] hover:border-[#FA712A] hover:bg-[#1D150C] transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.6} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
