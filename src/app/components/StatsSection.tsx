import { Award, Users, Briefcase, MapPin } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15",
    label: "anos de experiência",
    suffix: "+"
  },
  {
    icon: Users,
    value: "359",
    label: "clientes ativos",
    suffix: ""
  },
  {
    icon: Briefcase,
    value: "1.898",
    label: "projetos implementados",
    suffix: ""
  },
  {
    icon: MapPin,
    value: "SP",
    label: "Atendendo todo o estado de São Paulo",
    suffix: ""
  }
];

export function StatsSection() {
  return (
    <section 
      className="py-20 relative"
      style={{ 
        background: 'linear-gradient(135deg, var(--vigos-blue) 0%, var(--vigos-green) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
