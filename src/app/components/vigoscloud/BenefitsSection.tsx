import { TrendingUp, Settings, Clock, Database } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais produtividade",
    description: "Automatize processos e libere sua equipe para focar no que realmente importa"
  },
  {
    icon: Settings,
    title: "Controle operacional",
    description: "Visão completa de todas as interações e métricas em tempo real"
  },
  {
    icon: Clock,
    title: "Atendimento mais rápido",
    description: "Reduza tempo de espera e melhore a experiência do cliente"
  },
  {
    icon: Database,
    title: "Gestão baseada em dados",
    description: "Tome decisões estratégicas com base em informações concretas e atualizadas"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Resultados que você pode medir
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme a comunicação da sua empresa em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                <div 
                  className="h-full p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box'
                  }}
                >
                  {/* Gradient Border on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-green-accent))',
                      padding: '2px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude'
                    }}
                  />

                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-20"
                    style={{ background: 'var(--vigos-green-accent)' }}
                  />

                  <div className="relative">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-blue-dark))'
                      }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl mb-3" style={{ color: 'var(--vigos-blue-dark)' }}>
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
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
