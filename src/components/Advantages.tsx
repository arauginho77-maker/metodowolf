import { UserCheck, Zap, Eye, CreditCard, Award } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: UserCheck,
      title: "Atendimento humano e dedicado",
      description: "Consultoria personalizada até a confirmação da sua matrícula com suporte em cada etapa.",
    },
    {
      icon: Zap,
      title: "Processos rápidos",
      description: "Matrícula assistida em minutos. Não perca tempo com burocracia desnecessária.",
    },
    {
      icon: Eye,
      title: "Transparência total",
      description: "Condições claras e sem custos ocultos. Você sabe exatamente o que está pagando.",
    },
    {
      icon: CreditCard,
      title: "Parcelamento facilitado",
      description: "Opções de pagamento flexíveis que cabem no seu bolso e facilitam sua vida.",
    },
    {
      icon: Award,
      title: "Experiência comprovada",
      description: "Centenas de matrículas realizadas com sucesso e alunos satisfeitos.",
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Por que escolher o Grupo X para sua matrícula na UNOPAR
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Diferenciais que fazem toda a diferença na sua jornada acadêmica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-xl p-8 hover:shadow-elevated transition-smooth"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full gradient-accent text-accent-foreground mb-6 shadow-accent">
                <advantage.icon className="h-8 w-8" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {advantage.title}
              </h3>
              
              <p className="text-muted-foreground">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
