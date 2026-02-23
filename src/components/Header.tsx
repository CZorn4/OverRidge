"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const lightHeaderPages = ["/contact", "/about-us"];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "Who We Are" },
  { href: "/services", label: "What We Do" },
  { href: "/community", label: "Our Community" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();
  const isLightPage = lightHeaderPages.includes(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navStuck, setNavStuck] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const toolbarHeight = toolbarRef.current?.offsetHeight || 87;
      setNavStuck(window.scrollY > toolbarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Toolbar — absolute over hero, scrolls away */}
      <div ref={toolbarRef} className="absolute top-0 left-0 right-0 z-40 hidden lg:block pt-[40px] pb-[5px] text-[14px] text-white">
        <div className="max-w-[1600px] mx-auto px-[15px] sm:px-[30px] flex items-center justify-end">
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[30px] text-white/80">
              <a href="https://maps.app.goo.gl/y8NktoLedzJeiMcr5" target="_blank" rel="noreferrer" className="flex items-center gap-[8px] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Fort Worth, TX
              </a>
              <a href="mailto:info@overridge.com" className="flex items-center gap-[8px] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@overridge.com
              </a>
              <a href="tel:8177381451" className="flex items-center gap-[8px] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (817) 738-1451
              </a>
            </div>
            <div className="flex items-center gap-[5px]">
              <Link href="/contact" className="px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#c32230] text-white hover:bg-[#a51d2a] transition-colors" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                Contact
              </Link>
              <Link href="/clients" className="px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#c32230] text-white hover:bg-[#a51d2a] transition-colors" style={{ fontFamily: '"Montserrat", sans-serif' }}>
                Clients
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar — starts absolute below toolbar, becomes fixed when toolbar scrolls out */}
      <header className={`z-50 left-0 right-0 transition-colors duration-100 ${
        navStuck ? "fixed top-0 bg-white shadow-sm" : isLightPage ? "absolute top-0 bg-white" : "absolute top-[87px]"
      }`}>
        <div className="max-w-[1600px] mx-auto px-[15px] sm:px-[30px] py-[15px] flex items-center justify-between">
          <Link href="/" aria-label="Back to home" className="relative h-[70px] w-[305px]">
            <Image
              src="/images/Overridgelogo.webp"
              alt="OverRidge Wealth Advisors"
              width={397}
              height={91}
              className={`h-[70px] w-auto absolute top-0 left-0 transition-opacity duration-300 ${isLightPage || navStuck ? "opacity-0" : "opacity-100"}`}
              priority
            />
            <Image
              src="/images/logo-color.png"
              alt="OverRidge Wealth Advisors"
              width={397}
              height={91}
              className={`h-[70px] w-auto absolute top-0 left-0 transition-opacity duration-300 ${isLightPage || navStuck ? "opacity-100" : "opacity-0"}`}
              priority
            />
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className={`flex items-center gap-[8px] transition-colors ${
              isLightPage || navStuck ? "text-[#0d1724] hover:text-[#717171]" : "text-white hover:text-white/80"
            }`}
          >
            <span className="hidden sm:inline text-[14px] font-medium" style={{ fontFamily: '"Montserrat", sans-serif' }}>Menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Offcanvas menu */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0d1724] text-white transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6" style={{ fontFamily: '"Montserrat", sans-serif' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-xl hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 items-center">
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#c32230] text-white hover:bg-[#a51d2a] transition-colors">Contact</Link>
              <Link href="/clients" onClick={() => setMenuOpen(false)} className="px-[20px] text-[12px] leading-[42px] font-bold uppercase tracking-wider bg-[#c32230] text-white hover:bg-[#a51d2a] transition-colors">Clients</Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
              <a href="https://maps.app.goo.gl/y8NktoLedzJeiMcr5" target="_blank" rel="noreferrer" className="hover:text-white">Fort Worth, TX</a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="mailto:info@overridge.com" className="hover:text-white">info@overridge.com</a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="tel:8177381451" className="hover:text-white">(817) 738-1451</a>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/overridge-wealth-advisors/about/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.facebook.com/overridgewealth/" target="_blank" rel="noreferrer" className="hover:text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
