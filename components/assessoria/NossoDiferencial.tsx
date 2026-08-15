"use client";
import { useReveal } from "@/hooks/useReveal";

export function NossoDiferencial() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Esquerda */}
          <div className={`reveal ${visible ? "visible from-left" : ""} lg:pl-24`}>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-3">DA EXPERIÊNCIA À TECNOLOGIA</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              A <span className="text-green-600">assessoria</span> inspira<br />o <span className="text-purple-600">laboratório</span>.
            </h2>
          </div>

          {/* Direita */}
          <div className={`reveal ${visible ? "visible delay-2 from-right" : ""} flex flex-col gap-4 lg:border-l lg:border-gray-100 lg:pl-6`}>
            <p className="text-gray-600 leading-relaxed text-justify">A experiência adquirida ao longo de mais de 20 anos na indústria têxtil inspira o desenvolvimento das soluções do RV2 Labs.</p>
            <p className="text-gray-600 leading-relaxed text-justify">Cada software nasce de necessidades reais vividas pelos nossos clientes.</p>
            <p className="text-sm italic text-gray-400 leading-relaxed text-justify">
              Não desenvolvemos tecnologia por tendência.<br />Desenvolvemos tecnologia para resolver problemas reais.
            </p>
            <div className="h-px bg-gradient-to-r from-green-400 to-purple-500 rounded-full w-4/5 mx-auto" />
            <div className="flex justify-between w-4/5 mx-auto">
              <a href="#assessoria"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-green-200 text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors duration-200">
                Conheça RV2 Assessoria →
              </a>
              <a href="#labs"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-purple-200 text-purple-700 font-semibold text-sm hover:bg-purple-50 transition-colors duration-200">
                Conheça RV2 Labs →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
