import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Competitions",
  description: "Upcoming equestrian events, championships, and training camps in Karnataka. View the 2026 competition calendar and register for KEA events.",
};

const events = [
  {
    type: "Championship",
    discipline: "All Disciplines",
    disciplineColor: "bg-[#0B1C2D] text-[#C9A84C]",
    title: "Karnataka State Equestrian Championship 2026",
    date: "15–17 March 2026",
    venue: "Bangalore Turf Club, Bangalore",
    fee: "₹2,500 per entry",
    contact: "+91 80 0000 0000",
    desc: "The premier annual championship bringing together Karnataka's finest equestrians across all five disciplines. State title holders qualify for EFI national events. Open to all current KEA members.",
    status: "Registration Open",
    statusColor: "bg-green-50 text-green-700",
  },
  {
    type: "Regional League",
    discipline: "Dressage · Show Jumping",
    disciplineColor: "bg-blue-50 text-blue-700",
    title: "Regional Equestrian League — Karnataka Round",
    date: "5–7 April 2026",
    venue: "Palace Grounds, Mysuru",
    fee: "₹1,800 per entry",
    contact: "+91 80 0000 0001",
    desc: "The EFI Regional Equestrian League (REL) Karnataka qualifier, featuring Dressage and Show Jumping. Results contribute to national REL standings. Mandatory EFI rider and horse registration required.",
    status: "Registration Open",
    statusColor: "bg-green-50 text-green-700",
  },
  {
    type: "Training Camp",
    discipline: "Dressage",
    disciplineColor: "bg-blue-50 text-blue-700",
    title: "Dressage Clinic & Intensive Training Camp",
    date: "20–22 February 2026",
    venue: "Royal Mysore Equestrian Academy, Bangalore",
    fee: "₹3,500 per participant",
    contact: "+91 80 0000 0002",
    desc: "A three-day intensive training camp led by EFI-certified dressage instructors. Covering Preliminary through Medium level tests. Limited to 20 horse-and-rider combinations.",
    status: "Upcoming",
    statusColor: "bg-amber-50 text-amber-700",
  },
  {
    type: "District Qualifier",
    discipline: "Show Jumping",
    disciplineColor: "bg-amber-50 text-amber-700",
    title: "Show Jumping League — District Qualifier",
    date: "10–11 May 2026",
    venue: "Cubbon Park Equestrian Grounds, Bangalore",
    fee: "₹1,200 per entry",
    contact: "+91 80 0000 0003",
    desc: "District-level show jumping qualifier for the KEA State Championship. Heights: 90cm, 1.10m, and 1.20m. Top three from each height category qualify for the state finals.",
    status: "Upcoming",
    statusColor: "bg-amber-50 text-amber-700",
  },
  {
    type: "Championship",
    discipline: "Tent Pegging",
    disciplineColor: "bg-red-50 text-red-700",
    title: "All-Karnataka Tent Pegging Championship 2026",
    date: "7–8 June 2026",
    venue: "Bangalore Cantonment Grounds, Bangalore",
    fee: "₹1,000 per rider",
    contact: "+91 80 0000 0004",
    desc: "The annual All-Karnataka Tent Pegging Championship featuring individual lance, team lance, and sword events. Open to military and civilian riders. EFI registration required for national ranking points.",
    status: "Upcoming",
    statusColor: "bg-amber-50 text-amber-700",
  },
  {
    type: "Endurance Ride",
    discipline: "Endurance",
    disciplineColor: "bg-emerald-50 text-emerald-700",
    title: "Karnataka Endurance Ride 2026",
    date: "19–20 July 2026",
    venue: "Nandi Hills Equestrian Trail, Chikkaballapur",
    fee: "₹2,000 per horse-rider",
    contact: "+91 80 0000 0005",
    desc: "Karnataka's premier endurance riding event. Distances: 40km (Introductory), 80km (National Star). Mandatory pre-ride veterinary inspection. Horse welfare checks at every control point.",
    status: "Upcoming",
    statusColor: "bg-amber-50 text-amber-700",
  },
];

