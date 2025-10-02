import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://www.contate.me/5566981109810", "_blank");
  };

  const scrollToCourses = () => {
    const element = document.getElementById("cursos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const benefits = [
    {
      icon: "⚡",
      title: "Matrícula em até 10 minutos",
      description: "Processo 100% online, rápido e assistido",
    },
    {
      icon: "💳",
      title: "Parcele em até 12x",
      description: "Opções de pagamento flexíveis",
    },
    {
      icon: "🎓",
      title: "+ de 500 alunos satisfeitos",
      description: "Apoio até confirmar sua matrícula",
    },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 blur-[1px]"
        style={{
          backgroundImage: `url('/src/assets/hero-students.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white">
            Comece sua graduação pela UNOPAR com a assessoria completa do Grupo X
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Matrículas rápidas, acompanhamento personalizado e condições facilitadas — fale com nossa consultora agora pelo WhatsApp e garanta sua vaga.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-card hover:shadow-elevated transition-smooth">
                <div className="text-5xl mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={handleWhatsAppClick}>
              💬 Falar com consultora (Grátis)
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToCourses} className="bg-white/95 backdrop-blur-sm border-white text-foreground hover:bg-white hover:text-primary">
              🎓 Quero conhecer os cursos
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
