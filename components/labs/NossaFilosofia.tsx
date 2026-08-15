"use client";
import { useReveal } from "@/hooks/useReveal";

const FILOSOFIA = [
  { step: "01", title: "Problema", desc: "Compreendemos a operação.", color: "#16A34A" },
  { step: "02", title: "Processo",  desc: "Modelamos a melhor solução.", color: "#374151" },
  { step: "03", title: "Tecnologia", desc: "Transformamos conhecimento e gaps em possíveis softwares.", color: "#7C3AED" },
];

export function NossaFilosofia() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="pt-0 pb-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} mb-4`}>
          <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-1">NOSSA FILOSOFIA</p>
          <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">Primeiro o problema. Depois a tecnologia.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {FILOSOFIA.map((f, i) => (
            <div key={f.step}
              className={`reveal ${visible ? `visible delay-${i+1}` : ""} bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200`}
              style={{ borderLeftColor: f.color, borderLeftWidth: 3 }}>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-extrabold text-sm" style={{ color: f.color }}>{f.title}</h3>
                <span className="text-2xl font-black text-gray-100">{f.step}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
