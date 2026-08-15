import WolfHeader from "@/components/wolf/WolfHeader";
import WolfHero from "@/components/wolf/WolfHero";
import WolfDelivery from "@/components/wolf/WolfDelivery";
import WolfMultiWhats from "@/components/wolf/WolfMultiWhats";
import WolfSteps from "@/components/wolf/WolfSteps";
import WolfForWho from "@/components/wolf/WolfForWho";
import WolfOffer from "@/components/wolf/WolfOffer";
import WolfFaq from "@/components/wolf/WolfFaq";
import WolfFinalCta from "@/components/wolf/WolfFinalCta";
import WolfFooter from "@/components/wolf/WolfFooter";
import WolfStickyCta from "@/components/wolf/WolfStickyCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WolfHeader />
      <main>
        <WolfHero />
        <WolfDelivery />
        <WolfMultiWhats />
        <WolfSteps />
        <WolfForWho />
        <WolfOffer />
        <WolfFaq />
        <WolfFinalCta />
      </main>
      <WolfFooter />
      <WolfStickyCta />
    </div>
  );
};

export default Index;
