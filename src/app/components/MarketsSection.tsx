import { Building2, HardHat, Home, FileText } from "lucide-react";

const markets = [
  {
    icon: Building2,
    title: "Empresas, indústrias e comércio",
    description: "Soluções completas de telecomunicações para empresas de todos os portes, garantindo comunicação eficiente e produtividade"
  },
  {
    icon: HardHat,
    title: "Projetos de Infraestrutura",
    description: "Planejamento e execução de projetos de infraestrutura de rede com as melhores práticas e tecnologias do mercado"
  },
  {
    icon: Home,
    title: "Residências e Condomínios",
    description: "Internet de alta velocidade e soluções de conectividade para residências e condomínios com estabilidade garantida"
  },
  {
    icon: FileText,
    title: "Consultoria de Projetos",
    description: "Análise especializada e consultoria técnica para otimizar sua infraestrutura de telecomunicações"
  }
];

export function MarketsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Mercados Atendidos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiência e expertise para atender diversos segmentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-lg border-2 border-gray-100 hover:border-[var(--vigos-green)] transition-all duration-300 group"
              >
                <div 
                  className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'var(--vigos-blue)', opacity: 0.1 }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'var(--vigos-blue)' }} />
                </div>
                <div>
                  <h3 className="text-xl mb-2" style={{ color: 'var(--vigos-blue-dark)' }}>
                    {market.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {market.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
