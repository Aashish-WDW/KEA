"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";

const slides = [
  {
    id: "identity",
    bg: "bg-[#0B1C2D]",
    image: "/images/hero_identity.png",
    glow1: "bg-[radial-gradient(ellipse_70%_55%_at_78%_8%,_#1e3d5c,_transparent)]",
    glow2: "bg-[radial-gradient(ellipse_55%_45%_at_15%_90%,_#0f2540,_transparent)]",
    pattern: "diagonal-lines",
    content: <Slide1 />,
  },
  {
    id: "championship",
    bg: "bg-[#081628]",
    image: "/images/hero_championship.png",
    glow1: "bg-[radial-gradient(ellipse_65%_50%_at_25%_20%,_#163050,_transparent)]",
    glow2: "bg-[radial-gradient(ellipse_50%_40%_at_80%_85%,_#0d2240,_transparent)]",
    pattern: "dot-grid",
    content: <Slide2 />,
  },
  {
    id: "disciplines",
    bg: "bg-[#060e1a]",
    image: "/images/hero_disciplines.png",
    glow1: "bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,_#112240,_transparent)]",
    glow2: "bg-[radial-gradient(ellipse_40%_35%_at_15%_70%,_#0a1e35,_transparent)]",
    pattern: "cross-hatch",
    content: <Slide3 />,
  },
  {
    id: "heritage",
    bg: "bg-[#0a1520]",
    image: "/images/hero_heritage.png",
    glow1: "bg-[radial-gradient(ellipse_60%_45%_at_85%_15%,_#1a2e42,_transparent)]",
    glow2: "bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,_#0e2035,_transparent)]",
    pattern: "horizontal-lines",
    content: <Slide4 />,
  },
];

function PatternOverlay({ type }: { type: string }) {
  if (type === "diagonal-lines") {
    return (
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "22px 22px",
        }}
      />
    );
  }
  if (type === "dot-grid") {
    return (
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    );
  }
  if (type === "cross-hatch") {
    return (
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "32px 32px",
        }}
      />
    );
  }
  if (type === "horizontal-lines") {
    return (
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 100%)",
          backgroundSize: "100% 18px",
        }}
      />
    );
  }
  return null;
}

/* ── Slide 1 — Brand Identity ── */
function Slide1() {
  const affiliations = ["EFI Affiliated", "IOA Recognized", "MYAS / SAI", "AEF Member", "ITPF"];
  return (
    <div className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
      <BlurFade delay={0.05} className="mb-10">
        {/* Triple-ring monogram */}
        <div className="relative w-32 h-32 flex items-center justify-center mx-auto">
          <div className="absolute inset-0 rounded-full border border-[#C9A84C]/15 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-3 rounded-full border border-[#C9A84C]/30" />
          <div className="absolute inset-6 rounded-full border border-[#C9A84C]/50 flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="KEA Logo" className="w-10 h-10 object-contain" />
          </div>
          {/* Orbiting dot */}
          <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.15}>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] font-light text-white leading-[1.05] tracking-wide mb-1">Karnataka</h1>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] font-medium italic text-white leading-[1.05] tracking-wide mb-1">Equestrian</h1>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-[5.5rem] font-light text-white leading-[1.05] tracking-wide mb-7">Association</h1>
      </BlurFade>

      <BlurFade delay={0.25}>
        <div className="flex items-center gap-4 justify-center mb-7">
          <div className="h-px w-10 bg-[#C9A84C]/50" />
          <p className="font-heading text-lg md:text-xl italic text-[#E8D59E]/80 tracking-wide">Governing Equestrian Excellence in Karnataka</p>
          <div className="h-px w-10 bg-[#C9A84C]/50" />
        </div>
      </BlurFade>

      <BlurFade delay={0.3} className="mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {affiliations.map((b) => (
            <span key={b} className="px-4 py-1.5 text-[9px] tracking-[0.18em] uppercase text-[#E8D59E]/55 border border-[#C9A84C]/20 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.35}>
        <div className="flex flex-col sm:flex-row gap-4">
          <ShimmerButton shimmerColor="#C9A84C" background="#C9A84C" className="text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold">
            Become a Member
          </ShimmerButton>
          <Link href="/events" className="px-10 py-4 border border-white/20 text-white/80 text-[10px] tracking-[0.22em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
            Upcoming Events
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}

/* ── Slide 2 — State Championship ── */
function Slide2() {
  return (
    <div className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
      {/* Large background year */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[22vw] font-bold text-white/[0.025] leading-none tracking-tight">2026</span>
      </div>

      <BlurFade delay={0.05}>
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A84C] font-medium">March 2026 · Bangalore</span>
          <div className="h-px w-8 bg-[#C9A84C]" />
        </div>
      </BlurFade>

      <BlurFade delay={0.12}>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-2">Karnataka State</h2>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium italic text-[#C9A84C] leading-[1.05] mb-2">Equestrian</h2>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8">Championship</h2>
      </BlurFade>

      <BlurFade delay={0.2}>
        {/* Event details strip */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { label: "Date", val: "15–17 March 2026" },
            { label: "Venue", val: "Bangalore Turf Club" },
            { label: "Disciplines", val: "All Five" },
          ].map((d) => (
            <div key={d.label} className="text-center">
              <div className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C]/70 mb-1">{d.label}</div>
              <div className="text-sm text-white/80 font-medium">{d.val}</div>
            </div>
          ))}
        </div>
      </BlurFade>

      <BlurFade delay={0.28}>
        <div className="flex flex-col sm:flex-row gap-4">
          <ShimmerButton shimmerColor="#C9A84C" background="#C9A84C" className="text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold">
            Register Now
          </ShimmerButton>
          <Link href="/events" className="px-10 py-4 border border-white/20 text-white/75 text-[10px] tracking-[0.22em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
            View Schedule
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}

