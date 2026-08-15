import { Smartphone, Layers, RefreshCcw, ShieldCheck, Users, BellRing } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "Vários números, uma operação",
    text: "Estrutura para rodar 2, 5 ou 10 WhatsApp em paralelo sem se perder e sem misturar conversas.",
  },
  {
    icon: Layers,
    title: "Organização por etapas",
    text: "Etiquetas, listas e filas para saber exatamente quem está em abordagem, follow-up ou fechamento.",
  },
  {
    icon: RefreshCcw,
    title: "Rotação inteligente",
    text: "Divisão de volume entre contas para manter os números vivos e o alcance estável.",
  },
  {
    icon: ShieldCheck,
    title: "Aquecimento e proteção",
    text: "Cronograma de aquecimento e limites diários para reduzir drasticamente o risco de bloqueio.",
  },
  {
    icon: Users,
    title: "Time plugado",
    text: "Como colocar mais pessoas atendendo os mesmos números sem travar o atendimento.",
  },
  {
    icon: BellRing,
    title: "Respostas em tempo real",
    text: "Rotina de checagem e resposta rápida — quem responde primeiro fecha primeiro.",
  },
];

const WolfMultiWhats = () => {
  return (
    <section id="multi-whatsapp" className="relative overflow-hidden border-t border-border/60 py-20">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Acesso multi-WhatsApp</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">
            Um método pensado para <span className="text-accent">vários WhatsApp</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A diferença entre quem manda mensagem e quem fatura no WhatsApp é estrutura. Aqui você aprende a operar
            múltiplas contas com controle, segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-smooth hover:border-primary/60 hover:shadow-card"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-extrabold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WolfMultiWhats;
