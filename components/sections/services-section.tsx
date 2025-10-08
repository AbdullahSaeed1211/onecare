import TestimonialsSection from "@/components/landing/sections/testimonials";
import { BentoGrid } from "@/components/landing/sections/bento-grid";
import { FeatureSection } from "@/components/landing/sections/features";

export function ServicesSection() {
  return (
    <>
      <TestimonialsSection
        quote="OneCare helped me find the right therapist in just two days. The personalized matching made all the difference in my journey to better mental health."
        authorName="Sarah Johnson"
        authorRole="Marketing Director at WellnessCo"
        avatarSrc="/SarahJohnson.png"
      />
      <BentoGrid />
      <FeatureSection />
    </>
  );
}
