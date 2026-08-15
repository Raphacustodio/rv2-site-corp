"use client";
import { useReveal } from "@/hooks/useReveal";

const AREAS = [
  "Implantação TOTVS Moda", "Processos TOTVS Moda", "Integrações TOTVS Moda",
  "BI TOTVS Moda", "Suporte TOTVS Moda", "Treinamentos TOTVS Moda",
  "Sustentação TOTVS Moda", "Relatórios TOTVS Moda", "Revitalização TOTVS Moda",
];

export function EspecialistasTotvs() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ backgroundColor: "#15803D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Esquerda: texto */}
          <div className={`reveal ${visible ? "visible from-left" : ""} flex flex-col gap-5`}>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-green-200 mb-3">RV2 ASSESSORIA</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug mb-4">
                Especialistas em TOTVS MODA<br />
                <span className="text-green-200">e na indústria têxtil.</span>
              </h2>
            </div>
            <p className="text-green-100 leading-relaxed text-justify">
              A RV2 possui ampla experiência na implantação, evolução e sustentação do TOTVS Moda, atuando em diferentes áreas do ERP e acompanhando toda a jornada de crescimento dos clientes.
            </p>
            <p className="text-green-100 leading-relaxed text-justify">
              Nossa atuação envolve desde o planejamento inicial até a evolução contínua do ambiente, sempre buscando maior eficiência operacional e melhor aproveitamento da tecnologia.
            </p>
            <p className="text-green-200 text-sm italic leading-relaxed text-justify">
              Mais do que conhecer funcionalidades, entendemos como cada processo impacta a operação da indústria têxtil.
            </p>
          </div>

          {/* Direita: áreas */}
          <div className={`reveal ${visible ? "visible delay-2 from-right" : ""} grid grid-cols-2 sm:grid-cols-3 gap-3`}>
            {AREAS.map((area, i) => (
              <div key={area}
                className={`reveal ${visible ? `visible delay-${i + 1}` : ""} flex items-center gap-2 px-4 py-4 rounded-xl`}
                style={{ background: "rgba(255,255,255,0.42)", border: "1px solid rgba(255,255,255,0.52)" }}>
                <div className="w-2 h-2 rounded-full bg-green-300 shrink-0" />
                <span className="font-semibold text-white text-sm">
                  {area.includes(" TOTVS Moda") ? (
                    <>{area.replace(" TOTVS Moda", "")}<span className="sr-only"> TOTVS Moda</span></>
                  ) : area}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
