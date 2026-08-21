import { useState } from "react";
import { ArrowRight, Pause, Play, Volume2, VolumeX, Sparkles, CheckCircle2 } from "lucide-react";

// Official WhatsApp Vector Icon
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.276-.1-.476-.15-.676.15-.2.301-.776.98-.952 1.181-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.201.05-.376-.025-.526-.075-.15-.676-1.63-0.927-2.232-.244-.587-.492-.507-.676-.516l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.228 3.11.15.201 2.122 3.24 5.14 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.781-.728 2.032-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.351z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.353A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.136 8.136 0 01-4.32-1.232l-.31-.188-2.91.803.803-2.836-.206-.328A8.148 8.148 0 013.818 12c0-4.51 3.672-8.182 8.182-8.182 4.51 0 8.182 3.672 8.182 8.182 0 4.51-3.672 8.182-8.182 8.182z" />
    </svg>
  );
}

export function HeroLPSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("formulario-contato") || document.getElementById("final-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5514991046715?text=Olá! Gostaria de falar com um especialista sobre o VigosCloud.", "_blank");
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full min-h-screen lg:min-h-[750px] overflow-hidden bg-black flex items-center pt-24 pb-16">
      
      {/* Full-Screen Background Video in Loop with Cinematic Dark Filter */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src={`https://iframe.mediadelivery.net/embed/602706/a4cf74e4-60fe-4282-8068-bfa894aee905?autoplay=true&loop=true&muted=${isMuted ? "true" : "false"}&preload=true&responsive=true`}
          loading="eager"
          title="Vigos Telecom Hero Video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] object-cover pointer-events-none transition-all duration-700"
          style={{ 
            border: "none",
            filter: "brightness(0.72) contrast(1.1)"
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen={true}
        />
      </div>

      {/* Modern Gradient Overlays for Extreme Contrast and Readability */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(135deg, rgba(6, 10, 16, 0.88) 0%, rgba(6, 10, 16, 0.65) 50%, rgba(6, 10, 16, 0.85) 100%)"
        }}
      />

      {/* Ambient Neon Accent Glow */}
      <div 
        className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none z-[2]"
        style={{ background: "var(--vigos-green-accent)" }}
      />

      {/* Main Hero Content: Chamada + Call to Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0C121E]/90 border border-[#9ACB3B]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9ACB3B] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#9ACB3B] font-bold">
              VigosCloud • Telefonia em Nuvem B2B
            </span>
          </div>

          {/* Chamada Principal (Headline) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Sua comunicação precisa acompanhar o{" "}
            <span 
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #ffffff 40%, var(--vigos-green-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ritmo do seu negócio.
            </span>
          </h1>

          {/* Subchamada */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-sans max-w-2xl">
            PABX 100% em nuvem com relatórios em tempo real, gravação de chamadas, integração nativa com CRM/ERP e controle operacional absoluto para sua empresa.
          </p>

          {/* Quick Feature Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/15 text-gray-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B]" /> URA Inteligente & Gravação
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/15 text-gray-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B]" /> Integração Nativa CRM/ERP
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/15 text-gray-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9ACB3B]" /> Suporte Técnico NOC 24/7
            </span>
          </div>

          {/* Buttons: Primary Form CTA + WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono">
            {/* Primary Call to Action Button */}
            <button
              onClick={handleScrollToForm}
              className="px-8 py-4 sm:py-5 bg-[#9ACB3B] text-[#070A0F] text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_35px_rgba(154,203,59,0.5)] active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="px-6 py-4 sm:py-5 bg-black/60 backdrop-blur-md border border-white/25 text-white hover:border-[#25D366] hover:text-[#25D366] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Bottom Video Controls */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label="Pausar ou Reproduzir Vídeo"
          className="w-10 h-10 bg-black/70 backdrop-blur-md border border-white/20 text-white hover:border-[#9ACB3B] hover:text-[#9ACB3B] transition-colors flex items-center justify-center cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          aria-label="Mutar ou Desmutar Áudio"
          className="h-10 px-3 bg-black/70 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-semibold uppercase tracking-widest hover:border-[#9ACB3B] hover:text-[#9ACB3B] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#9ACB3B]" />}
          <span>{isMuted ? "MUTE" : "AUDIO"}</span>
        </button>
      </div>

    </section>
  );
}