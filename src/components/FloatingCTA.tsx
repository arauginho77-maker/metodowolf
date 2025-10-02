import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o CTA após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://www.contate.me/5566981109810", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 px-4 animate-in slide-in-from-top-2">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-accent via-primary to-accent text-white shadow-elevated rounded-full px-6 py-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold flex-1">
              👉 Não perca sua vaga - Turma iniciando em breve!
            </p>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-primary hover:bg-white/90 border-none shrink-0"
              onClick={handleWhatsAppClick}
            >
              Falar agora
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
