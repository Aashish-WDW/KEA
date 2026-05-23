"use client";

import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { useState, useEffect, useCallback } from "react";

const images = [
  "/gallery/DSC02366.JPG",
  "/gallery/DSC02340.JPG",
  "/gallery/DSC02283.JPG",
  "/gallery/DSC02229.JPG",
  "/gallery/DSC02178.JPG",
  "/gallery/DSC02182.JPG",
  "/gallery/DSC02121.JPG",
  "/gallery/DSC02108.JPG",
  "/gallery/DSC01973.JPG",
  "/gallery/DSC01895.JPG",
  "/gallery/DSC01861.JPG",
  "/gallery/DSC01834.JPG",
  "/gallery/DSC01800.JPG",
  "/gallery/DSC01798.JPG",
  "/gallery/DSC01654.JPG",
  "/gallery/DSC01646.JPG",
  "/gallery/DSC01605.JPG",
  "/gallery/DSC01502.JPG",
  "/gallery/DSC01485.JPG",
  "/gallery/DSC01357.JPG",
  "/gallery/DSC01080.JPG",
  "/gallery/DSC00881.JPG",
];

function Lightbox({ index, onClose, onPrev, onNext }: { index: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      {/* Close */}
      <button className="absolute top-5 right-6 text-white/60 hover:text-white text-3xl leading-none z-10" onClick={onClose}>×</button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C9A84C] text-4xl z-10 px-3"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >‹</button>

      {/* Image */}
      <img
        src={images[index]}
        alt={`Photo ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C9A84C] text-4xl z-10 px-3"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >›</button>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-[11px] tracking-[0.2em] uppercase">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i! - 1 + images.length) % images.length), []);
  const next = useCallback(() => setLightboxIndex((i) => (i! + 1) % images.length), []);

  return (
    <InnerPageShell
      title="Gallery"
      subtitle="Moments from Karnataka's equestrian journey"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
    >
      {/* Intro strip */}
      <section className="bg-white py-10 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">A visual record of KEA's competitions and the equestrian community across Karnataka.</p>
          <span className="shrink-0 text-[10px] tracking-[0.14em] uppercase text-[#9CA3AF]">{images.length} photographs</span>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#F7F4EF] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((src, i) => (
              <BlurFade key={src} delay={0.04 * i} inView>
                <div
                  className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => open(i)}
                >
                  <img
                    src={src}
                    alt={`KEA Competition 2026 — ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0B1C2D]/0 group-hover:bg-[#0B1C2D]/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white/0 group-hover:text-white/80 text-2xl transition-all duration-300 select-none">⊕</span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Submit photos CTA */}
      <section className="relative bg-[#0B1C2D] py-14 overflow-hidden">
        <AnimatedGridPattern className="opacity-30 pointer-events-none" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-xl font-light text-white mb-2">Share Your <span className="italic">Photographs</span></h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                Members and event photographers can submit photographs for inclusion in the KEA Gallery. High-resolution images from KEA-sanctioned events are welcome.
              </p>
            </div>
          </BlurFade>
          <button
            onClick={() => window.location.href = "mailto:secretariat@kea.org.in"}
            className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors"
          >
            Submit Photos →
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </InnerPageShell>
  );
}
