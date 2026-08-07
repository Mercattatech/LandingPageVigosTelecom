import { MessageSquare, Headphones } from "lucide-react";
import { Button } from "./ui/button";

export function SupportSection() {
  const handleOpenTicket = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCallSupport = () => {
    window.location.href = 'tel:+551421074100';
  };

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--vigos-blue-dark) 0%, var(--vigos-blue) 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Headphones className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4 text-white">
            Você precisa de ajuda?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você. Entre em contato através dos nossos canais de suporte.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleOpenTicket}
            size="lg"
            className="text-lg px-8 py-6 h-auto w-full sm:w-auto"
            style={{ 
              backgroundColor: 'var(--vigos-green)', 
              color: 'white',
              border: 'none'
            }}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Abrir chamado
          </Button>
          <Button 
            onClick={handleCallSupport}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 h-auto w-full sm:w-auto bg-white hover:bg-gray-100"
            style={{ 
              color: 'var(--vigos-blue-dark)',
              borderColor: 'white'
            }}
          >
            <Headphones className="mr-2 h-5 w-5" />
            Falar com suporte
          </Button>
        </div>
      </div>
    </section>
  );
}
