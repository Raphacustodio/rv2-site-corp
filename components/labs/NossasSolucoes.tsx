"use client";
import { useReveal } from "@/hooks/useReveal";
import { useState, useEffect } from "react";
import Image from "next/image";

type Solution = {
  key: string;
  title: string;
  category: string;
  desc: string;
  status: string;
  color: string;
  features: string[];
  icon: React.ReactNode;
  detailImage?: string;
};

const SOLUTIONS: Solution[] = [
  {
    key: "notify", title: "RV2 Notify", category: "Comunicação Inteligente",
    desc: "Automatiza a comunicação entre sua empresa, clientes, fornecedores e equipes internas via WhatsApp e e-mail, direto dos eventos do TOTVS Moda.",
    status: "Disponível", color: "green",
    features: ["Boletos — Envio automático com PDF", "Notas Fiscais — Envio após emissão", "Pedidos de Compra — Notificação a fornecedores"],
    detailImage: "", // coloque aqui o caminho da imagem, ex: "/screenshots/notify-overview.jpeg"
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
  },
  {
    key: "pacotes", title: "RV2 Suite: Pacotes", category: "Organização e Rastreabilidade",
    desc: "Organiza, identifica e acompanha os pacotes gerados a partir das Ordens de Produção, conectando o processo físico às informações da OP e garantindo rastreabilidade desde a preparação até o embarque.",
    status: "Disponível", color: "green",
    features: ["Geração de pacotes vinculados às OPs", "Identificação por tipo, tamanho, cor ou composição", "Etiquetas com QR Code (com tipos e modelos)", "Controle de volumes e quantidades", "Rastreabilidade dos pacotes", "Conferência por leitura de QR Code"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>),
  },
  {
    key: "coleta", title: "RV2 Suite: Carrega & Coleta", category: "Logística Industrial",
    desc: "Planeje e acompanhe as rotas de carregamento e coleta, conectando motoristas, terceiros e empresa em uma operação logística rastreável e organizada.",
    status: "Disponível", color: "green",
    features: ["Planejamento e gestão de rotas", "Acompanhamento em tempo real", "Distribuição de entregas e coletas", "Controle de ocorrências e reprogramações", "Rastreabilidade de toda a operação"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>),
  },
  {
    key: "terceiriza", title: "RV2 Suite: Terceiriza", category: "Industrialização Externa",
    desc: "Conecte a empresa aos terceiros e acompanhe cada etapa da produção, do envio da OP até a conclusão e retorno, com prazos, status e informações atualizadas.",
    status: "Disponível", color: "green",
    features: ["App para o terceiro acompanhar e atualizar as etapas", "Controle de prazos e lead time", "Alertas para atrasos e pendências", "Visão em tempo real de cada OP", "Dashboard da produção terceirizada"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M12 7v4M12 11l-6 6M12 11l6 6"/></svg>),
  },
  {
    key: "compras", title: "RV2 Suite: Aprovações", category: "Gestão de Compras",
    desc: "Centraliza o fluxo de aprovação de pedidos de compra com acesso mobile, automação por custo e dashboards analíticos.",
    status: "Disponível", color: "green",
    features: ["Aprovação mobile de pedidos", "Aprovação automática por parâmetros", "Análise de saving"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
  },
  {
    key: "dashboards", title: "Dashboards", category: "Business Intelligence",
    desc: "Painéis visuais sobre dados reais da operação. Indicadores de produção, logística e financeiros disponíveis em tempo real.",
    status: "Disponível", color: "green",
    features: ["Indicadores operacionais em tempo real", "Filtros por período e setor", "Exportação de relatórios"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>),
  },
  {
    key: "integracoes", title: "Integrações", category: "Conectores",
    desc: "Pontes confiáveis entre o TOTVS Moda e qualquer sistema externo. Conectores sob medida com mapeamento de dados e monitoramento contínuo.",
    status: "Disponível", color: "green",
    features: ["Conexão nativa com TOTVS Moda", "Webhooks e APIs REST", "Monitoramento de falhas e logs"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
  },
  {
    key: "novas", title: "Novas Soluções", category: "Em desenvolvimento",
    desc: "Novos produtos nascendo de necessidades reais dos clientes. Se você tem um problema sem solução pronta, fale conosco.",
    status: "Em breve", color: "purple",
    features: ["Discovery contínuo com clientes", "Prototipação rápida", "Lançamentos em ciclos curtos"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>),
  },
];

const GRAD = "linear-gradient(135deg, #F5F3FF 0%, #DDD6FE 100%)";
const ICON_BG = { background: "rgba(88,28,135,0.75)", color: "#fff" };
const SUBTITLE_COLOR = { color: "rgba(88,28,135,0.75)" };

function SolutionModal({ sol, onClose }: { sol: Solution; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", animation: "fadeInUp 0.2s ease-out" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Fechar */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Fechar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Imagem */}
        {sol.detailImage && (
          <div className="w-full rounded-t-2xl overflow-hidden bg-gray-100" style={{ maxHeight: 380 }}>
            <Image src={sol.detailImage} alt={sol.title} width={900} height={500}
              className="w-full object-cover object-top" />
          </div>
        )}

        {/* Conteúdo */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={ICON_BG}>
              {sol.icon}
            </div>
            <div>
              <h2 className="font-extrabold text-gray-900 text-lg leading-tight">{sol.title}</h2>
              <p className="text-xs mt-0.5" style={SUBTITLE_COLOR}>{sol.category}</p>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-gray-600 leading-relaxed text-sm mb-6 text-justify">{sol.desc}</p>

          {/* Features */}
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={SUBTITLE_COLOR}>FUNCIONALIDADES</p>
            <ul className="flex flex-col gap-2">
              {sol.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "rgba(88,28,135,0.6)" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-bold text-sm transition-colors duration-200"
              style={{ background: "rgba(88,28,135,0.85)" }}>
              Falar com especialista →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NossasSolucoes() {
  const { ref, visible } = useReveal();
  const [selected, setSelected] = useState<Solution | null>(null);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="solucoes" className="py-16 bg-gray-50 border-t border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} mb-8`}>
          <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-1">NOSSAS SOLUÇÕES</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Cada produto resolve um problema real.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((sol, i) => (
            <div key={sol.key}
              onClick={() => setSelected(sol)}
              className={`reveal ${visible ? `visible delay-${(i % 4) + 1}` : ""} relative overflow-hidden rounded-xl p-4 flex flex-col gap-3 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-200`}
              style={{ background: GRAD }}>

              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.13)" }} />
              <div className="absolute -bottom-10 -left-4 w-36 h-36 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Icon + Title */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={ICON_BG}>
                  {sol.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm leading-tight">{sol.title}</h3>
                  <p className="text-xs mt-0.5" style={SUBTITLE_COLOR}>{sol.category}</p>
                </div>
              </div>

              <p className="relative z-10 text-gray-800/80 text-xs leading-relaxed flex-1 text-justify">{sol.desc}</p>

              <ul className="relative z-10 flex flex-col gap-1">
                {sol.features.map(f => (
                  <li key={f} className="flex items-start gap-1.5 text-xs text-gray-800/70">
                    <div className="w-1 h-1 rounded-full mt-1.5 shrink-0 bg-purple-900/40" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Indicador de detalhe */}
              {sol.detailImage !== undefined && (
                <div className="relative z-10 flex items-center gap-1 text-xs font-semibold mt-1" style={SUBTITLE_COLOR}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  ver detalhes
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && <SolutionModal sol={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
