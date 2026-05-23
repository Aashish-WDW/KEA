import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const officeBearers = [
  { initials: "RS", name: "Mr. Rudrapratap Singh", role: "President", term: "2024–2029", bio: "" },
  { initials: "NM", name: "Mr. Navaneet Murugesh", role: "Secretary General", term: "2024–2029", bio: "" },
  { initials: "JB", name: "Ms. Judith Bidappa", role: "Joint Secretary", term: "2024–2029", bio: "" },
];


export default function ExecutiveCommitteePage() {
  return (
    <InnerPageShell
      title="Executive Committee"
      subtitle="The governing body of the Karnataka Equestrian Association"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers", href: "/office-bearers" }, { label: "Executive Committee" }]}
    >
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Office Bearers 2024–2029</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Elected <span className="italic">Office Bearers</span></h2>
          </BoxReveal>
          <div className="space-y-4">
            {officeBearers.map((m, i) => (
              <BlurFade key={m.name} delay={0.2 + i * 0.08} inView>
                <MagicCard className="bg-white border border-[#EDEAE3] hover:border-[#C9A84C]/35 transition-all duration-200 group">
                  <div className="p-7 flex items-start gap-6 relative z-10">
                    <div className="w-14 h-14 rounded-full border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/45 transition-colors bg-[#F7F4EF] flex items-center justify-center shrink-0">
                      <span className="font-heading text-base font-medium text-[#0B1C2D] tracking-wider">{m.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C]">{m.role}</div>
                        <div className="text-[9px] tracking-[0.1em] uppercase text-[#9CA3AF] border border-[#EDEAE3] px-2 py-0.5">Term {m.term}</div>
                      </div>
                      <div className="font-heading text-lg font-medium text-[#0B1C2D] mb-2">{m.name}</div>
                      <p className="text-[#6B7280] text-[12px] leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Elected Members 2024–2026</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Committee <span className="italic">Members</span></h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-[#6B7280] text-base italic">To Be Confirmed</p>
          </BlurFade>
        </div>
      </section>

      <section className="relative bg-[#0B1C2D] py-16 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-2xl font-light text-white mb-3">Executive Committee <span className="italic">Mandate</span></h3>
              <p className="text-white/45 text-sm leading-relaxed">The Executive Committee meets a minimum of four times per year to manage Association affairs, approve competition calendars, review membership, and ensure compliance with EFI regulations.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1 text-center px-6 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.18em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
                Contact Committee
              </Link>
              <Link href="/about/bylaws" className="flex-1 text-center px-6 py-3.5 border border-white/18 text-white/75 text-[10px] tracking-[0.18em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                View Bylaws
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
