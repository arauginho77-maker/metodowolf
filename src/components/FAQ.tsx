import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Posso fazer matrícula 100% online?",
      answer:
        "Sim! Todo o processo é 100% remoto. Nossa consultora te guia em cada etapa via WhatsApp, do envio dos documentos até a confirmação da matrícula. Você não precisa sair de casa.",
    },
    {
      question: "Que documentos preciso enviar?",
      answer:
        "Os documentos básicos são: RG, CPF, comprovante de endereço e histórico escolar do ensino médio. Nossa consultora enviará a lista completa e te auxiliará no processo de envio dos documentos.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Oferecemos diversas opções: cartão de crédito parcelado, boleto bancário, PIX e possibilidade de usar financiamento estudantil. Consulte a consultora via WhatsApp para conhecer todas as opções disponíveis.",
    },
    {
      question: "Como funciona o parcelamento?",
      answer:
        "O parcelamento varia conforme o curso e forma de pagamento escolhida. Temos opções de parcelamento em até 12x no cartão de crédito e também mensalidades facilitadas. Fale com nossa consultora para ver a melhor opção para você.",
    },
    {
      question: "Posso transferir ou trancar depois de matriculado?",
      answer:
        "Sim, é possível fazer transferência de curso ou trancamento conforme as políticas da UNOPAR. Nossa consultora pode te orientar sobre os procedimentos e prazos. Entre em contato via WhatsApp para mais detalhes.",
    },
    {
      question: "Quanto tempo demora para confirmar a matrícula?",
      answer:
        "Em muitos casos, a confirmação sai no mesmo dia! Após o envio dos documentos e confirmação do pagamento, você recebe o comprovante de matrícula por e-mail e WhatsApp rapidamente.",
    },
    {
      question: "O Grupo X cobra alguma taxa adicional?",
      answer:
        "Não! Nosso serviço de consultoria e assessoria é gratuito. Você paga apenas as mensalidades e taxas da própria UNOPAR. Trabalhamos com total transparência.",
    },
    {
      question: "Quais modalidades de ensino estão disponíveis?",
      answer:
        "A UNOPAR oferece cursos em três modalidades: 100% EaD (totalmente online), Presencial e Híbrido (parte presencial, parte online). Nossa consultora te ajuda a escolher a melhor modalidade para sua rotina.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de matrícula
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card shadow-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
