import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    { name: "Maria Silva", course: "Administração", city: "São Paulo" },
    { name: "João Santos", course: "Análise de Sistemas", city: "Rio de Janeiro" },
    { name: "Ana Carolina", course: "Pedagogia", city: "Belo Horizonte" },
    { name: "Pedro Oliveira", course: "Direito", city: "Curitiba" },
    { name: "Juliana Costa", course: "Enfermagem", city: "Salvador" },
    { name: "Carlos Eduardo", course: "Engenharia Civil", city: "Brasília" },
  ];

  useEffect(() => {
    // Primeira notificação aparece após 10 segundos
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    // Depois, muda a notificação a cada 20 segundos
    const notificationInterval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 500);

      // Esconde após 7 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 7000);
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(notificationInterval);
    };
  }, []);

  const notification = notifications[currentNotification];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 animate-in slide-in-from-left-2">
      <div className="bg-card shadow-elevated rounded-lg p-4 max-w-sm border-l-4 border-accent">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="h-5 w-5 text-accent" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground mb-1">
              🔔 Nova matrícula confirmada!
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">{notification.name}</span> de {notification.city} acabou de se matricular em <span className="font-medium">{notification.course}</span>
            </p>
            <p className="text-xs text-accent mt-1">
              há poucos minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
