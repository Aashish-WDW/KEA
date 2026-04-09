import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership",
  description: "Join the Karnataka Equestrian Association. Explore membership types, benefits, and the application process for riders, clubs, and institutions.",
};

const types = [
  { title: "Individual", fee: "₹2,000", period: "per year", tag: "Most Popular", desc: "For registered riders, trainers, and equestrian enthusiasts. Includes full competition eligibility and voting rights.", benefits: ["Full competition eligibility at KEA events", "EFI rider registration support", "Voting rights at AGM", "Newsletter and technical updates", "10% discount on event entry fees"] },
  { title: "Life", fee: "₹15,000", period: "one-time", tag: "Best Value", desc: "Lifetime KEA membership with all Individual member benefits. Ideal for long-term members of the equestrian community.", benefits: ["All Individual member benefits", "Permanent membership card", "Priority event registration", "Lifetime access to KEA resources", "Recognition in association publications"] },
  { title: "Junior", fee: "₹1,000", period: "per year", tag: "Under 18", desc: "For riders under 18 years of age. Requires parent or guardian co-signature on application.", benefits: ["Competition eligibility in junior categories", "EFI junior rider registration", "Training programme access", "Youth development resources", "Newsletter and updates"] },
  { title: "Institutional", fee: "₹10,000", period: "per year", tag: "Clubs & Academies", desc: "For equestrian clubs, riding academies, and institutional bodies affiliated with KEA.", benefits: ["Institutional affiliation certificate", "Club event hosting rights", "Bulk member registration support", "Priority venue allocation", "Listed on KEA club directory"] },
];

const steps = [
  { num: "01", title: "Download Form", desc: "Download the appropriate membership application form from the KEA Secretariat or contact us to receive it by email." },
  { num: "02", title: "Complete & Attach", desc: "Fill in all required details. Attach a passport-size photograph, government-issued ID proof, and address proof." },
  { num: "03", title: "Submit with Payment", desc: "Submit the completed form along with the membership fee (cheque, bank transfer, or UPI) to the KEA Secretariat." },
  { num: "04", title: "Verification", desc: "The KEA Secretariat reviews your application within 7–10 working days and may contact you for additional information." },
  { num: "05", title: "Receive Certificate", desc: "Upon approval, your membership card and certificate are issued. You can immediately access all member benefits." },
];

const documents = [
  "Recent passport-size photograph (colour)",
  "Government-issued photo ID (Aadhaar / PAN / Passport)",
  "Current address proof",
  "For Junior members: birth certificate and parent/guardian consent letter",
  "For Institutional members: registration certificate of the club/academy",
];

export default function MembershipPage() {
  return (
    <InnerPageShell
      title="Membership"
      subtitle="Join the Karnataka Equestrian Association"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Membership" }]}
    >
      {/* Intro */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Why Join</span>
              </div>
            </BlurFade>
            <BoxReveal delay={0.15}>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] leading-snug mb-6">
                Be Part of Karnataka's<br /><span className="italic">Equestrian Community</span>
              </h2>
            </BoxReveal>
            <FadeText delay={0.3} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                KEA membership connects you to the full spectrum of equestrian sport in Karnataka — from local club events to national EFI championships. As a member, you gain access to competition pathways, technical resources, and a community of fellow equestrians.
              </p>
            </FadeText>
            <FadeText delay={0.4} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                All competition eligibility under KEA requires current KEA membership. EFI rider registration — required for national-level competition — is facilitated through KEA for all members.
              </p>
            </FadeText>
          </div>

          <BlurFade delay={0.2} inView>
            <div className="relative group overflow-hidden border border-[#EDEAE3] shadow-2xl">
              {/* Community Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/membership_community.png" 
                  alt="KEA Community" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B1C2D]/60 group-hover:bg-[#0B1C2D]/20 transition-colors duration-500" />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-px bg-[#C9A84C]/10 h-full">
                {[
                  { num: 500, suffix: "+", label: "Active Members" },
                  { num: 5, suffix: "", label: "Disciplines" },
                  { num: 20, suffix: "+", label: "Annual Events" },
                  { num: 30, suffix: "+", label: "Years of Service" },
                ].map((s) => (
                  <div key={s.label} className="p-10 text-center backdrop-blur-[2px] bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="font-heading text-4xl lg:text-5xl font-light text-white mb-2 shadow-sm">
                      <NumberTicker value={s.num} />{s.suffix}
                    </div>
                    <div className="text-[9px] tracking-[0.18em] uppercase text-[#C9A84C] font-semibold">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Membership types */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Membership Types</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-14">Choose Your <span className="italic">Membership</span></h2>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((t, i) => (
              <BlurFade key={t.title} delay={0.15 + i * 0.08} inView>
                <MagicCard className="border border-[#EDEAE3] hover:border-[#C9A84C]/40 hover:shadow-[0_4px_24px_rgba(201,168,76,0.08)] transition-all duration-300 group flex flex-col h-full">
                  <div className="p-7 border-b border-[#EDEAE3] relative z-10">
                    <div className="inline-block px-2 py-1 text-[8px] tracking-[0.14em] uppercase bg-[#0B1C2D] text-[#C9A84C] mb-4">{t.tag}</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">{t.title} Member</div>
                    <div className="font-heading text-4xl font-light text-[#0B1C2D]">{t.fee}</div>
                    <div className="text-[11px] text-[#9CA3AF] mt-1">{t.period}</div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col relative z-10">
                    <p className="text-[#6B7280] text-[12px] leading-relaxed mb-5">{t.desc}</p>
                    <ul className="space-y-2.5 flex-1">
                      {t.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[12px] text-[#4A5568]">
                          <span className="text-[#C9A84C] text-[8px] mt-1 shrink-0">◇</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="mt-6 block text-center py-3 bg-[#F7F4EF] border border-[#EDEAE3] text-[#0B1C2D] text-[10px] tracking-[0.14em] uppercase hover:bg-[#C9A84C] hover:text-[#0B1C2D] hover:border-[#C9A84C] transition-colors font-medium">
                      Apply Now
                    </Link>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="relative bg-[#0B1C2D] py-20 lg:py-28 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={18} maxOpacity={0.06} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]/50" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]/70 font-medium">Application Process</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-white mb-10">How to <span className="italic">Apply</span></h2>
            </BlurFade>
            <AnimatedList className="space-y-6" delay={0.15} stagger={0.1}>
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5 group">
                  <span className="font-heading text-3xl text-[#C9A84C]/25 font-light leading-none shrink-0 w-8">{s.num}</span>
                  <div>
                    <div className="text-white/80 text-sm font-medium mb-1">{s.title}</div>
                    <p className="text-white/45 text-[13px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>

          <div>
            <BlurFade delay={0.15} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]/50" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]/70 font-medium">Required Documents</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-white mb-10">What to <span className="italic">Bring</span></h2>
            </BlurFade>
            <AnimatedList className="space-y-4 mb-10" delay={0.2} stagger={0.08}>
              {documents.map((d, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] text-white/55">
                  <span className="text-[#C9A84C] text-[9px] mt-1 shrink-0">◇</span>
                  {d}
                </div>
              ))}
            </AnimatedList>
            <BlurFade delay={0.5} inView>
              <div className="border border-[#C9A84C]/20 p-6">
                <p className="text-white/45 text-[12px] leading-relaxed">
                  For queries about the application process, contact the KEA Secretariat at{" "}
                  <span className="text-[#C9A84C]/70">secretary@karnatakaequestrian.in</span> or call us at{" "}
                  <span className="text-[#C9A84C]/70">+91 80 0000 0000</span>.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
