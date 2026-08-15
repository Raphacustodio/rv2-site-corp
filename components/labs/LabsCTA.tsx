"use client";
import { useReveal } from "@/hooks/useReveal";

export function LabsCTA() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "#1E1B4B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className={`reveal ${visible ? "visible" : ""} flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8`}>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">RV2 LABS</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Vamos construir a próxima solução juntos?
            </h2>
            <p className="text-purple-200 text-sm leading-relaxed">
              Conheça como a tecnologia desenvolvida pela RV2 pode transformar a operação da sua empresa.
            </p>
          </div>
          <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-7 py-4 rounded-xl bg-purple-500 text-white font-bold text-base hover:bg-purple-400 transition-colors duration-200 shadow-lg shadow-purple-900/50">
            Fale com um especialista →
          </a>
        </div>
      </div>
    </section>
  );
}
