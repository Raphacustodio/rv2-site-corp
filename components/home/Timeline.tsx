"use client";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  { num: "01", title: "Diagnóstico",
    desc: "Entendemos a realidade da sua operação.",
    href: "#assessoria", color: "#16A34A",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M16.5 16.5l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  },
  { num: "02", title: "Assessoria",
    desc: "Otimizamos processos e implantamos as melhores práticas.",
    href: "#assessoria", color: "#16A34A",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  },
  { num: "03", title: "Tecnologia",
    desc: "Implementamos soluções que automatizam e conectam a operação.",
    href: "#labs", color: "#7C3AED",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 9l2.5 3L8 15M12 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  { num: "04", title: "Evolução contínua",
    desc: "Acompanhamos indicadores e ajudamos sua empresa a crescer.",
    href: "#labs", color: "#7C3AED",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 17l4-5 4 3 4-6 4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

const FILOSOFIA = [
  { step: "01", title: "Problema",    desc: "Compreendemos a operação.",                                      color: "#16A34A" },
  { step: "02", title: "Processo",    desc: "Modelamos a melhor solução.",                                    color: "#374151" },
  { step: "03", title: "Tecnologia",  desc: "Transformamos conhecimento e gaps em possíveis softwares.",      color: "#7C3AED" },
];

export function Timeline() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="pt-16 pb-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className={`reveal ${visible ? "visible" : ""} text-center text-xs font-bold tracking-widest uppercase text-gray-900 mb-16`}>
          COMO ATUAMOS
        </p>

        {/* Desktop: timeline horizontal */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-4">
            <div className="absolute top-6 left-[12.5%] right-[50%] h-px bg-gradient-to-r from-green-500 to-green-400 z-0" />
            <div className="absolute top-6 left-[37.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-400 to-purple-600 z-0" />
            {STEPS.map((step, i) => (
              <a key={step.num} href={step.href}
                className={`reveal ${visible ? `visible delay-${i+1}` : ""} group flex flex-col items-center gap-3 h-full`}>
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm text-white shadow-md mb-4"
                  style={{ background: step.color }}>
                  {step.num}
                </div>
                <div className="flex-1 w-full flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-gray-50 group-hover:bg-white group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200 text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: step.color + "14", color: step.color }}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  <span className="text-xs font-bold mt-auto" style={{ color: step.color }}>Saiba mais →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: timeline vertical */}
        <div className="lg:hidden flex flex-col">
          {STEPS.map((step, i) => (
            <a key={step.num} href={step.href}
              className={`reveal ${visible ? `visible delay-${i+1}` : ""} flex gap-4 pb-8 relative`}>
              {i < STEPS.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px" style={{ background: step.color + "40" }} />
              )}
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xs text-white shrink-0 shadow"
                style={{ background: step.color }}>
                {step.num}
              </div>
              <div className="pt-1.5">
                <div className="flex items-center gap-2 mb-1" style={{ color: step.color }}>
                  {step.icon}
                  <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <p className={`reveal ${visible ? "visible" : ""} text-base text-gray-500 mt-12 mb-4 text-center`}>
          Primeiro o problema. Depois a tecnologia.
        </p>

        {/* 3 cards filosofia */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {FILOSOFIA.map((f, i) => (
            <div key={f.step}
              className={`reveal ${visible ? `visible delay-${i+1}` : ""} bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200`}
              style={{ borderTopColor: f.color, borderTopWidth: 3 }}>
              <div className="flex flex-col items-center text-center gap-2">
                <h3 className="font-extrabold text-sm" style={{ color: f.color }}>{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
