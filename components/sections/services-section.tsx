import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section";

export function ServicesSection() {
  return (
    <>
      <LogoSection10 />
      <TestimonialsSection1
        quote="OneCare helped me find the right therapist in just two days. The personalized matching made all the difference in my journey to better mental health."
        authorName="Sarah Johnson"
        authorRole="Marketing Director at WellnessCo"
        avatarSrc="/SarahJohnson.png"
      />
      <BentoGrid6 />
      <FeatureSection9 />
    </>
  );
}
