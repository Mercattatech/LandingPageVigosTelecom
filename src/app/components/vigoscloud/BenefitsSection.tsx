import { TrendingUp, Settings, Clock, Database, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    badge: "+40% EFICIÊNCIA",
    title: "Produtividade Máxima",
    description: "Automatize transferências, filas de espera e discagens para acelerar o fechamento de vendas da equipe."
  },
  {
    icon: Settings,
    badge: "100% VISIBILIDADE",
    title: "Controle Operacional",
    description: "Visão 360° de todas as interações, chamadas ativas, tempo de atendimento e performance dos operadores."
  },
  {
    icon: Clock,
    badge: "-50% ESPERA",
    title: "Atendimento Ágil",
    description: "Reduza o tempo de espera dos clientes com URA inteligente e direcionamento dinâmico para os analistas corretos."
  },
  {
    icon: Database,
    badge: "DATA-DRIVEN",
    title: "Gestão por Dados",
    description: "Decisões estratégicas embasadas em relatórios analíticos completos de volumetria e conversão de chamadas."
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-28 bg-[#070B12] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Ambient Lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px] opacity-10 pointer-events-none"
        style={{ background: "var(--vigos-blue-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
            <Sparkles className="w-4 h-4" />
            Vantagens Competitivas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Resultados que você mede em tempo real
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans">
            Transforme a telefonia da sua empresa de um centro de custo para um motor de produtividade e vendas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-[#0C121E]/90 border border-white/10 hover:border-[#9ACB3B]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#9ACB3B] group-hover:border-[#9ACB3B]/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 bg-[#9ACB3B]/10 text-[#9ACB3B] border border-[#9ACB3B]/30 tracking-wider">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[11px] text-white/30 group-hover:text-[#9ACB3B] transition-colors">
                  VIGOSCLOUD // PERFORMANCE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
