import { ArrowRight, MessageCircle, Terminal } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
  const handleContactCTA = () => {
    const finalForm = document.getElementById("formulario-contato") || document.getElementById("final-form");
    finalForm?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppCTA = () => {
    window.open("https://wa.me/5514991046715?text=Olá! Gostaria de conhecer o VigosCloud", "_blank");
  };

  return (
    <section className="py-24 bg-[#070B12] relative overflow-hidden text-white border-t border-b border-white/10">
      
      {/* Background Neon Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-6 px-4 py-1.5 bg-[#9ACB3B]/10 border border-[#9ACB3B]/30">
          <Terminal className="w-4 h-4 text-[#9ACB3B]" />
          Transformação Digital
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Pronto para modernizar a comunicação da sua empresa?
        </h2>

        <p className="text-base sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
          Fale agora com nossos consultores técnicos e receba um diagnóstico sem compromisso para sua operação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-mono">
          <Button 
            onClick={handleContactCTA}
            size="lg"
            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-none text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_35px_rgba(154,203,59,0.4)] flex items-center justify-center gap-3 cursor-pointer group"
            style={{ 
              backgroundColor: "var(--vigos-green-accent)",
              color: "#070A0F",
              border: "none"
            }}
          >
            <span>Receber Contato da Vigos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            onClick={handleWhatsAppCTA}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 rounded-none text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 border-white/30 text-white flex items-center justify-center gap-3 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#9ACB3B]" />
            <span>Falar no WhatsApp</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
