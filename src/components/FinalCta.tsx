import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, buildWhatsAppLink } from "@/lib/quiz";
import { track } from "@/lib/analytics";

type FinalCtaProps = {
  course?: string | null;
};

const FinalCta = ({ course }: FinalCtaProps) => {
  const openWhatsApp = () => {
    track("WhatsAppClick", { curso: course ?? undefined, origem: "cta_final" });
    window.open(course ? buildWhatsAppLink(course) : WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl gradient-primary p-7 text-center shadow-elevated sm:p-10">
          <h2 className="font-display text-2xl text-primary-foreground sm:text-3xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
            Fale com um consultor e veja as opções disponíveis para o curso que você escolheu.
          </p>
          <Button
            size="xl"
            variant="secondary"
            className="mt-7 w-full sm:w-auto"
            onClick={openWhatsApp}
          >
            <MessageCircle className="mr-2 h-5 w-5" /> FALAR COM CONSULTOR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
