"use client";

const BLOCKS = [
  { num: "01", title: "Mais de 20 anos de experiência.", desc: "Conhecimento construído na prática, projeto a projeto, ao lado de empresas da indústria têxtil.", color: "#16A34A", group: "Diferencial" },
  { num: "02", title: "Especialistas em TOTVS Moda.", desc: "Implantação, evolução e sustentação do ERP com profundo conhecimento da plataforma.", color: "#16A34A", group: "Diferencial" },
  { num: "03", title: "Visão completa da indústria têxtil.", desc: "Entendemos processos antes da tecnologia — PCP, logística, custos, integração e muito mais.", color: "#7C3AED", group: "Diferencial" },
  { num: "04", title: "Tecnologia como consequência.", desc: "Quando o mercado não oferece a solução ideal, o RV2 Labs desenvolve. Tecnologia nasce de necessidades reais.", color: "#7C3AED", group: "Diferencial" },
];

const FILOSOFIA = [
  { num: "05", title: "Problema", desc: "Compreendemos a operação.", color: "#16A34A", group: "Filosofia" },
  { num: "06", title: "Processo", desc: "Modelamos a melhor solução.", color: "#374151", group: "Filosofia" },
  { num: "07", title: "Tecnologia", desc: "Transformamos conhecimento e gaps em possíveis softwares.", color: "#7C3AED", group: "Filosofia" },
];

const ALL = [...BLOCKS, ...FILOSOFIA];

export function DiferenciaisFilosofiaDemo() {
  return (
    <>
      {/* ── OPÇÃO 1: Seção unificada, grid 2 colunas com todos os 7 cards ── */}
      <section className="py-16 bg-gray-50 border-t-4 border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-[10px] font-black tracking-widest uppercase text-blue-400 mb-6">— OPÇÃO 1</p>
          <div className="mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">NOSSA ABORDAGEM</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Por que a <span className="text-green-600">RV2</span> e como <span className="text-purple-600">trabalhamos</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ALL.map((item) => (
              <div key={item.num}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200"
                style={{ borderLeftColor: item.color, borderLeftWidth: 3 }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase mb-1 block"
                      style={{ color: item.color + "99" }}>{item.group}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                  </div>
                  <span className="text-2xl font-black text-gray-100 leading-none shrink-0">{item.num}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPÇÃO 2: Empilhado vertical — cada bloco full-width ── */}
      <section className="bg-gray-50 border-t-4 border-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-[10px] font-black tracking-widest uppercase text-orange-400 pt-6 mb-6">— OPÇÃO 2</p>

          {/* Diferenciais */}
          <div className="pb-12 border-b border-gray-200">
            <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-1">DIFERENCIAIS</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">Por que a RV2?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BLOCKS.map((block) => (
                <div key={block.num}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200"
                  style={{ borderLeftColor: block.color, borderLeftWidth: 3 }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{block.title}</h3>
                    <span className="text-2xl font-black text-gray-100 leading-none shrink-0">{block.num}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filosofia */}
          <div className="py-12">
            <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-1">NOSSA FILOSOFIA</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">Primeiro o problema. Depois a tecnologia.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FILOSOFIA.map((f) => (
                <div key={f.num}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow duration-200"
                  style={{ borderLeftColor: f.color, borderLeftWidth: 3 }}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-extrabold text-gray-900 text-sm" style={{ color: f.color }}>{f.title}</h3>
                    <span className="text-2xl font-black text-gray-100">{f.num}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
