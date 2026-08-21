import { AlertCircle, BarChart3, TrendingDown, Unplug, ArrowDownRight } from "lucide-react";

const painPoints = [
  {
    id: "01",
    icon: AlertCircle,
    title: "Atendimento Sem Padrão",
    description: "Ligações perdidas, falta de gravação e ausência de controle sobre a qualidade do atendimento ao cliente."
  },
  {
    id: "02",
    icon: BarChart3,
    title: "Decisões Sem Dados",
    description: "Falta de relatórios em tempo real e dashboards para monitorar a produtividade e o tempo médio de resposta."
  },
  {
    id: "03",
    icon: TrendingDown,
    title: "Infraestrutura Rígida",
    description: "Sistemas analógicos ultrapassados que travam o crescimento da sua operação e geram custos de manutenção."
  },
  {
    id: "04",
    icon: Unplug,
    title: "Sistemas Desconectados",
    description: "Telefonia isolada que não conversa com o CRM, ERP e ferramentas comerciais já utilizadas pela equipe."
  }
];

export function PainPointsSection() {
  return (
    <section id="pain-points" className="py-28 bg-[#070B12] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Tech Elements */}
      <div 
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />
      <div 
        className="absolute top-1/2 -right-48 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "var(--vigos-blue-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9ACB3B]" />
              Diagnóstico Operacional
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Gargalos que travam o seu crescimento
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md font-sans">
            Comunicação corporativa ineficiente custa clientes, gera retrabalho e prejudica a tomada de decisões da diretoria.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.id}
                className="group relative p-6 sm:p-8 bg-[#0C121E]/90 border border-white/10 hover:border-[#9ACB3B]/60 transition-all duration-500 rounded-none flex flex-col justify-between"
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#9ACB3B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Number & Arrow */}
                  <div className="flex items-center justify-between font-mono text-xs text-white/40 mb-8">
                    <span className="text-[#9ACB3B] font-bold">{pain.id}</span>
                    <ArrowDownRight className="w-4 h-4 text-white/30 group-hover:text-[#9ACB3B] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#9ACB3B] group-hover:border-[#9ACB3B]/40 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {pain.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {pain.description}
                  </p>
                </div>

                {/* Bottom Tech Line */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/30">
                  <span>IMPACTO OPERACIONAL</span>
                  <span className="text-red-400 font-semibold">CRÍTICO</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
