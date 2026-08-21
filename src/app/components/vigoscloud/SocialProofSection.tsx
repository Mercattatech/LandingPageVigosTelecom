import { Award, Users, Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import client1Logo from "figma:asset/b58c156cd623b0d67b0492e5b58b0c81cdcc9e65.png";
import client2Logo from "figma:asset/53479e5748e9005a7761cd25a37f372d31de8dcf.png";
import client3Logo from "figma:asset/a7a5f166863b837f9b63177057359cf398fa2414.png";
import client4Logo from "figma:asset/bada4999e50fa2b4426f128edba969b53b74059b.png";
import client5Logo from "figma:asset/ac700e2fd1e1ae3b927735834c5c98a3eec3e48b.png";

const stats = [
  {
    icon: Award,
    value: "15+",
    unit: "ANOS",
    label: "Experiência sólida no mercado de telecomunicações"
  },
  {
    icon: Users,
    value: "600+",
    unit: "EMPRESAS",
    label: "Clientes ativos confiando em nossas soluções"
  },
  {
    icon: Briefcase,
    value: "1.898+",
    unit: "PROJETOS",
    label: "Implementações de infraestrutura e PABX entregues"
  },
  {
    icon: MapPin,
    value: "100%",
    unit: "COBERTURA",
    label: "Atendimento dedicado em todo o estado de SP"
  }
];

const clients = [
  { logo: client1Logo, name: "Cliente Corporativo 1" },
  { logo: client2Logo, name: "Cliente Corporativo 2" },
  { logo: client3Logo, name: "Cliente Corporativo 3" },
  { logo: client4Logo, name: "Cliente Corporativo 4" },
  { logo: client5Logo, name: "Cliente Corporativo 5" }
];

export function SocialProofSection() {
  return (
    <section id="clients" className="py-28 bg-[#070B12] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Lighting */}
      <div 
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9ACB3B]" />
              Autoridade & Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Resultados validados pelo mercado
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md font-sans">
            Números que comprovam nossa dedicação técnica, estabilidade operacional e compromisso com o cliente.
          </p>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-8 bg-[#0C121E]/90 border border-white/10 hover:border-[#9ACB3B]/60 transition-all duration-300 group"
            >
              <div className="font-mono text-[11px] text-[#9ACB3B] tracking-widest uppercase mb-2">
                {stat.unit}
              </div>

              <div 
                className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight group-hover:text-[#9ACB3B] transition-colors"
                style={{
                  textShadow: "0 0 30px rgba(154, 203, 59, 0.3)"
                }}
              >
                {stat.value}
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel/Grid */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-white/50 mb-10">
            Empresas que operam com a tecnologia Vigos Telecom:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client, i) => (
              <div 
                key={i}
                className="h-24 sm:h-28 p-4 bg-[#0C121E]/60 border border-white/10 hover:border-[#9ACB3B]/50 transition-all duration-300 flex items-center justify-center group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-12 sm:max-h-14 max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}