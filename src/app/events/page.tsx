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
    disciplineColor: "bg-[#0B1C2D] text-[#C9A84C]",
    title: "Karnataka State Equestrian Competition",
    date: "24th May 2026",
    venue: "Embassy International Riding School",
    fee: "₹1,000 per entry",
    contact: "",
    desc: "",
    status: "Registration Open",
    statusColor: "bg-green-50 text-green-700",
  },
  {
    type: "Championship",
    discipline: "Dressage",
    disciplineColor: "bg-[#F0EBE1] text-[#7A6A4F]",
    title: "Karnataka State Dressage Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-gray-100 text-gray-500",
  },
  {
    type: "Championship",
    discipline: "Show Jumping",
    disciplineColor: "bg-[#EDF3F8] text-[#2E6DA4]",
    title: "Karnataka State Show Jumping Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-gray-100 text-gray-500",
  },
  {
    type: "Championship",
    discipline: "Eventing",
    disciplineColor: "bg-[#EDF7F0] text-[#2A7A4B]",
    title: "Karnataka State Eventing Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-gray-100 text-gray-500",
  },
  {
    type: "Championship",
    discipline: "Tent Pegging",
    disciplineColor: "bg-[#F7EDF0] text-[#A43A52]",
    title: "Karnataka State Tent Pegging Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-gray-100 text-gray-500",
  },
  {
    type: "Championship",
    discipline: "Endurance",
    disciplineColor: "bg-[#F3EDF7] text-[#6B3A9E]",
    title: "Karnataka State Endurance Riding Championship",
    date: "TBC",
    venue: "TBC",
    fee: "TBC",
    contact: "",
    desc: "TBC",
    status: "TBC",
    statusColor: "bg-gray-100 text-gray-500",
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
          <a href="mailto:secretariat@kea.org.in" className="shrink-0 text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] hover:gap-2 flex items-center gap-1.5 transition-all">
            Become a Member →
          </a>
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
                      {ev.desc && ev.desc !== "TBC" && <p className="text-[#6B7280] text-[13px] leading-relaxed mb-6">{ev.desc}</p>}
                      <div className="flex flex-wrap gap-6">
                        {[
                          { icon: "◇", label: ev.date },
                          { icon: "◇", label: ev.venue },
                          { icon: "◇", label: ev.fee },
                          { icon: "◇", label: ev.contact },
                        ].filter((d) => d.label).map((detail, j) => (
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
