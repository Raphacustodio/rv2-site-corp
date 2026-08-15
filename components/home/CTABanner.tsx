"use client";
import { useReveal } from "@/hooks/useReveal";

export function CTABanner() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>}
      className="cta-bg-animate"
      style={{ backgroundColor: "#052E16" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className={`reveal ${visible ? "visible" : ""} flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-4">VAMOS CONVERSAR</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Conte com a RV2 para transformar{" "}
              <span className="text-green-400">sua operação.</span>
            </h2>
            <p className="text-green-100/80 text-base leading-relaxed">
              Mais de 20 anos de experiência ao lado da indústria têxtil. Assessoria + tecnologia para levar sua empresa ao próximo nível.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base transition-colors duration-200 shadow-lg"
              style={{ background: "#16A34A", color: "white", boxShadow: "0 4px 24px rgba(22,163,74,0.35)" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#15803D"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#16A34A"}>
              Fale pelo WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
