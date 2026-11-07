import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const keyBearers = [
  { initials: "RS", name: "Mr. Rudrapratap Singh", role: "President", bio: "", href: "/about/president" },
  { initials: "NM", name: "Mr. Navaneet Murugesh", role: "Secretary General", bio: "", href: "/about/secretary" },
  { initials: "JB", name: "Ms. Judith Bidappa", role: "Joint Secretary", bio: "", href: "#" },
];


export default function OfficeBearersPage() {
  return (
    <InnerPageShell
      title="Office Bearers"
      subtitle="The leadership guiding equestrian sport in Karnataka"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers" }]}
    >
      {/* Key bearers */}
      <section className="bg-[#EDECE8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B99A3D]" />
              <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] font-medium">Present Office Bearers</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] mb-14">Our <span className="italic">Leadership</span></h2>
          </BoxReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBearers.map((bearer, i) => (
              <BlurFade key={bearer.name} delay={0.2 + i * 0.08} inView>
                <MagicCard className="bg-white border border-[#DCD6CB] hover:border-[#FA712A]/35 hover:shadow-[0_4px_24px_rgba(250,113,42,0.07)] transition-all duration-300 group flex flex-col h-full">
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-[#DCD6CB] group-hover:border-[#FA712A]/50 transition-colors bg-[#EDECE8] flex items-center justify-center mb-5">
                      <span className="font-heading text-xl font-medium text-[#1D150C] tracking-wider">{bearer.initials}</span>
                    </div>
                    <div className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] mb-2">{bearer.role}</div>
                    <h3 className="font-heading text-lg font-medium text-[#1D150C] mb-3">{bearer.name}</h3>
                    <p className="text-[#6E6155] text-[12px] leading-relaxed flex-1">{bearer.bio}</p>
                    {bearer.href !== "#" && (
                      <Link href={bearer.href} className="mt-5 font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] flex items-center gap-1.5 hover:gap-3 transition-all">
                        Read Message →
                      </Link>
                    )}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Executive committee */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B99A3D]" />
              <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] font-medium">Executive Committee 2024–2029</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] mb-6">Committee <span className="italic">Members</span></h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <p className="text-[#6E6155] text-base italic">To Be Confirmed</p>
          </BlurFade>
        </div>
      </section>

      {/* Contact leadership */}
      <section className="relative bg-[#1D150C] py-16 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-2xl font-light text-white">Reach our <span className="italic">Secretariat</span></h3>
              <p className="text-white/45 text-sm mt-1">For administrative queries, membership, or event enquiries.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/contact" className="shrink-0 px-8 py-3.5 bg-[#B99A3D] text-[#1D150C] font-heading text-[14px] tracking-[0.06em] uppercase font-semibold hover:bg-[#FA712A] transition-colors">
              Contact Us →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
