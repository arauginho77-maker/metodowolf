import { useState, useEffect } from "react";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define a data final (7 dias a partir de agora)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    window.open("https://www.contate.me/5566981109810", "_blank");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-primary to-accent text-white shadow-elevated">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Clock className="h-5 w-5 animate-pulse" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-semibold text-sm sm:text-base">
                ⏰ Últimos dias para matrícula com desconto!
              </span>
              <div className="flex gap-2 text-xs sm:text-sm font-mono">
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.days}d</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.hours}h</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.minutes}m</span>
                <span className="bg-white/20 px-2 py-1 rounded">{timeLeft.seconds}s</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-white text-primary hover:bg-white/90 border-none"
              onClick={handleWhatsAppClick}
            >
              Garanta sua vaga
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Fechar banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
