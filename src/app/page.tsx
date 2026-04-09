import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Marquee } from "@/components/ui/marquee";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { HeroCarousel } from "@/components/HeroCarousel";

/* ─── Shared ─── */
function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className={`h-px w-8 ${light ? "bg-[#C9A84C]/50" : "bg-[#C9A84C]"}`} />
      <span className={`text-[10px] tracking-[0.22em] uppercase font-medium ${light ? "text-[#C9A84C]/75" : "text-[#C9A84C]"}`}>
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
    <div className="bg-[#071423] py-4 border-y border-[#C9A84C]/10 overflow-hidden">
      <Marquee className="[--duration:38s]" pauseOnHover>
        {affiliationItems.map((item) => (
          <div key={item} className="flex items-center gap-5 mx-6">
            <span className="text-[#C9A84C]/35 text-[6px]">◆</span>
            <span className="text-[9px] tracking-[0.22em] uppercase text-white/30 whitespace-nowrap">{item}</span>
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
    { number: 30, suffix: "+", label: "Years of Excellence" },
    { number: 500, suffix: "+", label: "Registered Members" },
    { number: 5, suffix: "", label: "Equestrian Disciplines" },
    { number: 20, suffix: "+", label: "Annual Events" },
  ];

  return (
    <section id="about" className="relative bg-[#F7F4EF] py-24 lg:py-32 overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A84C18 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-30">
        <div className="absolute top-8 right-8 w-48 h-48 rounded-full border border-[#C9A84C]/20" />
        <div className="absolute top-14 right-14 w-32 h-32 rounded-full border border-[#C9A84C]/15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Intro split */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <BlurFade inView delay={0.1}>
            <SectionLabel>About KEA</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-[#0B1C2D] leading-tight mb-6">
              A Heritage of<br /><span className="italic">Equestrian Excellence</span>
            </h2>
            <p className="text-[#4A5568] leading-relaxed mb-5 text-sm">
              Karnataka has a rich heritage of equestrian sport, rooted in a tradition that spans centuries. Evidence of horse games and equestrian activities resonates through history — from ancient cavalry to royal sport — forming the foundation of our Association.
            </p>
            <p className="text-[#4A5568] leading-relaxed text-sm mb-8">
              The Karnataka Equestrian Association is the apex body governing equestrian sports across Karnataka, affiliated with the Equestrian Federation of India (EFI), the Indian Olympic Association (IOA), and MYAS/SAI.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-7 py-3 hover:bg-[#C9A84C] hover:text-[#0B1C2D] transition-all">
              Learn More <span>→</span>
            </Link>
          </BlurFade>

          <BlurFade inView delay={0.2} className="flex items-center">
            <div className="relative w-full">
              {/* Decorative base and shadow */}
              <div className="absolute -inset-4 border border-[#C9A84C]/10 bg-[#C9A84C]/5 -rotate-2" />
              <div className="relative aspect-[4/5] overflow-hidden group border border-[#EDEAE3]">
                <img 
                  src="/images/about_bond.png" 
                  alt="Equestrian Excellence" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                {/* Overlay Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/90 via-[#0B1C2D]/20 to-transparent p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-heading text-xl italic text-white leading-relaxed mb-4">
                    "Promoting the timeless bond between horse and rider, across every district of Karnataka."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-[#C9A84C]" />
                    <span className="text-[9px] tracking-[0.18em] uppercase text-[#C9A84C]">Karnataka Equestrian Association</span>
                  </div>
                </div>
                {/* Corner accent (static) */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C9A84C] m-4" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C9A84C] m-4 shadow-[0_0_20px_rgba(201,168,76,0.3)]" />
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EDEAE3] mb-20">
          {features.map((f, i) => (
            <BlurFade key={f.title} inView delay={0.08 * i}>
              <div className="bg-white p-8 hover:bg-[#F7F4EF] transition-all duration-300 group h-full relative overflow-hidden">
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="font-heading text-5xl text-[#C9A84C]/12 font-light mb-4 leading-none select-none">{f.num}</div>
                <h3 className="font-heading text-xl font-medium text-[#0B1C2D] mb-3 group-hover:text-[#C9A84C] transition-colors">{f.title}</h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#EDEAE3]">
          {stats.map((s, i) => (
            <BlurFade key={s.label} inView delay={0.08 * i}>
              <div className={`text-center py-10 px-6 relative group ${i < stats.length - 1 ? "border-r border-[#EDEAE3]" : ""}`}>
                {/* Background sweep on hover */}
                <div className="absolute inset-0 bg-[#C9A84C]/4 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="relative z-10">
                  <div className="font-heading text-5xl lg:text-6xl font-light text-[#0B1C2D] mb-2 leading-none">
                    <NumberTicker value={s.number} />
                    {s.suffix}
                  </div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C]">{s.label}</div>
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
      className="relative bg-[#0B1C2D] p-10 hover:bg-[#0f2338] transition-colors duration-300 group cursor-pointer block overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_#C9A84C0a,_transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-12 h-12">
        <div className="absolute top-3 right-3 w-5 h-px bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/50 transition-colors" />
        <div className="absolute top-3 right-3 w-px h-5 bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/50 transition-colors" />
      </div>

      <div className="relative z-10">
        <div className="font-heading text-6xl text-[#C9A84C]/10 font-light leading-none mb-6 select-none group-hover:text-[#C9A84C]/20 transition-colors">{d.id}</div>
        <div className="h-px w-8 bg-[#C9A84C]/40 mb-6 group-hover:w-14 transition-all duration-300" />
        <h3 className="font-heading text-[1.4rem] font-medium text-white mb-4 group-hover:text-[#C9A84C] transition-colors">{d.name}</h3>
        <p className="text-white/40 text-[13px] leading-relaxed mb-6 group-hover:text-white/60 transition-colors">{d.desc}</p>
        <span className="text-[9px] tracking-[0.18em] uppercase text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors flex items-center gap-2">
          Explore Discipline <span className="group-hover:translate-x-1.5 transition-transform inline-block">→</span>
        </span>
      </div>
    </Link>
  );
}

function Disciplines() {
  return (
    <section id="disciplines" className="relative bg-[#0B1C2D] py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/disciplines_bg.png" 
          alt="" 
          className="w-full h-full object-cover opacity-15 grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] via-transparent to-[#0B1C2D]" />
      </div>
      
      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-1"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <BlurFade inView className="mb-16">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel light>The Disciplines</SectionLabel>
              <h2 className="font-heading text-4xl lg:text-5xl font-light text-white leading-tight">
                Five Equestrian<br /><span className="italic">Disciplines</span>
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <div className="font-heading text-7xl font-light text-[#C9A84C]/8 leading-none select-none">05</div>
            </div>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-3 gap-px bg-[#C9A84C]/8 mb-px">
          {disciplines.slice(0, 3).map((d) => <DisciplineCard key={d.id} d={d} />)}
        </div>
        <div className="grid lg:grid-cols-2 gap-px bg-[#C9A84C]/8">
          {disciplines.slice(3).map((d) => <DisciplineCard key={d.id} d={d} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── News ─── */
function News() {
  const news = [
    { category: "Show Jumping", badgeCls: "bg-amber-50 text-amber-700", date: "15 Jan 2026", title: "Prospectus: KEA Show Jumping Championship 2025–2026", excerpt: "The Karnataka Equestrian Association announces the official prospectus for the State Show Jumping Championship. Registration is now open." },
    { category: "Dressage", badgeCls: "bg-blue-50 text-blue-700", date: "20 Dec 2025", title: "Dressage Technical Guidelines 2026 Released", excerpt: "Updated dressage technical guidelines for the 2026 competition season are now available. All riders and trainers are requested to review." },
    { category: "Eventing", badgeCls: "bg-emerald-50 text-emerald-700", date: "15 Dec 2025", title: "Eventing Technical Guidelines 2026", excerpt: "Technical guidelines for the 2026 eventing season have been published, covering all three phases: dressage, cross-country, and show jumping." },
    { category: "Endurance", badgeCls: "bg-rose-50 text-rose-700", date: "01 Dec 2025", title: "Karnataka Endurance Ride 2026 — Prospectus Published", excerpt: "Details for the National One Star Endurance Ride are now available. The event will cover 100 KM over challenging terrain." },
  ];

  return (
    <section id="news" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle corner decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <div className="absolute bottom-8 left-8 w-44 h-44 rounded-full border border-[#C9A84C]/25" />
        <div className="absolute bottom-16 left-16 w-24 h-24 rounded-full border border-[#C9A84C]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Latest Updates</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-[#0B1C2D]">
              News &amp; <span className="italic">Announcements</span>
            </h2>
          </BlurFade>
          <Link href="/events" className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] hover:gap-4 transition-all">
            All News <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <BlurFade key={i} inView delay={0.08 * i}>
              <article className="relative border border-[#EDEAE3] p-8 hover:border-[#C9A84C]/40 hover:shadow-[0_8px_32px_rgba(201,168,76,0.08)] transition-all duration-300 group h-full flex flex-col overflow-hidden">
                {/* Hover top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center justify-between mb-5">
                  <Badge className={`text-[9px] tracking-[0.1em] uppercase font-medium rounded-full border-0 ${item.badgeCls}`}>
                    {item.category}
                  </Badge>
                  <span className="text-[11px] text-[#9CA3AF] tabular-nums">{item.date}</span>
                </div>
                <h3 className="font-heading text-xl font-medium text-[#0B1C2D] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-[13px] leading-relaxed mb-7 flex-1">{item.excerpt}</p>
                <a href="#" className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] flex items-center gap-1.5 hover:gap-3 transition-all mt-auto">
                  Read More <span>→</span>
                </a>
              </article>
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
    { type: "Championship", title: "Karnataka State Equestrian Championship 2026", date: "15–17 March 2026", venue: "Bangalore Turf Club", fee: "₹2,500 per entry", desc: "The premier annual championship bringing together Karnataka's finest equestrians across all five disciplines.", status: "Open" },
    { type: "Regional League", title: "Regional Equestrian League — Karnataka Round", date: "5–7 April 2026", venue: "Palace Grounds, Mysuru", fee: "₹1,800 per entry", desc: "The REL Karnataka qualifier, featuring Dressage and Show Jumping. Part of the national REL circuit.", status: "Open" },
    { type: "Training Camp", title: "Dressage Clinic & Training Camp", date: "20–22 February 2026", venue: "Royal Mysore Academy", fee: "₹3,500 per participant", desc: "An intensive three-day training camp led by EFI-certified instructors, covering fundamentals to advanced.", status: "Upcoming" },
  ];

  return (
    <section id="events" className="relative bg-[#F0EDE6] py-24 lg:py-32 overflow-hidden">
      {/* Cross-hatch pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C9A84C10 0, #C9A84C10 1px, transparent 0, transparent 100%), repeating-linear-gradient(90deg, #C9A84C10 0, #C9A84C10 1px, transparent 0, transparent 100%)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Events &amp; Competitions</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-[#0B1C2D]">
              Upcoming <span className="italic">Events</span>
            </h2>
          </BlurFade>
          <Link href="/events" className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] hover:gap-4 transition-all">
            View All <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <BlurFade key={i} inView delay={0.1 * i}>
              <div className="relative bg-white border border-[#D4CFC4] hover:border-[#C9A84C]/50 hover:shadow-[0_8px_32px_rgba(201,168,76,0.10)] transition-all duration-300 group flex flex-col h-full overflow-hidden">
                {/* Top gold accent bar */}
                <div className="h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8D59E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-block px-3 py-1 text-[9px] tracking-[0.14em] uppercase font-semibold bg-[#0B1C2D] text-[#C9A84C]">{ev.type}</span>
                    <Badge className={`text-[9px] border-0 rounded-full ${ev.status === "Open" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                      {ev.status === "Open" ? "Reg. Open" : "Upcoming"}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[#0B1C2D] leading-snug mb-4 group-hover:text-[#C9A84C] transition-colors">{ev.title}</h3>
                  <div className="space-y-2 mb-5">
                    {[ev.date, ev.venue, ev.fee].map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-[13px] text-[#4A5568]">
                        <span className="text-[#C9A84C] text-[8px] mt-1 shrink-0">◇</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed mb-8 flex-1">{ev.desc}</p>
                  <div className="flex gap-3 mt-auto">
                    <Link href="/contact" className="flex-1 text-center py-3 bg-[#C9A84C] text-[#0B1C2D] text-[9px] tracking-[0.18em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">Register</Link>
                    <Link href="/events" className="flex-1 text-center py-3 border border-[#0B1C2D]/15 text-[#0B1C2D] text-[9px] tracking-[0.18em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">Details</Link>
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
    { initials: "RS", name: "Brig. R.K. Sharma (Retd.)", role: "President", href: "/about/president" },
    { initials: "PR", name: "Col. P.N. Rao (Retd.)", role: "President Elect", href: "/office-bearers/executive-committee" },
    { initials: "AM", name: "Dr. Anand Murthy", role: "Secretary General", href: "/about/secretary" },
    { initials: "PK", name: "Ms. Priya Krishnaswamy", role: "Joint Secretary", href: "/office-bearers/executive-committee" },
  ];

  return (
    <section id="leadership" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Top-right decorative rings */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none">
        <div className="absolute top-10 right-10 w-56 h-56 rounded-full border border-[#C9A84C]/30" />
        <div className="absolute top-20 right-20 w-36 h-36 rounded-full border border-[#C9A84C]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-14">
          <BlurFade inView>
            <SectionLabel>Our Leadership</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-5xl font-light text-[#0B1C2D]">
              Office <span className="italic">Bearers</span>
            </h2>
          </BlurFade>
          <Link href="/office-bearers/executive-committee" className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] hover:gap-4 transition-all">
            View All <span className="text-sm">→</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#EDEAE3]">
          {leaders.map((l, i) => (
            <BlurFade key={l.name} inView delay={0.1 * i}>
              <Link
                href={l.href}
                className={`group flex flex-col items-center text-center p-10 hover:bg-[#F7F4EF] transition-colors relative overflow-hidden ${i < leaders.length - 1 ? "border-r border-[#EDEAE3]" : ""}`}
              >
                {/* Hover bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/50 transition-colors bg-[#F7F4EF] flex items-center justify-center">
                    <span className="font-heading text-xl font-medium text-[#0B1C2D] tracking-wider">{l.initials}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#C9A84C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#0B1C2D] text-[8px]">→</span>
                  </div>
                </div>
                <div className="text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] mb-2">{l.role}</div>
                <div className="font-heading text-base font-medium text-[#0B1C2D] group-hover:text-[#C9A84C] transition-colors">{l.name}</div>
                <div className="text-[10px] text-[#9CA3AF] mt-1.5">Term 2024–2026</div>
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
    <section id="membership" className="relative bg-[#0B1C2D] py-24 lg:py-32 overflow-hidden">
      {/* Diagonal stripes pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,_#1a3050,_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_80%,_#102038,_transparent)]" />
      {/* Decorative rings */}
      <div className="absolute right-[-6%] top-[-15%] w-[460px] h-[460px] rounded-full border border-[#C9A84C]/8" />
      <div className="absolute left-[-6%] bottom-[-15%] w-[340px] h-[340px] rounded-full border border-[#C9A84C]/6" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <BlurFade inView>
          <SectionLabel light>Membership</SectionLabel>
          <h2 className="font-heading text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
            Become a Member of the<br />
            <span className="italic text-[#C9A84C]">Karnataka Equestrian Association</span>
          </h2>
          <p className="text-white/50 text-[13px] leading-relaxed mb-10 max-w-2xl mx-auto">
            Join Karnataka's premier equestrian body and become part of a community dedicated to the promotion and development of equestrian sport across the state.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <ul className="text-left max-w-lg mx-auto mb-12 space-y-3.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[13px] text-white/60">
                <span className="text-[#C9A84C] mt-0.5 shrink-0 text-[10px]">◇</span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ShimmerButton shimmerColor="#C9A84C" background="#C9A84C" className="text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold">
              Apply for Membership
            </ShimmerButton>
            <Link href="/membership" className="px-10 py-4 border border-white/15 text-white/70 text-[10px] tracking-[0.22em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
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

