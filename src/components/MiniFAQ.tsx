import { DollarSign, Clock, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MiniFAQ = () => {
  const handleWhatsAppClick = () => {
    window.open("https://www.contate.me/5566981109810", "_blank");
  };

  const quickAnswers = [
    {
      icon: DollarSign,
      question: "💰 Quanto custa?",
      answer: "A partir de R$ 199/mês com parcelamento em até 12x sem juros. Consulte condições especiais!",
    },
    {
      icon: Clock,
      question: "⏰ Quanto tempo demora?",
      answer: "Matrícula confirmada em até 10 minutos! Processo 100% online e rápido.",
    },
    {
      icon: FileText,
      question: "📄 Quais documentos preciso?",
      answer: "RG, CPF, comprovante de endereço e histórico do ensino médio. Nossa consultora te ajuda!",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-3">
            ❓ Perguntas rápidas
          </h2>
          <p className="text-muted-foreground">
            As dúvidas mais comuns respondidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {quickAnswers.map((item, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-smooth"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary mb-3">
                {item.question}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-accent/10 rounded-xl p-6 max-w-2xl mx-auto border-2 border-accent/20">
            <MessageCircle className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-primary mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Fale diretamente com nossa consultora e tire todas as suas dúvidas em tempo real!
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Tirar dúvidas agora (Grátis)
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              ⚡ Resposta em menos de 5 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniFAQ;
