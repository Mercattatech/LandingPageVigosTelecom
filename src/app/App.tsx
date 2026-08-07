import { HeroLPSection } from "./components/vigoscloud/HeroLPSection";
import { PainPointsSection } from "./components/vigoscloud/PainPointsSection";
import { VigosCloudShowcase } from "./components/vigoscloud/VigosCloudShowcase";
import { BenefitsSection } from "./components/vigoscloud/BenefitsSection";
import { SocialProofSection } from "./components/vigoscloud/SocialProofSection";
import { SegmentsSection } from "./components/vigoscloud/SegmentsSection";
import { WhyVigosSection } from "./components/vigoscloud/WhyVigosSection";
import { CTASection } from "./components/vigoscloud/CTASection";
import { FinalFormSection } from "./components/vigoscloud/FinalFormSection";
import { FooterLP } from "./components/vigoscloud/FooterLP";
import { HeaderLP } from "./components/vigoscloud/HeaderLP";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header com Logo */}
      <HeaderLP />
      
      {/* VigosCloud Showcase - Solução Principal */}
      <VigosCloudShowcase />

      {/* Pain Points - Identificação */}
      <PainPointsSection />

      {/* Hero with Lead Form */}
      <HeroLPSection />
      
      {/* Benefits - Resultados */}
      <BenefitsSection />
      
      {/* Social Proof - Autoridade */}
      <SocialProofSection />
      
      {/* Segments - Mercados B2B */}
      <SegmentsSection />
      
      {/* Why Vigos - Diferenciais */}
      <WhyVigosSection />
      
      {/* CTA Intermediário */}
      <CTASection />
      
      {/* Final Form - Conversão */}
      <FinalFormSection />
      
      {/* Footer */}
      <FooterLP />
    </div>
  );
}