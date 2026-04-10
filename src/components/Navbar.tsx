"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About KEA", href: "/about" },
      { label: "History of Equestrian Sport", href: "/about/history" },
      { label: "President's Message", href: "/about/president" },
      { label: "Secretary's Message", href: "/about/secretary" },
      { label: "Bylaws", href: "/about/bylaws" },
    ],
  },
  {
    label: "Office Bearers",
    href: "/office-bearers",
    children: [
      { label: "Present Office Bearers", href: "/office-bearers" },
      { label: "Executive Committee", href: "/office-bearers/executive-committee" },
      { label: "Committees", href: "/office-bearers/committees" },
      { label: "District Chapters", href: "/office-bearers/district-chapters" },
      { label: "Past Presidents", href: "/office-bearers/past-presidents" },
    ],
  },
  {
    label: "Disciplines",
    href: "/disciplines",
    children: [
      { label: "Dressage", href: "/disciplines/dressage" },
      { label: "Show Jumping", href: "/disciplines/show-jumping" },
      { label: "Eventing", href: "/disciplines/eventing" },
      { label: "Tent Pegging", href: "/disciplines/tent-pegging" },
      { label: "Endurance", href: "/disciplines/endurance" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "Events", href: "/events" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/" && pathname === "/") return true;
  if (item.href !== "/" && item.href !== "#" && pathname.startsWith(item.href)) return true;
  if (item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href))) return true;
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Reset scroll state when navigating
  useEffect(() => {
    setScrolled(!isHome || window.scrollY > 40);
    setMobileOpen(false);
  }, [isHome, pathname]);

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  const dark = !scrolled; // white text on transparent (hero) bg

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/96 backdrop-blur-sm shadow-[0_1px_24px_rgba(0,0,0,0.07)] border-b border-[#EDEAE3]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C]/70 flex items-center justify-center overflow-hidden">
            <img src="/logo.png" alt="KEA Logo" className="w-7 h-7 object-contain" />
          </div>
          <div className="hidden sm:block">
            <div
              className={cn(
                "font-heading text-[13px] font-semibold tracking-wide leading-none transition-colors duration-300",
                dark ? "text-white" : "text-[#0B1C2D]"
              )}
            >
              Karnataka Equestrian
            </div>
            <div className="text-[9px] tracking-[0.18em] uppercase text-[#C9A84C]/80 mt-0.5">
              Association
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  className={cn(
                    "relative flex items-center gap-0.5 px-3 py-2 text-[10px] tracking-[0.14em] uppercase font-medium transition-colors duration-200",
                    dark
                      ? "text-white/85 hover:text-[#C9A84C]"
                      : "text-[#0B1C2D] hover:text-[#C9A84C]",
                    isActive(pathname, item) && (dark ? "text-[#C9A84C]" : "text-[#C9A84C]")
                  )}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  {/* Active indicator */}
                  {isActive(pathname, item) && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-[#C9A84C] rounded-full" />
                  )}
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[220px]">
                  <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-[#EDEAE3] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-5 py-2.5 text-[10px] tracking-[0.08em] uppercase transition-colors",
                          pathname === child.href
                            ? "text-[#C9A84C] bg-[#F7F4EF] font-semibold"
                            : "text-[#374151] hover:text-[#C9A84C] hover:bg-[#F7F4EF]"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-[10px] tracking-[0.14em] uppercase font-medium transition-colors duration-200",
                  dark
                    ? "text-white/85 hover:text-[#C9A84C]"
                    : "text-[#0B1C2D] hover:text-[#C9A84C]",
                  isActive(pathname, item) && "text-[#C9A84C]"
                )}
              >
                {item.label}
                {isActive(pathname, item) && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-[2px] bg-[#C9A84C] rounded-full" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            href="/member-login"
            className={cn(
              "text-[10px] tracking-[0.14em] uppercase font-medium transition-colors duration-200",
              dark
                ? "text-white/75 hover:text-[#C9A84C]"
                : "text-[#0B1C2D] hover:text-[#C9A84C]"
            )}
          >
            Member Login
          </Link>
          <Link
            href="/membership"
            className="px-5 py-2.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.14em] uppercase font-semibold hover:bg-[#b8963e] transition-colors duration-200"
          >
            Join KEA
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={cn("w-5 h-5", dark ? "text-white" : "text-[#0B1C2D]")} />
          ) : (
            <Menu className={cn("w-5 h-5", dark ? "text-white" : "text-[#0B1C2D]")} />
          )}
        </button>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-[#EDEAE3] overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              {navLinks.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className={cn(
                          "w-full flex items-center justify-between px-6 py-4 text-[10px] tracking-[0.14em] uppercase font-medium border-b border-[#EDEAE3]",
                          isActive(pathname, item) ? "text-[#C9A84C]" : "text-[#0B1C2D]"
                        )}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            openDropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#F7F4EF] overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-8 py-3 text-[10px] tracking-[0.1em] uppercase border-b border-[#EDEAE3]/60 transition-colors",
                                  pathname === child.href
                                    ? "text-[#C9A84C] font-semibold"
                                    : "text-[#6B7280] hover:text-[#C9A84C]"
                                )}
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-6 py-4 text-[10px] tracking-[0.14em] uppercase font-medium border-b border-[#EDEAE3] transition-colors",
                        isActive(pathname, item)
                          ? "text-[#C9A84C]"
                          : "text-[#0B1C2D] hover:text-[#C9A84C]"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="p-6 flex flex-col gap-3">
                <Link
                  href="/member-login"
                  className="text-center py-3.5 text-[10px] tracking-[0.14em] uppercase text-[#0B1C2D] border border-[#EDEAE3] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Member Login
                </Link>
                <Link
                  href="/membership"
                  className="text-center py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.14em] uppercase font-semibold hover:bg-[#b8963e] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Join KEA
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