export default function EventsPage() {
  return (
    <InnerPageShell
      title="Events & Competitions"
      subtitle="Upcoming equestrian events in Karnataka"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
    >
      {/* Intro strip */}
      <section className="bg-white py-10 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm">All events are subject to EFI technical guidelines. Current KEA membership required for entry.</p>
          <Link href="/membership" className="shrink-0 text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] hover:gap-2 flex items-center gap-1.5 transition-all">
            Become a Member →
          </Link>
        </div>
      </section>

      {/* Event listings */}
      <section className="relative bg-[#F7F4EF] py-20 lg:py-28 overflow-hidden">
        {/* Championship Atmosphere Background */}
        <div className="absolute inset-0 z-0 opacity-15 grayscale brightness-110">
          <img 
            src="/images/events_hero.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF] via-transparent to-[#F7F4EF]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">2026 Calendar</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Upcoming <span className="italic">Events</span></h2>
          </BoxReveal>

          <div className="space-y-6">
            {events.map((ev, i) => (
              <BlurFade key={i} delay={0.15 + i * 0.06} inView>
                <MagicCard className="bg-white border border-[#D4CFC4] hover:border-[#C9A84C]/40 hover:shadow-[0_4px_24px_rgba(201,168,76,0.07)] transition-all duration-300 group">
                  <div className="p-8 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-block px-3 py-1 text-[9px] tracking-[0.12em] uppercase font-semibold bg-[#0B1C2D] text-[#C9A84C]">{ev.type}</span>
                    <span className={`inline-block px-3 py-1 text-[9px] tracking-[0.1em] uppercase font-medium rounded-full ${ev.disciplineColor}`}>{ev.discipline}</span>
                    <span className={`inline-block px-3 py-1 text-[9px] tracking-[0.1em] uppercase font-medium rounded-full ml-auto ${ev.statusColor}`}>{ev.status}</span>
                  </div>

                  <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                    <div>
                      <h3 className="font-heading text-xl lg:text-2xl font-medium text-[#0B1C2D] group-hover:text-[#C9A84C] transition-colors mb-4">{ev.title}</h3>
                      <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6">{ev.desc}</p>
                      <div className="flex flex-wrap gap-6">
                        {[
                          { icon: "◇", label: ev.date },
                          { icon: "◇", label: ev.venue },
                          { icon: "◇", label: ev.fee },
                          { icon: "◇", label: ev.contact },
                        ].map((detail, j) => (
                          <div key={j} className="flex items-center gap-2 text-[13px] text-[#4A5568]">
                            <span className="text-[#C9A84C] text-[8px]">{detail.icon}</span>
                            {detail.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[160px]">
                      <Link href="/contact" className="block text-center py-3 bg-[#C9A84C] text-[#0B1C2D] text-[9px] tracking-[0.16em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
                        Register Now
                      </Link>
                      <Link href="/contact" className="block text-center py-3 border border-[#0B1C2D]/18 text-[#0B1C2D] text-[9px] tracking-[0.16em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                        Enquire
                      </Link>
                    </div>
                  </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="relative bg-[#0B1C2D] py-14 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={12} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-xl font-light text-white mb-3">Important <span className="italic">Notes</span></h3>
              <AnimatedList className="space-y-2.5" delay={0.15} stagger={0.08}>
                {[
                  "All competitions follow EFI Technical Guidelines for the relevant discipline.",
                  "EFI Rider ID and Horse Registration are mandatory for events contributing to national rankings.",
                  "Current KEA membership must be held at the time of entry.",
                  "All horses must carry a valid EFI horse passport and be up to date on vaccinations.",
                  "Registration deadlines are strictly observed. Late entries may not be accepted.",
                ].map((note, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[12px] text-white/50">
                    <span className="text-[#C9A84C] text-[8px] mt-1 shrink-0">◇</span>
                    {note}
                  </div>
                ))}
              </AnimatedList>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-xl font-light text-white mb-3">Want to <span className="italic">host an event?</span></h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">Clubs and academies can apply to host KEA-sanctioned events. Contact the Secretariat for venue approval and event licensing.</p>
              <Link href="/contact" className="inline-block px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors w-fit">
                Contact Secretariat →
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
