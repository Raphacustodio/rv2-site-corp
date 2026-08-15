"use client";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.6"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M18 3l1.5 1.5M20 6h1.5M18 9l1.5-1.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    value: "20+",
    label: "Anos de experiência",
    sub: "Construídos projeto a projeto na indústria têxtil",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="1.6"/>
        <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 8l2.5 3L7 14M12 14h5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: "30mil+",
    label: "Horas de serviços",
    sub: "De assessoria + implantação em clientes ao longo do tempo",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L8 6H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-4-4z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: "100%",
    label: "Foco em TOTVS Moda",
    sub: "Da cadeia têxtil — confecção, malharia, beneficiamento",
  },
];

export function StatsSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "#15803D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className={`reveal ${visible ? "visible" : ""} text-center mb-12`}>
          <p className="text-xs font-bold tracking-widest uppercase text-green-200 mb-3">NOSSA EXPERIÊNCIA EM NÚMEROS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            A assessoria que a{" "}
            <span className="text-green-200">indústria têxtil</span>{" "}
            confia.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={stat.label}
              className={`reveal ${visible ? `visible delay-${i + 1}` : ""} flex flex-col items-center text-center gap-4`}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)" }}>
                {stat.icon}
              </div>
              <div>
                <p className="text-5xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-green-100 font-bold text-base mb-1">{stat.label}</p>
                <p className="text-green-200 text-sm leading-snug">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
