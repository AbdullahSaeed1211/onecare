import { ErrorBoundary } from "@/components/ui/error-boundary";
import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofLogoBar } from "@/components/sections/social-proof-logo-bar";
import { ServicesSection } from "@/components/sections/services-section";
import { OnboardingChecklistSection } from "@/components/sections/onboarding-checklist-section";
import { StatsSection } from "@/components/landing/sections/stats";
import { ProfessionalsSection } from "@/components/sections/professionals-section";
import { TherapySection } from "@/components/sections/therapy-section";
import { PricingSection } from "@/components/landing/sections/pricing";
import { InsuranceIntegrationSection } from "@/components/sections/insurance-integration-section";
import { FaqFooterSection } from "@/components/sections/faq-footer-section";

export default function Page() {
  return (
    <ErrorBoundary>
      <main id="main-content">
        {/* Subtle Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent-secondary/3" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
        </div>

        <HeroSection />

        <SocialProofLogoBar />

        <ServicesSection />
        <OnboardingChecklistSection />

        {/* Landing Wide Stats Background */}
        <div className="relative overflow-hidden bg-gradient-to-l from-secondary via-background to-secondary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <StatsSection />
          </div>
        </div>

        <ProfessionalsSection />
        <TherapySection />
        <PricingSection />
        <InsuranceIntegrationSection />

        {/* Landing Wide Footer Background */}
        <div className="relative overflow-hidden bg-gradient-to-t from-primary/10 via-transparent to-background">
          <div className="relative">
            <FaqFooterSection />
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
}
