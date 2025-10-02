import { useState, useEffect } from "react";
import { AlertTriangle, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai do topo da página
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    window.open("https://www.contate.me/5566981109810", "_blank");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-in fade-in">
      <div className="bg-card shadow-elevated rounded-2xl p-8 m-4 max-w-lg relative animate-in slide-in-from-top-4">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-accent animate-pulse" />
          </div>

          <h3 className="font-display text-2xl font-bold text-primary mb-3">
            ⚠️ Espere! Ainda tem dúvidas?
          </h3>

          <p className="text-muted-foreground mb-4">
            Não perca essa oportunidade! Fale com nossa consultora antes de sair e garanta:
          </p>

          <div className="bg-secondary/30 rounded-lg p-4 mb-6 text-left w-full">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Desconto exclusivo de até R$ 500</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Parcelamento em até 12x sem juros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Atendimento prioritário nas próximas 2 horas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Consultoria gratuita sobre bolsas</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 w-full">
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com consultora agora (Grátis)
            </Button>

            <button
              onClick={handleClose}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
