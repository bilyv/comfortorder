import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReferralSection from "@/components/ReferralSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <BenefitsSection />
      <DemoSection />
      <PricingSection />
      <TestimonialsSection />
      <ReferralSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
