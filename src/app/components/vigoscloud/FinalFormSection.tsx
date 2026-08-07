import { Send, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";
import nocImage from "figma:asset/f9df24f99a11a15a2f07a6da62cc3fe0fe9ad036.png";

export function FinalFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    whatsapp: "",
    email: "",
    employees: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Diagnóstico solicitado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", company: "", role: "", whatsapp: "", email: "", employees: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="final-form" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div 
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '2px solid var(--vigos-gray-light)' }}
            >
              <img 
                src={nocImage} 
                alt="Equipe Vigos - NOC e Suporte"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Trust Badge */}
            <div 
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl backdrop-blur-md"
              style={{ 
                background: 'rgba(0, 84, 166, 0.95)',
                border: '2px solid var(--vigos-green-accent)'
              }}
            >
              <div className="flex items-center gap-3 text-white">
                <Shield className="h-10 w-10" style={{ color: 'var(--vigos-green-accent)' }} />
                <div>
                  <div className="text-xl">Suporte 24/7</div>
                  <div className="text-sm opacity-80">Equipe especializada</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div 
              className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl border-2 -z-10"
              style={{ borderColor: 'var(--vigos-green-accent)', opacity: 0.3 }}
            />
          </div>

          {/* Right: Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
                Solicite um diagnóstico gratuito
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades e propor a melhor solução
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="role">Cargo</Label>
                  <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail corporativo *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">Quantidade de colaboradores</Label>
                  <Input
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    placeholder="Ex: 50"
                    className="h-12 border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos sobre suas necessidades de comunicação..."
                  className="resize-none border-2 focus:border-[var(--vigos-green-accent)] transition-colors"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full md:w-auto rounded-full px-12 py-7 h-auto text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ 
                  backgroundColor: submitted ? 'var(--vigos-green-accent)' : 'var(--vigos-blue-primary)',
                  color: 'white',
                  border: 'none'
                }}
              >
                {submitted ? (
                  <>✓ Diagnóstico solicitado com sucesso!</>
                ) : (
                  <>
                    Quero um diagnóstico
                    <Send className="ml-2 h-6 w-6" />
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 flex items-center gap-2 mt-4">
                <Shield className="h-4 w-4" />
                Seus dados estão protegidos. Sem spam. Retorno comercial em até 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}