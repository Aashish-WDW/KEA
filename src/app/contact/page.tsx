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

const team = [
  { initials: "AM", name: "Dr. Anand Murthy", role: "Secretary General", phone: "+91 98800 00000", email: "secretary@karnatakaequestrian.in" },
  { initials: "PK", name: "Ms. Priya Krishnaswamy", role: "Joint Secretary", phone: "+91 98800 00001", email: "jointsec@karnatakaequestrian.in" },
  { initials: "VH", name: "Mr. Vikram Hegde", role: "Treasurer", phone: "+91 98800 00002", email: "treasurer@karnatakaequestrian.in" },
];

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

          {/* Contact form */}
          <BlurFade delay={0.1} inView>
            <div className="relative bg-white border border-[#EDEAE3] p-10">
              <BorderBeam duration={15} colorFrom="#C9A84C" colorTo="#E8D59E" />
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Send a Message</span>
              </div>
              <BoxReveal delay={0.15}>
                <h2 className="font-heading text-2xl lg:text-3xl font-light text-[#0B1C2D] mb-8">Get in <span className="italic">Touch</span></h2>
              </BoxReveal>

              <FadeText delay={0.25} inView>
                <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">Subject</label>
                    <select className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none">
                      <option value="">Select a subject</option>
                      <option>General Enquiry</option>
                      <option>Membership Application</option>
                      <option>Event Registration</option>
                      <option>EFI Rider / Horse Registration</option>
                      <option>Discipline / Technical Queries</option>
                      <option>Media & Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.14em] uppercase text-[#6B7280] mb-2">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-[#b8963e] transition-colors"
                >
                  Send Message
                </button>
                </form>
              </FadeText>
            </div>
          </BlurFade>

          {/* Contact details */}
          <div className="space-y-8">
            {/* Address */}
            <BlurFade delay={0.15} inView>
              <MagicCard className="bg-white border border-[#EDEAE3]">
                <div className="p-8 relative z-10">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-[#C9A84C] mb-4">Headquarters</div>
                  <h3 className="font-heading text-lg font-medium text-[#0B1C2D] mb-3">Karnataka Equestrian Association</h3>
                  <address className="text-[#6B7280] text-sm not-italic leading-relaxed">
                    Palace Grounds Equestrian Complex<br />
                    Bangalore – 560 052<br />
                    Karnataka, India
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
                      { label: "Email", value: "info@karnatakaequestrian.in" },
                      { label: "Secretariat", value: "secretary@karnatakaequestrian.in" },
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
                  <span className="text-[#C9A84C]/75">info@karnatakaequestrian.in</span>
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

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((person, i) => (
              <BlurFade key={person.name} delay={0.15 + i * 0.08} inView>
                <MagicCard className="border border-[#EDEAE3] hover:border-[#C9A84C]/35 transition-colors group h-full">
                  <div className="p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#F7F4EF] border-2 border-[#EDEAE3] group-hover:border-[#C9A84C]/40 transition-colors flex items-center justify-center shrink-0">
                      <span className="font-heading text-base font-medium text-[#0B1C2D]">{person.initials}</span>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.12em] uppercase text-[#C9A84C] mb-1">{person.role}</div>
                      <div className="font-medium text-[#0B1C2D] text-sm">{person.name}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-[12px] text-[#6B7280]">
                    <div>{person.phone}</div>
                    <div className="break-all">{person.email}</div>
                  </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
