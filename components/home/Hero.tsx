"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  label: string;
  heading?: React.ReactNode;
  description?: string;
  cta?: { label: string; href: string; external?: boolean; purple?: boolean };
};

const SLIDES: Slide[] = [
  {
    src: "/images/hero/hero_01.webp",
    alt: "Consultoria e integração TOTVS Moda – RV2",
    label: "Conexões",
    heading: (
      <>
        Conectamos
        <br /><span style={{ color: "#4ADE80" }}>processos,</span>
        <br /><span style={{ color: "#A78BFA" }}>tecnologia,</span>
        <br /><span style={{ color: "#FB923C" }}>pessoas</span> e
        <br />resultado.
      </>
    ),
    description: "Assessoria especializada em TOTVS Moda e soluções tecnológicas que impulsionam a gestão da cadeia têxtil.",
    cta: { label: "Conheça nossa assessoria →", href: "#assessoria" },
  },
  {
    src: "/images/hero/hero_02.webp",
    alt: "Assessoria TOTVS Moda para indústria da moda – RV2",
    label: "Indústria",
    heading: (
      <>
        Assessoria
        <br />que <span style={{ color: "#FB923C" }}>transforma</span>
        <br /><span style={{ color: "#4ADE80" }}>processos</span> em
        <br /><span style={{ color: "#A78BFA" }}>vantagem.</span>
      </>
    ),
    description: "Consultoria especializada em TOTVS Moda para otimizar processos, reduzir custos e aumentar a eficiência da sua operação.",
    cta: { label: "Conheça nossa assessoria →", href: "#assessoria" },
  },
  {
    src: "/images/hero/hero_03.webp",
    alt: "BI e soluções tecnológicas para TOTVS Moda – RV2 Labs",
    label: "Tecnologia",
    heading: (
      <>
        <span style={{ color: "#A78BFA" }}>Tecnologia</span>
        <br />que conecta
        <br />ideias, <span style={{ color: "#4ADE80" }}>sistemas</span>
        <br /><span style={{ color: "#FB923C" }}>e pessoas.</span>
      </>
    ),
    description: "Desenvolvemos soluções inteligentes e integradas para transformar dados em decisões e impulsionar resultados.",
    cta: { label: "Conheça o RV2 Labs →", href: "#labs", purple: true },
  },
  {
    src: "/images/hero/hero_04.webp",
    alt: "RV2 Notify – Automação de comunicação integrada ao TOTVS Moda",
    label: "Notify",
    heading: (
      <>
        <span style={{ color: "#A78BFA" }}>Comunicação</span>
        <br />que mantém sua
        <br /><span style={{ color: "#4ADE80" }}>operação</span> em
        <br /><span style={{ color: "#FB923C" }}>movimento.</span>
      </>
    ),
    description: "O RV2 Notify conecta pessoas e processos em tempo real, garantindo agilidade, transparência e controle na comunicação.",
    cta: { label: "Conheça o RV2 Notify →", href: "#labs", purple: true },
  },
  {
    src: "/images/hero/hero_05.webp",
    alt: "RV2 Suite Terceiriza – Gestão de terceiros integrada ao TOTVS Moda",
    label: "Terceiros",
    heading: (
      <>
        App do <span style={{ color: "#A78BFA" }}>terceiro</span>
        <br />conectando sua
        <br /><span style={{ color: "#4ADE80" }}>operação</span> a quem
        <br /><span style={{ color: "#FB923C" }}>faz acontecer.</span>
      </>
    ),
    description: "O App de Terceiros do RV2 Suite integra sua empresa a fornecedores e parceiros, com controle, rastreabilidade e colaboração.",
    cta: { label: "Conheça o App de Terceiros →", href: "#labs", purple: true },
  },
  {
    src: "/images/hero/hero_06.webp",
    alt: "RV2 Suite Carrega e Coleta – Logística e rotas para indústria da moda",
    label: "Motorista",
    heading: (
      <>
        App do <span style={{ color: "#FB923C" }}>motorista</span>
        <br /><span style={{ color: "#A78BFA" }}>rota</span> inteligente,
        <br />entregas <span style={{ color: "#4ADE80" }}>eficientes.</span>
      </>
    ),
    description: "O App do Motorista do RV2 Suite guia cada etapa da rota com precisão, conectando motoristas, coletas e entregas em tempo real.",
    cta: { label: "Conheça o App do Motorista →", href: "#labs", purple: true },
  },
];

const INTERVAL = 10000;
const FADE_MS  = 900;

