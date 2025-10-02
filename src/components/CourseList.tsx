import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen } from "lucide-react";

const CourseList = () => {
  const courses = [
    {
      name: "Administração",
      format: "EaD / Presencial",
      duration: "4 anos",
      description: "Forme-se em gestão empresarial e empreendedorismo",
      price: "R$ 199/mês",
      badge: "⭐ Mais procurado",
      spots: "12",
    },
    {
      name: "Pedagogia",
      format: "EaD",
      duration: "4 anos",
      description: "Torne-se educador e transforme vidas",
      price: "R$ 189/mês",
      badge: "🔥 Vagas limitadas",
      spots: "8",
    },
    {
      name: "Enfermagem",
      format: "Presencial",
      duration: "5 anos",
      description: "Cuide da saúde e bem-estar das pessoas",
      price: "R$ 349/mês",
      badge: "🏆 Alta demanda",
      spots: "5",
    },
    {
      name: "Direito",
      format: "Presencial / Híbrido",
      duration: "5 anos",
      description: "Defenda direitos e justiça na sociedade",
      price: "R$ 399/mês",
      badge: "💎 Premium",
      spots: "15",
    },
    {
      name: "Análise e Desenvolvimento de Sistemas",
      format: "EaD",
      duration: "2,5 anos",
      description: "Entre no mercado de tecnologia em alta demanda",
      price: "R$ 249/mês",
      badge: "🚀 Em alta",
      spots: "20",
    },
    {
      name: "Psicologia",
      format: "Presencial",
      duration: "5 anos",
      description: "Compreenda a mente humana e ajude pessoas",
      price: "R$ 369/mês",
      badge: "⭐ Mais procurado",
      spots: "7",
    },
    {
      name: "Engenharia Civil",
      format: "Presencial / Híbrido",
      duration: "5 anos",
      description: "Construa o futuro com projetos inovadores",
      price: "R$ 429/mês",
      badge: "🏗️ Tradicional",
      spots: "10",
    },
    {
      name: "Recursos Humanos",
      format: "EaD",
      duration: "2 anos",
      description: "Gerencie talentos e desenvolva equipes",
      price: "R$ 179/mês",
      badge: "💼 Rápido",
      spots: "18",
    },
  ];

  const handleCourseClick = (courseName: string) => {
    window.open("https://www.contate.me/5566981109810", "_blank");
  };

  return (
    <section id="cursos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Cursos de graduação disponíveis
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha entre diversas opções de cursos e modalidades que cabem na sua rotina
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-smooth flex flex-col h-full border border-border relative overflow-hidden"
            >
              {/* Badge de destaque */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-accent to-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                {course.badge}
              </div>

              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 mt-2">
                <GraduationCap className="h-7 w-7" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-primary mb-2">
                {course.name}
              </h3>

              {/* Preço */}
              <p className="text-accent font-bold text-lg mb-3">
                A partir de {course.price}
              </p>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Aviso de urgência */}
              <div className="bg-accent/10 rounded-lg p-2 mb-4 text-center">
                <p className="text-xs text-accent font-semibold">
                  🔥 Apenas {course.spots} vagas restantes
                </p>
              </div>

              <Button
                variant="hero"
                size="default"
                className="w-full"
                onClick={() => handleCourseClick(course.name)}
              >
                💬 Quero me matricular neste curso
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
