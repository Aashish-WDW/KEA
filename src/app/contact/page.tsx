import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach the Karnataka Equestrian Association. Contact the KEA Secretariat for membership, event registration, EFI services, and general enquiries.",
};


export default function ContactPage() {
  return (
    <InnerPageShell
      title="Contact Us"
      subtitle="Reach the Karnataka Equestrian Association"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
    >
      {/* Main contact section */}
      <section className="relative bg-[#F7F4EF] py-20 lg:py-28 overflow-hidden">
        {/* Professional Stable Atmosphere Background */}
        <div className="absolute inset-0 z-0 opacity-15 grayscale brightness-110">
          <img 
            src="/images/contact_hero.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF] via-transparent to-[#F7F4EF]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-14 relative z-10">

          {/* Contact details */}
          <div className="space-y-8">
            {/* Address */}
            <BlurFade delay={0.15} inView>
              <MagicCard className="bg-white border border-[#EDEAE3]">
                <div className="p-8 relative z-10">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-4">Headquarters</div>
                  <h3 className="font-heading text-lg font-medium text-[#0B1C2D] mb-3">Karnataka Equestrian Association</h3>
                  <address className="text-[#6B7280] text-sm not-italic leading-relaxed">
                    F2 Block-Mahogany, Manyata Business Park<br />
                    Outer Ring Road, Nagavara<br />
                    Bangalore, KA 560043
                  </address>
                </div>
              </MagicCard>
            </BlurFade>

            {/* Contact */}
            <BlurFade delay={0.25} inView>
              <MagicCard className="bg-white border border-[#EDEAE3]">
                <div className="p-8 relative z-10">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-4">Reach Us</div>
                  <div className="space-y-4">
                    {[
                      { label: "Phone", value: "+91 80 0000 0000" },
                      { label: "Email", value: "secretariat@kea.org.in" },
                      { label: "Secretariat", value: "secretariat@kea.org.in" },
                      { label: "Office Hours", value: "Mon – Fri, 9:00 AM – 5:00 PM" },
                    ].map((row) => (
                      <div key={row.label} className="flex gap-4 pb-4 border-b border-[#EDEAE3] last:border-0 last:pb-0">
                        <span className="text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] w-24 shrink-0 mt-0.5">{row.label}</span>
                        <span className="text-[#0B1C2D] text-sm">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </BlurFade>

            {/* EFI Services note */}
            <BlurFade delay={0.35} inView>
              <div className="bg-[#0B1C2D] p-8">
                <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-3">EFI Services</div>
                <p className="text-white/50 text-[12px] leading-relaxed">
                  For EFI services including horse passports, NOCs, entries for national competitions, rider and horse registration, and certificates — write to us at{" "}
                  <span className="text-[#C9A84C]/75">secretariat@kea.org.in</span>
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Secretariat team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Secretariat</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-12">Contact Our <span className="italic">Team</span></h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <p className="text-[#6B7280] text-base italic">To Be Confirmed</p>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
