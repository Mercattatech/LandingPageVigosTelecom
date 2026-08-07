import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
  const handleContactCTA = () => {
    const finalForm = document.getElementById('final-form');
    finalForm?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppCTA = () => {
    window.open('https://wa.me/5514991234567?text=Olá! Gostaria de conhecer o VigosCloud', '_blank');
  };

  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, var(--vigos-green-accent) 0%, #7DA32E 100%)'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--vigos-blue-deep) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Glow Effects */}
      <div 
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'var(--vigos-blue-dark)' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'var(--vigos-blue-primary)' }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl mb-6 leading-tight" style={{ color: 'var(--vigos-blue-deep)' }}>
          Pronto para modernizar a comunicação da sua empresa?
        </h2>

        <p className="text-xl lg:text-2xl mb-10 opacity-90" style={{ color: 'var(--vigos-blue-dark)' }}>
          Fale com nossos especialistas e descubra como o VigosCloud pode transformar seus resultados
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={handleContactCTA}
            size="lg"
            className="w-full sm:w-auto rounded-full px-10 py-7 h-auto text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            style={{ 
              backgroundColor: 'var(--vigos-blue-deep)',
              color: 'white',
              border: 'none'
            }}
          >
            Receber contato da Vigos
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            onClick={handleWhatsAppCTA}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full px-10 py-7 h-auto text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            style={{ 
              backgroundColor: 'white',
              color: 'var(--vigos-blue-deep)',
              borderColor: 'var(--vigos-blue-deep)',
              borderWidth: '2px'
            }}
          >
            <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Falar no WhatsApp
          </Button>
        </div>

        
      </div>
    </section>
  );
}
