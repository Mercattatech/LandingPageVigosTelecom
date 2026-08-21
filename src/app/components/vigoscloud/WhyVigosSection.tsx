import { UserCheck, Puzzle, Layers2, Headphones, Zap, ShieldAlert, Check } from "lucide-react";
import vigosTeamImage from "figma:asset/7c1dbe1357054c60561005addf937f128206ce72.png";

const reasons = [
  {
    icon: UserCheck,
    title: "Atendimento Consultivo Especializado",
    description: "Análise técnica minuciosa da sua operação para propor a topologia e quantidade ideal de ramais sem custos supérfluos."
  },
  {
    icon: Puzzle,
    title: "Projetos Sob Medida",
    description: "Configuração personalizada de rotas, transbordo de chamadas, URA ramificada e regras de negócio para sua empresa."
  },
  {
    icon: Layers2,
    title: "Integração Completa de Sistemas",
    description: "Conexão nativa com seu CRM, ERP, ferramentas de Helpdesk e plataformas proprietárias via API e Webhooks."
  },
  {
    icon: Headphones,
    title: "Suporte NOC 24/7 com Time Próprio",
    description: "Monitoramento contínuo da qualidade das rotas e suporte humanizado direto com engenheiros de telecomunicações."
  },
  {
    icon: Zap,
    title: "Implementação Ágil Sem Downtime",
    description: "Migração suave da sua telefonia atual para o VigosCloud sem interrupções nas linhas comerciais da sua empresa."
  }
];

export function WhyVigosSection() {
  return (
    <section id="differentials" className="py-28 bg-[#05080E] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Glow */}
      <div 
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
            <ShieldAlert className="w-4 h-4 text-[#9ACB3B]" />
            Diferenciais de Engenharia
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Por que líderes de tecnologia escolhem a Vigos
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans">
            Muito mais do que uma operadora de telefonia: entregamos estabilidade de missão crítica e inteligência operacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Image with Studio Glass Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
              <img 
                src={vigosTeamImage} 
                alt="Equipe Especialista Vigos Telecom"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9ACB3B] animate-pulse" />
                  <div>
                    <div className="text-xs text-white/60">CORPO TÉCNICO</div>
                    <div className="text-sm font-bold text-white">Especialistas Certificados</div>
                  </div>
                </div>
                <span className="text-xs text-[#9ACB3B] font-bold">15+ ANOS</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Differentials */}
          <div className="lg:col-span-6 space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="p-5 bg-[#0C121E]/80 border border-white/10 hover:border-[#9ACB3B]/60 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="p-2.5 bg-white/5 border border-white/10 text-white/80 group-hover:text-[#9ACB3B] group-hover:border-[#9ACB3B]/40 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1 tracking-tight">
                      {reason.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}