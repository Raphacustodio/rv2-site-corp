"use client";
import { useReveal } from "@/hooks/useReveal";

const AREAS = [
  { title: "Implantação TOTVS Moda",  desc: "Configuração, parametrização e acompanhamento de toda a implantação do ERP." },
  { title: "Processos Industriais",    desc: "Análise e otimização de fluxos produtivos com foco em eficiência e qualidade." },
  { title: "PCP",                      desc: "Planejamento e controle da produção integrado com a realidade da sua operação." },
  { title: "Facções e Terceiros",      desc: "Gestão de faccionistas com controle de remessas, retornos e indicadores." },
  { title: "Logística",                desc: "Otimização de expedição, transportes e rastreamento de mercadorias." },
  { title: "Custos",                   desc: "Estruturação de custos industriais, fichas técnicas e análise de margens." },
  { title: "Business Intelligence",    desc: "Painéis estratégicos com dados em tempo real para decisões mais assertivas." },
  { title: "Integrações",              desc: "Conexão entre ERP, e-commerce, WMS e demais sistemas com segurança." },
  { title: "Treinamentos",             desc: "Capacitação de equipes para uso eficiente dos sistemas e processos implantados." },
  { title: "Suporte Especializado",    desc: "Atendimento contínuo para sustentação, evolução e resolução de problemas." },
];

export function AreasAtuacao() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} text-center mb-10`}>
          <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-2">ÁREAS DE ATUAÇÃO</p>
          <h2 className="text-3xl font-extrabold text-gray-900">Cobertura completa da operação têxtil.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {AREAS.map((area, i) => (
            <div key={area.title}
              className={`reveal ${visible ? `visible delay-${Math.min(i+1,5)}` : ""} bg-white border border-gray-200 rounded-xl p-4 hover:border-green-200 hover:shadow-sm transition-all duration-200`}>
              <div className="w-2 h-2 rounded-full bg-green-500 mb-3" />
              <h3 className="font-bold text-gray-900 text-sm mb-1">{area.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
