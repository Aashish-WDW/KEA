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
  { label: "About Us", href: "/about" },
  { label: "Office Bearers", href: "/office-bearers" },
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

  const dark = true; // Soon-style: the bar is always dark, so text stays light

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (scrolled || mobileOpen)
          ? "bg-[#1D150C]/[0.86] backdrop-blur-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="KEA Logo" className="h-[42px] w-auto object-contain" />
          <div className="hidden sm:block">
            <div
              className={cn(
                "font-heading text-[15px] tracking-[0.06em] uppercase leading-[1.15] transition-colors duration-300",
                dark ? "text-white" : "text-[#1D150C]"
              )}
            >
              Karnataka Equestrian
            </div>
            <div className="font-heading text-[15px] tracking-[0.06em] uppercase leading-[1.15] text-[#EDECE8]">
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
                    "relative flex items-center gap-1 px-2.5 xl:px-3 py-2 font-heading text-[13px] xl:text-[14px] tracking-[0.05em] uppercase transition-colors duration-200",
                    dark
                      ? "text-[#EDECE8]/75 hover:text-[#EDECE8]"
                      : "text-[#1D150C] hover:text-[#FA712A]",
                    isActive(pathname, item) && "text-[#EDECE8]"
                  )}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  {/* Active indicator */}
                  {isActive(pathname, item) && (
                    <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-[#FA712A]" />
                  )}
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[220px]">
                  <div className="bg-[#1D150C] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.6)] border border-[#EDECE8]/15 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-5 py-3 font-heading text-[13px] tracking-[0.05em] uppercase transition-colors",
                          pathname === child.href
                            ? "text-[#FA712A] bg-[#FA712A]/[0.08]"
                            : "text-[#EDECE8]/75 hover:text-[#EDECE8] hover:bg-[#FA712A]/[0.08]"
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
                  "relative px-2.5 xl:px-3 py-2 font-heading text-[13px] xl:text-[14px] tracking-[0.05em] uppercase transition-colors duration-200",
                  dark
                    ? "text-[#EDECE8]/75 hover:text-[#EDECE8]"
                    : "text-[#1D150C] hover:text-[#FA712A]",
                  isActive(pathname, item) && "text-[#EDECE8]"
                )}
              >
                {item.label}
                {isActive(pathname, item) && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-[#FA712A]" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a
            href="mailto:secretariat@kea.org.in"
            className="px-5 py-3 bg-[#B99A3D] text-[#1D150C] font-heading text-[14px] tracking-[0.05em] uppercase rounded-[2px] hover:bg-[#FA712A] hover:-translate-y-0.5 transition-all duration-200"
          >
            Join KEA
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={cn("w-5 h-5", dark ? "text-white" : "text-[#1D150C]")} />
          ) : (
            <Menu className={cn("w-5 h-5", dark ? "text-white" : "text-[#1D150C]")} />
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
            className="lg:hidden bg-[#1D150C] border-t border-[#EDECE8]/15 shadow-[0_18px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              {navLinks.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className={cn(
                          "w-full flex items-center justify-between px-6 py-4 font-heading text-[14px] tracking-[0.05em] uppercase border-b border-[#EDECE8]/15",
                          isActive(pathname, item) ? "text-[#FA712A]" : "text-[#EDECE8]"
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
                            className="bg-[#140E08] overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-8 py-3 font-heading text-[13px] tracking-[0.05em] uppercase border-b border-[#EDECE8]/10 transition-colors",
                                  pathname === child.href
                                    ? "text-[#FA712A] font-semibold"
                                    : "text-[#EDECE8]/70 hover:text-[#FA712A]"
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
                        "block px-6 py-4 font-heading text-[14px] tracking-[0.05em] uppercase border-b border-[#EDECE8]/15 transition-colors",
                        isActive(pathname, item)
                          ? "text-[#FA712A]"
                          : "text-[#EDECE8] hover:text-[#FA712A]"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="p-6 flex flex-col gap-3">
                <a
                  href="mailto:secretariat@kea.org.in"
                  className="text-center py-4 bg-[#B99A3D] text-[#1D150C] font-heading text-[15px] tracking-[0.05em] uppercase rounded-[2px] hover:bg-[#FA712A] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Join KEA
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
