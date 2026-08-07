import { Cloud, BarChart, Layers, Headphones, Zap, CheckCircle2, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import backgroundImage from "../../../imports/9cbeab69-a013-4283-a43c-3fd50f08ae6a.png";

const benefits = [
  { icon: Cloud, text: "PABX 100% em nuvem" },
  { icon: BarChart, text: "Relatórios personalizados em tempo real" },
  { icon: Layers, text: "Integração nativa com CRM e ERP" },
  { icon: Headphones, text: "Suporte especializado dedicado" },
  { icon: Zap, text: "Mais controle e produtividade" },
  { icon: CheckCircle2, text: "Implementação rápida e sem burocracia" }
];

export function VigosCloudShowcase() {
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
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(7, 42, 74, 0.92) 0%, rgba(0, 59, 122, 0.90) 100%)'
        }}
      />

      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      {/* Glow Effects */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--vigos-green-accent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--vigos-blue-primary)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
              VigosCloud: comunicação corporativa com controle real
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Uma plataforma completa de comunicação em nuvem que integra telefonia, dados e gestão em um único sistema inteligente
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(154, 203, 59, 0.2)' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: 'var(--vigos-green-accent)' }} />
                    </div>
                    <span className="pt-2">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Lead Form */}
          <div>
            <div
              className="rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.98)',
                border: '1px solid rgba(154, 203, 59, 0.3)',
                boxShadow: '0 0 60px rgba(154, 203, 59, 0.2)'
              }}
            >
              <h3 className="text-2xl lg:text-3xl mb-2" style={{ color: 'var(--vigos-blue-dark)' }}>
                Fale com um especialista
              </h3>
              <p className="text-gray-600 mb-6">
                Descubra como o VigosCloud pode transformar a comunicação da sua empresa
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="whatsapp"
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-mail corporativo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: submitted ? 'var(--vigos-green-accent)' : 'var(--vigos-blue-primary)',
                    color: 'white',
                    border: 'none'
                  }}
                >
                  {submitted ? (
                    <>Recebemos seu contato! ✓</>
                  ) : (
                    <>
                      <Phone className="mr-2 h-5 w-5" />
                      Falar com especialista
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full h-14 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: 'var(--vigos-green-accent)',
                    color: 'var(--vigos-green-accent)'
                  }}
                  onClick={() => {
                    const finalForm = document.getElementById('final-form');
                    finalForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Solicitar diagnóstico
                </Button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                🔒 Seus dados estão seguros. Retorno comercial em até 24h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}