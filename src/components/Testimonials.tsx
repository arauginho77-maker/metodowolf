import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo, SP",
      course: "Administração",
      text: "Consegui matrícula no mesmo dia! O atendimento foi super rápido e a consultora me ajudou em tudo.",
      rating: 5,
    },
    {
      name: "João Santos",
      city: "Rio de Janeiro, RJ",
      course: "Análise e Desenvolvimento de Sistemas",
      text: "Parcelaram em 12x sem burocracia. Finalmente vou realizar meu sonho de estudar!",
      rating: 5,
    },
    {
      name: "Ana Carolina",
      city: "Belo Horizonte, MG",
      course: "Pedagogia",
      text: "Processo 100% online e super fácil. Recomendo demais o Grupo X!",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      city: "Curitiba, PR",
      course: "Direito",
      text: "A consultora tirou todas minhas dúvidas pelo WhatsApp. Atendimento nota 10!",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      city: "Salvador, BA",
      course: "Enfermagem",
      text: "Fiquei com receio no início, mas o processo foi transparente e rápido. Muito satisfeita!",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      city: "Brasília, DF",
      course: "Engenharia Civil",
      text: "Melhor decisão que tomei! O suporte do Grupo X fez toda diferença na minha matrícula.",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Alunos que já fizeram matrícula com a gente
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira o que nossos alunos têm a dizer sobre nossa assessoria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-smooth relative"
            >
              <Quote className="absolute top-4 right-4 h-10 w-10 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
