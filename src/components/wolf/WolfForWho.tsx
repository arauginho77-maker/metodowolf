import { Check, X } from "lucide-react";

const forWho = [
  "Quem vende no WhatsApp e quer volume sem queimar número",
  "Infoprodutor, afiliado ou prestador de serviço buscando clientes todo dia",
  "Vendedor e closer que quer previsibilidade na prospecção",
  "Quem já tentou disparo e tomou bloqueio ou zero resposta",
  "Quem quer montar uma operação com vários números e time",
];

const notForWho = [
  "Quem procura dinheiro fácil sem executar",
  "Quem não quer seguir processo nem medir número",
  "Quem quer resultado sem aplicar o aquecimento correto",
];

const WolfForWho = () => {
  return (
    <section id="para-quem" className="border-t border-border/60 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <h2 className="font-display text-2xl font-extrabold uppercase">É para você se…</h2>
            <ul className="mt-5 space-y-3">
              {forWho.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/70 p-7">
            <h2 className="font-display text-2xl font-extrabold uppercase text-muted-foreground">Não é para você se…</h2>
            <ul className="mt-5 space-y-3">
              {notForWho.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WolfForWho;
