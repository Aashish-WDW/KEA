import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HeroCarousel } from "@/components/HeroCarousel";
import ShaderBackground from "@/components/ShaderBackground";

/* ─── Shared ─── */
function SectionLabel({ children, light = false, center = false }: { children: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3.5 mb-5 ${center ? "justify-center" : ""}`}>
      <div className={`h-px w-8 opacity-70 ${light ? "bg-[#B59972]" : "bg-[#A54D25]"}`} />
      <span className={`font-heading text-[14px] tracking-[0.06em] uppercase ${light ? "text-[#B59972]" : "text-[#A54D25]"}`}>
        {children}
      </span>
    </div>
  );
}

/* ─── Affiliation Marquee ─── */
const affiliationItems = [
  "Equestrian Federation of India",
  "Indian Olympic Association",
  "Ministry of Youth Affairs & Sports",
  "Asian Equestrian Federation",
  "International Tent Pegging Federation",
  "Karnataka Olympic Association",
  "FEI — Fédération Équestre Internationale",
];

function AffiliationStrip() {
  return (
    <div className="bg-[#A54D25] text-[#EDECE8] overflow-hidden">
      <Marquee className="[--duration:50s] [--gap:0px] p-0" pauseOnHover>
        {affiliationItems.map((item) => (
          <div key={item} className="flex items-center py-[22px]">
            <span className="font-heading text-[15px] tracking-[0.08em] uppercase whitespace-nowrap">{item}</span>
            <span className="text-[#1D150C] mx-9">+</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

/* ─── About ─── */
function About() {
  const features = [
    { num: "01", title: "Excellence", desc: "Committed to the highest standards of equestrian sport, training, and competition at state and national levels." },
    { num: "02", title: "Our Mission", desc: "To develop, promote, and govern equestrian disciplines across Karnataka while nurturing the next generation of riders." },
    { num: "03", title: "Sport Development", desc: "Organising clinics, competitions, and training programmes that elevate the quality of equestrian sport in the state." },
    { num: "04", title: "Community", desc: "Building a vibrant equestrian community across Karnataka's districts, fostering camaraderie and mutual growth." },
  ];

  const stats = [
    { number: 10, suffix: "+", label: "Years of Excellence" },
    { number: 100, suffix: "+", label: "Registered Members" },
    { number: 5, suffix: "", label: "Equestrian Disciplines" },
    { number: 20, suffix: "+", label: "Events" },
  ];

  return (
    <section id="about" className="relative bg-[#EDECE8] py-24 lg:py-32 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle, #FA712A18 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-30">
        <div className="absolute top-8 right-8 w-48 h-48 rounded-full border border-[#FA712A]/20" />
        <div className="absolute top-14 right-14 w-32 h-32 rounded-full border border-[#FA712A]/15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro split */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <BlurFade inView delay={0.1}>
            <SectionLabel>About KEA</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#1D150C] leading-tight mb-6">
              A Heritage of<br /><span className="italic">Equestrian Excellence</span>
            </h2>
            <p className="text-[#4E4136] leading-relaxed mb-5 text-sm">
              Karnataka has a rich heritage of equestrian sport, rooted in a tradition that spans centuries. Evidence of horse games and equestrian activities resonates through history — from ancient cavalry to royal sport — forming the foundation of our Association.
            </p>
            <p className="text-[#4E4136] leading-relaxed text-sm mb-8">
              The Karnataka Equestrian Association is the apex body governing equestrian sports across Karnataka, affiliated with the Equestrian Federation of India (EFI), the Karnataka Olympic Association (KOA), and MYAS.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] border border-[#FA712A]/40 px-7 py-3 hover:bg-[#B99A3D] hover:text-[#1D150C] transition-all">
              Learn More <span>→</span>
            </Link>
          </BlurFade>

          <BlurFade inView delay={0.2} className="flex items-center">
            <div className="relative w-full">
              {/* Decorative base and shadow */}
              <div className="absolute -inset-4 border border-[#FA712A]/10 bg-[#FA712A]/5 -rotate-2" />
              <div className="relative aspect-[4/5] overflow-hidden group border border-[#DCD6CB]">
                <img 
                  src="/images/about_bond.jpg" 
                  alt="Equestrian Excellence" 
                  className="w-full h-full object-cover scale-75 transition-transform duration-1000 group-hover:scale-[0.85]"
                />
                {/* Overlay Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D150C]/90 via-[#1D150C]/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-heading text-xl italic text-white leading-relaxed mb-4">
                    "Promoting the timeless bond between horse and rider, across every district of Karnataka."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-[#B99A3D]" />
                    <span className="font-heading text-[13px] tracking-[0.06em] uppercase text-[#FA712A]">Karnataka Equestrian Association</span>
                  </div>
                </div>
                {/* Corner accent (static) */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FA712A] m-4" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FA712A] m-4 shadow-[0_0_20px_rgba(250,113,42,0.3)]" />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#DCD6CB] mb-20">
          {features.map((f, i) => (
            <BlurFade key={f.title} inView delay={0.08 * i}>
              <div className="bg-white p-8 hover:bg-[#EDECE8] transition-all duration-300 group h-full relative overflow-hidden">
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B99A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="font-heading text-5xl text-[#FA712A]/12 font-light mb-4 leading-none select-none">{f.num}</div>
                <h3 className="font-heading text-xl font-medium text-[#1D150C] mb-3 group-hover:text-[#FA712A] transition-colors">{f.title}</h3>
                <p className="text-[#6E6155] text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#DCD6CB]">
          {stats.map((s, i) => (
            <BlurFade key={s.label} inView delay={0.08 * i}>
              <div className={`text-center py-10 px-6 relative group ${i < stats.length - 1 ? "border-r border-[#DCD6CB]" : ""}`}>
                {/* Background sweep on hover */}
                <div className="absolute inset-0 bg-[#FA712A]/4 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="relative z-10">
                  <div className="font-heading text-5xl lg:text-6xl font-light text-[#1D150C] mb-2 leading-none">
                    <NumberTicker value={s.number} />
                    {s.suffix}
                  </div>
                  <div className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A]">{s.label}</div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Disciplines ─── */
const disciplines = [
  { id: "01", name: "Dressage", slug: "dressage", desc: 'Often described as "ballet on horseback," dressage tests horse and rider harmony through a series of predetermined movements.' },
  { id: "02", name: "Show Jumping", slug: "show-jumping", desc: "A timed event where horse and rider navigate a course of obstacles, testing agility, speed, and precision." },
  { id: "03", name: "Eventing", slug: "eventing", desc: "A three-phase competition combining dressage, cross-country, and show jumping — the ultimate test of versatility." },
  { id: "04", name: "Tent Pegging", slug: "tent-pegging", desc: "A mounted sport of ancient cavalry origin where riders pick up ground targets with a lance at full gallop." },
  { id: "05", name: "Endurance", slug: "endurance", desc: "Long-distance competition testing the stamina and fitness of horse and rider over varied terrain." },
];

function DisciplineCard({ d }: { d: typeof disciplines[0] }) {
  return (
    <Link
      href={`/disciplines/${d.slug}`}
      className="relative bg-[#0F0F0F] p-10 hover:bg-[linear-gradient(90deg,rgb(250_113_42/.14),transparent)] transition-colors duration-300 group cursor-pointer block overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_#FA712A0a,_transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-3 right-3 w-5 h-px bg-[#FA712A]/20 group-hover:bg-[#FA712A]/50 transition-colors" />
        <div className="absolute top-3 right-3 w-px h-5 bg-[#FA712A]/20 group-hover:bg-[#FA712A]/50 transition-colors" />
      </div>

      <div className="relative z-10">
        <div className="font-heading text-6xl text-[#FA712A]/10 font-light leading-none mb-6 select-none group-hover:text-[#FA712A]/20 transition-colors">{d.id}</div>
        <div className="h-px w-8 bg-[#FA712A]/40 mb-6 group-hover:w-14 transition-all duration-300" />
        <h3 className="font-heading text-[1.4rem] font-medium text-white mb-4 group-hover:text-[#FA712A] transition-colors">{d.name}</h3>
        <p className="text-white/40 text-[13px] leading-relaxed mb-6 group-hover:text-white/60 transition-colors">{d.desc}</p>
        <span className="font-heading text-[13px] tracking-[0.06em] uppercase text-[#FA712A]/50 group-hover:text-[#FA712A] transition-colors flex items-center gap-2">
          Explore Discipline <span className="group-hover:translate-x-1.5 transition-transform inline-block">→</span>
        </span>
      </div>
    </Link>
  );
}

function Disciplines() {
  return (
    <section
      id="disciplines"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "radial-gradient(900px 520px at 90% 0%, rgb(165 77 37 / .4), transparent), #0F0F0F" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/disciplines_bg.png" 
          alt="" 
          className="w-full h-full object-cover opacity-15 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-transparent to-[#0F0F0F]/60" />
      </div>
      
      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-1"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #FA712A 0, #FA712A 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <BlurFade inView className="mb-16">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel light>The Disciplines</SectionLabel>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                Five Equestrian<br /><span className="italic">Disciplines</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <div className="font-heading text-7xl font-light text-[#FA712A]/8 leading-none select-none">05</div>
            </div>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-3 gap-px bg-[#FA712A]/8 mb-px">
          {disciplines.slice(0, 3).map((d) => <DisciplineCard key={d.id} d={d} />)}
        </div>
        <div className="grid lg:grid-cols-2 gap-px bg-[#FA712A]/8">
          {disciplines.slice(3).map((d) => <DisciplineCard key={d.id} d={d} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── News ─── */
function News() {
  const news = [
    { category: "SportsZ News", badgeCls: "bg-[#B99A3D]/15 text-[#7A6420]", date: "21 May 2026", title: "Karnataka State Equestrian Competition at Embassy International Riding School", excerpt: "A state-level equestrian event featuring dressage and show jumping will take place on May 24, 2026, at Embassy International Riding School in Bengaluru.", href: "https://sportsz.news/news/karnataka-state-equestrian-competition-at-embassy-international-riding-school/" },
    { category: "BizNews Daily", badgeCls: "bg-[#A54D25]/12 text-[#A54D25]", date: "21 May 2026", title: "Karnataka State Equestrian Competition at Embassy International Riding School", excerpt: "A state-level equestrian event featuring dressage and show jumping will take place on May 24, 2026, at Embassy International Riding School in Bengaluru.", href: "https://biznewsdaily.com/news/karnataka-state-equestrian-competition-at-embassy-international-riding-school/" },
    { category: "Couture Fashion", badgeCls: "bg-[#B59972]/20 text-[#5E4A2E]", date: "21 May 2026", title: "Karnataka State Equestrian Competition at Embassy International Riding School", excerpt: "A state-level equestrian event featuring dressage and show jumping will take place on May 24, 2026, at Embassy International Riding School in Bengaluru.", href: "https://couturefashion.net/news/karnataka-state-equestrian-competition-at-embassy-international-riding-school/" },
    { category: "Business News For Profit", badgeCls: "bg-[#1D150C]/8 text-[#1D150C]", date: "21 May 2026", title: "Karnataka State Equestrian Competition at Embassy International Riding School", excerpt: "A state-level equestrian event featuring dressage and show jumping will take place on May 24, 2026, at Embassy International Riding School in Bengaluru.", href: "https://businessnewsforprofit.com/news/karnataka-state-equestrian-competition-at-embassy-international-riding-school/" },
    { category: "Business News This Week", badgeCls: "bg-[#D9602A]/12 text-[#B2461A]", date: "21 May 2026", title: "Karnataka State Equestrian Competition at Embassy International Riding School", excerpt: "A state-level equestrian event featuring dressage and show jumping will take place on May 24, 2026, at Embassy International Riding School in Bengaluru.", href: "https://businessnewsthisweek.com/news/karnataka-state-equestrian-competition-at-embassy-international-riding-school/" },
  ];

  return (
    <section id="news" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle corner decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <div className="absolute bottom-8 left-8 w-44 h-44 rounded-full border border-[#FA712A]/25" />
        <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full border border-[#FA712A]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Latest Updates</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#1D150C]">
              News &amp; <span className="italic">Announcements</span>
            </h2>
          </BlurFade>
          <Link href="/events" className="hidden sm:flex items-center gap-2 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] hover:gap-4 transition-all">
            All News <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <BlurFade key={i} inView delay={0.08 * i}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
              <article className="relative border border-[#DCD6CB] p-8 hover:border-[#FA712A]/40 hover:shadow-[0_8px_32px_rgba(250,113,42,0.08)] transition-all duration-300 group h-full flex flex-col overflow-hidden">
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#B99A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center justify-between mb-5">
                  <Badge className={`font-heading text-[13px] tracking-[0.06em] uppercase font-medium rounded-full border-0 ${item.badgeCls}`}>
                    {item.category}
                  </Badge>
                  <span className="text-[11px] text-[#9A8C7C] tabular-nums">{item.date}</span>
                </div>
                <h3 className="font-heading text-xl font-medium text-[#1D150C] leading-snug mb-3 group-hover:text-[#FA712A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#6E6155] text-[13px] leading-relaxed mb-7 flex-1">{item.excerpt}</p>
                <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] flex items-center gap-1.5 group-hover:gap-3 transition-all mt-auto">
                  Read More <span>→</span>
                </span>
              </article>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Events ─── */
function Events() {
  const events = [
    { type: "Competition", title: "Karnataka State Equestrian Competition", date: "24th May 2026", venue: "Embassy International Riding School", fee: "₹1,000 per entry", desc: "", status: "Open" },
    { type: "Championship", title: "Karnataka State Dressage Championship", date: "TBC", venue: "TBC", fee: "TBC", desc: "", status: "TBC" },
    { type: "Championship", title: "Karnataka State Show Jumping Championship", date: "TBC", venue: "TBC", fee: "TBC", desc: "", status: "TBC" },
    { type: "Championship", title: "Karnataka State Eventing Championship", date: "TBC", venue: "TBC", fee: "TBC", desc: "", status: "TBC" },
    { type: "Championship", title: "Karnataka State Tent Pegging Championship", date: "TBC", venue: "TBC", fee: "TBC", desc: "", status: "TBC" },
    { type: "Championship", title: "Karnataka State Endurance Riding Championship", date: "TBC", venue: "TBC", fee: "TBC", desc: "", status: "TBC" },
  ];

  return (
    <section id="events" className="relative bg-[#E6E2DA] py-24 lg:py-32 overflow-hidden">
      {/* Cross-hatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #FA712A10 0, #FA712A10 1px, transparent 0, transparent 100%), repeating-linear-gradient(90deg, #FA712A10 0, #FA712A10 1px, transparent 0, transparent 100%)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Events &amp; Competitions</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#1D150C]">
              Upcoming <span className="italic">Events</span>
            </h2>
          </BlurFade>
          <Link href="/events" className="hidden sm:flex items-center gap-2 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] hover:gap-4 transition-all">
            View All <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <BlurFade key={i} inView delay={0.1 * i}>
              <div className="relative bg-white border border-[#C9BFB0] hover:border-[#FA712A]/50 hover:shadow-[0_8px_32px_rgba(250,113,42,0.10)] transition-all duration-300 group flex flex-col h-full overflow-hidden">
                {/* Top gold accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#FA712A] to-[#F6B48A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-block px-3 py-1 font-heading text-[13px] tracking-[0.06em] uppercase border border-[#A54D25]/35 text-[#A54D25] bg-[#A54D25]/[0.06]">{ev.type}</span>
                    <Badge className={`text-[9px] border-0 rounded-full ${ev.status === "Open" ? "bg-[#FA712A]/15 text-[#A54D25]" : ev.status === "TBC" ? "bg-[#1D150C]/8 text-[#6E6155]" : "bg-[#B99A3D]/15 text-[#7A6420]"}`}>
                      {ev.status === "Open" ? "Reg. Open" : ev.status === "TBC" ? "TBC" : "Upcoming"}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[#1D150C] leading-snug mb-4 group-hover:text-[#FA712A] transition-colors">{ev.title}</h3>
                  <div className="space-y-2 mb-5">
                    {[ev.date, ev.venue, ev.fee].map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-[13px] text-[#4E4136]">
                        <span className="text-[#FA712A] text-[8px] mt-1 shrink-0">◇</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6E6155] text-[13px] leading-relaxed mb-8 flex-1">{ev.desc}</p>
                  <div className="flex gap-3 mt-auto">
                    <Link href="/contact" className="flex-1 text-center py-3 bg-[#B99A3D] text-[#1D150C] font-heading text-[13px] tracking-[0.06em] uppercase font-semibold hover:bg-[#FA712A] transition-colors">Register</Link>
                    <Link href="/events" className="flex-1 text-center py-3 border border-[#1D150C]/15 text-[#1D150C] font-heading text-[13px] tracking-[0.06em] uppercase hover:border-[#FA712A] hover:text-[#FA712A] transition-colors">Details</Link>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Leadership ─── */
function Leadership() {
  const leaders = [
    { initials: "RS", name: "Mr. Rudrapratap Singh", role: "President", href: "/about/president" },
    { initials: "NM", name: "Mr. Navaneet Murugesh", role: "Secretary General", href: "/about/secretary" },
    { initials: "JB", name: "Ms. Judith Bidappa", role: "Joint Secretary", href: "/office-bearers/executive-committee" },
  ];

  return (
    <section id="leadership" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Top-right decorative rings */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-56 h-56 rounded-full border border-[#FA712A]/30" />
        <div className="absolute top-20 right-20 w-36 h-36 rounded-full border border-[#FA712A]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Our Leadership</SectionLabel>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#1D150C]">
              Office <span className="italic">Bearers</span>
            </h2>
          </BlurFade>
          <Link href="/office-bearers/executive-committee" className="hidden sm:flex items-center gap-2 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] hover:gap-4 transition-all">
            View All <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#DCD6CB]">
          {leaders.map((l, i) => (
            <BlurFade key={l.name} inView delay={0.1 * i}>
              <Link
                href={l.href}
                className={`group flex flex-col items-center text-center p-10 hover:bg-[#EDECE8] transition-colors relative overflow-hidden ${i < leaders.length - 1 ? "border-r border-[#DCD6CB]" : ""}`}
              >
                {/* Hover bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B99A3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-[#DCD6CB] group-hover:border-[#FA712A]/50 transition-colors bg-[#EDECE8] flex items-center justify-center">
                    <span className="font-heading text-xl font-medium text-[#1D150C] tracking-wider">{l.initials}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#B99A3D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#1D150C] text-[8px]">→</span>
                  </div>
                </div>
                <div className="font-heading text-[13px] tracking-[0.06em] uppercase text-[#FA712A] mb-2">{l.role}</div>
                <div className="font-heading text-base font-medium text-[#1D150C] group-hover:text-[#FA712A] transition-colors">{l.name}</div>
                <div className="text-[10px] text-[#9A8C7C] mt-1.5">Term 2024–2029</div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Membership CTA ─── */
function MembershipCTA() {
  const benefits = [
    "Participate in state and national equestrian competitions",
    "Access to EFI technical guidelines and training resources",
    "Represent Karnataka at national and international events",
    "Voting rights and governance participation in KEA",
  ];

  return (
    <section
      id="membership"
      className="relative isolate py-24 lg:py-32 overflow-hidden bg-[#1D150C] text-[#EDECE8]"
    >
      {/* Soon hero background: animated aurora shader + the same darkening overlay */}
      <ShaderBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "linear-gradient(100deg, rgb(29 21 12 / .92) 0%, rgb(29 21 12 / .55) 38%, rgb(29 21 12 / .05) 75%), radial-gradient(ellipse at 50% 120%, rgb(15 15 15 / .6), transparent 60%)" }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <BlurFade inView>
          <SectionLabel light center>Membership</SectionLabel>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Become a Member of the<br />
            <span>Karnataka Equestrian Association</span>
          </h2>
          <p className="text-[#EDECE8]/85 text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
            Join Karnataka's premier equestrian body and become part of a community dedicated to the promotion and development of equestrian sport across the state.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <ul className="text-left max-w-lg mx-auto mb-12 space-y-3.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-[#EDECE8]/85">
                <span className="text-[#B99A3D] mt-0.5 shrink-0">+</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:secretariat@kea.org.in">
              <ShimmerButton shimmerColor="#EDECE8" background="#B99A3D" borderRadius="2px" className="text-[#1D150C] font-heading text-[16px] tracking-[0.05em] uppercase px-[30px] py-[17px] hover:-translate-y-0.5">
                Apply for Membership
              </ShimmerButton>
            </a>
            <Link href="/membership" className="px-1 pt-[17px] pb-[15px] border-b border-[#EDECE8]/40 text-[#EDECE8] font-heading text-[16px] tracking-[0.05em] uppercase hover:text-[#B99A3D] hover:border-[#B99A3D] transition-colors">
              Membership Types
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <AffiliationStrip />
      <About />
      <Disciplines />
      <News />
      <Events />
      <Leadership />
      <MembershipCTA />
    </main>
  );
}

