import { Button } from "@/components/ui/button";
import { ShieldCheck, MessagesSquare, TrendingUp, Target, Infinity as InfinityIcon } from "lucide-react";
import heroAsset from "@/assets/metodo-wolf-hero.png.asset.json";
import { goToCheckout } from "@/lib/wolf";

const pillars = [
  { icon: ShieldCheck, title: "Mais segurança", text: "Contas protegidas e aquecidas do jeito certo" },
  { icon: MessagesSquare, title: "Interações naturais", text: "Disparos com cara de conversa humana" },
  { icon: TrendingUp, title: "Conta preparada", text: "Setup completo antes do primeiro envio" },
  { icon: Target, title: "Foco • Disciplina • Resultado", text: "Rotina de execução diária validada" },
];

const WolfHero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <img
        src={heroAsset.url}
        alt="Método Wolf - acesso vitalício ao método de prospecção no WhatsApp"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-lines opacity-40" />

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            <InfinityIcon className="h-4 w-4" /> Acesso vitalício • Pagamento único
          </span>

          <h1 className="font-display mt-6 text-4xl font-extrabold uppercase leading-[1.05] md:text-6xl lg:text-7xl">
            Você está a um passo de adquirir o{" "}
            <span className="text-accent text-glow">Método Wolf</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            O sistema completo para operar <strong className="text-foreground">vários WhatsApp ao mesmo tempo</strong>,
            com segurança, disparos que não parecem robô e uma rotina diária de prospecção que gera conversa e venda.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="animate-pulse-glow" onClick={goToCheckout}>
              Quero o acesso vitalício
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-accent/40 bg-background/40 backdrop-blur-sm hover:bg-accent/10"
              onClick={() => scrollTo("o-que-recebe")}
            >
              Ver tudo que está incluído
            </Button>
          </div>

          <div className="mt-12 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="gradient-panel rounded-xl border border-accent/20 p-4 shadow-card transition-smooth hover:border-accent/50 hover:shadow-elevated"
              >
                <Icon className="mb-3 h-7 w-7 text-accent" />
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WolfHero;
