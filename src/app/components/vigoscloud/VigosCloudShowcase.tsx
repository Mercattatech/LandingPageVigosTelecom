import { Cloud, BarChart, Layers, Headphones, Zap, CheckCircle2, PhoneCall, Shield, Activity, ArrowRight, Smartphone, Database, Terminal } from "lucide-react";
import { Button } from "../ui/button";

const benefits = [
  { icon: Cloud, title: "PABX 100% em Nuvem", text: "Sem infraestrutura física local, servidores caros ou manutenções demoradas." },
  { icon: BarChart, title: "Analytics em Tempo Real", text: "Monitore filas de atendimento, tempo médio de espera e volume de chamadas." },
  { icon: Layers, title: "Integração Nativa", text: "Conecte nativamente ao seu CRM, ERP, WhatsApp e plataformas comerciais." },
  { icon: Headphones, title: "Suporte Especializado 24/7", text: "Atendimento técnico humanizado e suporte direto com especialistas." },
  { icon: Smartphone, title: "Softphone & Mobilidade", text: "Ramais disponíveis no computador, aplicativo smartphone ou aparelho IP." },
  { icon: Database, title: "Gravação em Nuvem", text: "Armazenamento seguro, histórico auditável e conformidade total com a LGPD." }
];

export function VigosCloudShowcase() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("formulario-contato") || document.getElementById("final-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="showcase" className="py-28 bg-[#05080E] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Glow Effects */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-blue-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content & Architecture Matrix */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
                <Terminal className="w-4 h-4 text-[#9ACB3B]" />
                Arquitetura de Alta Performance
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                VigosCloud: Telefonia em Nuvem Inteligente
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              Centralize sua comunicação corporativa em uma plataforma robusta, segura e escalável, desenvolvida para entregar máxima produtividade para sua equipe.
            </p>

            {/* Benefits Matrix */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="p-5 bg-[#0C121E]/80 border border-white/10 hover:border-[#9ACB3B]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/5 border border-white/10 text-white/80 group-hover:text-[#9ACB3B] group-hover:border-[#9ACB3B]/40 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-white text-sm tracking-tight">{benefit.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{benefit.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Button
                onClick={handleScrollToForm}
                size="lg"
                className="h-14 px-8 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_30px_rgba(154,203,59,0.35)] flex items-center gap-3 cursor-pointer"
                style={{
                  backgroundColor: "var(--vigos-green-accent)",
                  color: "#070A0F"
                }}
              >
                <span>Solicitar Apresentação Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Command Center Console Preview */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 bg-[#090E17] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Console Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6 font-mono">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <span className="w-2 h-2 rounded-full bg-[#9ACB3B] animate-pulse" />
                  <span className="font-bold tracking-widest text-white">VIGOSCLOUD TELEMETRY // NOC</span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 bg-[#9ACB3B]/10 text-[#9ACB3B] border border-[#9ACB3B]/30 tracking-widest">
                  SYS_ONLINE
                </span>
              </div>

              {/* Real-time Telemetry Metrics */}
              <div className="space-y-4 font-mono">
                
                {/* Metric 1 */}
                <div className="p-4 bg-[#0F1726]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase">Chamadas Simultâneas</div>
                      <div className="text-base font-bold text-white">48 Ativas // 0 Fila</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#9ACB3B] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> 99.99%
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-4 bg-[#0F1726]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#9ACB3B]/10 border border-[#9ACB3B]/20 text-[#9ACB3B]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase">Latência de Voz (Jitter)</div>
                      <div className="text-base font-bold text-white">&lt; 12ms // HD Audio</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#9ACB3B] font-semibold">Opus Codec</span>
                </div>

                {/* Metric 3 */}
                <div className="p-4 bg-[#0F1726]/90 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase">Criptografia & Gravação</div>
                      <div className="text-base font-bold text-white">TLS / SRTP 256-bit</div>
                    </div>
                  </div>
                  <span className="text-xs text-purple-300 font-semibold">LGPD Válida</span>
                </div>

              </div>

              {/* Protocol Spec Checklist */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B] flex-shrink-0" />
                  <span>URA Humanizada com Roteamento Dinâmico por IA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B] flex-shrink-0" />
                  <span>Webhooks e APIs RESTful para integração com CRM/ERP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B] flex-shrink-0" />
                  <span>Distribuição Automática de Chamadas (DAC) Avançada</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}