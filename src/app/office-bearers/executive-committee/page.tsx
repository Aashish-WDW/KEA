import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const officeBearers = [
  { initials: "RS", name: "Brig. R.K. Sharma (Retd.)", role: "President", term: "2024–2026", bio: "A decorated Brigadier of the Indian Army with over 35 years of service. Brig. Sharma has competed in show jumping at national level and brings deep administrative experience to the presidency." },
  { initials: "PR", name: "Col. P.N. Rao (Retd.)", role: "President Elect", term: "2024–2026", bio: "Col. Rao has served the equestrian community for over two decades in Karnataka, previously heading the Mysuru District Chapter and serving on the EFI national technical panel." },
  { initials: "AM", name: "Dr. Anand Murthy", role: "Secretary General", term: "2024–2026", bio: "A qualified veterinarian and experienced sports administrator, Dr. Murthy manages all EFI coordination, member services, and the annual competition calendar." },
  { initials: "PK", name: "Ms. Priya Krishnaswamy", role: "Joint Secretary", term: "2024–2026", bio: "Ms. Krishnaswamy brings extensive experience in sports event management and member communications. She oversees KEA's outreach and membership programmes." },
  { initials: "VH", name: "Mr. Vikram Hegde", role: "Treasurer", term: "2024–2026", bio: "A chartered accountant and equestrian enthusiast, Mr. Hegde manages KEA's finances, annual audit, and fee structures with transparency and rigour." },
];

const execMembers = [
  { initials: "SM", name: "Gen. S.K. Malhotra (Retd.)", role: "Immediate Past President", expertise: "Governance & Strategy", bio: "Served as KEA President from 2022–2024. Gen. Malhotra's tenure saw the expansion of the district chapter network and KEA's re-affiliation with EFI after a procedural gap." },
  { initials: "RN", name: "Dr. Rekha Nair", role: "Member — Dressage", expertise: "Dressage & Training", bio: "An EFI-certified dressage judge and long-time trainer. Dr. Nair heads the KEA Dressage Technical Sub-committee and represents Karnataka riders at EFI dressage forums." },
  { initials: "AS", name: "Sqn. Ldr. A. Singh (Retd.)", role: "Member — Tent Pegging", expertise: "Tent Pegging & Military Disciplines", bio: "Sqn. Ldr. Singh is a decorated tent pegging competitor and former Armed Forces champion. He coordinates with ITPF for Karnataka's tent pegging calendar." },
  { initials: "KM", name: "Mr. Kiran Madappa", role: "Member — Show Jumping", expertise: "Show Jumping", bio: "A national-level show jumping competitor and course designer, Mr. Madappa leads KEA's show jumping technical panel and organises the annual District League." },
  { initials: "SV", name: "Ms. Sunita Venkatesh", role: "Member — Endurance", expertise: "Endurance Riding", bio: "Karnataka's most experienced endurance rider, Ms. Venkatesh has completed multiple 100km+ EFI-sanctioned events and chairs the Endurance Technical Sub-committee." },
  { initials: "GR", name: "Mr. Ganesh Rao", role: "Member — Eventing", expertise: "Eventing & Cross-Country", bio: "Mr. Rao is a trained eventing rider and course designer who works closely with EFI's eventing committee to bring international-standard cross-country courses to Karnataka." },
  { initials: "DP", name: "Dr. Deepa Pillai", role: "Member — Welfare & Veterinary", expertise: "Equine Health & Welfare", bio: "A practising equine veterinarian, Dr. Pillai ensures all KEA events meet FEI welfare standards. She chairs the Equine Welfare Sub-committee and advises on horse health policy." },
  { initials: "MK", name: "Mr. Mahesh Kumar", role: "Member — Infrastructure", expertise: "Venue & Facilities", bio: "Mr. Kumar oversees the development and maintenance of equestrian facilities across Karnataka, working with government bodies and private clubs to improve riding infrastructure." },
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
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Office Bearers 2024–2026</span>
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
          <div className="grid sm:grid-cols-2 gap-6">
            {execMembers.map((m, i) => (
              <BlurFade key={m.name} delay={0.15 + i * 0.06} inView>
                <MagicCard className="border border-[#EDEAE3] hover:border-[#C9A84C]/35 hover:shadow-[0_4px_20px_rgba(201,168,76,0.06)] transition-all duration-300 group">
                  <div className="p-7 flex gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-full border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/45 transition-colors bg-[#F7F4EF] flex items-center justify-center shrink-0">
                      <span className="font-heading text-base font-medium text-[#0B1C2D] tracking-wider">{m.initials}</span>
                    </div>
                    <div>
                      <div className="text-[9px] tracking-[0.12em] uppercase text-[#C9A84C] mb-1">{m.expertise}</div>
                      <div className="font-heading text-base font-medium text-[#0B1C2D] mb-1">{m.name}</div>
                      <div className="text-[10px] text-[#9CA3AF] mb-3">{m.role}</div>
                      <p className="text-[#6B7280] text-[12px] leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
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
