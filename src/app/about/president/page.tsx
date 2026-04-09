import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";

export default function PresidentMessagePage() {
  return (
    <InnerPageShell
      title="President's Message"
      subtitle="A word from our President"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "President's Message" }]}
    >
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-14">
            {/* Profile */}
            <BlurFade delay={0.1} inView>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-36 h-36 rounded-full border-2 border-[#C9A84C]/40 bg-white flex items-center justify-center mb-6">
                <span className="font-heading text-3xl font-medium text-[#0B1C2D] tracking-wider">RS</span>
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-2">President</div>
              <h3 className="font-heading text-xl font-medium text-[#0B1C2D] mb-1">Brig. R.K. Sharma (Retd.)</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed mt-2 max-w-[220px]">Karnataka Equestrian Association<br />Bangalore, Karnataka</p>

              <div className="mt-8 pt-8 border-t border-[#EDEAE3] w-full">
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mb-3">Term</div>
                <div className="text-[#0B1C2D] text-sm">2024 – 2026</div>
              </div>
            </div>
            </BlurFade>

            {/* Message */}
            <div>
              <BlurFade delay={0.15} inView>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Presidential Address</span>
              </div>
              </BlurFade>

              <BoxReveal delay={0.2}>
              <p className="font-heading text-2xl italic text-[#0B1C2D] leading-relaxed mb-8 font-light">
                "Dear fellow equestrians and members of the Karnataka Equestrian Association,"
              </p>
              </BoxReveal>

              <FadeText delay={0.3} inView>
              <div className="space-y-5 text-[#4A5568] text-sm leading-relaxed">
                <p>
                  It is my privilege and honour to address you as the President of the Karnataka Equestrian Association. Our sport carries with it a heritage that spans thousands of years — from the chariot races of the Vedic era to the precision of modern dressage and the breathtaking excitement of show jumping. This is a tradition we carry forward with pride.
                </p>
                <p>
                  Karnataka has always held a special place in India's equestrian story. The cavalry traditions of the Vijayanagara Empire, the Wodeyar dynasty's equestrian culture, and Karnataka's long association with military horsemanship form the foundation upon which our Association stands. We are custodians of this living heritage.
                </p>
                <p>
                  As your President, my commitment is threefold: to elevate our riders to national prominence, to create meaningful pathways for young equestrians entering the sport, and to ensure that KEA operates with the transparency, integrity, and ambition that our members deserve.
                </p>
                <p>
                  This year, we have strengthened our calendar of competitions, expanded our district chapter network, and deepened our alignment with the Equestrian Federation of India to ensure Karnataka riders have every opportunity to represent our state on the national stage.
                </p>
                <p>
                  I am deeply grateful to our dedicated office bearers, our committed membership, our affiliated clubs, and the horses and riders who are the very heart of what we do. Without your passion, there is no Association.
                </p>
                <p>
                  I invite every equestrian enthusiast in Karnataka — rider, trainer, owner, or supporter — to join hands with us. Together, we will write the next chapter of equestrian excellence in Karnataka.
                </p>
              </div>
              </FadeText>

              <BlurFade delay={0.4} inView>
              <div className="mt-10 pt-8 border-t border-[#EDEAE3]">
                <p className="font-heading text-lg italic text-[#0B1C2D] mb-1">Warm regards,</p>
                <p className="font-heading text-xl font-medium text-[#0B1C2D]">Brig. R.K. Sharma (Retd.)</p>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mt-1">President, Karnataka Equestrian Association</p>
              </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other messages */}
      <section className="bg-white py-12 border-t border-[#EDEAE3]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BlurFade delay={0.1} inView>
            <p className="text-[#6B7280] text-sm">Also read the message from our Secretary General.</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/about/secretary" className="px-8 py-3.5 border border-[#0B1C2D]/18 text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              Secretary's Message →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
