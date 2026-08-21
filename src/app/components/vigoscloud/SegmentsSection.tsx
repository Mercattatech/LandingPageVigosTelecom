import { Building2, HardHat, FileText, Home, ArrowUpRight } from "lucide-react";

const segments = [
  {
    icon: Building2,
    code: "SEC_01",
    title: "Empresas, Indústrias e Comércio",
    description: "Comunicação corporativa unificada, gestão de múltiplos ramais e controle de atendimento para pequenas, médias e grandes empresas."
  },
  {
    icon: HardHat,
    code: "SEC_02",
    title: "Projetos de Infraestrutura e Redes",
    description: "Engenharia de telecomunicações, cabeamento estruturado, interligação de filiais (VPN/MPLS) e links dedicados de alta disponibilidade."
  },
  {
    icon: FileText,
    code: "SEC_03",
    title: "Consultoria e Auditoria em Telecom",
    description: "Diagnóstico completo da sua conta e infraestrutura atual para redução de custos e modernização tecnológica sem desperdício."
  },
  {
    icon: Home,
    code: "SEC_04",
    title: "Condomínios e Empreendimentos",
    description: "Interfonia em nuvem, controle de acesso e conectividade por fibra óptica para grandes condomínios residenciais e empresariais."
  }
];

export function SegmentsSection() {
  return (
    <section className="py-28 bg-[#05080E] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Lighting */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "var(--vigos-blue-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9ACB3B]" />
              Verticais de Atuação
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Soluções sob medida para o seu setor
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md font-sans">
            Experiência comprovada em múltiplos segmentos da economia com arquiteturas personalizadas.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-[#0C121E]/90 border border-white/10 hover:border-[#9ACB3B]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#9ACB3B] group-hover:border-[#9ACB3B]/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-white/40">
                      <span>{segment.code}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#9ACB3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {segment.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {segment.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[11px] text-white/30 flex items-center justify-between">
                  <span>DISPONIBILIDADE</span>
                  <span className="text-[#9ACB3B]">ALTA PERFORMANCE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
