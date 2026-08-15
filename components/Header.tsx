"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV = [
  { label: "Clientes",   href: "#clientes"   },
  { label: "Assessoria", href: "#assessoria" },
  { label: "Labs",       href: "#labs"       },
  { label: "Soluções",   href: "#solucoes"   },
];

export function Header() {
  const [open, setOpen]       = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const fn = () => {
      // Entre 0 e 120px de scroll: vai de totalmente transparente a totalmente opaco
      const val = Math.min(window.scrollY / 300, 1);
      setOpacity(val);
    };
    fn(); // roda na montagem
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrolled = opacity > 0.5;
  const handleAnchor = () => setOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-shadow duration-300"
      style={{
        background: `rgba(0,0,0,${opacity * 0.96})`,
        backdropFilter: opacity > 0.1 ? "blur(12px)" : "none",
        borderBottom: opacity > 0.1 ? `1px solid rgba(255,255,255,${opacity * 0.06})` : "none",
        boxShadow: opacity > 0.5 ? `0 1px 16px rgba(0,0,0,${opacity * 0.4})` : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logos/rv2-logo.png"
            alt="RV2"
            width={0}
            height={0}
            style={{
              height: 44,
              width: "auto",
              objectFit: "contain",
              marginTop: -12,
            }}
          />
          <span
            className="text-[13px] font-bold leading-tight"
          >
            <span style={{ color: "#4ADE80" }}>ASSESSORIA</span>
            <span className="text-gray-300 mx-1">+</span>
            <span style={{ color: "#A78BFA" }}>TECNOLOGIA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150"
              style={{ color: "rgba(255,255,255,1)", textShadow: "0 0 3px rgba(0,0,0,0.9), 0 1px 8px rgba(0,0,0,0.6)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,1)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5547991458295"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-colors duration-150"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors duration-150"
          style={{ color: "white" }}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={handleAnchor}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50">
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5547991458295"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleAnchor}
            className="mt-2 px-4 py-3 rounded-xl bg-green-600 text-white text-sm font-bold text-center"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
}
