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
        avatarSrc="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
      />
      <BentoGrid />
      <FeatureSection />
    </>
  );
}
