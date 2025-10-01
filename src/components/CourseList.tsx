import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen } from "lucide-react";

const CourseList = () => {
  const courses = [
    {
      name: "Administração",
      format: "EaD / Presencial",
      duration: "4 anos",
      description: "Forme-se em gestão empresarial e empreendedorismo",
    },
    {
      name: "Pedagogia",
      format: "EaD",
      duration: "4 anos",
      description: "Torne-se educador e transforme vidas",
    },
    {
      name: "Enfermagem",
      format: "Presencial",
      duration: "5 anos",
      description: "Cuide da saúde e bem-estar das pessoas",
    },
    {
      name: "Direito",
      format: "Presencial / Híbrido",
      duration: "5 anos",
      description: "Defenda direitos e justiça na sociedade",
    },
    {
      name: "Análise e Desenvolvimento de Sistemas",
      format: "EaD",
      duration: "2,5 anos",
      description: "Entre no mercado de tecnologia em alta demanda",
    },
    {
      name: "Psicologia",
      format: "Presencial",
      duration: "5 anos",
      description: "Compreenda a mente humana e ajude pessoas",
    },
    {
      name: "Engenharia Civil",
      format: "Presencial / Híbrido",
      duration: "5 anos",
      description: "Construa o futuro com projetos inovadores",
    },
    {
      name: "Recursos Humanos",
      format: "EaD",
      duration: "2 anos",
      description: "Gerencie talentos e desenvolva equipes",
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
              className="bg-card shadow-card rounded-xl p-6 hover:shadow-elevated transition-smooth flex flex-col h-full border border-border"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <GraduationCap className="h-7 w-7" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {course.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <Button
                variant="accent"
                size="default"
                className="w-full"
                onClick={() => handleCourseClick(course.name)}
              >
                Quero esse — Falar no WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
