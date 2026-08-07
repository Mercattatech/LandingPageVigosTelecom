import { Phone, Send, Award, Users, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import vigosLogo from "figma:asset/ac4dbebbc389b3a989fdeb433304f09f7ea0026c.png";
import vigosImage from "../../../imports/IMG_2128.png";

export function HeroLPSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead capturado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", company: "", whatsapp: "", email: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Tech Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhY2VudGVyJTIwbmV0d29yayUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3MTg1MTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          filter: 'blur(3px) brightness(0.4)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(135deg, var(--vigos-blue-deep) 0%, var(--vigos-blue-dark) 50%, var(--vigos-blue-primary) 100%)`,
          opacity: 0.95
        }} 
      />

      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="techPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1.5" fill="white" opacity="0.3"/>
            <line x1="50" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="50" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#techPattern)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headlines & Trust Signals */}
          <div className="text-white">
            
            
            <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
              Sua comunicação precisa acompanhar o ritmo do seu negócio
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              VigosCloud: PABX em nuvem com relatórios personalizados, integração com CRM e ERP, e controle total da sua operação
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'var(--vigos-tech-lines)' }}>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8" style={{ color: 'var(--vigos-green-accent)' }} />
                <div>
                  <div className="text-2xl">15+</div>
                  <div className="text-sm opacity-75">anos de experiência</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8" style={{ color: 'var(--vigos-green-accent)' }} />
                <div>
                  <div className="text-2xl">600+</div>
                  <div className="text-sm opacity-75">clientes ativos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8" style={{ color: 'var(--vigos-green-accent)' }} />
                <div>
                  <div className="text-2xl">1.898</div>
                  <div className="text-sm opacity-75">projetos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div>
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{
                border: '2px solid var(--vigos-tech-lines)'
              }}
            >
              <img
                src={vigosImage}
                alt="Vigos Soluções em Telecomunicações"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}