import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const presidents = [
  {
    name: "Gen. S.K. Malhotra (Retd.)",
    initials: "SM",
    term: "2022–2024",
    tenure: "2 years",
    highlight: "Expanded the district chapter network from four to eight chapters. Oversaw KEA's re-affiliation with EFI after a procedural gap and initiated the state infrastructure development programme.",
  },
  {
    name: "Brig. A.R. Nambiar (Retd.)",
    initials: "AN",
    term: "2020–2022",
    tenure: "2 years",
    highlight: "Led KEA through the COVID-19 period, maintaining membership and restarting competition activity in 2021. Introduced digital membership registration and the online event calendar.",
  },
  {
    name: "Dr. V.S. Krishnamurthy",
    initials: "VK",
    term: "2018–2020",
    tenure: "2 years",
    highlight: "Strengthened KEA's relationship with EFI and introduced Karnataka's first dedicated endurance riding calendar. Secured Palace Grounds, Mysuru for state-level competitions.",
  },
  {
    name: "Col. H.K. Iyer (Retd.)",
    initials: "HI",
    term: "2016–2018",
    tenure: "2 years",
    highlight: "Revived the All-Karnataka Tent Pegging Championship after a five-year hiatus. Established the Equine Welfare Committee as a standing body of the Association.",
  },
  {
    name: "Mr. N.R. Subramaniam",
    initials: "NS",
    term: "2014–2016",
    tenure: "2 years",
    highlight: "Oversaw the revision of KEA's Bylaws to align with updated EFI regulations. Expanded junior membership and introduced the annual Junior Dressage Championship.",
  },
  {
    name: "Brig. P.T. Nair (Retd.)",
    initials: "PN",
    term: "2012–2014",
    tenure: "2 years",
    highlight: "Established formal ties with the Karnataka State Olympic Association and represented KEA at the inaugural EFI State Federations Conference in New Delhi.",
  },
  {
    name: "Dr. M.R. Venkataraman",
    initials: "MV",
    term: "2010–2012",
    tenure: "2 years",
    highlight: "Founded the KEA Scholarship Programme for junior riders and led the effort to establish Bangalore's first dedicated dressage arena at Palace Grounds.",
  },
  {
    name: "Col. J.S. Oberoi (Retd.)",
    initials: "JO",
    term: "2008–2010",
    tenure: "2 years",
    highlight: "Hosted Karnataka's first FEI-recognised eventing competition. Introduced formal horse welfare protocols at all KEA-sanctioned events.",
  },
  {
    name: "Mr. K.N. Hegde",
    initials: "KH",
    term: "2006–2008",
    tenure: "2 years",
    highlight: "Registered KEA as a society under the Karnataka Societies Registration Act. Formalised the Association's banking and financial procedures.",
  },
  {
    name: "Gen. B.T. Raghunath (Retd.)",
    initials: "BR",
    term: "2004–2006",
    tenure: "2 years",
    highlight: "Founding President of the Karnataka Equestrian Association. Drafted the original Bylaws, secured EFI affiliation, and organised KEA's inaugural state championship in 2005.",
  },
];

const secretaries = [
  { name: "Dr. Anand Murthy", initials: "AM", term: "2024–Present" },
  { name: "Mr. Ramesh Shenoy", initials: "RS2", term: "2020–2024" },
  { name: "Dr. Jayanthi Rao", initials: "JR", term: "2016–2020" },
  { name: "Mr. C.K. Natarajan", initials: "CN", term: "2012–2016" },
  { name: "Mr. P.V. Suresh", initials: "PS", term: "2008–2012" },
  { name: "Col. M.K. Dixit (Retd.)", initials: "MD", term: "2004–2008" },
];

export default function PastPresidentsPage() {
  return (
    <InnerPageShell
      title="Past Presidents"
      subtitle="KEA's presidential history since 2004"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers", href: "/office-bearers" }, { label: "Past Presidents" }]}
    >
      {/* Intro */}
      <section className="bg-[#F7F4EF] py-14 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeText delay={0.1} inView>
            <p className="text-[#4A5568] text-sm leading-relaxed max-w-3xl">
              Since its founding in 2004, the Karnataka Equestrian Association has been led by distinguished presidents who have shaped equestrian sport in the state. This page records their terms and the milestones achieved under their leadership.
            </p>
          </FadeText>
        </div>
      </section>

      {/* Presidents timeline */}
      <section className="bg-[#F7F4EF] pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Presidential History</span>
            </div>
          </BlurFade>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-[#EDEAE3]" />

            <div className="space-y-0">
              {presidents.map((p, i) => (
                <BlurFade key={p.name} delay={0.1 + i * 0.06} inView>
                  <div key={p.name} className="relative flex gap-8 group">
                    {/* Term label */}
                    <div className="w-[88px] shrink-0 pt-7 text-right">
                      <span className="text-[11px] text-[#9CA3AF] leading-none">{p.term}</span>
                    </div>

                    {/* Dot */}
                    <div className="relative shrink-0 w-0">
                      <div className="absolute top-8 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#C9A84C] bg-[#F7F4EF] group-hover:bg-[#C9A84C] transition-colors z-10" />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 ml-6 pb-6 ${i < presidents.length - 1 ? "" : ""}`}>
                      <div className="bg-white border border-[#EDEAE3] group-hover:border-[#C9A84C]/30 transition-all duration-200 p-7">
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-full bg-[#F7F4EF] border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/40 transition-colors flex items-center justify-center shrink-0">
                            <span className="font-heading text-sm font-medium text-[#0B1C2D]">{p.initials}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="font-heading text-base font-medium text-[#0B1C2D]">{p.name}</h3>
                              {i === 0 && (
                                <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 bg-[#0B1C2D] text-[#C9A84C]">Immediate Past</span>
                              )}
                              {i === presidents.length - 1 && (
                                <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 border border-[#C9A84C]/40 text-[#C9A84C]">Founding President</span>
                              )}
                            </div>
                            <div className="text-[10px] tracking-[0.1em] uppercase text-[#C9A84C] mb-3">President · {p.tenure}</div>
                            <p className="text-[#6B7280] text-[12px] leading-relaxed">{p.highlight}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Secretaries */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Secretaries General</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-12">Past <span className="italic">Secretaries General</span></h2>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secretaries.map((s, i) => (
              <BlurFade key={s.name} delay={0.1 + i * 0.06} inView>
                <MagicCard className="border border-[#EDEAE3] hover:border-[#C9A84C]/30 transition-colors p-0 group">
                  <div className="p-6 flex items-center gap-4 relative z-10">
                    <div className="w-11 h-11 rounded-full bg-[#F7F4EF] border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/40 transition-colors flex items-center justify-center shrink-0">
                      <span className="font-heading text-xs font-medium text-[#0B1C2D]">{s.initials}</span>
                    </div>
                    <div>
                      <div className="font-medium text-[#0B1C2D] text-sm">{s.name}</div>
                      <div className="text-[10px] text-[#C9A84C] tracking-[0.1em] mt-0.5">{s.term}</div>
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
        <AnimatedGridPattern className="opacity-30" numSquares={8} maxOpacity={0.05} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeText delay={0.1} inView>
            <p className="text-white/45 text-[12px] leading-relaxed max-w-2xl">
              For information on KEA's full administrative history or earlier records, please contact the Secretariat at{" "}
              <span className="text-[#C9A84C]/70">secretary@karnatakaequestrian.in</span>
            </p>
          </FadeText>
        </div>
      </section>
    </InnerPageShell>
  );
}
