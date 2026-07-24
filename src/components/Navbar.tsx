"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo_iitg from "../../public/logo_iitg.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import cetlogo from "../../public/logo/cet logo (1).jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "NPTEL", href: "/programs/nptel" },
      { label: "GIAN", href: "/programs/gian" },
      { label: "MITACS", href: "/programs/mitacs" },
      { label: "CSS MOOCS", href: "/programs/css_moocs" },
      { label: "PMMMNMTT", href: "/programs/pmmmnmtt" },
      { label: "Coursera", href: "/programs/coursera" },
      { label: "TEQIP-II", href: "/programs/TEQIP-II" },
      { label: "TEQIP-III", href: "/programs/TEQIP-III" },
      { label: "Teachers Training", href: "/programs/teacherstraining" },
      { label: "QIP", href: "/programs/qip" },
      { label: "ATAL Academy", href: "/programs/atal" },
      { label: "Defence Training", href: "/programs/defencetraining" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Activities", href: "/activities" },
  { label: "People", href: "/people" },
  { label: "Forms", href: "/forms" },
  { label: "Documents & Guidelines", href: "/doc" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = Math.max(
          0,
          Math.min(window.scrollY, Math.max(maxScroll, 0)),
        );
        setScrolled((prev) => {
          if (prev) return currentScroll > 60;
          return currentScroll > 100;
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const isParentActive = (children?: { href: string }[]) =>
    !!children?.some((child) => pathname === child.href);

  return (
    <header className="w-full">
      {/* Top banner — home page only, collapses on scroll */}
      {isHome && (
        <div
          suppressHydrationWarning
          className={`w-full bg-white transition-all duration-500 ease-in-out overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-60 sm:max-h-40 opacity-100"
          }`}
        >
          <div className="h-1 w-full bg-linear-to-r from-[#7B1113] via-red-400 to-[#7B1113]" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-5 py-4 sm:py-5 px-4 text-center">
            <Image
              src={logo_iitg}
              alt="iitg logo"
              className="h-14 sm:h-20 w-auto object-contain"
            />
            <div className="flex flex-col items-center gap-0.5">
              <p className="text-base sm:text-lg font-medium text-slate-700 tracking-wide mt-1">
                Centre for Educational Technology
              </p>
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-800 tracking-tight leading-tight text-center">
                Indian Institute of Technology Guwahati
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-700 tracking-wide mt-1">
                शैक्षिक प्रौद्योगिकी केंद्र
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer — reserves the nav's exact height on ALL screen sizes
          so content doesn't jump when the nav becomes fixed.
          52px = mobile nav row height, 60px = desktop. */}
      {scrolled && <div className="h-13 md:h-15" />}

      {/* Nav — fixed on ALL screen sizes once scrolled (not just md+) */}
      <nav
        suppressHydrationWarning
        className={`w-full z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 shadow-md border-b border-slate-200"
            : "relative border-t border-b border-slate-200 shadow-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center px-4 py-2.5 md:py-0">
          {/* Mobile: hamburger on the LEFT */}
          <button
            className="md:hidden rounded-lg p-2 text-slate-900 hover:bg-slate-100 transition shrink-0"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop: nav links centred */}
          <div className="hidden md:flex flex-1 justify-center">
            {navLinks.map((link) => {
              const active = link.children
                ? isParentActive(link.children)
                : pathname === link.href;

              return link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 lg:px-4 py-3 font-sans font-medium text-sm lg:text-base transition-colors border-b-2 ${
                      active
                        ? "text-[#7B1113] border-[#7B1113]"
                        : "text-slate-900 border-transparent hover:text-[#7B1113] hover:border-[#7B1113]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={13} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-52 rounded-xl bg-white border border-slate-200 py-2 shadow-lg z-50">
                      {link.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 text-sm font-medium font-sans transition-colors ${
                              childActive
                                ? "text-[#7B1113] font-semibold bg-[#7B1113]/5"
                                : "text-slate-700 hover:bg-[#7B1113]/5 hover:text-[#7B1113]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 lg:px-4 py-3 font-sans font-medium text-sm lg:text-base transition-colors border-b-2 ${
                    active
                      ? "text-[#7B1113] border-[#7B1113]"
                      : "text-slate-900 border-transparent hover:text-[#7B1113] hover:border-[#7B1113]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CET logo — RIGHT side, slides in when scrolled or on non-home pages */}
          <div
            className={`flex items-center transition-all duration-300 overflow-hidden shrink-0 ml-auto md:ml-2 ${
              scrolled || !isHome ? "w-auto opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Link href="/" aria-label="CET Home">
              <Image
                src={cetlogo}
                alt="CET logo"
                priority
                className="h-16 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Mobile dropdown menu panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 flex flex-col gap-1 overflow-y-auto max-h-[75vh]">
            {navLinks.map((link) => {
              const active = link.children
                ? isParentActive(link.children)
                : pathname === link.href;

              return (
                <div key={link.label} className="w-full">
                  {link.children ? (
                    <div className="w-full">
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className={`w-full flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium font-sans transition-colors ${
                          active
                            ? "text-[#7B1113] bg-[#7B1113]/5"
                            : "text-slate-900 hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ease-in-out ${
                          mobileDropdown === link.label
                            ? "max-h-96 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="ml-4 border-l-2 border-slate-100 pl-2 flex flex-col gap-0.5">
                          {link.children.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`rounded-md px-4 py-2.5 text-sm font-medium font-sans transition-colors block ${
                                  childActive
                                    ? "text-[#7B1113] font-semibold bg-[#7B1113]/5"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-[#7B1113]"
                                }`}
                                onClick={() => setMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-medium font-sans transition-colors ${
                        active
                          ? "text-[#7B1113] bg-[#7B1113]/5"
                          : "text-slate-900 hover:bg-slate-50 hover:text-[#7B1113]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
