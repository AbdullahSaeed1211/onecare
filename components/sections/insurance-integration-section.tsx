import { IntegrationShowcase } from "@/components/ui/integration-showcase";

export function InsuranceIntegrationSection() {
  return (
    <section className="bg-secondary section-padding-y border-b">
      <IntegrationShowcase
        title="We work with your ~insurance~"
        subtitle="Access quality mental health care without breaking the bank. We accept major insurance providers and offer flexible payment options."
        illustrationSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&crop=center"
        illustrationAlt="Medical insurance documents and cards"
        integrations={[
          {
            name: "Blue Cross Blue Shield",
            description: "Comprehensive coverage for mental health services",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          },
          {
            name: "Aetna",
            description: "Nationwide mental health network",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          },
          {
            name: "UnitedHealthcare",
            description: "Extensive provider network",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          },
          {
            name: "Cigna",
            description: "Quality mental health benefits",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          },
          {
            name: "Humana",
            description: "Accessible mental health care",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          },
          {
            name: "Anthem",
            description: "Comprehensive behavioral health",
            iconSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
          }
        ]}
      />
    </section>
  );
}
