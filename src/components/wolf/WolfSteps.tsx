const steps = [
  {
    n: "01",
    title: "Compra e acesso imediato",
    text: "Pagamento único pelo checkout seguro (Pix ou cartão). O acesso cai no seu e-mail em minutos.",
  },
  {
    n: "02",
    title: "Prepare suas contas",
    text: "Siga o checklist de configuração e aquecimento dos números antes do primeiro disparo.",
  },
  {
    n: "03",
    title: "Ative a rotina Wolf",
    text: "Aplique os scripts, distribua o volume entre os WhatsApp e execute a rotina diária.",
  },
  {
    n: "04",
    title: "Escale o que funciona",
    text: "Meça respostas e vendas, corte o que não converte e adicione mais números à operação.",
  },
];

const WolfSteps = () => {
  return (
    <section id="como-funciona" className="border-t border-border/60 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Como funciona</span>
          <h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">
            Do checkout ao primeiro resultado
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-border gradient-panel p-6 shadow-card">
              <span className="font-display text-4xl font-extrabold text-accent/40">{s.n}</span>
              <h3 className="font-display mt-2 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WolfSteps;
