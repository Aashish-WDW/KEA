import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedList } from "@/components/ui/animated-list";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About KEA",
  description: "Learn about the Karnataka Equestrian Association — the apex body governing equestrian sports in Karnataka, affiliated with the Equestrian Federation of India.",
};

const affiliations = [
  { abbr: "EFI", name: "Equestrian Federation of India", desc: "National apex body for equestrian sports; our primary governing federation." },
  { abbr: "IOA", name: "Indian Olympic Association", desc: "Recognises equestrian sport as part of India's Olympic movement." },
  { abbr: "MYAS/SAI", name: "Ministry of Youth Affairs & Sports", desc: "Central government recognition supporting athlete development and funding." },
  { abbr: "AEF", name: "Asian Equestrian Federation", desc: "Continental body governing equestrian sport across Asia." },
  { abbr: "ITPF", name: "International Tent Pegging Federation", desc: "Global governing body for the tent pegging discipline." },
];

const pillars = [
  { num: "01", title: "Governance", desc: "Providing a transparent, structured framework for equestrian sport across all of Karnataka's districts and affiliated clubs." },
  { num: "02", title: "Development", desc: "Investing in grassroots talent, coaching programmes, and infrastructure to grow the sport from school level to national competition." },
  { num: "03", title: "Competition", desc: "Organising state-level championships, qualifying events, and clinics across all five disciplines throughout the year." },
  { num: "04", title: "Excellence", desc: "Guiding Karnataka riders towards national podiums and international representation under the banner of EFI and IOA." },
];

export default function AboutPage() {
  return (
    <InnerPageShell
      title="About KEA"
      subtitle="Our story, our purpose, our people"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About KEA" }]}
    >
      {/* Overview */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Who We Are</span>
              </div>
            </BlurFade>
            <BoxReveal delay={0.15}>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] leading-snug mb-6">
                Karnataka's Apex Body for<br /><span className="italic">Equestrian Sport</span>
              </h2>
            </BoxReveal>
            <FadeText delay={0.3} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                The Karnataka Equestrian Association (KEA) is the official governing body for equestrian sports in Karnataka. We are responsible for the administration, promotion, and development of all equestrian disciplines across the state — from grassroots participation to elite national competition.
              </p>
            </FadeText>
            <FadeText delay={0.4} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                Affiliated with the Equestrian Federation of India (EFI), KEA operates under the framework of the Indian Olympic Association and is recognised by the Ministry of Youth Affairs & Sports, Government of India.
              </p>
            </FadeText>
            <FadeText delay={0.5} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Our membership spans registered riders, clubs, trainers, and institutional bodies across Karnataka, united by a shared passion for the horse-and-rider partnership.
              </p>
            </FadeText>
          </div>

          <BlurFade delay={0.2} inView>
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#C9A84C]/10 bg-[#C9A84C]/5 -rotate-1" />
              <div className="relative aspect-video lg:aspect-square overflow-hidden border border-[#EDEAE3]">
                <img 
                  src="/images/membership_community.png" 
                  alt="KEA Community" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <div className="font-heading text-lg text-white mb-2 italic">"Unity in Horsemanship"</div>
                  <div className="text-[9px] tracking-[0.15em] uppercase text-[#C9A84C]">Registered Members & Affiliates</div>
                </div>
              </div>
              {/* Stats dots */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-[#EDEAE3] p-6 shadow-xl hidden lg:block">
                <div className="text-2xl font-heading text-[#0B1C2D] mb-0.5">
                  <NumberTicker value={500} />+
                </div>
                <div className="text-[8px] tracking-[0.1em] uppercase text-[#C9A84C]">Active Members</div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Our Work</span>
                <div className="h-px w-8 bg-[#C9A84C]" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D]">
                What We <span className="italic">Do</span>
              </h2>
            </div>
          </BlurFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <BlurFade key={p.title} delay={0.15 + i * 0.08} inView>
                <MagicCard className="border border-[#EDEAE3] hover:border-[#C9A84C]/40 hover:shadow-[0_4px_24px_rgba(201,168,76,0.07)] transition-all duration-300 group h-full">
                  <div className="p-8 relative z-10">
                    <div className="font-heading text-5xl text-[#C9A84C]/12 font-light mb-4 leading-none select-none">{p.num}</div>
                    <h3 className="font-heading text-xl font-medium text-[#0B1C2D] mb-3 group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                    <p className="text-[#6B7280] text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-[#0B1C2D] py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 grayscale brightness-50">
          <img src="/images/hero_heritage.png" className="w-full h-full object-cover" alt="" />
        </div>
        <AnimatedGridPattern className="opacity-40" numSquares={20} maxOpacity={0.08} />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
          <BlurFade delay={0.1} inView>
            <MagicCard className="border border-[#C9A84C]/20 h-full backdrop-blur-sm bg-white/[0.02]" gradientColor="rgba(201,168,76,0.08)">
              <div className="p-10 relative z-10">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-4">Our Mission</div>
                <h3 className="font-heading text-2xl font-light text-white italic mb-4">To govern, develop, and promote equestrian sport throughout Karnataka.</h3>
                <p className="text-white/50 text-sm leading-relaxed">We provide a structured, transparent framework for competition, ensure the welfare of horses and riders, and create opportunities for participation at every level — from school programmes to national championships.</p>
              </div>
            </MagicCard>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <MagicCard className="border border-[#C9A84C]/20 h-full backdrop-blur-sm bg-white/[0.02]" gradientColor="rgba(201,168,76,0.08)">
              <div className="p-10 relative z-10">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-4">Our Vision</div>
                <h3 className="font-heading text-2xl font-light text-white italic mb-4">To establish Karnataka as a centre of equestrian excellence in India.</h3>
                <p className="text-white/50 text-sm leading-relaxed">We aspire to see Karnataka riders on national podiums, to grow a deep talent pipeline from grassroots to elite level, and to honour the ancient horse-and-rider tradition that defines our heritage.</p>
              </div>
            </MagicCard>
          </BlurFade>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Our Affiliations</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-12">Recognised &amp; Affiliated Bodies</h2>
          </BlurFade>
          <AnimatedList className="space-y-px" delay={0.15} stagger={0.1}>
            {affiliations.map((a) => (
              <div key={a.abbr} className="bg-white flex items-start gap-8 p-7 hover:border-l-2 hover:border-[#C9A84C] hover:pl-[26px] transition-all duration-200 group">
                <span className="font-heading text-2xl font-semibold text-[#C9A84C]/60 w-24 shrink-0 group-hover:text-[#C9A84C] transition-colors">{a.abbr}</span>
                <div>
                  <div className="font-medium text-[#0B1C2D] text-sm mb-1">{a.name}</div>
                  <div className="text-[#6B7280] text-[13px] leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-2xl font-light text-[#0B1C2D]">Want to know more about our <span className="italic">history?</span></h3>
              <p className="text-[#6B7280] text-sm mt-1">Explore the rich heritage of equestrian sport in Karnataka and India.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/about/history" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Our History →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
