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
      <div
        className="pt-40 pb-24 relative overflow-hidden isolate text-[#EDECE8]"
        style={{ background: "radial-gradient(900px 520px at 90% 0%, rgb(165 77 37 / .45), transparent), #0F0F0F" }}
      >
        {/* Oversized KEA watermark + hairline, as on the Soon hero */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute right-[clamp(12px,2vw,28px)] bottom-[-0.12em] -z-10 font-heading text-[clamp(110px,22vw,300px)] leading-[0.8] text-[#B59972] opacity-[0.18]"
        >
          KEA
        </span>
        <i aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-px bg-[#EDECE8]/15" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <BlurFade delay={0.05}>
            <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[#B59972]/60 text-[12px]">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#EDECE8]/60 hover:text-[#FA712A] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#B59972]">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </BlurFade>

          {/* KEA label */}
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B59972]/70" />
              <span className="font-heading text-[14px] tracking-[0.06em] uppercase text-[#B59972]">Karnataka Equestrian Association</span>
            </div>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.15}>
            <h1 className="font-heading text-[clamp(44px,8vw,104px)] leading-[0.95] text-[#EDECE8] mb-3 max-w-5xl">{title}</h1>
            {subtitle && (
              <p className="text-[clamp(15px,1.8vw,18px)] uppercase tracking-[0.04em] text-[#EDECE8]/80 mt-5 max-w-xl">{subtitle}</p>
            )}
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
    <div className="relative bg-[#EDECE8] overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle, #FA712A18 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40 flex flex-col items-center text-center relative z-10">
        <BlurFade delay={0.1}>
          <div className="mb-10 relative">
            {/* Outer ring */}
            <div className="w-24 h-24 rounded-full border border-[#FA712A]/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#FA712A]/50 flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="KEA Logo" className="w-10 h-10 object-contain" />
              </div>
            </div>
            {/* Corner marks */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#FA712A]/40" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#FA712A]/40" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#1D150C] mb-4">
            Page <span className="italic">Under Development</span>
          </h2>
          <p className="text-[#6E6155] text-sm leading-relaxed mb-10 max-w-md">
            This section is being prepared. Please check back soon, or return to the homepage to explore what's available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="px-8 py-3.5 bg-[#B99A3D] text-[#1D150C] font-heading text-[14px] tracking-[0.06em] uppercase font-semibold hover:bg-[#FA712A] transition-colors">
              Back to Home
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-[#1D150C]/15 text-[#1D150C] font-heading text-[14px] tracking-[0.06em] uppercase hover:border-[#FA712A] hover:text-[#FA712A] transition-colors">
              Contact Us
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
