import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const timeline = [
  { year: "2500 BC", event: "Vedic Period", desc: "Chariot racing becomes one of the most popular games in ancient India, as documented in Vedic texts and inscriptions." },
  { year: "500 BC", event: "Ramayana Era", desc: "Horses become central to royal life — hunting on horseback is established as a royal sport, cementing the bond between Indian nobility and the horse." },
  { year: "1800s", event: "Colonial Cavalry", desc: "British cavalry traditions introduce structured equestrian sport to India. Polo, tent pegging, and show jumping gain prominence in the subcontinent." },
  { year: "1967", event: "EFI Founded", desc: "The Equestrian Federation of India is constituted as the apex national body, affiliated with FEI, IOA, AEF, and MYAS/SAI." },
  { year: "1990s", event: "KEA Established", desc: "The Karnataka Equestrian Association is formed to govern and develop equestrian sport across Karnataka, affiliating with EFI." },
  { year: "2000s", event: "Growth Era", desc: "Increased participation in dressage and show jumping. Karnataka riders begin representing the state at national EFI championships." },
  { year: "2010s", event: "Structured Competition", desc: "KEA introduces a structured state calendar, district chapters, and qualification pathways for national events." },
  { year: "2026", event: "Today", desc: "Karnataka Equestrian Association governs 5 disciplines, 500+ registered members, and represents Karnataka's equestrian community at the national level." },
];

export default function HistoryPage() {
  return (
    <InnerPageShell
      title="History of Equestrian Sport"
      subtitle="From ancient chariot racing to modern competition"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "History" }]}
    >
      {/* Ancient Heritage */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Ancient Heritage</span>
              </div>
            </BlurFade>
            <BoxReveal delay={0.15}>
              <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] leading-snug mb-6">
                A Legacy Written<br /><span className="italic">in Stone and Coin</span>
              </h2>
            </BoxReveal>
            <FadeText delay={0.3} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                India has a rich heritage of equestrian sport. Evidence of horse games and equestrian activities has been found in inscriptions, carvings, and coins excavated in Mohenjodaro and Harappa — among the oldest records of organised equestrian activity in the world.
              </p>
            </FadeText>
            <FadeText delay={0.4} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                During the Vedic period (2500 BC – 600 BC), a form of chariot racing was one of the most popular games. This continued into the Ramayana period when hunting became a royal sport, cementing the horse as a symbol of nobility, power, and grace in Indian culture.
              </p>
            </FadeText>
            <FadeText delay={0.5} inView>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                Karnataka's own history is deeply intertwined with equestrian tradition. The cavalry forces of the Vijayanagara Empire, the Wodeyar kings of Mysore, and Hyder Ali and Tipu Sultan were renowned for their horsemanship — a legacy that lives on in modern Karnataka equestrian sport.
              </p>
            </FadeText>
          </div>

          <div className="space-y-6">
            <BlurFade delay={0.2} inView>
              <div className="border-l-2 border-[#C9A84C] pl-8 py-4">
                <p className="font-heading text-xl lg:text-2xl italic text-[#0B1C2D] leading-relaxed font-light mb-3">
                  "The horse is a proud animal that can sense the soul of a rider. In India, this bond has been sacred for more than four thousand years."
                </p>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C]">Ancient Indian Equestrian Tradition</span>
              </div>
            </BlurFade>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { num: "4,500+", label: "Years of Heritage" },
                { num: "2500 BC", label: "Earliest Records" },
                { num: "5", label: "Disciplines Today" },
                { num: "1967", label: "EFI Founded" },
              ].map((s, i) => (
                <BlurFade key={s.label} delay={0.25 + i * 0.08} inView>
                  <div className="bg-white border border-[#EDEAE3] p-5 text-center">
                    <div className="font-heading text-3xl font-light text-[#0B1C2D] mb-1">{s.num}</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C]">{s.label}</div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Era */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">The Modern Game</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-6">
              From Cavalry to <span className="italic">Championship</span>
            </h2>
          </BoxReveal>
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeText delay={0.25} inView>
              <div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                  The modern era of structured equestrian sport in India began with the British presence in the 19th century. Polo, tent pegging, and show jumping were introduced as regimental sports in the Indian Army, where they became deeply embedded in military culture and tradition.
                </p>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                  The Equestrian Federation of India was constituted in 1967 as the apex governing body, bringing together state associations under a unified framework affiliated with the international body, the FEI (Fédération Équestre Internationale). This marked the beginning of structured, civilian competitive equestrian sport across India.
                </p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Karnataka's equestrian association emerged from this national framework, bringing together clubs, academies, and individual enthusiasts from across the state under a single governing body — providing pathways from state-level competition to national representation under EFI.
                </p>
              </div>
            </FadeText>
            <FadeText delay={0.35} inView>
              <div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">
                  Today, Karnataka boasts riders competing across all five FEI-recognised equestrian disciplines: Dressage, Show Jumping, Eventing, Tent Pegging, and Endurance. The state hosts a structured annual competition calendar, district-level chapters, and training programmes aligned with the national EFI framework.
                </p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  The Karnataka Equestrian Association remains committed to this history — honouring the ancient bond between horse and rider while building a modern, competitive, and inclusive equestrian community for the next generation.
                </p>
              </div>
            </FadeText>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-[#0B1C2D] py-20 lg:py-28 overflow-hidden">
        <AnimatedGridPattern className="opacity-40" numSquares={15} maxOpacity={0.06} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]/50" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]/70 font-medium">Timeline</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-white mb-14">Key <span className="italic">Milestones</span></h2>
          </BlurFade>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-[#C9A84C]/15 hidden sm:block" />
            <AnimatedList className="space-y-8" delay={0.15} stagger={0.1}>
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-right shrink-0 w-16 hidden sm:block">
                    <span className="font-heading text-[13px] text-[#C9A84C]/60 group-hover:text-[#C9A84C] transition-colors">{item.year}</span>
                  </div>
                  <div className="hidden sm:flex flex-col items-center shrink-0 relative z-10">
                    <div className="w-3 h-3 rounded-full border-2 border-[#C9A84C]/40 group-hover:border-[#C9A84C] transition-colors bg-[#0B1C2D] mt-0.5" />
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="sm:hidden text-[10px] tracking-[0.14em] uppercase text-[#C9A84C]/60 mb-1">{item.year}</div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C]/70 mb-1">{item.event}</div>
                    <p className="text-white/55 text-[13px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F4EF] py-16 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-2xl font-light text-[#0B1C2D]">Become part of this <span className="italic">living heritage.</span></h3>
              <p className="text-[#6B7280] text-sm mt-1">Join the Karnataka Equestrian Association and write the next chapter.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/membership" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Join KEA →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
