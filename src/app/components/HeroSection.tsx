import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNzU2MDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          filter: 'blur(2px)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.85) 0%, rgba(0, 204, 102, 0.75) 100%)' }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
          15 anos de inovação:<br />
          Seu parceiro de confiança em comunicação
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
          Soluções inovadoras em telecomunicações, com foco em qualidade e excelência no atendimento
        </p>
        <Button 
          onClick={handleContactClick}
          size="lg"
          className="text-lg px-8 py-6 h-auto"
          style={{ 
            backgroundColor: 'var(--vigos-green)', 
            color: 'white',
            border: 'none'
          }}
        >
          <Phone className="mr-2 h-5 w-5" />
          Central de Atendimento
        </Button>
      </div>
    </section>
  );
}
