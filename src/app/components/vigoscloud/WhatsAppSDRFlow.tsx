import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle2, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

// Official WhatsApp Vector Icon
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
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

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  timestamp: string;
}

export function WhatsAppSDRFlow() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [showNotificationBubble, setShowNotificationBubble] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState<"name" | "whatsapp" | "need" | "investment" | "confirm" | "completed">("name");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // SDR Form State
  const [sdrData, setSdrData] = useState({
    name: "",
    whatsapp: "",
    need: "",
    investment: "",
    source: "Landing Page Vigos Telecom - SDR Chat Flow",
    submittedAt: ""
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial proactive bubble popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpenedBefore) {
        setShowNotificationBubble(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasOpenedBefore]);

  // Initialize Chat Conversation on first open
  const startConversation = () => {
    setIsOpen(true);
    setShowNotificationBubble(false);
    setHasOpenedBefore(true);

    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "1",
            sender: "bot",
            text: "Olá! Seja bem-vindo à Vigos Telecom 👋\nSou o consultor virtual e vou agilizar seu atendimento.",
            timestamp: getCurrentTime()
          },
          {
            id: "2",
            sender: "bot",
            text: "Para começarmos, qual é o seu Nome Completo?",
            timestamp: getCurrentTime()
          }
        ]);
        setCurrentStep("name");
      }, 700);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };

  // Bot response helper with typing simulation
  const addBotMessage = (text: string, options?: string[], nextStep?: typeof currentStep) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: "bot",
          text,
          options,
          timestamp: getCurrentTime()
        }
      ]);
      if (nextStep) {
        setCurrentStep(nextStep);
      }
    }, 600);
  };

  // Handle Freeform Input Submit (Name, Phone, or Custom Text)
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    // Append User Message
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: "user",
        text,
        timestamp: getCurrentTime()
      }
    ]);
    setInputValue("");

    // Step Machine (No Raw Markdown characters)
    if (currentStep === "name") {
      setSdrData((prev) => ({ ...prev, name: text }));
      addBotMessage(
        `Prazer, ${text}! 🤝\nQual é o seu WhatsApp com DDD para que possamos enviar a proposta?`,
        undefined,
        "whatsapp"
      );
    } else if (currentStep === "whatsapp") {
      setSdrData((prev) => ({ ...prev, whatsapp: text }));
      addBotMessage(
        "Perfeito! Agora me conte: qual é a principal necessidade da sua empresa hoje?",
        [
          "☁️ PABX 100% em Nuvem (VigosCloud)",
          "📉 Redução de custos de telefonia",
          "🎧 Gravação e Gestão de Atendimento",
          "🔗 Integração com CRM / ERP",
          "🌐 Link Dedicado / Infraestrutura",
          "Outro projeto personalizado"
        ],
        "need"
      );
    } else if (currentStep === "need") {
      setSdrData((prev) => ({ ...prev, need: text }));
      addBotMessage(
        "Entendido! Para personalizarmos a melhor proposta técnica, qual é a sua faixa estimada de investimento mensal?",
        [
          "💼 Até R$ 500 / mês",
          "🚀 R$ 500 a R$ 1.500 / mês",
          "🏢 R$ 1.500 a R$ 5.000 / mês",
          "👑 Acima de R$ 5.000 / mês",
          "❓ Preciso de uma avaliação técnica"
        ],
        "investment"
      );
    } else if (currentStep === "investment") {
      setSdrData((prev) => ({ ...prev, investment: text }));
      handleShowConfirmation(sdrData.name, sdrData.whatsapp, sdrData.need, text);
    }
  };

  // Handle Quick Option Click
  const handleOptionClick = (option: string) => {
    // Append User Message
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: "user",
        text: option,
        timestamp: getCurrentTime()
      }
    ]);

    if (currentStep === "need") {
      setSdrData((prev) => ({ ...prev, need: option }));
      addBotMessage(
        "Excelente escolha! Para dimensionarmos a proposta técnica ideal, qual é a sua faixa estimada de investimento mensal?",
        [
          "💼 Até R$ 500 / mês",
          "🚀 R$ 500 a R$ 1.500 / mês",
          "🏢 R$ 1.500 a R$ 5.000 / mês",
          "👑 Acima de R$ 5.000 / mês",
          "❓ Preciso de uma avaliação técnica"
        ],
        "investment"
      );
    } else if (currentStep === "investment") {
      setSdrData((prev) => ({ ...prev, investment: option }));
      handleShowConfirmation(sdrData.name, sdrData.whatsapp, sdrData.need, option);
    }
  };

  // Show clean summary without markdown syntax
  const handleShowConfirmation = (name: string, whatsapp: string, need: string, investment: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: "bot",
          text: `Tudo pronto, ${name || "amigo"}!\n\nResumo da sua solicitação:\n• WhatsApp: ${whatsapp}\n• Necessidade: ${need}\n• Investimento Estimado: ${investment}\n\nClique no botão abaixo para confirmar e iniciar seu atendimento direto no WhatsApp com um especialista da Vigos Telecom!`,
          timestamp: getCurrentTime()
        }
      ]);
      setCurrentStep("confirm");
    }, 700);
  };

  // Final Action: Send to Webhook & Open WhatsApp
  const handleFinalSubmitAndRedirect = async () => {
    setIsSubmitting(true);

    const payload = {
      name: sdrData.name,
      whatsapp: sdrData.whatsapp,
      need: sdrData.need,
      investment_capacity: sdrData.investment,
      source: "Landing Page Vigos Telecom - SDR WhatsApp Flow",
      submitted_at: new Date().toISOString(),
      url: window.location.href
    };

    console.log("Enviando dados SDR para webhook:", payload);

    // 1. Post to Webhook
    try {
      await fetch("https://n8nwebhook.mercattatech.com.br/webhook/mercatta-growth-web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn("Webhook fetch warning (continuing to WhatsApp redirect):", err);
    }

    setIsSubmitting(false);
    setCurrentStep("completed");

    // 2. Format WhatsApp Message and Open Redirect
    const messageText = `Olá! Meu nome é ${sdrData.name}.\nAcabei de preencher o formulário no site da Vigos Telecom:\n• Necessidade: ${sdrData.need}\n• Investimento Estimado: ${sdrData.investment}\n\nGostaria de dar andamento no meu atendimento!`;
    const whatsappUrl = `https://wa.me/5514991046715?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* 1. Proactive Floating Bubble Trigger */}
      {showNotificationBubble && !isOpen && (
        <div 
          onClick={startConversation}
          className="fixed bottom-24 right-6 z-50 max-w-xs p-4 bg-[#0C121E] border border-[#25D366]/40 shadow-2xl rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Consultor Vigos</span>
                <span className="text-[10px] text-gray-400 font-mono">agora</span>
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Olá! 👋 Precisa de um diagnóstico rápido para a telefonia da sua empresa?
              </p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowNotificationBubble(false);
              }}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Floating WhatsApp Icon Button with Official Logo */}
      {!isOpen && (
        <button
          onClick={startConversation}
          aria-label="Abrir Atendimento WhatsApp SDR"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_35px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-md" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-black" />
          </div>
          {/* Ping pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        </button>
      )}

      {/* 3. Floating SDR Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[580px] max-h-[85vh] bg-[#0A101A] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header with Official WhatsApp Branding */}
          <div className="p-4 bg-gradient-to-r from-[#0F1E17] via-[#0C2B1D] to-[#075E54] border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0A101A]" />
              </div>
              <div>
                <div className="font-bold text-sm flex items-center gap-1.5">
                  <span>Vigos Telecom - SDR</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <div className="text-[11px] text-emerald-300/90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • Resposta Imediata</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#060A10]/95 font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 text-xs sm:text-sm leading-relaxed rounded-2xl shadow-md ${
                    msg.sender === "user"
                      ? "bg-[#25D366] text-black font-semibold rounded-br-none"
                      : "bg-[#111A29] text-gray-100 border border-white/10 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Render Option Pills if available */}
                {msg.options && (
                  <div className="mt-2.5 space-y-1.5 w-full max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        disabled={currentStep === "confirm" || currentStep === "completed"}
                        className="w-full text-left p-2.5 bg-[#162236] hover:bg-[#25D366] hover:text-black border border-white/15 hover:border-[#25D366] text-xs text-gray-200 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <span>{opt}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-gray-500 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-[#111A29] border border-white/10 w-fit rounded-2xl rounded-bl-none text-gray-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] ml-1 text-gray-400">Digitando...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Bottom Action Area */}
          <div className="p-3.5 bg-[#0C121E] border-t border-white/10">
            {currentStep === "confirm" ? (
              <button
                onClick={handleFinalSubmitAndRedirect}
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#25D366] text-black font-sans text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl hover:brightness-110 shadow-[0_0_25px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Conectando ao WhatsApp...</span>
                ) : (
                  <>
                    <WhatsAppIcon className="w-5 h-5 text-black" />
                    <span>Iniciar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            ) : currentStep === "completed" ? (
              <div className="text-center py-2 text-xs text-emerald-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento iniciado! Verifique a aba do WhatsApp.</span>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type={currentStep === "whatsapp" ? "tel" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    currentStep === "name"
                      ? "Digite seu nome completo..."
                      : currentStep === "whatsapp"
                      ? "Digite seu WhatsApp com DDD..."
                      : "Digite sua resposta..."
                  }
                  className="flex-1 h-11 px-3.5 bg-[#060A10] border border-white/20 focus:border-[#25D366] focus:outline-none rounded-xl text-xs text-white placeholder:text-gray-500 transition-colors font-sans"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-11 h-11 bg-[#25D366] disabled:bg-gray-700 text-black disabled:text-gray-400 rounded-xl flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      )}
    </>
  );
}
