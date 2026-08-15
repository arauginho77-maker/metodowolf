import { Button } from "@/components/ui/button";
import { Check, Lock, Infinity as InfinityIcon, Zap } from "lucide-react";
import { goToCheckout } from "@/lib/wolf";

const included = [
  "6 módulos completos do Método Wolf",
  "Estrutura para operar vários WhatsApp",
  "Scripts de abordagem, follow-up e fechamento",
  "Planilha de controle e checklist de segurança",
  "Atualizações futuras inclusas",
  "Acesso vitalício, sem mensalidade",
];

const WolfOffer = () => {
  return (
    <section id="acesso" className="relative overflow-hidden border-t border-border/60 py-20">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-accent/40 gradient-panel shadow-elevated">
          <div className="gradient-accent px-6 py-3 text-center">
            <p className="font-display text-sm font-extrabold uppercase tracking-widest text-accent-foreground">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          <div className="p-7 md:p-10">
            <h2 className="font-display text-center text-3xl font-extrabold uppercase md:text-4xl">
              Método Wolf <span className="text-accent">completo</span>
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Você entra uma vez e o acesso é seu para sempre — incluindo as próximas atualizações do método.
            </p>

            <ul className="mx-auto mt-7 grid max-w-md gap-3">
              {included.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-background/60 p-5 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Valor e formas de pagamento</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Confira o valor atualizado, Pix ou cartão em até 12x direto no checkout oficial.
              </p>
              <Button variant="hero" size="xl" className="mt-5 w-full animate-pulse-glow" onClick={goToCheckout}>
                Ver valor e garantir acesso
              </Button>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-primary" /> Checkout seguro Cakto
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-primary" /> Acesso imediato
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <InfinityIcon className="h-3.5 w-3.5 text-primary" /> Sem mensalidade
                </span>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Garantia legal de 7 dias: não gostou, devolvemos 100% do valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WolfOffer;
