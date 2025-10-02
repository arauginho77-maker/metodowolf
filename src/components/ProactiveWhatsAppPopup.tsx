import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProactiveWhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Mostra popup após 15 segundos
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in">
      <div className="bg-card shadow-elevated rounded-2xl p-8 m-4 max-w-md relative animate-in slide-in-from-bottom-4">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-accent" />
          </div>

          <h3 className="font-display text-2xl font-bold text-primary mb-3">
            👋 Olá! Precisa de ajuda?
          </h3>

          <p className="text-muted-foreground mb-6">
            Nossa consultora está online agora e pode te ajudar a escolher o curso ideal e tirar todas as suas dúvidas!
          </p>

          <div className="space-y-3 w-full">
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com consultora agora
            </Button>

            <p className="text-xs text-muted-foreground">
              ⚡ Resposta em menos de 5 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProactiveWhatsAppPopup;
