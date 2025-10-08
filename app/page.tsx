import { ErrorBoundary } from "@/components/ui/error-boundary";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { OnboardingChecklistSection } from "@/components/sections/onboarding-checklist-section";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section";
import { ProfessionalsSection } from "@/components/sections/professionals-section";
import { TherapySection } from "@/components/sections/therapy-section";
import { PricingBenefitsSection } from "@/components/sections/pricing-benefits-section";
import { ServicesCarouselSection } from "@/components/sections/services-carousel-section";
import { InsuranceIntegrationSection } from "@/components/sections/insurance-integration-section";
import { FaqFooterSection } from "@/components/sections/faq-footer-section";

export default function Page() {
  return (
    <ErrorBoundary>
      <main>
        <HeroSection />
        <ServicesSection />
        <OnboardingChecklistSection />
      <StatsSection4 />
        <ProfessionalsSection />
        <TherapySection />
        <PricingBenefitsSection />
        <ServicesCarouselSection />
        <InsuranceIntegrationSection />
        <FaqFooterSection />
      </main>
    </ErrorBoundary>
  );
}
