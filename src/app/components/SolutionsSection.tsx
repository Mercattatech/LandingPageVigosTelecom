import { Cloud, Network, Wifi, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const solutions = [
  {
    icon: Cloud,
    title: "VigosCloud",
    description: "Um poderoso PABX capaz de gerar relatórios personalizados com ferramentas que integram com seu CRM e ERP",
    color: "#0066CC"
  },
  {
    icon: Network,
    title: "VigosNetwork",
    description: "Alta performance, fibra óptica, montagem de rack e cabeamento estruturado",
    color: "#00CC66"
  },
  {
    icon: Wifi,
    title: "VigosWifi",
    description: "Wi‑fi com estabilidade de sinal, amplo alcance, conexão segura e alto performance",
    color: "#0066CC"
  }
];

export function SolutionsSection() {
  const handleLearnMore = (solutionTitle: string) => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Nossas Soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para transformar a comunicação da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${solution.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: solution.color }} />
                </div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <Button 
                  variant="ghost"
                  onClick={() => handleLearnMore(solution.title)}
                  className="group"
                  style={{ color: 'var(--vigos-green)' }}
                >
                  Saiba mais
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
