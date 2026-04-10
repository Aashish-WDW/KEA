import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

type Crumb = { label: string; href?: string };

interface InnerPageShellProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  children?: React.ReactNode;
}

export default function InnerPageShell({ title, subtitle, breadcrumbs, children }: InnerPageShellProps) {
  return (
    <div className="min-h-screen">
      {/* ── Page Header ── */}
      <div className="bg-[#0B1C2D] pt-36 pb-20 relative overflow-hidden">
        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_75%_25%,_#1C3050,_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_10%_80%,_#0f2540,_transparent)]" />

        {/* Diagonal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top gold accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />

        {/* Decorative ring — top right */}
        <div className="absolute right-[-6%] top-[-20%] w-[380px] h-[380px] rounded-full border border-[#C9A84C]/8" />
        <div className="absolute right-[-1%] top-[-10%] w-[240px] h-[240px] rounded-full border border-[#C9A84C]/12" />

        {/* Decorative ring — bottom left */}
        <div className="absolute left-[-4%] bottom-[-25%] w-[280px] h-[280px] rounded-full border border-[#C9A84C]/7" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <BlurFade delay={0.05}>
            <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#C9A84C]/25 text-[10px]">›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-[#C9A84C] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C]/65">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </BlurFade>

          {/* KEA label */}
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]/50" />
              <span className="text-[9px] tracking-[0.25em] uppercase text-[#C9A84C]/60 font-medium">Karnataka Equestrian Association</span>
            </div>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.15}>
            <h1 className="font-heading text-4xl lg:text-6xl font-light text-white leading-tight mb-3">{title}</h1>
            {subtitle && (
              <p className="font-heading text-lg italic text-[#E8D59E]/60 mt-2 max-w-xl">{subtitle}</p>
            )}
          </BlurFade>

          {/* Bottom decorative rule */}
          <BlurFade delay={0.2}>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#C9A84C]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/40" />
              <div className="h-px flex-1 max-w-[80px] bg-[#C9A84C]/15" />
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Content */}
      <div>{children ?? <ComingSoon />}</div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div className="relative bg-[#F7F4EF] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A84C18 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40 flex flex-col items-center text-center relative z-10">
        <BlurFade delay={0.1}>
          <div className="mb-10 relative">
            {/* Outer ring */}
            <div className="w-24 h-24 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#C9A84C]/50 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="KEA Logo" className="w-10 h-10 object-contain" />
              </div>
            </div>
            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#C9A84C]/40" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#C9A84C]/40" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-4">
            Page <span className="italic">Under Development</span>
          </h2>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-10 max-w-md">
            This section is being prepared. Please check back soon, or return to the homepage to explore what's available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Back to Home
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-[#0B1C2D]/15 text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
              Contact Us
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
