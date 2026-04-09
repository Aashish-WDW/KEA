import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const keyBearers = [
  { initials: "RS", name: "Brig. R.K. Sharma (Retd.)", role: "President", bio: "A decorated Brigadier of the Indian Army with over 35 years of military service, Brig. Sharma brings a deep love of horsemanship and strong organisational leadership to the Association.", href: "/about/president" },
  { initials: "PR", name: "Col. P.N. Rao (Retd.)", role: "President Elect", bio: "Col. Rao has been an active equestrian competitor and administrator for over two decades, having previously served as a District Chapter President.", href: "#" },
  { initials: "AM", name: "Dr. Anand Murthy", role: "Secretary General", bio: "Dr. Murthy oversees all administrative, regulatory, and EFI coordination functions of the Association. A qualified veterinarian with a passion for equine welfare.", href: "/about/secretary" },
  { initials: "PK", name: "Ms. Priya Krishnaswamy", role: "Joint Secretary", bio: "Ms. Krishnaswamy manages event coordination, membership services, and communications. She brings extensive experience in sports administration.", href: "#" },
];

const execCommittee = [
  { initials: "VH", name: "Mr. Vikram Hegde", role: "Treasurer" },
  { initials: "SM", name: "Gen. S.K. Malhotra (Retd.)", role: "Immediate Past President" },
  { initials: "RN", name: "Dr. Rekha Nair", role: "Member — Dressage" },
  { initials: "AS", name: "Sqn. Ldr. A. Singh (Retd.)", role: "Member — Tent Pegging" },
  { initials: "KM", name: "Mr. Kiran Madappa", role: "Member — Show Jumping" },
  { initials: "SV", name: "Ms. Sunita Venkatesh", role: "Member — Endurance" },
  { initials: "GR", name: "Mr. Ganesh Rao", role: "Member — Eventing" },
  { initials: "DP", name: "Dr. Deepa Pillai", role: "Member — Welfare & Veterinary" },
];

export default function OfficeBearersPage() {
  return (
    <InnerPageShell
      title="Office Bearers"
      subtitle="The leadership guiding equestrian sport in Karnataka"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers" }]}
    >
      {/* Key bearers */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Present Office Bearers</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Our <span className="italic">Leadership</span></h2>
          </BoxReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBearers.map((bearer, i) => (
              <BlurFade key={bearer.name} delay={0.2 + i * 0.08} inView>
                <MagicCard className="bg-white border border-[#EDEAE3] hover:border-[#C9A84C]/35 hover:shadow-[0_4px_24px_rgba(201,168,76,0.07)] transition-all duration-300 group flex flex-col h-full">
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <div className="w-20 h-20 rounded-full border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/50 transition-colors bg-[#F7F4EF] flex items-center justify-center mb-5">
                      <span className="font-heading text-xl font-medium text-[#0B1C2D] tracking-wider">{bearer.initials}</span>
                    </div>
                    <div className="text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] mb-2">{bearer.role}</div>
                    <h3 className="font-heading text-lg font-medium text-[#0B1C2D] mb-3">{bearer.name}</h3>
                    <p className="text-[#6B7280] text-[12px] leading-relaxed flex-1">{bearer.bio}</p>
                    {bearer.href !== "#" && (
                      <Link href={bearer.href} className="mt-5 text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] flex items-center gap-1.5 hover:gap-3 transition-all">
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
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Executive Committee 2024–2026</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Committee <span className="italic">Members</span></h2>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {execCommittee.map((member, i) => (
              <BlurFade key={member.name} delay={0.15 + i * 0.06} inView>
                <MagicCard className="flex items-center gap-4 p-5 border border-[#EDEAE3] hover:border-[#C9A84C]/30 transition-colors group">
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className="w-14 h-14 rounded-full bg-[#F7F4EF] border border-[#EDEAE3] group-hover:border-[#C9A84C]/30 transition-colors flex items-center justify-center shrink-0">
                      <span className="font-heading text-base font-medium text-[#0B1C2D] tracking-wider">{member.initials}</span>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] mb-1">{member.role}</div>
                      <div className="font-medium text-[#0B1C2D] text-sm leading-snug">{member.name}</div>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact leadership */}
      <section className="relative bg-[#0B1C2D] py-16 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-2xl font-light text-white">Reach our <span className="italic">Secretariat</span></h3>
              <p className="text-white/45 text-sm mt-1">For administrative queries, membership, or event enquiries.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/contact" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Contact Us →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
