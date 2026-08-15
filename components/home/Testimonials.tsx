"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    text: "Temos uma experiência com o Goterra e o Raphael, agora RV2, extremamente positiva ao longo desses anos. O trabalho é conduzido com transparência, diálogo e competência em cada entrega. Construímos uma parceria baseada em confiança e respeito, que contribui de forma importante para o desenvolvimento da Agora Sou Mãe. Entender o cliente e entregar além de soluções engessadas que encontramos por aí faz parte do perfil da rapaziada.",
    name: "Natanael Andrade", role: "Coordenador de TI", company: "Agora Sou Mãe", photo: "/testimonials/natanael.jpg",
  },
  {
    text: "A RV2 transformou a gestão dos nossos processos! A agilidade no atendimento e a precisão para resolver desde os problemas mais simples até os mais complexos fazem toda a diferença. Além disso, o suporte no treinamento da nossa equipe é impecável. Uma parceria realmente fundamental para o meu time!",
    name: "Walmir Mendes Júnior", role: "Diretor", company: "Tookas", photo: "/testimonials/walmir.jpg",
  },
  {
    text: "Desde que iniciamos a parceria com a RV2, a consultoria tem sido fundamental para a evolução dos nossos processos. Com um atendimento próximo e muito conhecimento em TOTVS Moda, eles nos ajudaram a otimizar rotinas, aumentar a agilidade das operações e tornar a gestão da empresa muito mais eficiente. Hoje temos mais organização, segurança nas informações e decisões mais assertivas. Recomendo o trabalho pela competência, comprometimento e pelos resultados que entregam.",
    name: "Lilian Lais da Silva", role: "Controller", company: "Daksul Jeans", photo: "/testimonials/lilian.jpg",
  },
  {
    text: "A parceria com o Raphael Custódio e o Rodrigo Goterra foi fundamental em toda a nossa trajetória com o TOTVS Moda. Mais do que nos apoiar na implantação do sistema, eles estiveram presentes nos desafios do dia a dia, sempre buscando entender nossa operação e encontrar as melhores soluções para as nossas necessidades. Ao longo dos anos, construímos uma relação de muita confiança, em que podemos contar com o conhecimento, a disponibilidade e o comprometimento deles para superar problemas e evoluir nossos processos. Sem dúvida, foram parceiros essenciais para que o TOTVS Moda se tornasse uma ferramenta cada vez mais importante para a nossa gestão.",
    name: "Rafael Holthausen", role: "Controller", company: "Vanelise", photo: "/testimonials/rafael.png",
  },
  {
    text: "A parceria com o Rodrigo e o Rapha, da RV2, faz toda a diferença no nosso dia a dia. Além de conhecerem bem nossa operação, eles estão sempre disponíveis para apoiar, orientar e contribuir com melhorias além do TOTVS Moda, seja na resolução de problemas, nas atualizações do ERP ou na evolução dos nossos processos. Ter parceiros próximos, que entendem a realidade da empresa e caminham junto conosco, nos dá mais segurança para evoluir continuamente e aproveitar cada vez melhor a tecnologia em favor do nosso negócio.",
    name: "Fagner Civinski", role: "Gestor de TI", company: "Mensageiro dos Sonhos", photo: "/testimonials/fagner.jpg",
  },
  {
    text: "Nossa parceria com a RV2 tem sido muito positiva. Mesmo com todo o atendimento sendo remoto, eles conseguem estar muito próximos no dia a dia, com muita agilidade no atendimento e, principalmente, com a sensibilidade de entender a nossa necessidade e encontrar a melhor solução para cada situação. O conhecimento técnico faz toda a diferença, mas o que realmente destaca a RV2 é a capacidade de ouvir, entender o contexto e não simplesmente oferecer uma solução pronta. Eles procuram entender o que precisamos e, a partir disso, encontrar o melhor caminho. Essa parceria tem nos ajudado a ganhar mais agilidade e eficiência nos processos, sempre com muita confiança e troca de conhecimento. É aquele tipo de fornecedor que, com o tempo, deixa de ser apenas fornecedor e passa a ser um verdadeiro parceiro do negócio.",
    name: "Guilherme Peres", role: "Gestão de Tecnologia", company: "Vest Surf", photo: "/testimonials/guilherme.jpg",
  },
];

function QuoteIcon() {
  return (
    <svg width="28" height="20" viewBox="0 0 32 24" fill="none" className="text-green-200 mb-4">
      <path d="M0 24V14.4C0 10.4 1.07 7.07 3.2 4.4 5.33 1.6 8.27 0 12 0L13.6 2.8C11.07 3.47 9.07 4.8 7.6 6.8 6.13 8.67 5.47 10.8 5.6 13.2H11.2V24H0ZM18.4 24V14.4C18.4 10.4 19.47 7.07 21.6 4.4 23.73 1.6 26.67 0 30.4 0L32 2.8C29.47 3.47 27.47 4.8 26 6.8 24.53 8.67 23.87 10.8 24 13.2H29.6V24H18.4Z" fill="currentColor" />
    </svg>
  );
}

const N = TESTIMONIALS.length;

function TestimonialCard({ item }: { item: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col min-h-[300px] sm:min-h-[280px] lg:min-h-[260px]">
      <QuoteIcon />
      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{item.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-100 shrink-0">
          <Image src={item.photo} alt={item.name} width={40} height={40} className="w-full h-full object-cover object-top" />
        </div>
        <div>
          <p className="text-gray-900 font-bold text-sm">{item.name}</p>
          <p className="text-gray-400 text-xs">{item.role} · <span className="text-green-600">{item.company}</span></p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const activeRef = useRef(0);

  const goTo = (next: number) => {
    activeRef.current = next;
    setFading(true);
    setTimeout(() => { setActive(next); setFading(false); }, 250);
  };

  useEffect(() => {
    const id = setInterval(() => goTo((activeRef.current + 1) % N), 7000);
    return () => clearInterval(id);
  }, []);

  const prev = () => goTo(active === 0 ? N - 1 : active - 1);
  const next = () => goTo((active + 1) % N);

  return (
    <section className="pt-6 pb-16" style={{ background: "#F0FDF4" }}>
      <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">
          EXPERIÊNCIAS DE CLIENTES
        </p>

        {/* 1 por vez em todos os tamanhos */}
        <div
          className="mb-6 transition-opacity duration-250"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <TestimonialCard item={TESTIMONIALS[active]} />
        </div>

        {/* Navegação */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-600 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-200 ${active === i ? "w-5 h-2 bg-green-600" : "w-2 h-2 bg-gray-300"}`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-600 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
