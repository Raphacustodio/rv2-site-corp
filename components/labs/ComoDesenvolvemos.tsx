"use client";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  { num: "01", title: "Conhecimento",      desc: "Mergulhamos na operação do cliente para entender o contexto antes de qualquer solução.", t: 0 },
  { num: "02", title: "Diagnóstico",       desc: "Mapeamos gargalos, lacunas e oportunidades de automação com precisão.", t: 0.17 },
  { num: "03", title: "Protótipo",         desc: "Criamos uma versão inicial para validar a solução antes de investir em desenvolvimento.", t: 0.33 },
  { num: "04", title: "Validação",         desc: "Testamos com usuários reais para garantir aderência e usabilidade antes do lançamento.", t: 0.5 },
  { num: "05", title: "Desenvolvimento",   desc: "Construímos com qualidade, segurança e escalabilidade usando tecnologias modernas.", t: 0.67 },
  { num: "06", title: "Entrega",           desc: "Implantamos com suporte completo, treinamento da equipe e acompanhamento inicial.", t: 0.83 },
  { num: "07", title: "Evolução Contínua", desc: "Evoluímos constantemente com base no uso real e nas novas necessidades do cliente.", t: 1 },
];

function lerp(a: number, b: number, t: number) { return Math.round(a + (b - a) * t); }
function stepColor(t: number) {
  return `rgb(${lerp(22, 124, t)},${lerp(163, 58, t)},${lerp(74, 237, t)})`;
}

export function ComoDesenvolvemos() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`reveal ${visible ? "visible" : ""} text-center mb-10`}>
          <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-2">COMO DESENVOLVEMOS</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Do problema à solução em produção.</h2>
        </div>
        <div className="flex flex-col gap-4">
          {STEPS.map((step, i) => {
            const color = stepColor(step.t);
            return (
              <div key={step.num}
                className={`reveal ${visible ? `visible delay-${Math.min(i+1,5)}` : ""} flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow duration-200`}>
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: color }}>
                  {step.num}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-bold text-gray-900 text-sm mb-0.5">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
