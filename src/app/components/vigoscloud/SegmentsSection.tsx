import { Building2, HardHat, FileText, Home } from "lucide-react";

const segments = [
  {
    icon: Building2,
    title: "Empresas, indústrias e comércio",
    description: "Soluções completas de comunicação para empresas de todos os portes, com foco em performance e escalabilidade"
  },
  {
    icon: HardHat,
    title: "Projetos de infraestrutura",
    description: "Planejamento e implementação de projetos complexos de telecomunicações com as melhores práticas do mercado"
  },
  {
    icon: FileText,
    title: "Consultoria de projetos",
    description: "Análise especializada e consultoria técnica para otimizar sua infraestrutura de comunicação corporativa"
  },
  {
    icon: Home,
    title: "Residências e condomínios",
    description: "Internet de alta velocidade e conectividade estável para residências e grandes condomínios"
  }
];

export function SegmentsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Segmentos que atendemos
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise em telecomunicações para diversos setores da economia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div 
                  className="h-full p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{ 
                    background: 'white',
                    border: '2px solid #E5E7EB'
                  }}
                >
                  {/* Hover Border Glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      boxShadow: '0 0 40px rgba(154, 203, 59, 0.3)',
                      borderImage: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-green-accent)) 1'
                    }}
                  />

                  <div className="flex gap-6 relative">
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-blue-dark))'
                      }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl mb-3" style={{ color: 'var(--vigos-blue-dark)' }}>
                        {segment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {segment.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div 
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ 
                      background: 'var(--vigos-green-accent)',
                      clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
