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
  {
    title: "Associate",
    fee: "₹2,000",
    period: "per year",
    tag: "Most Popular",
    desc: "For registered riders, trainers, and equestrian enthusiasts.",
    benefits: [
      "Eligibility at KEA events, meetings and committee",
      "EFI rider registration support",
      "Newsletter and technical updates",
      "10% discount applicable on annual membership for women, defence personnel, and eminent sports persons."
    ]
  },
  {
    title: "Life",
    fee: "₹50,000",
    period: "one-time",
    tag: "Best Value",
    desc: "Lifetime KEA membership with all Individual member benefits. Ideal for long-term members of the equestrian community.",
    benefits: [
      "All Individual member benefits",
      "Permanent membership card",
      "Priority event registration",
      "Lifetime access to KEA resources",
      "Recognition in association publications"
    ]
  },
  {
    title: "Riding",
    fee: "₹1,000",
    period: "per year",
    tag: "Under 18",
    desc: "For riders under 18 years of age. Requires parent or guardian co-signature on application.",
    note: "<strong>For all Categories active riders</strong>",
    benefits: [
      "Competition entry in your categories",
      "EFI rider registration",
      "Training programme access",
      "Youth development resources",
      "Newsletter and updates"
    ]
  },
  {
    title: "Institutional",
    fee: "₹10,000",
    period: "per year",
    tag: "Clubs & Academies",
    desc: "For equestrian clubs, riding academies, and institutional bodies affiliated with KEA.",
    benefits: [
      "Institutional affiliation certificate",
      "Club event hosting rights",
      "Bulk member registration support",
      "Priority venue allocation",
      "Listed on KEA club directory"
    ]
  },
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
      <section className="bg-[#EDECE8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B99A3D]" />
                <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] font-medium">Why Join</span>
              </div>
            </BlurFade>
            <BoxReveal delay={0.15}>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] leading-snug mb-6">
                Be Part of Karnataka's<br /><span className="italic">Equestrian Community</span>
              </h2>
            </BoxReveal>
            <FadeText delay={0.3} inView>
              <p className="text-[#4E4136] text-sm leading-relaxed mb-5">
                KEA membership connects you to the full spectrum of equestrian sport in Karnataka — from local club events to national EFI championships. As a member, you gain access to competition pathways, technical resources, and a community of fellow equestrians.
              </p>
            </FadeText>
            <FadeText delay={0.4} inView>
              <p className="text-[#4E4136] text-sm leading-relaxed">
                All competition eligibility under KEA requires current KEA membership. EFI rider registration — required for national-level competition — is facilitated through KEA for all members.
              </p>
            </FadeText>
          </div>

          <BlurFade delay={0.2} inView>
            <div className="relative group overflow-hidden border border-[#DCD6CB] shadow-2xl">
              {/* Community Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/membership_community.jpg" 
                  alt="KEA Community" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1D150C]/60 group-hover:bg-[#1D150C]/20 transition-colors duration-500" />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-px bg-[#FA712A]/10 h-full">
                {[
                  { num: 100, suffix: "+", label: "Active Members" },
                  { num: 5, suffix: "", label: "Disciplines" },
                  { num: 20, suffix: "+", label: "Events" },
                  { num: 10, suffix: "+", label: "Years of Service" },
                ].map((s) => (
                  <div key={s.label} className="p-10 text-center backdrop-blur-[2px] bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 shadow-sm">
                      <NumberTicker value={s.num} />{s.suffix}
                    </div>
                    <div className="font-heading text-[13px] tracking-[0.06em] uppercase text-[#FA712A] font-semibold">{s.label}</div>
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
              <div className="h-px w-8 bg-[#B99A3D]" />
              <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A] font-medium">Membership Types</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] mb-14">Choose Your <span className="italic">Membership</span></h2>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((t, i) => (
              <BlurFade key={t.title} delay={0.15 + i * 0.08} inView>
                <MagicCard className="border border-[#DCD6CB] hover:border-[#FA712A]/40 hover:shadow-[0_4px_24px_rgba(250,113,42,0.08)] transition-all duration-300 group flex flex-col h-full">
                  <div className="p-7 border-b border-[#DCD6CB] relative z-10">
                    <span className="absolute top-7 right-7 font-heading text-[14px] tracking-[0.04em] text-[#B59972]">0{i + 1}</span>
                    <div className="flex items-center gap-2.5 mb-6 pr-6">
                      <span className="h-px w-5 shrink-0 bg-[#A54D25]/70 transition-all duration-300 group-hover:w-10" />
                      <span className="font-heading text-[13px] tracking-[0.06em] uppercase whitespace-nowrap text-[#A54D25]">{t.tag}</span>
                    </div>
                    <div className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#6E6155] mb-2">{t.title} Member</div>
                    <div className="font-heading text-4xl font-light text-[#1D150C]">{t.fee}</div>
                    <div className="text-[11px] text-[#9A8C7C] mt-1">{t.period}</div>
                  </div>
                  <div className="p-7 flex-1 flex flex-col relative z-10">
                    {"note" in t && t.note && (
                      <p className="mb-3 text-[11px] text-[#FA712A] leading-relaxed" dangerouslySetInnerHTML={{ __html: t.note }} />
                    )}
                    <p className="text-[#6E6155] text-[12px] leading-relaxed mb-5">{t.desc}</p>
                    <ul className="space-y-2.5 flex-1">
                      {t.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[12px] text-[#4E4136]">
                          <span className="text-[#FA712A] text-[8px] mt-1 shrink-0">◇</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a href="mailto:secretariat@kea.org.in" className="mt-6 block text-center py-3 bg-[#EDECE8] border border-[#DCD6CB] text-[#1D150C] font-heading text-[14px] tracking-[0.06em] uppercase hover:bg-[#B99A3D] hover:text-[#1D150C] hover:border-[#FA712A] transition-colors font-medium">
                      Apply Now
                    </a>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="relative bg-[#1D150C] py-20 lg:py-28 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={18} maxOpacity={0.06} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#FA712A]/50" />
                <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A]/70 font-medium">Application Process</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10">How to <span className="italic">Apply</span></h2>
            </BlurFade>
            <AnimatedList className="space-y-6" delay={0.15} stagger={0.1}>
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5 group">
                  <span className="font-heading text-3xl text-[#FA712A]/25 font-light leading-none shrink-0 w-8">{s.num}</span>
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
                <div className="h-px w-8 bg-[#FA712A]/50" />
                <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#FA712A]/70 font-medium">Required Documents</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10">What to <span className="italic">Bring</span></h2>
            </BlurFade>
            <AnimatedList className="space-y-4 mb-10" delay={0.2} stagger={0.08}>
              {documents.map((d, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] text-white/55">
                  <span className="text-[#FA712A] text-[9px] mt-1 shrink-0">◇</span>
                  {d}
                </div>
              ))}
            </AnimatedList>
            <BlurFade delay={0.5} inView>
              <div className="border border-[#FA712A]/20 p-6">
                <p className="text-white/45 text-[12px] leading-relaxed">
                  For queries about the application process, contact the KEA Secretariat at{" "}
                  <span className="text-[#FA712A]/70">secretariat@kea.org.in</span> or call us at{" "}
                  <span className="text-[#FA712A]/70">+91 80 0000 0000</span>.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
