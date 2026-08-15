"use client";
import Image from "next/image";

type Client = { name: string; logo?: string; logoH?: number; crop?: boolean; invert?: boolean; href?: string };
const CLIENTS: Client[] = [
  { name: "NB FIOS",             logo: "/logos/nb-fios.png",              logoH: 72, href: "https://www.nbfios.com.br/" },
  { name: "OBJETO BRASIL",       logo: "/logos/objeto-brasil.png",        logoH: 56, href: "https://www.objetobr.com.br/" },
  { name: "GRUPO CRISDU",        logo: "/logos/grupo-crisdu.png",         logoH: 56, href: "https://www.instagram.com/grupocrisdu/" },
  { name: "MENSAGEIRO DOS SONHOS", logo: "/logos/mensageiro-dos-sonhos.png", logoH: 56, href: "https://mensageirodossonhos.com.br/" },
  { name: "AGORA SOU MÃE",       logo: "/logos/agora-sou-mae.png",        logoH: 40, href: "https://www.agorasoumae.com.br/" },
  { name: "BUGBEE",              logo: "/logos/bugbee.png",               logoH: 44, href: "https://www.bugbee.com.br/" },
  { name: "GANGAS",              logo: "/logos/gangas.png",               logoH: 48, href: "https://madrereina.com.br/" },
  { name: "TRINYS",              logo: "/logos/trinys.png",               logoH: 72, href: "https://www.sodanca.com.br/" },
  { name: "DAKSUL JEANS",                                                             href: "https://www.daksuljeans.com.br/" },
  { name: "VEST SURF",           logo: "/logos/vest-surf.png",            logoH: 48, href: "https://www.instagram.com/vestsurf.oficial/" },
  { name: "FREE SURF",           logo: "/logos/free-surf.png",            logoH: 72, invert: true, href: "https://freesurf.com.br/" },
  { name: "TOOKAS",              logo: "/logos/tookas.png",               logoH: 44, href: "https://www.tookas.com.br" },
  { name: "ACUO LINGERIE",       logo: "/logos/acuo-lingerie.png",        logoH: 44, href: "https://www.acuo.com.br/" },
  { name: "VANELISE",            logo: "/logos/vanelise.png",             logoH: 40, href: "https://www.instagram.com/vaneliseconecta/" },
  { name: "KAIANI",              logo: "/logos/kaiani.png",               logoH: 44, href: "https://kaiani.com.br/" },
  { name: "TOP BOJOS",           logo: "/logos/top-bojos.png",            logoH: 52, href: "https://www.topbojos.com.br/" },
  { name: "RENAUXVIEW",          logo: "/logos/renauxview.png",           logoH: 56, crop: true, href: "https://www.renauxview.com.br/" },
];

export function ClientsCarousel() {
  return (
    <section id="clientes" className="scroll-mt-16 pb-3 overflow-hidden" style={{ background: "transparent", marginTop: 48 }}>
      <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mt-6 mb-6">
        ALGUMAS EMPRESAS QUE FAZEM PARTE DA NOSSA HISTÓRIA
      </p>
      <div className="overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div className="ticker-track flex w-max items-center gap-0">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <a
              key={i}
              href={c.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-8 shrink-0 px-6"
            >
              {c.logo ? (
                c.crop ? (
                  <div
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ width: 180, height: 28, overflow: "hidden", position: "relative", flexShrink: 0 }}
                  >
                    <Image src={c.logo} alt={c.name} fill
                      style={{ objectFit: "cover", objectPosition: "center 48%", filter: "grayscale(1)", opacity: 0.5 }} />
                  </div>
                ) : (
                  <Image
                    src={c.logo} alt={c.name} width={140} height={60}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ height: (c.logoH ?? 56), width: "auto", maxWidth: 200, objectFit: "contain", filter: c.invert ? "grayscale(1) invert(1)" : "grayscale(1)", opacity: 0.5 }}
                  />
                )
              ) : (
                <span className="font-bold text-xs tracking-wider text-gray-400 uppercase whitespace-nowrap transition-transform duration-300 group-hover:scale-110 inline-block">{c.name}</span>
              )}

              <span className="text-gray-200 text-xs">✦</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
