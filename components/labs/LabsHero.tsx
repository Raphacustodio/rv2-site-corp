"use client";
export function LabsHero() {
  return (
    <section className="pt-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">RV2 Labs</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Tecnologia criada por quem <span className="text-purple-600">conhece</span> o têxtil.
            </h1>
            <p className="text-gray-500 leading-relaxed mb-3">O RV2 Labs desenvolve soluções que conectam processos, automatizam rotinas e resolvem desafios reais da indústria têxtil.</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Cada produto nasce da experiência prática adquirida em mais de duas décadas de atuação em projetos de implantação, processos e evolução operacional.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#solucoes" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-colors duration-200 shadow-sm">
                Conheça nossas soluções →
              </a>
              <a href="https://wa.me/5547991458295" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                Fale com um especialista →
              </a>
            </div>
          </div>
          <div className="border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-10">
            <p className="text-xs font-bold tracking-widest uppercase text-purple-600 mb-3">POR QUE EXISTE O LABS?</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Toda solução começa com um problema real.</h2>
            <p className="text-gray-500 leading-relaxed mb-3">Durante anos acompanhamos empresas da indústria têxtil enfrentando desafios que muitas vezes não eram resolvidos apenas com o ERP.</p>
            <p className="text-gray-500 leading-relaxed mb-3">Foi dessa experiência que nasceu o RV2 Labs. Cada software desenvolvido parte de uma necessidade identificada em operações reais.</p>
            <p className="text-gray-400 text-sm italic">Não criamos tecnologia por tendência.<br/>Criamos tecnologia para resolver problemas.</p>
            <div className="h-px bg-gradient-to-r from-green-400 to-purple-500 rounded-full mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
