import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section";
import { FeatureHighlightCard } from "@/components/ui/feature-highlight-card";

export function PricingBenefitsSection() {
  return (
    <>
      <PricingSection3 />

      {/* Key Benefits Feature Cards */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Why Choose OneCare</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference that quality mental health care can make in your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center"
              imageAlt="Security and privacy illustration"
              title="Confidential & Secure"
              description="HIPAA-compliant platform ensuring your privacy and confidentiality at every step."
              buttonText="Learn About Security"
            />
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center"
              imageAlt="Flexible scheduling illustration"
              title="Flexible Scheduling"
              description="Book sessions that fit your lifestyle with evening and weekend availability."
              buttonText="View Availability"
            />
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop&crop=center"
              imageAlt="Personalized care illustration"
              title="Personalized Care"
              description="Get matched with therapists who specialize in your specific needs and goals."
              buttonText="Find Your Match"
            />
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=200&fit=crop&crop=center"
              imageAlt="Multiple therapy formats illustration"
              title="Multiple Formats"
              description="Choose from in-person, video, phone, or text therapy options that work for you."
              buttonText="Explore Options"
            />
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=center"
              imageAlt="Ongoing support illustration"
              title="Ongoing Support"
              description="Access 24/7 crisis support and between-session resources for continuous care."
              buttonText="Get Support"
            />
            <FeatureHighlightCard
              imageSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=200&fit=crop&crop=center"
              imageAlt="Evidence-based therapy illustration"
              title="Evidence-Based"
              description="All our therapists use proven therapeutic approaches backed by research."
              buttonText="Learn More"
            />
          </div>
        </div>
      </section>
    </>
  );
}
