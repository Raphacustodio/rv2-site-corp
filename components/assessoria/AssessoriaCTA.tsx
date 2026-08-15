"use client";
import { useReveal } from "@/hooks/useReveal";

export function AssessoriaCTA() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "#052E16" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className={`reveal ${visible ? "visible" : ""} flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8`}>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-3">ASSESSORIA RV2</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Vamos transformar o próximo desafio em resultado.
            </h2>
            <p className="text-green-200 text-sm leading-relaxed">
              Conhecimento + informação para levar sua indústria ao próximo nível.
            </p>
          </div>
          <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-7 py-4 rounded-xl bg-green-500 text-white font-bold text-base hover:bg-green-400 transition-colors duration-200 shadow-lg shadow-green-900/50">
            Agendar uma conversa →
          </a>
        </div>
      </div>
    </section>
  );
}
