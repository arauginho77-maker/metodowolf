import { FileSearch, MessageCircle, CheckSquare, Mail } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Escolha o curso",
      description: "Navegue pelos cursos disponíveis e escolha o que deseja estudar.",
    },
    {
      icon: MessageCircle,
      title: "Fale com a consultora",
      description: "Clique em 'Falar com a consultora' e envie uma mensagem pré-pronta pelo WhatsApp.",
    },
    {
      icon: CheckSquare,
      title: "Confirme as condições",
      description: "Nossa consultora confirma disponibilidade, ofertas e formas de pagamento personalizadas.",
    },
    {
      icon: Mail,
      title: "Finalize a matrícula",
      description: "Complete o processo e receba confirmação por e-mail e WhatsApp em minutos.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Como funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo simples e rápido para você começar seus estudos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-smooth h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold text-lg shadow-accent">
                  {index + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-primary text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
