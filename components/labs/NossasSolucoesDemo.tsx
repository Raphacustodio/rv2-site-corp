"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    key: "notify", title: "RV2 Notify", short: "Notify",
    category: "Comunicação Inteligente",
    desc: "Automatiza a comunicação entre sua empresa, clientes, fornecedores e equipes internas via WhatsApp e e-mail, direto dos eventos do TOTVS Moda.",
    status: "Disponível", color: "#16A34A",
    features: ["Boletos — Envio automático com PDF", "Notas Fiscais — Envio após emissão", "Pedidos de Compra — Notificação a fornecedores", "WhatsApp + Email — Fluxo integrado", "Comunicação Interna — Avisos automáticos", "Histórico — Auditoria completa"],
    destaques: ["Integração com TOTVS Moda", "Meta Cloud API", "Evolution API", "Multiempresa", "Templates personalizados"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
  },
  {
    key: "pacotes", title: "Suite — Controle de Pacotes", short: "Pacotes",
    category: "Gestão da Produção",
    desc: "Organiza, identifica e acompanha os pacotes gerados a partir das Ordens de Produção, com rastreabilidade completa desde a preparação até o embarque.",
    status: "Disponível", color: "#16A34A",
    features: ["Geração de pacotes vinculados às OPs", "Etiquetas com QR Code", "Leitura por QR Code", "Controle de componentes e aviamentos", "Movimentação e rastreabilidade", "Histórico completo"],
    destaques: ["Integração TOTVS Moda", "QR Code", "Localização em tempo real"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>),
  },
  {
    key: "coleta", title: "Suite — Carrega & Coleta", short: "Carrega & Coleta",
    category: "Logística Industrial",
    desc: "Organiza todo o fluxo logístico das OPs, desde a preparação do carregamento até a coleta nos terceiros e o retorno para a empresa.",
    status: "Disponível", color: "#16A34A",
    features: ["Organização por carregamento", "Planejamento de coletas", "Confirmação via QR Code", "Controle por motorista", "Rastreabilidade completa", "Painel operacional"],
    destaques: ["Integração TOTVS Moda", "QR Code", "Rastreabilidade das movimentações"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>),
  },
  {
    key: "terceiriza", title: "Suite — Terceiriza", short: "Terceiriza",
    category: "Industrialização Externa",
    desc: "Controla tudo o que acontece entre a remessa e o retorno — andamento, prazos e status de cada OP em tempo real.",
    status: "Disponível", color: "#16A34A",
    features: ["Visualização de OPs enviadas", "App para o terceiro registrar etapas", "Apontamentos de produção", "Monitoramento de lead time e alertas", "Controle de OPs prontas para retorno", "Dashboard operacional"],
    destaques: ["Integração TOTVS Moda", "Status em Tempo Real", "Controle de Lead Time"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M12 7v4M12 11l-6 6M12 11l6 6"/></svg>),
  },
  {
    key: "compras", title: "Suite — Compras & Aprovações", short: "Compras",
    category: "Gestão de Compras",
    desc: "Centraliza o fluxo de aprovação de pedidos de compra com acesso mobile, automação por custo e dashboards analíticos.",
    status: "Disponível", color: "#16A34A",
    features: ["Aprovação mobile de pedidos", "Visualização de pedidos bloqueados", "Aprovação de solicitações de materiais", "Aprovação automática por parâmetros", "Gestão visual com gráficos", "Análise de saving"],
    destaques: ["Acesso mobile", "Aprovação automática por custo", "Análise de saving"],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
  },
  {
    key: "dashboards", title: "Dashboards", short: "Dashboards",
    category: "Business Intelligence",
    desc: "Painéis visuais sobre dados reais da operação. Indicadores de produção, logística e financeiros em tempo real.",
    status: "Disponível", color: "#16A34A",
    features: ["Indicadores operacionais em tempo real", "Filtros por período, setor e responsável", "Exportação de relatórios", "Visualizações em gráficos e tabelas"],
    destaques: [],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>),
  },
  {
    key: "integracoes", title: "Integrações", short: "Integrações",
    category: "Conectores",
    desc: "Pontes confiáveis entre o TOTVS Moda e qualquer sistema externo. Conectores sob medida com mapeamento de dados e monitoramento contínuo.",
    status: "Disponível", color: "#16A34A",
    features: ["Conexão nativa com TOTVS Moda", "Webhooks e APIs REST", "Mapeamento de dados personalizado", "Monitoramento de falhas e logs"],
    destaques: [],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
  },
  {
    key: "novas", title: "Novas Soluções", short: "Novas Soluções",
    category: "Em desenvolvimento",
    desc: "Novos produtos nascendo de necessidades reais dos clientes. Se você tem um problema sem solução pronta, fale conosco.",
    status: "Em breve", color: "#7C3AED",
    features: ["Discovery contínuo com clientes", "Prototipação rápida baseada em operações reais", "Lançamentos planejados em ciclos curtos"],
    destaques: [],
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>),
  },
];

function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-1">{title}</p>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{desc}</h2>
    </div>
  );
}

