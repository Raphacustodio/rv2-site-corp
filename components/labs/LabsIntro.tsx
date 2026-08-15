"use client";
import { useReveal } from "@/hooks/useReveal";

export function LabsIntro() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "#5B21B6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Esquerda */}
          <div className={`reveal ${visible ? "visible" : ""} flex flex-col gap-5`}>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-purple-200 mb-3">RV2 LABS</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
                Tecnologia criada por quem{" "}
                <span className="text-purple-200">conhece</span> o têxtil.
              </h2>
            </div>
            <p className="text-purple-100 leading-relaxed text-justify">
              O RV2 Labs desenvolve soluções que conectam processos, automatizam rotinas e resolvem desafios reais da indústria têxtil.
            </p>
            <p className="text-purple-200 text-sm leading-relaxed text-justify">
              Cada produto nasce da experiência prática adquirida em mais de duas décadas de atuação em projetos de implantação, processos e evolução operacional.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#solucoes"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-colors duration-200 shadow-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}>
                Ver soluções →
              </a>
              <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.18)" }}>
                Fale conosco →
              </a>
            </div>
          </div>

          {/* Direita */}
          <div className={`reveal ${visible ? "visible delay-2" : ""} flex flex-col gap-4 border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0 lg:pl-10`}
            style={{ borderColor: "rgba(255,255,255,0.15)" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-200">POR QUE EXISTE O LABS?</p>
            <h3 className="text-xl font-extrabold text-white">Toda solução começa com um problema real.</h3>
            <p className="text-purple-100 leading-relaxed text-justify">
              Durante anos acompanhamos empresas da indústria têxtil enfrentando desafios que muitas vezes não eram resolvidos apenas com o ERP.
            </p>
            <p className="text-purple-100 leading-relaxed text-justify">
              Foi dessa experiência que nasceu o RV2 Labs. Cada software desenvolvido parte de uma necessidade identificada em operações reais.
            </p>
            <p className="text-purple-200 text-sm italic leading-relaxed text-justify">
              Não criamos tecnologia por tendência.<br />Criamos tecnologia para resolver problemas.
            </p>
            <div className="h-px bg-gradient-to-r from-purple-300 to-purple-500 rounded-full mt-2" />
          </div>

        </div>
      </div>
    </section>
  );
}
