import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MiniFAQ from "@/components/MiniFAQ";
import CourseList from "@/components/CourseList";
import SocialProofStats from "@/components/SocialProofStats";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UrgencyBanner from "@/components/UrgencyBanner";
import FloatingCTA from "@/components/FloatingCTA";
import ProactiveWhatsAppPopup from "@/components/ProactiveWhatsAppPopup";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SocialProofNotification from "@/components/SocialProofNotification";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <FloatingCTA />
      <Header />
      <Hero />
      <SocialProofStats />
      <HowItWorks />
      <MiniFAQ />
      <CourseList />
      <Advantages />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ProactiveWhatsAppPopup />
      <ExitIntentPopup />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
