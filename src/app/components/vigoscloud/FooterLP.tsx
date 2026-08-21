import { Mail, Phone, MapPin, MessageCircle, Terminal, Activity } from "lucide-react";
import vigosLogo from "../../../assets/vigos-logo.png";

export function FooterLP() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5514991046715", "_blank");
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#03060A] text-white border-t border-white/10 font-sans">
      
      {/* Top Accent Line */}
      <div className="w-full h-0.5" style={{ background: "linear-gradient(90deg, transparent 0%, var(--vigos-green-accent) 50%, transparent 100%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 relative z-10">
        
        {/* Network Status Live Banner */}
        <div className="mb-16 p-4 sm:p-6 bg-[#080D16] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9ACB3B] animate-pulse" />
            <span className="text-white/80 font-bold uppercase tracking-wider">VIGOS TELECOM // INFRAESTRUTURA & NOC</span>
          </div>
          <div className="flex items-center gap-6 text-white/50">
            <span className="flex items-center gap-1.5 text-[#9ACB3B]">
              <Activity className="w-3.5 h-3.5" /> UPTIME: 99.99%
            </span>
            <span className="hidden sm:inline">LATENCY: &lt;15ms</span>
            <span className="hidden md:inline">SÃO PAULO - BR</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo and Description */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={vigosLogo} 
                alt="Vigos Telecom" 
                className="h-12 w-auto filter brightness-110"
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Soluções avançadas em telecomunicações corporativas, telefonia em nuvem VigosCloud, links dedicados e cabeamento estruturado.
            </p>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#9ACB3B] text-[#070A0F] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_25px_rgba(154,203,59,0.3)] cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs">
            <h4 className="text-white/50 uppercase tracking-widest mb-6">Navegação Rápida</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={scrollToTop} className="hover:text-[#9ACB3B] transition-colors cursor-pointer flex items-center gap-2">
                  <span>/</span> Início
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("showcase")} className="hover:text-[#9ACB3B] transition-colors cursor-pointer flex items-center gap-2">
                  <span>/</span> VigosCloud
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("benefits")} className="hover:text-[#9ACB3B] transition-colors cursor-pointer flex items-center gap-2">
                  <span>/</span> Benefícios
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("differentials")} className="hover:text-[#9ACB3B] transition-colors cursor-pointer flex items-center gap-2">
                  <span>/</span> Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("formulario-contato")} className="hover:text-[#9ACB3B] transition-colors cursor-pointer flex items-center gap-2">
                  <span>/</span> Solicitar Diagnóstico
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <h4 className="text-white/50 uppercase tracking-widest mb-6">Central de Atendimento</h4>
            <ul className="space-y-4 text-gray-400 font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#9ACB3B] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  R. Ibrahim Nobre, 10‑27, Jardim Panorama<br />
                  Bauru – SP, 17011‑138
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#9ACB3B] flex-shrink-0" />
                <a href="mailto:contato@vigossolucoes.com.br" className="text-xs text-gray-300 hover:text-[#9ACB3B] transition-colors font-mono">
                  contato@vigossolucoes.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#9ACB3B] flex-shrink-0" />
                <a href="tel:+551421074100" className="text-xs text-gray-300 hover:text-[#9ACB3B] transition-colors font-mono">
                  +55 (14) 2107‑4100
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Vigos Soluções em Telecomunicações. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9ACB3B]" />
            <span>15 ANOS DE INOVAÇÃO EM TELECOM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}