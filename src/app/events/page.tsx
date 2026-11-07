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
    type: "Competition",
    discipline: "All Disciplines",
    disciplineColor: "bg-[#A54D25]/[0.08] text-[#A54D25]",
    title: "Karnataka State Equestrian Competition",
    date: "24th May 2026",
    venue: "Embassy International Riding School",
    fee: "₹1,000 per entry",
    contact: "",
    desc: "",
    status: "Registration Open",
    statusColor: "bg-[#FA712A]/15 text-[#A54D25]",
  },
  {
    type: "Championship",
    discipline: "Dressage",
    disciplineColor: "bg-[#E6E1D7] text-[#7A6A4F]",
    title: "Karnataka State Dressage Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-[#1D150C]/8 text-[#6E6155]",
  },
  {
    type: "Championship",
    discipline: "Show Jumping",
    disciplineColor: "bg-[#F3E2D6] text-[#A54D25]",
    title: "Karnataka State Show Jumping Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-[#1D150C]/8 text-[#6E6155]",
  },
  {
    type: "Championship",
    discipline: "Eventing",
    disciplineColor: "bg-[#EFE6CF] text-[#8A7128]",
    title: "Karnataka State Eventing Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-[#1D150C]/8 text-[#6E6155]",
  },
  {
    type: "Championship",
    discipline: "Tent Pegging",
    disciplineColor: "bg-[#F6DCCB] text-[#C2501C]",
    title: "Karnataka State Tent Pegging Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-[#1D150C]/8 text-[#6E6155]",
  },
  {
    type: "Championship",
    discipline: "Endurance",
    disciplineColor: "bg-[#E8DDD0] text-[#5A3A22]",
    title: "Karnataka State Endurance Riding Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-[#1D150C]/8 text-[#6E6155]",
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
      <section className="bg-white py-10 border-b border-[#DCD6CB]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6E6155] text-sm">All events are subject to EFI technical guidelines. Current KEA membership required for entry.</p>
          <a href="mailto:secretariat@kea.org.in" className="shrink-0 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] hover:gap-2 flex items-center gap-1.5 transition-all">
            Become a Member →
          </a>
        </div>
      </section>

      {/* Event listings */}
      <section className="relative bg-[#EDECE8] py-20 lg:py-28 overflow-hidden">
        {/* Championship Atmosphere Background */}
        <div className="absolute inset-0 z-0 opacity-15 grayscale brightness-110">
          <img 
            src="/images/events_hero.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EDECE8] via-transparent to-[#EDECE8]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B99A3D]" />
              <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] font-medium">2026 Calendar</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] mb-14">Upcoming <span className="italic">Events</span></h2>
          </BoxReveal>

          <div className="space-y-6">
            {events.map((ev, i) => (
              <BlurFade key={i} delay={0.15 + i * 0.06} inView>
                <MagicCard className="bg-white border border-[#C9BFB0] hover:border-[#FA712A]/40 hover:shadow-[0_4px_24px_rgba(250,113,42,0.07)] transition-all duration-300 group">
                  <div className="p-8 relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-block px-3 py-1 font-heading text-[13px] tracking-[0.06em] uppercase border border-[#A54D25]/35 text-[#A54D25] bg-[#A54D25]/[0.06]">{ev.type}</span>
                    <span className={`inline-block px-3 py-1 font-heading text-[13px] tracking-[0.06em] uppercase font-medium rounded-full ${ev.disciplineColor}`}>{ev.discipline}</span>
                    <span className={`inline-block px-3 py-1 font-heading text-[13px] tracking-[0.06em] uppercase font-medium rounded-full ml-auto ${ev.statusColor}`}>{ev.status}</span>
                  </div>

                  <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                    <div>
                      <h3 className="font-heading text-xl lg:text-2xl font-medium text-[#1D150C] group-hover:text-[#FA712A] transition-colors mb-4">{ev.title}</h3>
                      {ev.desc && ev.desc !== "TBC" && <p className="text-[#6E6155] text-[13px] leading-relaxed mb-6">{ev.desc}</p>}
                      <div className="flex flex-wrap gap-6">
                        {[
                          { icon: "◇", label: ev.date },
                          { icon: "◇", label: ev.venue },
                          { icon: "◇", label: ev.fee },
                          { icon: "◇", label: ev.contact },
                        ].filter((d) => d.label).map((detail, j) => (
                          <div key={j} className="flex items-center gap-2 text-[13px] text-[#4E4136]">
                            <span className="text-[#FA712A] text-[8px]">{detail.icon}</span>
                            {detail.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[160px]">
                      <Link href="/contact" className="block text-center py-3 bg-[#B99A3D] text-[#1D150C] font-heading text-[13px] tracking-[0.06em] uppercase font-semibold hover:bg-[#FA712A] transition-colors">
                        Register Now
                      </Link>
                      <Link href="/contact" className="block text-center py-3 border border-[#1D150C]/18 text-[#1D150C] font-heading text-[13px] tracking-[0.06em] uppercase hover:border-[#FA712A] hover:text-[#FA712A] transition-colors">
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
      <section className="relative bg-[#1D150C] py-14 overflow-hidden">
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
                    <span className="text-[#FA712A] text-[8px] mt-1 shrink-0">◇</span>
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
              <Link href="/contact" className="inline-block px-8 py-3.5 bg-[#B99A3D] text-[#1D150C] font-heading text-[14px] tracking-[0.06em] uppercase font-semibold hover:bg-[#FA712A] transition-colors w-fit">
                Contact Secretariat →
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