function OptionBadge({ n, label, dark }: { n: number; label: string; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase ${dark ? "border-purple-500/40 text-purple-300 bg-purple-500/10" : "border-purple-200 text-purple-700 bg-purple-50"}`}>
      <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center font-extrabold text-[10px]">{n}</span>
      {label}
    </div>
  );
}

// ── OPÇÃO 1: Cards em grade ──────────────────────────────────────────
function Option1() {
  return (
    <div className="py-16 bg-gray-50 border-t-2 border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <OptionBadge n={1} label="Cards em grade" />
        <SectionHeader title="NOSSAS SOLUÇÕES" desc="Cada produto resolve um problema real." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((sol) => (
            <div key={sol.key}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: sol.color + "18", color: sol.color }}>
                {sol.icon}
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full self-start" style={{ color: sol.color, background: sol.color + "14" }}>
                {sol.status}
              </span>
              <div>
                <h3 className="font-extrabold text-gray-900 text-sm leading-tight">{sol.title}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{sol.category}</p>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{sol.desc}</p>
              <ul className="flex flex-col gap-1">
                {sol.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-xs text-gray-400">
                    <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: sol.color }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── OPÇÃO 2: Painel com destaque ────────────────────────────────────
function Option2() {
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];
  return (
    <div className="py-16 bg-white border-t-2 border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <OptionBadge n={2} label="Painel com destaque visual" />
        <SectionHeader title="NOSSAS SOLUÇÕES" desc="Cada produto resolve um problema real." />
        {/* Tabs horizontais */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6" style={{ scrollbarWidth: "none" }}>
          {SOLUTIONS.map((s, i) => (
            <button key={s.key} onClick={() => setActive(i)}
              className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150"
              style={active === i ? { background: s.color, color: "white" } : { background: "#F3F4F6", color: "#6B7280" }}>
              {s.short}
            </button>
          ))}
        </div>
        {/* Painel */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          {/* Esquerda: visual */}
          <div className="relative flex flex-col justify-between p-8 overflow-hidden min-h-52"
            style={{ background: `linear-gradient(160deg, ${sol.color}EE 0%, ${sol.color}AA 100%)` }}>
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: "rgba(255,255,255,0.2)" }}>
                {sol.icon}
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
                {sol.status}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-2 leading-tight">{sol.title}</h3>
              <p className="text-white/60 text-sm mt-1">{sol.category}</p>
            </div>
          </div>
          {/* Direita: conteúdo */}
          <div className="bg-white p-8 flex flex-col gap-5">
            <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {sol.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: sol.color }} />
                  <span className="text-sm text-gray-500">{f}</span>
                </div>
              ))}
            </div>
            {sol.destaques.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {sol.destaques.map((d) => (
                  <span key={d} className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{ color: sol.color, borderColor: sol.color + "40", background: sol.color + "0A" }}>{d}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── OPÇÃO 3: Bento Grid escuro ───────────────────────────────────────
function Option3() {
  return (
    <div className="py-16 border-t-2 border-purple-900" style={{ background: "#0D0820" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <OptionBadge n={3} label="Bento Grid escuro" dark />
        <div className="mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-1">NOSSAS SOLUÇÕES</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Cada produto resolve um problema real.</h2>
        </div>

        {/* Desktop bento */}
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {/* Notify — grande (row-span-2) */}
          <div className="row-span-2 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #16A34A1A 0%, #16A34A08 100%)", border: "1px solid #16A34A30" }}>
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "#16A34A25", color: "#4ADE80" }}>
                {SOLUTIONS[0].icon}
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-3" style={{ background: "#16A34A22", color: "#4ADE80" }}>
                Disponível
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-2 mb-1">{SOLUTIONS[0].title}</h3>
              <p className="text-white/30 text-xs mb-4">{SOLUTIONS[0].category}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{SOLUTIONS[0].desc}</p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {SOLUTIONS[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-400">
                    <div className="w-1 h-1 rounded-full mt-1.5 shrink-0 bg-green-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {SOLUTIONS[0].destaques.map((d) => (
                <span key={d} className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: "#16A34A20", color: "#4ADE80" }}>{d}</span>
              ))}
            </div>
            <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full" style={{ background: "#16A34A06" }} />
          </div>

          {/* 7 cards menores */}
          {SOLUTIONS.slice(1).map((sol) => {
            const isNew = sol.key === "novas";
            const iconColor = isNew ? "#A78BFA" : "#4ADE80";
            const accentColor = isNew ? "#7C3AED" : "#16A34A";
            return (
              <div key={sol.key} className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
                style={{ background: "#ffffff07", border: "1px solid #ffffff0D" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: accentColor + "22", color: iconColor }}>
                  {sol.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-sm leading-tight">{sol.title}</h3>
                  <p className="text-white/25 text-xs mt-0.5">{sol.category}</p>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed flex-1">
                  {sol.desc.length > 100 ? sol.desc.substring(0, 100) + "…" : sol.desc}
                </p>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full self-start"
                  style={{ background: accentColor + "22", color: iconColor }}>{sol.status}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden flex flex-col gap-3">
          {SOLUTIONS.map((sol) => (
            <div key={sol.key} className="rounded-xl p-4 flex gap-4 items-start" style={{ background: "#ffffff08", border: "1px solid #ffffff10" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: sol.color + "25", color: sol.key === "novas" ? "#A78BFA" : "#4ADE80" }}>
                {sol.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-sm">{sol.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-1">{sol.desc.substring(0, 80)}…</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NossasSolucoesDemo() {
  return (
    <section id="solucoes" className="scroll-mt-16">
      <Option1 />
      <Option2 />
      <Option3 />
    </section>
  );
}
