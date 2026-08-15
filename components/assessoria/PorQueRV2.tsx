"use client";
import { useReveal } from "@/hooks/useReveal";

const BLOCKS = [
  { num: "01", title: "Mais de 20 anos de experiência.", desc: "Conhecimento construído na prática, projeto a projeto, ao lado de empresas da indústria têxtil.", color: "#16A34A" },
  { num: "02", title: "Especialistas em TOTVS Moda.", desc: "Implantação, evolução e sustentação do ERP com profundo conhecimento da plataforma.", color: "#16A34A" },
  { num: "03", title: "Visão completa da indústria têxtil.", desc: "Entendemos processos antes da tecnologia — PCP, logística, custos, integração e muito mais.", color: "#7C3AED" },
  { num: "04", title: "Tecnologia como consequência.", desc: "Quando o mercado não oferece a solução ideal, o RV2 Labs desenvolve. Tecnologia nasce de necessidades reais.", color: "#7C3AED" },
];

export function PorQueRV2() {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref as unknown as React.RefObject<HTMLDivElement>}>
      <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-1">DIFERENCIAIS</p>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Por que a RV2?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {BLOCKS.map((block, i) => (
          <div key={block.num}
            className={`reveal ${visible ? `visible delay-${i+1}` : ""} bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200`}
            style={{ borderLeftColor: block.color, borderLeftWidth: 3 }}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-sm">{block.title}</h3>
              <span className="text-2xl font-black leading-none shrink-0" style={{ color: block.color + "55" }}>{block.num}</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">{block.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
