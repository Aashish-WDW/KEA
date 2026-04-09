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
    <footer className="relative bg-[#060e1a] overflow-hidden">
      {/* Horizontal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 100%)",
          backgroundSize: "100% 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-[#C9A84C]/45 flex items-center justify-center shrink-0">
                <span className="font-heading text-[13px] font-medium text-[#C9A84C] tracking-widest">KEA</span>
              </div>
              <div>
                <div className="font-heading text-[13px] font-medium text-white leading-none">Karnataka Equestrian</div>
                <div className="text-[9px] tracking-[0.16em] uppercase text-[#C9A84C]/65 mt-0.5">Association</div>
              </div>
            </div>
            <p className="text-white/30 text-[12px] leading-relaxed mb-6">The apex body governing equestrian sports in Karnataka. Affiliated with EFI, IOA, and MYAS/SAI.</p>
            <div className="flex gap-2 flex-wrap">
              {["EFI", "IOA", "MYAS/SAI", "AEF"].map((tag) => (
                <span key={tag} className="text-[8px] tracking-[0.12em] uppercase border border-[#C9A84C]/15 text-[#C9A84C]/40 px-2 py-1">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/35 hover:text-[#C9A84C] text-[12px] tracking-wide transition-colors flex items-center gap-2 group">
                    <span className="text-[#C9A84C]/20 text-[7px] group-hover:text-[#C9A84C]/60 transition-colors">◇</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-6">Disciplines</h4>
            <ul className="space-y-3">
              {disciplineLinks.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="text-white/35 hover:text-[#C9A84C] text-[12px] tracking-wide transition-colors flex items-center gap-2 group">
                    <span className="text-[#C9A84C]/20 text-[7px] group-hover:text-[#C9A84C]/60 transition-colors">◇</span>
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] mb-6">Contact Us</h4>
            <div className="space-y-4 text-[12px] text-white/35 leading-relaxed">
              <p>Karnataka Equestrian Association<br />Bangalore, Karnataka – 560 001<br />India</p>
              <p className="hover:text-[#C9A84C]/70 transition-colors cursor-pointer">info@karnatakaequestrian.in</p>
              <p>+91 80 0000 0000</p>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[#C9A84C]/60 border border-[#C9A84C]/20 px-4 py-2 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all">
                Contact Us <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/18 tracking-wide">© 2026 Karnataka Equestrian Association. All rights reserved.</p>
          <p className="text-[11px] text-white/15 tracking-wide">Affiliated with the Equestrian Federation of India</p>
        </div>
      </div>
    </footer>
  );
}
