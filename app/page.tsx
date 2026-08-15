import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { ServiceCards } from "@/components/home/ServiceCards";
import { Timeline } from "@/components/home/Timeline";
import { CTABanner } from "@/components/home/CTABanner";
import { Testimonials } from "@/components/home/Testimonials";
import { ClientsCarousel } from "@/components/shared/ClientsCarousel";
import { NossaExperiencia } from "@/components/assessoria/NossaExperiencia";
import { EspecialistasTotvs } from "@/components/assessoria/EspecialistasTotvs";
import { AreasAtuacao } from "@/components/assessoria/AreasAtuacao";
import { PorQueRV2 } from "@/components/assessoria/PorQueRV2";
import { NossoDiferencial } from "@/components/assessoria/NossoDiferencial";
import { LabsIntro } from "@/components/labs/LabsIntro";
import { NossasSolucoes } from "@/components/labs/NossasSolucoes";
import { NossaFilosofia } from "@/components/labs/NossaFilosofia";
import { EmEvolucao } from "@/components/labs/EmEvolucao";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Header />

      {/* HOME */}
      <Hero />
      <NossoDiferencial />

      {/* CLIENTES */}
      <div style={{ marginTop: -2, background: "linear-gradient(to bottom, #ffffff 0%, #F0FDF4 100%)" }}>
        <ClientsCarousel />
        <Testimonials />
      </div>

      <StatsSection />
      <ServiceCards />

      <Timeline />

      {/* ASSESSORIA */}
      <div id="assessoria" className="scroll-mt-16">
        <EspecialistasTotvs />
        <NossaExperiencia />
        <AreasAtuacao />
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <PorQueRV2 />
          </div>
        </section>
      </div>

      {/* LABS */}
      <div id="labs" className="scroll-mt-16">
        <LabsIntro />
        <NossasSolucoes />
        <EmEvolucao />
      </div>

      <CTABanner />
      <Footer />
    </main>
  );
}
