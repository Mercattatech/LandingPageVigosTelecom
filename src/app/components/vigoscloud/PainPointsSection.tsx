import { AlertCircle, BarChart3, TrendingDown, Unplug } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    title: "Atendimento sem padrão",
    description: "Falta de controle sobre a qualidade das ligações e tempo de resposta"
  },
  {
    icon: BarChart3,
    title: "Sem visão por relatórios",
    description: "Decisões sem dados concretos sobre desempenho da equipe"
  },
  {
    icon: TrendingDown,
    title: "Dificuldade em escalar",
    description: "Sistema limitado que não acompanha o crescimento da empresa"
  },
  {
    icon: Unplug,
    title: "Falta de integração",
    description: "Sistemas isolados que não conversam com CRM e ERP"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Desafios que impedem o crescimento da sua empresa
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            A comunicação ineficiente impacta diretamente a produtividade e os resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div 
                  className="h-full p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{ 
                    borderColor: '#E5E7EB',
                    background: 'white'
                  }}
                >
                  {/* Glow on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      boxShadow: '0 0 30px rgba(0, 84, 166, 0.15)',
                      border: '2px solid transparent',
                      borderImage: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-green-accent)) 1'
                    }}
                  />
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(0, 84, 166, 0.1)' }}
                    >
                      <Icon className="h-7 w-7" style={{ color: 'var(--vigos-blue-primary)' }} />
                    </div>
                    
                    <h3 className="text-xl mb-3" style={{ color: 'var(--vigos-blue-dark)' }}>
                      {pain.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
