import { Award, Users, Briefcase, MapPin } from "lucide-react";
import client1Logo from "figma:asset/b58c156cd623b0d67b0492e5b58b0c81cdcc9e65.png";
import client2Logo from "figma:asset/53479e5748e9005a7761cd25a37f372d31de8dcf.png";
import client3Logo from "figma:asset/a7a5f166863b837f9b63177057359cf398fa2414.png";
import client4Logo from "figma:asset/bada4999e50fa2b4426f128edba969b53b74059b.png";
import client5Logo from "figma:asset/ac700e2fd1e1ae3b927735834c5c98a3eec3e48b.png";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "anos de experiência em telecomunicações"
  },
  {
    icon: Users,
    value: "600+",
    label: "clientes ativos confiam na Vigos"
  },
  {
    icon: Briefcase,
    value: "1.898",
    label: "projetos implementados com sucesso"
  },
  {
    icon: MapPin,
    value: "100%",
    label: "cobertura em todo o estado de São Paulo"
  }
];

export function SocialProofSection() {
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, var(--vigos-blue-primary) 0%, var(--vigos-blue-dark) 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'var(--vigos-green-accent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: 'var(--vigos-green-accent)' }} />

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--vigos-tech-lines) 1px, transparent 1px), linear-gradient(90deg, var(--vigos-tech-lines) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4 text-white">
            Autoridade e experiência comprovadas
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Números que refletem nosso compromisso com excelência e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                  style={{ 
                    background: 'rgba(154, 203, 59, 0.2)',
                    border: '2px solid var(--vigos-green-accent)',
                    boxShadow: '0 0 20px rgba(154, 203, 59, 0.3)'
                  }}
                >
                  <Icon className="h-10 w-10" style={{ color: 'var(--vigos-green-accent)' }} />
                </div>

                <div 
                  className="text-6xl lg:text-7xl mb-3"
                  style={{ 
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #ffffff 0%, var(--vigos-green-accent) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(154, 203, 59, 0.5), 0 0 60px rgba(154, 203, 59, 0.3)',
                    filter: 'drop-shadow(0 0 10px rgba(154, 203, 59, 0.4))'
                  }}
                >
                  {stat.value}
                </div>

                <div className="text-lg text-white/80 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Logos Section (Placeholder) */}
        <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--vigos-tech-lines)' }}>
          <p className="text-center text-white/70 mb-8 text-lg">
            Empresas que confiam na Vigos Soluções
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Cliente 1 */}
            <div 
              className="h-64 rounded-lg flex items-center justify-center p-12 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <img 
                src={client1Logo} 
                alt="Cliente 1" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Cliente 2 */}
            <div 
              className="h-64 rounded-lg flex items-center justify-center p-12 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <img 
                src={client2Logo} 
                alt="Cliente 2" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Cliente 3 */}
            <div 
              className="h-64 rounded-lg flex items-center justify-center p-12 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <img 
                src={client3Logo} 
                alt="Cliente 3" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Cliente 4 */}
            <div 
              className="h-64 rounded-lg flex items-center justify-center p-12 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <img 
                src={client4Logo} 
                alt="Cliente 4" 
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Cliente 5 */}
            <div 
              className="h-64 rounded-lg flex items-center justify-center p-12 transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <img 
                src={client5Logo} 
                alt="Cliente 5" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}