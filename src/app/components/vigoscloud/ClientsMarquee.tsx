import logo1 from "../../../assets/client-logo-1.png";
import logo2 from "../../../assets/client-logo-2.png";
import logo3 from "../../../assets/client-logo-3.png";
import logo4 from "../../../assets/client-logo-4.png";
import logo5 from "../../../assets/client-logo-5.png";

const clients = [
  { name: "Cliente 1", src: logo1 },
  { name: "Cliente 2", src: logo2 },
  { name: "Cliente 3", src: logo3 },
  { name: "Cliente 4", src: logo4 },
  { name: "Cliente 5", src: logo5 },
];

// Triplicate for a seamless endless loop
const loopList = [...clients, ...clients, ...clients];

export function ClientsMarquee() {
  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden bg-[#060A10]"
    >
      {/* Neon accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9ACB3B]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9ACB3B]/30 to-transparent" />

      {/* Section label */}
      <p className="text-center pt-8 pb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 select-none">
        Empresas que operam com a tecnologia Vigos Telecom
      </p>

      {/* Edge fade gradients */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10"
        style={{ background: "linear-gradient(to right, #060A10, transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10"
        style={{ background: "linear-gradient(to left, #060A10, transparent)" }}
      />

      {/* Scrolling Track */}
      <div className="overflow-hidden pb-10">
        <div
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "logo-marquee 30s linear infinite",
            willChange: "transform",
          }}
        >
          {loopList.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-14 sm:mx-20"
              style={{ height: 52 }}
            >
              <img
                src={client.src}
                alt={client.name}
                draggable={false}
                loading="lazy"
                className="object-contain select-none"
                style={{
                  maxHeight: 44,
                  maxWidth: 160,
                  width: "auto",
                  height: "100%",
                  // Keep white logos visible on dark background, mute slightly
                  opacity: 0.55,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = "1";
                  el.style.transform = "scale(1.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = "0.55";
                  el.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logo-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
