import { OnboardingChecklist } from "@/components/ui/onboarding-checklist";

export function OnboardingChecklistSection() {
  return (
    <section className="bg-background section-padding-y">
      <OnboardingChecklist
        title="Your Journey to Better Mental Health Starts Here"
        description="Follow these simple steps to connect with your therapist and begin your path to wellness."
        items={[
          {
            id: 1,
            text: "Complete our 5-minute online assessment",
            helperText: "Help us understand your needs and preferences",
          },
          {
            id: 2,
            text: "Get matched with a licensed therapist",
            helperText: "Our algorithm finds your perfect therapeutic match",
          },
          {
            id: 3,
            text: "Schedule your first session",
            helperText: "Book at a time that works for you",
          },
          {
            id: 4,
            text: "Start your personalized care journey",
            helperText: "Begin healing with evidence-based therapy",
          }
        ]}
        videoThumbnailUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&h=360&fit=crop&crop=center"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  );
}
