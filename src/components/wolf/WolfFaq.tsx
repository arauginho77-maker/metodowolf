import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O acesso é realmente vitalício?",
    a: "Sim. É um pagamento único e o conteúdo fica liberado para sempre na sua área de membros, incluindo as atualizações que forem lançadas.",
  },
  {
    q: "Quanto tempo depois da compra eu recebo o acesso?",
    a: "O acesso é liberado automaticamente após a confirmação do pagamento (Pix costuma cair em minutos) e enviado para o e-mail usado no checkout.",
  },
  {
    q: "Preciso de quantos números de WhatsApp?",
    a: "Você pode começar com um número. O método mostra como preparar, aquecer e depois expandir para vários WhatsApp operando em paralelo.",
  },
  {
    q: "Funciona para qualquer produto ou serviço?",
    a: "Sim. O método é de prospecção e conversão no WhatsApp — serve para infoprodutos, serviços, negócios locais e vendas em geral.",
  },
  {
    q: "Vou tomar bloqueio nos meus números?",
    a: "Nenhum método elimina 100% o risco, mas você recebe o cronograma de aquecimento, limites diários e o checklist de segurança que reduzem drasticamente as chances.",
  },
  {
    q: "Sou iniciante, consigo aplicar?",
    a: "Sim. O passo a passo começa do zero: configuração da conta, aquecimento, scripts prontos e a rotina diária para executar.",
  },
  {
    q: "Preciso pagar alguma ferramenta paga?",
    a: "O método funciona com o WhatsApp e organização manual. Ferramentas são opcionais para quem quiser escalar mais rápido.",
  },
  {
    q: "Tem garantia?",
    a: "Sim, garantia de 7 dias. Se não fizer sentido para você, é só solicitar o reembolso integral dentro do prazo.",
  },
];

const WolfFaq = () => {
  return (
    <section id="faq" className="border-t border-border/60 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Dúvidas frequentes</span>
            <h2 className="font-display mt-3 text-3xl font-extrabold uppercase md:text-5xl">Antes de entrar</h2>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WolfFaq;
