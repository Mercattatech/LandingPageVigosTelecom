import { Send, Shield, Phone, Mail, MessageCircle, CheckCircle2, Clock, Building, User, Briefcase, Users2, Terminal } from "lucide-react";
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
    extensions: "1 a 10 ramais",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead capturado no formulário dedicado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        role: "",
        whatsapp: "",
        email: "",
        extensions: "1 a 10 ramais",
        message: ""
      });
      setSubmitted(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5514991234567?text=Olá! Gostaria de falar diretamente com um consultor comercial da Vigos.", "_blank");
  };

  return (
    <section id="formulario-contato" className="py-28 bg-[#05080E] relative overflow-hidden text-white border-t border-white/10">
      {/* Anchor */}
      <div id="final-form" className="absolute -top-10" />

      {/* Glow Effects */}
      <div 
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-blue-primary)" }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "var(--vigos-green-accent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9ACB3B] mb-3 px-3 py-1 bg-[#9ACB3B]/10 border border-[#9ACB3B]/30">
            <Terminal className="w-4 h-4 text-[#9ACB3B]" />
            Atendimento Consultivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Solicite um diagnóstico gratuito para sua empresa
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Preencha os campos abaixo e nosso time técnico analisará sua topologia para propor a solução ideal.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Trust & Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Image Box */}
            <div className="relative border border-white/20 overflow-hidden shadow-2xl group">
              <img 
                src={nocImage} 
                alt="Equipe Vigos - Suporte Técnico Especializado NOC"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Badge 24/7 Floating */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-between font-mono">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#9ACB3B]" />
                  <div>
                    <div className="text-xs text-white/60">SUPORTE TÉCNICO</div>
                    <div className="text-sm font-bold text-white">NOC 24/7 Ativo</div>
                  </div>
                </div>
                <span className="text-xs text-[#9ACB3B] font-bold">100% PRÓPRIO</span>
              </div>
            </div>

            {/* Checklist Box */}
            <div className="p-6 sm:p-8 bg-[#0C121E]/90 border border-white/10 space-y-4">
              <h4 className="font-bold text-white text-base font-mono uppercase tracking-wider">
                O que você recebe no diagnóstico:
              </h4>
              
              <ul className="space-y-3 font-sans text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9ACB3B] flex-shrink-0 mt-0.5" />
                  <span><strong>Auditoria de custos</strong> da sua fatura e telefonia atual</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9ACB3B] flex-shrink-0 mt-0.5" />
                  <span><strong>Demonstração guiada ao vivo</strong> da plataforma VigosCloud</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9ACB3B] flex-shrink-0 mt-0.5" />
                  <span><strong>Proposta comercial sob medida</strong> sem taxa oculta de instalação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#9ACB3B] flex-shrink-0 mt-0.5" />
                  <span><strong>Retorno comercial ágil</strong> em até 15 minutos em horário comercial</span>
                </li>
              </ul>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-white/10 font-mono">
                <p className="text-xs text-gray-400 mb-3">Deseja atendimento imediato?</p>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3.5 bg-white/5 border border-emerald-500/30 text-emerald-400 font-bold hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chamar Consultor no WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right: Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#0C121E] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="mb-8 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <span className="text-xs text-white/50 tracking-widest uppercase">// FORM_CADASTRO</span>
                  <span className="text-xs text-[#9ACB3B] tracking-wider">STATUS: PRONTO</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Dados para Contato & Proposta
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-16 h-16 bg-[#9ACB3B]/20 text-[#9ACB3B] mx-auto flex items-center justify-center border border-[#9ACB3B]/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">Contato Recebido com Sucesso!</h4>
                  <p className="text-xs text-gray-400 max-w-md mx-auto font-sans leading-relaxed">
                    Nossa equipe técnica e comercial já foi notificada. Entraremos em contato com você em breve.
                  </p>
                  <div className="pt-4">
                    <span className="text-[11px] font-mono font-bold px-4 py-2 bg-[#9ACB3B]/10 text-[#9ACB3B] border border-[#9ACB3B]/30 tracking-widest">
                      TRANS_ID: VIGOS_{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#9ACB3B]" /> Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ex: Carlos Mendes"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#9ACB3B]" /> Nome da Empresa *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Ex: Minha Empresa S.A."
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="h-12 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp & Corporate Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="whatsapp" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#9ACB3B]" /> WhatsApp com DDD *
                      </Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="Ex: (14) 99123-4567"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="h-12 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#9ACB3B]" /> E-mail Corporativo *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ex: carlos@empresa.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Row 3: Role & Number of Extensions */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="role" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#9ACB3B]" /> Cargo / Função
                      </Label>
                      <Input
                        id="role"
                        name="role"
                        placeholder="Ex: Diretor de TI, Gerente de Operações"
                        value={formData.role}
                        onChange={handleChange}
                        className="h-12 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="extensions" className="text-xs font-mono uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
                        <Users2 className="w-3.5 h-3.5 text-[#9ACB3B]" /> Estimativa de Ramais
                      </Label>
                      <select
                        id="extensions"
                        name="extensions"
                        value={formData.extensions}
                        onChange={handleChange}
                        className="h-12 w-full px-3 py-2 bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] focus:outline-none rounded-none text-sm text-white font-sans transition-colors cursor-pointer"
                      >
                        <option value="1 a 10 ramais" className="bg-[#0C121E]">1 a 10 ramais</option>
                        <option value="11 a 30 ramais" className="bg-[#0C121E]">11 a 30 ramais</option>
                        <option value="31 a 100 ramais" className="bg-[#0C121E]">31 a 100 ramais</option>
                        <option value="Mais de 100 ramais" className="bg-[#0C121E]">Mais de 100 ramais</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-gray-300">
                      Mensagem / Necessidade Principal (Opcional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Descreva brevemente suas necessidades de telefonia, filiais ou integrações..."
                      className="resize-none bg-[#060A10] border border-white/20 focus:border-[#9ACB3B] rounded-none text-sm text-white placeholder:text-gray-600 transition-colors font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full rounded-none py-6 h-auto font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:brightness-110 shadow-[0_0_35px_rgba(154,203,59,0.35)] cursor-pointer flex items-center justify-center gap-3"
                    style={{ 
                      backgroundColor: "var(--vigos-green-accent)",
                      color: "#070A0F",
                      border: "none"
                    }}
                  >
                    <span>Enviar Solicitação de Diagnóstico</span>
                    <Send className="w-4 h-4" />
                  </Button>

                  {/* LGPD Security Badge */}
                  <p className="text-xs text-gray-400 flex items-center justify-center gap-2 pt-2 text-center font-mono">
                    <Shield className="h-3.5 w-3.5 text-[#9ACB3B] flex-shrink-0" />
                    <span>Dados 100% protegidos pela LGPD. Sem spam comercial.</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}