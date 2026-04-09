import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Login",
  description: "Access the KEA Member Portal. Sign in with your Member ID or email to manage your membership, registrations, and competition entries.",
};

export default function MemberLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Split layout */}
      <div className="flex-1 flex">
        {/* Left — Image panel (hidden on mobile) */}
        <div className="hidden lg:block w-[45%] relative overflow-hidden">
          <img
            src="/images/hero_heritage.png"
            alt="Equestrian heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/70 to-[#0B1C2D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2D]/80 via-transparent to-transparent" />

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]/50" />
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#C9A84C]/70 font-medium">Member Portal</span>
            </div>
            <h2 className="font-heading text-3xl font-light text-white leading-snug mb-3">
              Welcome to<br /><span className="italic text-[#C9A84C]">KEA Portal</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Access your membership dashboard, competition entries, and rider registration services.
            </p>
          </div>

          {/* Decorative rings */}
          <div className="absolute top-20 right-[-20%] w-[300px] h-[300px] rounded-full border border-[#C9A84C]/10" />
          <div className="absolute top-32 right-[-10%] w-[200px] h-[200px] rounded-full border border-[#C9A84C]/15" />
        </div>

        {/* Right — Login form */}
        <div className="flex-1 bg-[#F7F4EF] flex items-center justify-center px-6 py-16 relative overflow-hidden">
          {/* Dot grid background */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: "radial-gradient(circle, #C9A84C18 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="w-full max-w-md relative z-10">
            <BlurFade delay={0.1}>
              {/* Card */}
              <div className="relative bg-white border border-[#EDEAE3] shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <BorderBeam duration={15} colorFrom="#C9A84C" colorTo="#E8D59E" />
                {/* Card header */}
                <div className="bg-[#0B1C2D] px-10 py-8 text-center relative overflow-hidden">
                  {/* Subtle radial */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_#1C3050,_transparent)]" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 border-2 border-[#C9A84C]/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-heading text-xl font-medium text-[#C9A84C]">KEA</span>
                    </div>
                    <h1 className="font-heading text-2xl font-light text-white mb-1">Member <span className="italic">Portal</span></h1>
                    <p className="text-white/40 text-[11px] tracking-[0.1em] uppercase">Karnataka Equestrian Association</p>
                  </div>
                </div>

                {/* Form */}
                <div className="px-10 py-10">
                  <form className="space-y-5">
                    <div>
                      <label className="block text-[10px] tracking-[0.16em] uppercase text-[#6B7280] mb-2">Member ID / Email</label>
                      <input
                        type="text"
                        placeholder="KEA-XXXXXX or email address"
                        className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-[0.16em] uppercase text-[#6B7280] mb-2">Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-[#EDEAE3] bg-[#F7F4EF] px-4 py-3 text-sm text-[#0B1C2D] placeholder:text-[#C4BBAF] focus:outline-none focus:border-[#C9A84C] transition-colors"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-3.5 h-3.5 accent-[#C9A84C]" />
                        <span className="text-[11px] text-[#6B7280] group-hover:text-[#0B1C2D] transition-colors">Keep me signed in</span>
                      </label>
                      <button type="button" className="text-[11px] text-[#C9A84C] hover:text-[#b8963e] transition-colors">
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-[#b8963e] transition-colors"
                    >
                      Sign In to Portal
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-7">
                    <div className="flex-1 h-px bg-[#EDEAE3]" />
                    <span className="text-[10px] text-[#9CA3AF] tracking-[0.1em]">OR</span>
                    <div className="flex-1 h-px bg-[#EDEAE3]" />
                  </div>

                  {/* Membership CTA */}
                  <div className="text-center">
                    <p className="text-[12px] text-[#6B7280] mb-3">Not yet a member of KEA?</p>
                    <Link
                      href="/membership"
                      className="inline-block px-8 py-3 border border-[#0B1C2D]/20 text-[#0B1C2D] text-[10px] tracking-[0.16em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    >
                      Apply for Membership
                    </Link>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Help note */}
            <BlurFade delay={0.2}>
              <div className="mt-6 text-center space-y-1.5">
                <p className="text-[11px] text-[#9CA3AF]">
                  For login issues, contact{" "}
                  <a href="mailto:secretary@karnatakaequestrian.in" className="text-[#C9A84C]/80 hover:text-[#C9A84C] transition-colors">
                    secretary@karnatakaequestrian.in
                  </a>
                </p>
                <p className="text-[10px] text-[#B0A898] tracking-[0.06em]">
                  Member ID is issued upon successful KEA registration
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
