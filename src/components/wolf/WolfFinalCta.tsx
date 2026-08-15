import { Button } from "@/components/ui/button";
import { goToCheckout } from "@/lib/wolf";

const WolfFinalCta = () => {
  return (
    <section className="relative overflow-hidden border-t border-accent/30 py-20">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-display mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-tight md:text-5xl">
          Foco. Disciplina. <span className="text-accent text-glow">Resultado.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Entrando, é pra organizar, estruturar e bater resultado. O Método Wolf te dá o caminho — a execução é sua.
        </p>
        <Button variant="hero" size="xl" className="mt-8 animate-pulse-glow" onClick={goToCheckout}>
          Quero meu acesso vitalício
        </Button>
      </div>
    </section>
  );
};

export default WolfFinalCta;
