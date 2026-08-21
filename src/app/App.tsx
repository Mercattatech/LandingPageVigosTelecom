import { HeaderLP } from "./components/vigoscloud/HeaderLP";
import { HeroLPSection } from "./components/vigoscloud/HeroLPSection";
import { ClientsMarquee } from "./components/vigoscloud/ClientsMarquee";
import { PainPointsSection } from "./components/vigoscloud/PainPointsSection";
import { VigosCloudShowcase } from "./components/vigoscloud/VigosCloudShowcase";
import { BenefitsSection } from "./components/vigoscloud/BenefitsSection";
import { WhyVigosSection } from "./components/vigoscloud/WhyVigosSection";
import { SegmentsSection } from "./components/vigoscloud/SegmentsSection";
import { CTASection } from "./components/vigoscloud/CTASection";
import { FinalFormSection } from "./components/vigoscloud/FinalFormSection";
import { FooterLP } from "./components/vigoscloud/FooterLP";
import { WhatsAppSDRFlow } from "./components/vigoscloud/WhatsAppSDRFlow";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060A10] font-sans antialiased text-white selection:bg-[#9ACB3B] selection:text-[#060A10] relative">
      {/* 1. Header com Logo, Relógio e CTAs Studio */}
      <HeaderLP />
      
      {/* 2. Hero Section 100% Full-Screen Video em Loop com Controles Flutuantes */}
      <HeroLPSection />
      
      {/* 3. Faixa Interativa de Clientes - Marquee Infinito */}
      <ClientsMarquee />

      {/* 4. Pain Points - Diagnóstico e Desafios */}
      <PainPointsSection />

      {/* 4. VigosCloud Showcase - Command Center e Telemetria em Tempo Real */}
      <VigosCloudShowcase />
      
      {/* 5. Benefits - Vantagens Competitivas */}
      <BenefitsSection />

      {/* 6. Why Vigos - Diferenciais de Engenharia */}
      <WhyVigosSection />
      
      {/* 8. Segments - Verticais Atendidas */}
      <SegmentsSection />
      
      {/* 9. CTA Intermediário */}
      <CTASection />
      
      {/* 10. Formulário Dedicado para Diagnóstico e Proposta */}
      <FinalFormSection />
      
      {/* 11. Footer Studio */}
      <FooterLP />

      {/* 12. Floating WhatsApp SDR Conversational Flow Widget */}
      <WhatsAppSDRFlow />
    </div>
  );
}