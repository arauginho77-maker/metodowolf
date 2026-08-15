import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { goToCheckout } from "@/lib/wolf";

const modules = [
  {
    tag: "Módulo 01",
    title: "Fundamentos do Método Wolf",
    items: [
      "Como a operação funciona do zero ao primeiro cliente",
      "Mentalidade de execução: foco, disciplina e volume",
      "Erros que queimam número e como evitá-los",
    ],
  },
  {
    tag: "Módulo 02",
    title: "Preparação e proteção das contas",
    items: [
      "Chip, número e configuração correta do WhatsApp",
      "Aquecimento passo a passo (cronograma pronto)",
      "Checklist antifalha antes de qualquer disparo",
    ],
  },
  {
    tag: "Módulo 03",
    title: "Operando vários WhatsApp ao mesmo tempo",
    items: [
      "Estrutura para rodar múltiplos números em paralelo",
      "Organização por etiquetas, listas e filas de atendimento",
      "Rotação de contas e divisão de volume por número",
    ],
  },
  {
    tag: "Módulo 04",
    title: "Interações naturais que geram resposta",
    items: [
      "Modelos de abordagem humanizada (copy pronta)",
      "Variação de mensagem para não parecer automação",
      "Cadência de follow-up até o fechamento",
    ],
  },
  {
    tag: "Módulo 05",
    title: "Conversão e fechamento no chat",
    items: [
      "Script de qualificação em 4 perguntas",
      "Quebra de objeção por áudio e texto",
      "Fechamento e envio de link de pagamento",
    ],
  },
  {
    tag: "Módulo 06",
    title: "Escala e rotina diária",
    items: [
      "Rotina de 90 minutos por dia de prospecção",
      "Métricas simples: envios, respostas, calls, vendas",
      "Como replicar a operação com mais números e pessoas",
    ],
  },
];

const bonuses = [
  "Pack de scripts de abordagem e follow-up (copiar e colar)",
  "Planilha de controle de números, aquecimento e resultados",
  "Checklist de segurança para reduzir risco de bloqueio",
  "Atualizações futuras do método sem pagar de novo",
];

const WolfDelivery = () => {
  return (
    <section id="o-que-recebe" className="relative border-t border-border/60 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">O que você recebe</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">
            Tudo destravado no <span className="text-accent">primeiro acesso</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nada de conteúdo liberado por semana. Você paga uma vez, entra e já vê o método completo — do preparo das
            contas até a rotina que traz conversa todos os dias.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.tag}
              className="gradient-panel rounded-2xl border border-border p-6 shadow-card transition-smooth hover:border-accent/50 hover:shadow-elevated"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-accent">{m.tag}</span>
              <h3 className="font-display mt-2 text-xl font-extrabold">{m.title}</h3>
              <ul className="mt-4 space-y-2">
                {m.items.map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
          <h3 className="font-display text-xl font-extrabold uppercase">Bônus inclusos</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {bonuses.map((b) => (
              <li key={b} className="flex gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {b}
              </li>
            ))}
          </ul>
          <Button variant="hero" size="lg" className="mt-6 w-full sm:w-auto" onClick={goToCheckout}>
            Liberar meu acesso agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WolfDelivery;
