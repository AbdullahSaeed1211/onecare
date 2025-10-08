import { AnimatedFeatureCard } from "@/components/ui/animated-feature-card";
import { AvatarCircles } from "@/components/ui/avatar-circles";

export function ProfessionalsSection() {
  return (
    <section className="bg-secondary section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="heading-lg text-foreground">Meet our experts</h2>
            <p className="text-muted-foreground">
              Connect with licensed professionals who specialize in different areas
              of mental health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedFeatureCard
              title="Licensed Therapists"
              description="Professional counselors and therapists specializing in various therapeutic approaches"
              imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=center"
              featureNumber="01"
              handle="@therapists"
            />
            <AnimatedFeatureCard
              title="Psychiatrists"
              description="Medical doctors who can prescribe medication and provide psychiatric care"
              imageSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=center"
              featureNumber="02"
              handle="@psychiatrists"
            />
            <AnimatedFeatureCard
              title="Wellness Coaches"
              description="Holistic health professionals focusing on nutrition, exercise, and mindfulness"
              imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center"
              featureNumber="03"
              handle="@wellness"
            />
          </div>

          <div className="flex flex-col items-center gap-6">
            <AvatarCircles
              numPeople={497}
              avatarUrls={[
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
              ]}
            />
            <p className="text-center text-muted-foreground">
              Join thousands of professionals in our network, all verified and licensed
              to provide the highest quality care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
