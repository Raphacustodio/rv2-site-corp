"use client";
import { useReveal } from "@/hooks/useReveal";

export function NossaExperiencia() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Esquerda */}
          <div className={`reveal ${visible ? "visible from-left" : ""}`}>
            <p className="text-xs font-bold tracking-widest uppercase text-green-600 mb-4">NOSSA EXPERIÊNCIA</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Uma experiência<br />construída{" "}
              <span className="text-green-600">na prática.</span>
            </h2>
          </div>

          {/* Direita */}
          <div className={`reveal ${visible ? "visible delay-2 from-right" : ""} flex flex-col gap-5 lg:border-l lg:border-gray-100 lg:pl-12`}>
            <p className="text-gray-900 font-semibold leading-relaxed text-base">
              Não acreditamos em soluções genéricas.
            </p>
            <p className="text-gray-500 leading-relaxed text-justify">
              Cada projeto é conduzido com base na realidade da empresa, respeitando seus processos, sua cultura e seus objetivos.
            </p>
            <p className="text-gray-500 leading-relaxed text-justify">
              Ao longo de mais de 20 anos acompanhamos empresas da indústria têxtil em projetos de implantação, evolução e sustentação do TOTVS Moda.
            </p>
            <p className="text-sm italic leading-relaxed pl-4 text-green-700 text-justify"
              style={{ borderLeft: "2px solid #16A34A" }}>
              O resultado é uma visão que vai além do ERP — entendemos a operação, as pessoas e os desafios de cada empresa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
