import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Aqui você pode integrar com seu serviço de newsletter
      console.log("Email inscrito:", email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--vigos-green)', opacity: 0.15 }}
            >
              <Mail className="w-8 h-8" style={{ color: 'var(--vigos-green)' }} />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--vigos-blue-dark)' }}>
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossa newsletter e receba dicas exclusivas, novidades sobre tecnologia e ofertas especiais diretamente em seu e-mail
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 border-2"
              style={{ borderColor: 'var(--vigos-blue-light)' }}
            />
            <Button 
              type="submit"
              size="lg"
              className="h-12 px-8 whitespace-nowrap"
              style={{ 
                backgroundColor: submitted ? 'var(--vigos-green)' : 'var(--vigos-blue)', 
                color: 'white',
                border: 'none'
              }}
            >
              {submitted ? (
                <>Inscrito! ✓</>
              ) : (
                <>
                  Inscreva-se
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
