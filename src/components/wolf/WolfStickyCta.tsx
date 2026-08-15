import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { goToCheckout } from "@/lib/wolf";

const WolfStickyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-accent/30 bg-background/95 p-3 backdrop-blur-md animate-float-up">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <p className="text-sm font-semibold">
          Método Wolf • <span className="text-accent">acesso vitalício</span>
        </p>
        <Button variant="hero" size="sm" onClick={goToCheckout}>
          Garantir agora
        </Button>
      </div>
    </div>
  );
};

export default WolfStickyCta;
