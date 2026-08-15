import { Button } from "@/components/ui/button";
import { goToCheckout } from "@/lib/wolf";

const WolfHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-extrabold uppercase tracking-widest text-foreground">
            Método <span className="text-accent text-glow">Wolf</span>
          </span>
          <span className="hidden rounded-full border border-accent/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent sm:inline">
            Acesso vitalício
          </span>
        </div>
        <Button variant="hero" size="sm" onClick={goToCheckout}>
          Garantir acesso
        </Button>
      </div>
    </header>
  );
};

export default WolfHeader;
