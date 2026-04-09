import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";

export default function SecretaryMessagePage() {
  return (
    <InnerPageShell
      title="Secretary's Message"
      subtitle="A word from our Secretary General"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Secretary's Message" }]}
    >
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-14">
            {/* Profile */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <BlurFade delay={0.1} inView>
              <div className="w-36 h-36 rounded-full border-2 border-[#C9A84C]/40 bg-white flex items-center justify-center mb-6">
                <span className="font-heading text-3xl font-medium text-[#0B1C2D] tracking-wider">AM</span>
              </div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-2">Secretary General</div>
              <h3 className="font-heading text-xl font-medium text-[#0B1C2D] mb-1">Dr. Anand Murthy</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed mt-2 max-w-[220px]">Karnataka Equestrian Association<br />Bangalore, Karnataka</p>
              <p className="text-[11px] text-[#9CA3AF] mt-2">secretary@karnatakaequestrian.in</p>

              <div className="mt-8 pt-8 border-t border-[#EDEAE3] w-full">
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mb-3">Term</div>
                <div className="text-[#0B1C2D] text-sm">2024 – 2026</div>
              </div>
              </BlurFade>
            </div>

            {/* Message */}
            <div>
              <BlurFade delay={0.15} inView>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Secretary General's Address</span>
              </div>
              </BlurFade>

              <BoxReveal delay={0.2}>
              <p className="font-heading text-2xl italic text-[#0B1C2D] leading-relaxed mb-8 font-light">
                "Dear members, riders, and friends of the Karnataka Equestrian Association,"
              </p>
              </BoxReveal>

              <FadeText delay={0.3} inView>
              <div className="space-y-5 text-[#4A5568] text-sm leading-relaxed">
                <p>
                  It is a privilege to serve as Secretary General of the Karnataka Equestrian Association. Mine is the task of translating our President's vision into action — ensuring that every competition, every membership process, every communication, and every affiliation with EFI operates smoothly, transparently, and in the best interests of our members.
                </p>
                <p>
                  This year, we have focused on three administrative priorities: strengthening our annual competition calendar in alignment with EFI's national schedule; expanding our membership outreach to clubs and individuals across all of Karnataka's districts; and ensuring full compliance with the technical guidelines issued by EFI for all five disciplines.
                </p>
                <p>
                  We have also worked to improve the accessibility of information — guidelines, prospectuses, event calendars, and results — so that every member has what they need, when they need it. This website is part of that commitment.
                </p>
                <p>
                  For EFI services including rider registration, horse registration, NOCs, entries for national competitions, and any other administrative matter, I encourage you to reach out to us directly. We are here to support your equestrian journey.
                </p>
                <p>
                  To every rider who competes under the KEA banner, to every trainer who shapes our riders, and to every club that organises events in Karnataka — thank you. Your dedication to the sport is what makes this Association meaningful.
                </p>
              </div>
              </FadeText>

              <BlurFade delay={0.4} inView>
              <div className="mt-10 pt-8 border-t border-[#EDEAE3]">
                <p className="font-heading text-lg italic text-[#0B1C2D] mb-1">With warm regards,</p>
                <p className="font-heading text-xl font-medium text-[#0B1C2D]">Dr. Anand Murthy</p>
                <p className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mt-1">Secretary General, Karnataka Equestrian Association</p>
              </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-t border-[#EDEAE3]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BlurFade delay={0.1} inView>
            <p className="text-[#6B7280] text-sm">Have a question for the Secretariat? Get in touch.</p>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/contact" className="px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Contact Us →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