/* ── Slide 3 — Five Disciplines ── */
const disciplineList = [
  { num: "01", name: "Dressage", href: "/disciplines/dressage" },
  { num: "02", name: "Show Jumping", href: "/disciplines/show-jumping" },
  { num: "03", name: "Eventing", href: "/disciplines/eventing" },
  { num: "04", name: "Tent Pegging", href: "/disciplines/tent-pegging" },
  { num: "05", name: "Endurance", href: "/disciplines/endurance" },
];

function Slide3() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <BlurFade delay={0.05}>
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A84C]">Karnataka · EFI</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-2">Five</h2>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium italic text-[#C9A84C] leading-[1.05] mb-2">Disciplines,</h2>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8">One Spirit</h2>
            <Link
              href="/disciplines/dressage"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-7 py-3 hover:bg-[#C9A84C] hover:text-[#0B1C2D] transition-all"
            >
              Explore All Disciplines <span>→</span>
            </Link>
          </div>
        </BlurFade>

        {/* Right — discipline list */}
        <BlurFade delay={0.15}>
          <div className="space-y-0 border border-[#C9A84C]/15">
            {disciplineList.map((d, i) => (
              <Link
                key={d.num}
                href={d.href}
                className={`flex items-center justify-between px-6 py-4 group hover:bg-[#C9A84C]/8 transition-colors ${i < disciplineList.length - 1 ? "border-b border-[#C9A84C]/10" : ""}`}
              >
                <div className="flex items-center gap-5">
                  <span className="font-heading text-xs text-[#C9A84C]/40 w-5">{d.num}</span>
                  <span className="font-heading text-xl font-medium text-white/85 group-hover:text-[#C9A84C] transition-colors">{d.name}</span>
                </div>
                <span className="text-[#C9A84C]/30 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all text-sm">→</span>
              </Link>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

/* ── Slide 4 — Heritage ── */
function Slide4() {
  return (
    <div className="flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[20vw] font-bold text-white/[0.02] leading-none">2004</span>
      </div>

      <BlurFade delay={0.12}>
        <div className="flex items-center gap-4 justify-center mb-6">
          <div className="h-px w-10 bg-[#C9A84C]/40" />
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9A84C]/70">Two Decades of Excellence</span>
          <div className="h-px w-10 bg-[#C9A84C]/40" />
        </div>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-2">Governing</h2>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium italic text-[#C9A84C] leading-[1.05] mb-2">Equestrian Sport</h2>
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8">in Karnataka</h2>
      </BlurFade>

      <BlurFade delay={0.22}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/about/history" className="px-10 py-4 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-[#d4b060] transition-colors">
            Our History
          </Link>
          <Link href="/about" className="px-10 py-4 border border-white/20 text-white/75 text-[10px] tracking-[0.22em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
            About KEA
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}

/* ── Main Carousel ── */
const slideVariants = {
  enter: { opacity: 0, scale: 1.04 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
};

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Slide background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id + "-bg"}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`absolute inset-0 ${slide.bg}`} />
          {/* Animated Background Image */}
          <motion.div
            key={slide.id + "-img"}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.45 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlays */}
          <div className={`absolute inset-0 ${slide.glow1} mix-blend-overlay`} />
          <div className={`absolute inset-0 ${slide.glow2} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/80 via-transparent to-[#0B1C2D]/90" />
          <PatternOverlay type={slide.pattern} />
          {/* Noise grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px 200px" }} />
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements that persist */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5" />
      <div className="absolute right-[-5%] top-[-5%] w-[420px] h-[420px] rounded-full border border-[#C9A84C]/8" />
      <div className="absolute left-[-8%] bottom-[-8%] w-[400px] h-[400px] rounded-full border border-[#C9A84C]/5" />
      <div className="absolute left-[-3%] bottom-[-3%] w-[260px] h-[260px] rounded-full border border-[#C9A84C]/7" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent z-10" />

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="relative z-10 w-full flex justify-center"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {slide.content}
        </motion.div>
      </AnimatePresence>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent z-10" />



      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group flex items-center"
          >
            <div className={`transition-all duration-500 ${i === current ? "w-8 h-1.5 bg-[#C9A84C]" : "w-1.5 h-1.5 rounded-full bg-white/25 hover:bg-white/50"}`} />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2">
        <span className="text-[#C9A84C] font-heading text-sm">{String(current + 1).padStart(2, "0")}</span>
        <div className="w-8 h-px bg-white/20" />
        <span className="text-white/30 font-heading text-sm">{String(slides.length).padStart(2, "0")}</span>
      </div>



      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-20">
        <span className="text-[7px] tracking-[0.36em] uppercase text-[#E8D59E]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>
    </section>
  );
}
