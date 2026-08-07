import { UserCheck, Puzzle, Layers2, Headphones, Zap, Award } from "lucide-react";
import vigosTeamImage from "figma:asset/7c1dbe1357054c60561005addf937f128206ce72.png";

const reasons = [
  {
    icon: UserCheck,
    title: "Atendimento consultivo",
    description: "Entendemos sua operação e propomos soluções personalizadas para seus desafios específicos"
  },
  {
    icon: Puzzle,
    title: "Projetos personalizados",
    description: "Cada empresa é única. Desenvolvemos soluções sob medida para suas necessidades"
  },
  {
    icon: Layers2,
    title: "Integração com sistemas",
    description: "Conectamos o VigosCloud com seu CRM, ERP e outras ferramentas já utilizadas"
  },
  {
    icon: Headphones,
    title: "Suporte e continuidade",
    description: "Equipe técnica especializada disponível para garantir o melhor funcionamento"
  },
  {
    icon: Zap,
    title: "Implementação com foco em operação",
    description: "Processos eficientes que minimizam impacto e maximizam resultados desde o dia 1"
  }
];

export function WhyVigosSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: 'var(--vigos-blue-primary)' }}
      />
      <div 
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full blur-3xl opacity-5"
        style={{ background: 'var(--vigos-green-accent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          

          <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que fornecedor, somos parceiros estratégicos do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '2px solid var(--vigos-gray-light)' }}
            >
              <img 
                src={vigosTeamImage} 
                alt="Equipe Vigos - Especialistas em Telecomunicações"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Badge */}
            <div 
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl backdrop-blur-md"
              style={{ 
                background: 'rgba(0, 84, 166, 0.95)',
                border: '2px solid var(--vigos-green-accent)'
              }}
            >
              <div className="flex items-center gap-3 text-white">
                <Award className="h-10 w-10" style={{ color: 'var(--vigos-green-accent)' }} />
                <div>
                  <div className="text-xl font-semibold">Excelência</div>
                  <div className="text-sm opacity-80">em atendimento</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div 
              className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl border-2 -z-10"
              style={{ borderColor: 'var(--vigos-green-accent)', opacity: 0.3 }}
            />
          </div>

          {/* Right: Diferenciais Cards */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <div 
                      className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-x-2 hover:shadow-lg"
                      style={{ 
                        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
                        border: '2px solid #E5E7EB'
                      }}
                    >
                      {/* Icon Circle */}
                      <div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: 'linear-gradient(135deg, var(--vigos-blue-primary), var(--vigos-blue-dark))'
                        }}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg mb-2" style={{ color: 'var(--vigos-blue-dark)' }}>
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>

                      {/* Accent Line */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: 'var(--vigos-green-accent)' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}