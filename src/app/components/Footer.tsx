import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5514991234567', '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl mb-2" style={{ color: 'var(--vigos-green)' }}>
                Vigos
              </h3>
              <p className="text-sm text-gray-400">Soluções em Telecomunicações</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Soluções inovadoras em telecomunicações, com foco em qualidade e excelência no atendimento. Venha desenvolver seu projeto com a Vigos.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--vigos-green)' }}
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  style={{ color: 'inherit' }}
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  style={{ color: 'inherit' }}
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  style={{ color: 'inherit' }}
                >
                  Mercados Atendidos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  style={{ color: 'inherit' }}
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div>
            <h4 className="text-xl mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: 'var(--vigos-green)' }} />
                <span className="text-gray-300">
                  R. Ibrahim Nobre, 10‑27<br />
                  Jardim Panorama<br />
                  Bauru – SP, 17011‑138
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--vigos-green)' }} />
                <a 
                  href="mailto:contato@vigossolucoes.com.br" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  contato@vigossolucoes.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--vigos-green)' }} />
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

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Vigos Soluções em Telecomunicações. Todos os direitos reservados.</p>
            <p>15 anos de inovação e excelência</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
