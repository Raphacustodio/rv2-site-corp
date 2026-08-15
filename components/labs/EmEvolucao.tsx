"use client";
import { useReveal } from "@/hooks/useReveal";

export function EmEvolucao() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} bg-purple-50 border border-purple-100 rounded-2xl px-6 py-10 lg:px-12 text-center`}>
          <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-4">EM EVOLUÇÃO</p>
          <div className="lab-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.35)" }}>
            <div className="lab-dot w-2.5 h-2.5 rounded-full" style={{ background: "#A855F7" }} />
            <span className="text-sm font-bold" style={{ color: "#7C3AED" }}>Laboratório ativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Nosso laboratório está sempre evoluindo.</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-2">Estamos constantemente desenvolvendo novas ferramentas para atender demandas reais da indústria têxtil.</p>
          <p className="text-gray-400 text-sm italic">Cada novo desafio identificado nas operações dos nossos clientes pode se tornar a próxima solução.</p>
        </div>
      </div>
    </section>
  );
}
