import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "A visual record of KEA competitions, clinics, and the equestrian community across Karnataka.",
};

const categories = [
  {
    label: "State Championships",
    slug: "championships",
    count: 24,
    year: "2025",
    images: [
      { src: "/images/hero_championship.png", caption: "Karnataka State Championship 2025 — Show Jumping Final" },
      { src: "/images/hero_disciplines.png", caption: "Dressage Grand Prix — Palace Grounds, Bangalore" },
      { src: "/images/events_hero.png", caption: "Medal Ceremony, Karnataka State Championship" },
      { src: "/images/disciplines_bg.png", caption: "Eventing Cross-Country — Cubbon Park Grounds" },
    ],
  },
  {
    label: "Training & Clinics",
    slug: "clinics",
    count: 18,
    year: "2024–2025",
    images: [
      { src: "/images/about_bond.png", caption: "EFI Dressage Clinic — Royal Mysore Academy" },
      { src: "/images/membership_community.png", caption: "Junior Show Jumping Training Camp" },
      { src: "/images/discipline_endurance.png", caption: "Endurance Conditioning Workshop — Chikkaballapur" },
      { src: "/images/discipline_tent_pegging.png", caption: "Tent Pegging Technique Session — Belagavi" },
    ],
  },
  {
    label: "Horses & Facilities",
    slug: "horses",
    count: 31,
    year: "2024–2025",
    images: [
      { src: "/images/hero_heritage.png", caption: "Pre-competition veterinary inspection — Palace Grounds" },
      { src: "/images/hero_identity.png", caption: "Warm-up arena, Bangalore Turf Club" },
      { src: "/images/contact_hero.png", caption: "Horse stabling, Mysuru Championship venue" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <InnerPageShell
      title="Gallery"
      subtitle="Moments from Karnataka's equestrian journey"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
    >
      {/* Intro strip */}
      <section className="bg-white py-10 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">A visual record of KEA's competitions, clinics, and the equestrian community across Karnataka.</p>
          <span className="shrink-0 text-[10px] tracking-[0.14em] uppercase text-[#9CA3AF]">
            {categories.reduce((sum, c) => sum + c.count, 0)}+ photographs
          </span>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, catIdx) => (
        <section key={cat.slug} className="bg-[#F7F4EF] py-16 border-b border-[#EDEAE3] last:border-0">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <BlurFade delay={0.1} inView>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-6 bg-[#C9A84C]" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] font-medium">{cat.year}</span>
                  </div>
                  <h2 className="font-heading text-2xl font-light text-[#0B1C2D]">{cat.label}</h2>
                </div>
                <span className="text-[10px] tracking-[0.12em] uppercase text-[#9CA3AF] border border-[#EDEAE3] px-3 py-1">{cat.count} photos</span>
              </div>
            </BlurFade>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {cat.images.map((item, i) => (
                <BlurFade key={i} delay={0.1 + i * 0.05} inView>
                  <div className="relative group overflow-hidden aspect-[4/3] cursor-pointer">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-[#0B1C2D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                      <p className="text-white text-[11px] leading-snug">{item.caption}</p>
                    </div>
                    {/* Corner accent */}
                    <div className="absolute top-3 left-3 w-4 h-px bg-[#C9A84C]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 left-3 w-px h-4 bg-[#C9A84C]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Submit photos CTA */}
      <section className="relative bg-[#0B1C2D] py-14 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-xl font-light text-white mb-2">Share Your <span className="italic">Photographs</span></h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">
                Members and event photographers can submit photographs for inclusion in the KEA Gallery. High-resolution images from KEA-sanctioned events are welcome.
              </p>
            </div>
          </BlurFade>
          <a href="mailto:info@karnatakaequestrian.in" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
            Submit Photos →
          </a>
        </div>
      </section>
    </InnerPageShell>
  );
}
