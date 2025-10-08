import { ErrorBoundary } from "@/components/ui/error-boundary";
import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofLogoBar } from "@/components/sections/social-proof-logo-bar";
import { ServicesSection } from "@/components/sections/services-section";
import { OnboardingChecklistSection } from "@/components/sections/onboarding-checklist-section";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section";
import { ProfessionalsSection } from "@/components/sections/professionals-section";
import { TherapySection } from "@/components/sections/therapy-section";
import { PricingBenefitsSection } from "@/components/sections/pricing-benefits-section";
import { InsuranceIntegrationSection } from "@/components/sections/insurance-integration-section";
import { FaqFooterSection } from "@/components/sections/faq-footer-section";

export default function Page() {
  return (
    <ErrorBoundary>
      <main>
        {/* Landing Wide Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Landing Wide Floating Elements */}
        <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
          <div className="absolute top-1/3 right-10 w-2 h-2 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '3.5s' }} />
        </div>

        <HeroSection />

        <SocialProofLogoBar />

        <ServicesSection />
        <OnboardingChecklistSection />

        {/* Landing Wide Stats Background */}
        <div className="relative overflow-hidden bg-gradient-to-l from-secondary via-background to-secondary">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <StatsSection4 />
          </div>
        </div>

        <ProfessionalsSection />
        <TherapySection />
        <PricingBenefitsSection />
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
