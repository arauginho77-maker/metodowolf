import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá, tenho interesse em fazer matrícula na UNOPAR. Gostaria de mais informações."
    );
    window.open(
      `https://wa.me/5511999999999?text=${message}&utm_source=site&utm_campaign=matricula`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2">
      <Button
        onClick={handleClick}
        variant="hero"
        size="lg"
        className="rounded-full shadow-elevated hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Falar com consultora</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
