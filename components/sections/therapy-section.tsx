import { ContentWithIllustration } from "@/components/ui/content-with-illustration";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section";
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight";

export function TherapySection() {
  return (
    <>
      {/* Therapy Types Explanation */}
      <ContentWithIllustration
        title="Individual ~Therapy~ That Works"
        highlightedText="Therapy"
        paragraphs={[
          "Our licensed therapists provide personalized, evidence-based therapy tailored to your unique needs and goals. Whether you're dealing with anxiety, depression, relationship challenges, or simply want to improve your mental wellness, we connect you with professionals trained in proven therapeutic approaches.",
          "From Cognitive Behavioral Therapy (CBT) to Dialectical Behavior Therapy (DBT), mindfulness-based therapies, and more, we ensure you receive the right type of support for your journey to better mental health."
        ]}
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center"
        imageAlt="Therapist in session with client"
        iconSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=64&h=64&fit=crop&crop=center"
        iconAlt="Heart icon representing care"
      />

      <TestimonialsSection1
        quote="The medication management support from OneCare has been life-changing. Having a psychiatrist who actually listens and adjusts treatment based on how I feel is incredible."
        authorName="Michael Chen"
        authorRole="Software Engineer at InnovateLabs"
        avatarSrc="/MichaelChen.png"
      />

      {/* Why Choose OneCare Feature Spotlight */}
      <section className="bg-secondary section-padding-y border-b">
        <AnimatedFeatureSpotlight
          preheaderIcon="🩺"
          preheaderText="Licensed Professionals"
          heading="Expert Care You Can Trust"
          description="All our therapists, psychiatrists, and wellness coaches are fully licensed, regularly supervised, and committed to providing the highest quality mental health care. We maintain rigorous standards to ensure you receive safe, effective, and compassionate treatment."
          buttonText="Find Your Therapist"
          imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=center"
          imageAlt="Medical professional consulting with patient"
        />
      </section>
    </>
  );
}
