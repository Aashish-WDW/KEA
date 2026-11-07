import Link from "next/link";

const quickLinks = [
  { label: "About KEA", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  { label: "Office Bearers", href: "/office-bearers" },
  { label: "Contact Us", href: "/contact" },
];

const disciplineLinks = [
  { label: "Dressage", href: "/disciplines/dressage" },
  { label: "Show Jumping", href: "/disciplines/show-jumping" },
  { label: "Eventing", href: "/disciplines/eventing" },
  { label: "Tent Pegging", href: "/disciplines/tent-pegging" },
  { label: "Endurance", href: "/disciplines/endurance" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] text-[#EDECE8] border-t border-[#EDECE8]/15 overflow-hidden">
      <div className="pointer-events-none absolute -right-[10%] -bottom-[60%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgb(165_77_37/.28),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-7 relative z-10">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 mb-14">
          <div>
            <img src="/logo.png" alt="KEA Logo" className="w-[160px] h-auto mb-5" />
            <p className="text-[#EDECE8]/70 text-[15px] leading-[1.7] max-w-[320px] mb-6">The apex body governing equestrian sports in Karnataka. Affiliated with EFI, KOA, and MYAS.</p>
            <div className="flex gap-2 flex-wrap">
              {["EFI", "KOA", "MYAS"].map((tag) => (
                <span key={tag} className="font-heading text-[12px] tracking-[0.06em] uppercase border border-[#EDECE8]/20 text-[#B59972] px-2.5 py-1.5">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#B59972] mb-5">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#EDECE8]/80 hover:text-[#FA712A] text-[15px] transition-colors flex items-center gap-2 group">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#B59972] mb-5">Disciplines</h4>
            <ul className="space-y-1.5">
              {disciplineLinks.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="text-[#EDECE8]/80 hover:text-[#FA712A] text-[15px] transition-colors flex items-center gap-2 group">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#B59972] mb-5">Contact Us</h4>
            <div className="space-y-4 text-[15px] text-[#EDECE8]/80 leading-[1.7]">
              <p>Karnataka Equestrian Association<br />F2 Block-Mahogany, Manyata Business Park<br />Outer Ring Road, Nagavara<br />Bangalore, KA 560043</p>
              <p className="hover:text-[#FA712A]/70 transition-colors cursor-pointer">secretariat@kea.org.in</p>
              <p>+91 80 0000 0000</p>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 font-heading text-[13px] tracking-[0.06em] uppercase text-[#EDECE8] border-b border-[#EDECE8]/30 pb-1.5 hover:border-[#B99A3D] hover:text-[#B99A3D] transition-all">
                Contact Us <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#EDECE8]/15 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] tracking-[0.08em] uppercase text-[#EDECE8]/60">© 2026 Karnataka Equestrian Association. All rights reserved.</p>
          <p className="text-[12px] tracking-[0.08em] uppercase text-[#EDECE8]/50">Affiliated with the Equestrian Federation of India</p>
        </div>
      </div>
    </footer>
  );
}
