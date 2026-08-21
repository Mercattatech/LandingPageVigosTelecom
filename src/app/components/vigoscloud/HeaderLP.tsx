import { useEffect, useState } from "react";
import vigosLogo from "../../../assets/vigos-logo.png";

export function HeaderLP() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`SP ${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060A10]/70 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer flex-shrink-0"
        >
          <img 
            src={vigosLogo} 
            alt="Vigos Telecom" 
            className="h-8 sm:h-10 w-auto object-contain filter brightness-110 drop-shadow-md"
          />
        </div>

        {/* Center: Minimalist Navigation Links (Visible on large screens, spaced perfectly) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
          <button 
            onClick={() => handleScrollTo("pain-points")} 
            className="hover:text-[#9ACB3B] transition-colors cursor-pointer"
          >
            Desafios
          </button>
          <button 
            onClick={() => handleScrollTo("showcase")} 
            className="hover:text-[#9ACB3B] transition-colors cursor-pointer"
          >
            VigosCloud
          </button>
          <button 
            onClick={() => handleScrollTo("benefits")} 
            className="hover:text-[#9ACB3B] transition-colors cursor-pointer"
          >
            Benefícios
          </button>
          <button 
            onClick={() => handleScrollTo("differentials")} 
            className="hover:text-[#9ACB3B] transition-colors cursor-pointer"
          >
            Diferenciais
          </button>
          <button 
            onClick={() => handleScrollTo("clients")} 
            className="hover:text-[#9ACB3B] transition-colors cursor-pointer"
          >
            Clientes
          </button>
        </nav>

        {/* Right: Clock & High-Contrast CTA Button */}
        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
          {/* Real-time Clock */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-white/60 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9ACB3B] animate-pulse" />
            <span>{time || "SP 12:49:00"}</span>
          </div>

          {/* Studio Neon CTA Button */}
          <button
            onClick={() => handleScrollTo("formulario-contato")}
            className="px-4 sm:px-6 py-2.5 rounded-none font-mono text-xs font-black uppercase tracking-wider transition-all duration-300 hover:brightness-110 active:scale-95 shadow-[0_0_25px_rgba(154,203,59,0.4)] cursor-pointer"
            style={{
              backgroundColor: "var(--vigos-green-accent)",
              color: "#070A0F"
            }}
          >
            Solicitar Proposta
          </button>
        </div>

      </div>
    </header>
  );
}
