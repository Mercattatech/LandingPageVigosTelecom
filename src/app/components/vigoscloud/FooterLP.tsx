import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import vigosLogo from "figma:asset/ac4dbebbc389b3a989fdeb433304f09f7ea0026c.png";

export function FooterLP() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5514991234567', '_blank');
  };

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, var(--vigos-blue-deep) 0%, #000 100%)'
      }}
    >
      {/* Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--vigos-tech-lines) 1px, transparent 1px), linear-gradient(90deg, var(--vigos-tech-lines) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Top Green Line */}
      <div className="w-full h-1" style={{ background: 'var(--vigos-green-accent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <img 
                src={vigosLogo} 
                alt="Vigos Soluções" 
                className="h-16 mb-3"
              />
              <p className="text-sm text-gray-400">Soluções em Telecomunicações</p>
              <div 
                className="w-20 h-1 mt-2 rounded-full"
                style={{ background: 'var(--vigos-green-accent)' }}
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Soluções inovadoras em telecomunicações, com foco em qualidade e excelência no atendimento. 
              Venha desenvolver seu projeto com a Vigos.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: 'var(--vigos-green-accent)', color: 'var(--vigos-blue-deep)' }}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full group-hover:w-2 transition-all" style={{ backgroundColor: 'var(--vigos-green-accent)' }} />
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.querySelector('form');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full group-hover:w-2 transition-all" style={{ backgroundColor: 'var(--vigos-green-accent)' }} />
                  VigosCloud
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('final-form');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full group-hover:w-2 transition-all" style={{ backgroundColor: 'var(--vigos-green-accent)' }} />
                  Diagnóstico Gratuito
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const section = document.getElementById('final-form');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full group-hover:w-2 transition-all" style={{ backgroundColor: 'var(--vigos-green-accent)' }} />
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-xl mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--vigos-green-accent)' }} />
                <span className="text-gray-300">
                  R. Ibrahim Nobre, 10‑27<br />
                  Jardim Panorama<br />
                  Bauru – SP, 17011‑138
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--vigos-green-accent)' }} />
                <a 
                  href="mailto:contato@vigossolucoes.com.br" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@vigossolucoes.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--vigos-green-accent)' }} />
                <a 
                  href="tel:+551421074100" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +55 14 2107‑4100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t pt-8"
          style={{ borderColor: 'var(--vigos-tech-lines)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Vigos Soluções em Telecomunicações. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--vigos-green-accent)' }} />
              <p>15 anos de inovação e excelência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div 
        className="w-full h-1"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, var(--vigos-green-accent) 50%, transparent 100%)'
        }}
      />
    </footer>
  );
}