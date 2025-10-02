import { Users, GraduationCap, Star, TrendingUp } from "lucide-react";

const SocialProofStats = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Alunos matriculados em 2024",
    },
    {
      icon: GraduationCap,
      number: "50+",
      label: "Cursos disponíveis",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação média dos alunos",
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Taxa de satisfação",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-3">
            🎓 Números que comprovam nossa experiência
          </h2>
          <p className="text-muted-foreground">
            Mais de 500 alunos confiam no Grupo X para suas matrículas
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-xl p-6 text-center hover:shadow-elevated transition-smooth"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4 mx-auto">
                <stat.icon className="h-7 w-7" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card shadow-card rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold border-2 border-card"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground ml-2">
              + de <span className="font-bold text-primary">87 alunos</span> matriculados este mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStats;
