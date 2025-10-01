import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá, tenho interesse em fazer matrícula na UNOPAR. Gostaria de mais informações."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const scrollToCourses = () => {
    const element = document.getElementById("cursos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const benefits = [
    "Processo de matrícula 100% remoto e assistido",
    "Parcelamento e opções de pagamento flexíveis",
    "Apoio da consultora até você receber sua matrícula confirmada",
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Comece sua graduação pela UNOPAR com a assessoria completa do Grupo X
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Matrículas rápidas, acompanhamento personalizado e condições facilitadas — fale com nossa consultora agora pelo WhatsApp e garanta sua vaga.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-primary-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={handleWhatsAppClick}>
              Falar com a consultora
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToCourses} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Ver cursos
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