const TEXT_FADE = 300;

export function Hero() {
  const [current,     setCurrent]     = useState(0);
  const [displayed,   setDisplayed]   = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const slideRef = useRef(0); // evita stale closure no setInterval

  const transition = useCallback((next: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(next);
      slideRef.current = next;
    }, TEXT_FADE);
    setTimeout(() => {
      setDisplayed(next);
      setTextVisible(true);
    }, TEXT_FADE + FADE_MS);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      transition((slideRef.current + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [transition]);

  const goTo = useCallback((index: number) => {
    transition(index);
  }, [transition]);

  const slide = SLIDES[displayed];

  return (
    <section
      className="relative pt-16"
      style={{ height: "96vh", minHeight: 580, background: "#060F1E" }}
    >
      {/* Backgrounds com crossfade */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity:    i === current ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            zIndex:     0,
          }}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className="object-cover object-center hero-kenburns"
          />
        </div>
      ))}

      {/* Texto do slide — aparece quando o slide tem conteúdo */}
      {slide.heading && (
        <div
          className="absolute inset-0 flex items-start pt-32"
          style={{
            zIndex: 2,
            pointerEvents: "none",
            opacity: textVisible ? 1 : 0,
            transition: `opacity ${TEXT_FADE}ms ease-in-out`,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="max-w-lg">
              <h1
                className="font-extrabold leading-[1.1] tracking-tight text-white mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {slide.heading}
              </h1>
              {slide.description && (
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,1)", textShadow: "0 0 3px rgba(0,0,0,0.9), 0 1px 12px rgba(0,0,0,0.45)" }}>
                  {slide.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTAs — canto inferior esquerdo */}
      <div
        className="absolute bottom-20 left-0 right-0 px-4 sm:px-6 lg:px-10"
        style={{
          zIndex: 3,
          opacity: textVisible ? 1 : 0,
          transition: `opacity ${TEXT_FADE}ms ease-in-out`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 w-fit">
          {slide.cta && (
            <a
              href={slide.cta.href}
              {...(slide.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="cta-pulse flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-colors duration-200"
              style={slide.cta.purple
                ? { background: "linear-gradient(135deg, #A78BFA, #6D28D9)", boxShadow: "0 0 0 1px rgba(167,139,250,0.25), 0 4px 20px rgba(124,58,237,0.35)" }
                : { background: "linear-gradient(135deg, #22C55E, #15803D)", boxShadow: "0 0 0 1px rgba(74,222,128,0.25), 0 4px 20px rgba(22,163,74,0.3)" }
              }
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = slide.cta!.purple ? "linear-gradient(135deg, #C4B5FD, #7C3AED)" : "linear-gradient(135deg, #4ADE80, #16A34A)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = slide.cta!.purple ? "linear-gradient(135deg, #A78BFA, #6D28D9)" : "linear-gradient(135deg, #22C55E, #15803D)"; }}
            >
              {slide.cta.label}
            </a>
          )}
          <a
            href="#solucoes"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-colors duration-200"
            style={{
              border: "0.5px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(6px)",
              background: "linear-gradient(to bottom, rgba(124,58,237,0.28) 0%, rgba(255,255,255,0.08) 100%)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(to bottom, rgba(124,58,237,0.45) 0%, rgba(255,255,255,0.12) 100%)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(to bottom, rgba(124,58,237,0.28) 0%, rgba(255,255,255,0.08) 100%)"; }}
          >
            Conheça nossas soluções →
          </a>
        </div>
      </div>

      {/* Onda branca inferior */}
      <div className="absolute inset-x-0" style={{ bottom: -2, zIndex: 2, lineHeight: 0, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 92" preserveAspectRatio="none" className="w-full" style={{ height: 92, display: "block" }} fill="white">
          <path d="M0,92 L0,26 C380,26 580,88 720,90 C860,88 1060,26 1440,26 L1440,92 Z" />
        </svg>
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-[10px]"
        style={{ zIndex: 3 }}
        role="tablist"
        aria-label="Temas visuais do Hero"
      >
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Tema: ${s.label}`}
            className="rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            style={{
              width:      i === current ? 28 : 10,
              height:     10,
              background:  i === current ? "white" : "transparent",
              border:      i === current ? "2px solid rgba(0,0,0,0.35)" : "2px solid rgba(255,255,255,0.85)",
              boxShadow:   i === current ? "0 1px 4px rgba(0,0,0,0.5)" : "0 1px 3px rgba(0,0,0,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
