import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com seu serviço de envio de formulário
    console.log("Formulário enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Fale Conosco!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou quer saber mais sobre nossas soluções? Preencha o formulário abaixo e nossa equipe entrará em contato
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nome</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="h-12 border-2"
                style={{ borderColor: 'var(--vigos-blue-light)' }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="h-12 border-2"
                style={{ borderColor: 'var(--vigos-blue-light)' }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 border-2"
              style={{ borderColor: 'var(--vigos-blue-light)' }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="resize-none border-2"
              style={{ borderColor: 'var(--vigos-blue-light)' }}
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full md:w-auto text-lg px-12 py-6 h-auto"
            style={{ 
              backgroundColor: submitted ? 'var(--vigos-green)' : 'var(--vigos-blue)', 
              color: 'white',
              border: 'none'
            }}
          >
            {submitted ? (
              <>Mensagem Enviada! ✓</>
            ) : (
              <>
                Enviar
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
