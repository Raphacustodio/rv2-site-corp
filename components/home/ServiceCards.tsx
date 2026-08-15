"use client";
import { useReveal } from "@/hooks/useReveal";

const CARDS = [
  {
    title: "RV2 Assessoria",
    tagline: "CONSULTORIA ESPECIALIZADA",
    description: "Consultoria em processos TOTVS Moda. Atuamos em toda a jornada do ERP — do planejamento inicial à evolução contínua — com profundo conhecimento da indústria têxtil.",
    color: "#16A34A",
    titleColor: "#4ADE80",
    href: "#assessoria",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="7" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="21" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1 24c0-4 2.5-6 6-6M21 18c3.5 0 6 2 6 6M8 24c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "RV2 Labs",
    tagline: "SOLUÇÕES TECNOLÓGICAS",
    description: "Desenvolvimento de software próprio que conecta, automatiza e simplifica a operação da indústria têxtil. Cada produto nasce de uma necessidade real identificada nas operações dos nossos clientes.",
    color: "#7C3AED",
    titleColor: "#A78BFA",
    href: "#labs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 9l3 3-3 3M14 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 24h8M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Especialistas em TOTVS Moda",
    tagline: "EXPERTISE CERTIFICADA",
    description: "Profundo conhecimento e experiência em toda a operação. Implantação, processos, BI, integrações, suporte e treinamento — cobertura completa do ERP mais utilizado pela indústria têxtil brasileira.",
    color: "#374151",
    titleColor: "#FB923C",
    href: undefined,
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M19.7 6.2l-2.1 2.1M8.3 19.7l-2.1 2.1"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function ServiceCards() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="servicos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} mb-8`}>
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">O QUE FAZEMOS</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Duas frentes, um único objetivo.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {CARDS.map((card, i) => {
            const inner = (
              <div className={`reveal ${visible ? `visible delay-${i + 1}` : ""} flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-800 ${card.href ? "cursor-pointer hover:border-gray-700 transition-colors duration-200" : ""}`}
                style={{ backgroundColor: "#0F172A" }}>
                {/* Esquerda */}
                <div className="flex flex-col items-start justify-between gap-4 p-7 sm:w-64 lg:w-80 shrink-0 border-b sm:border-b-0 sm:border-r border-gray-700">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-4"
                      style={{ color: card.color + "99" }}>{card.tagline}</p>
                    <div className="mb-4" style={{ color: card.titleColor ?? "white" }}>{card.icon}</div>
                    <h3 className="font-extrabold text-lg leading-tight" style={{ color: card.titleColor ?? "white" }}>{card.title}</h3>
                  </div>
                  {card.href && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white transition-colors duration-200"
                      style={{ backgroundColor: card.color }}>
                      SAIBA MAIS →
                    </span>
                  )}
                </div>
                {/* Direita */}
                <div className="flex items-center p-7 flex-1">
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl text-justify">{card.description}</p>
                </div>
              </div>
            );

            return card.href
              ? <a key={card.title} href={card.href}>{inner}</a>
              : <div key={card.title}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
