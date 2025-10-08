import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { VariantProps } from "class-variance-authority";
import { FeatureHighlightCard } from "@/components/ui/feature-highlight-card";

const pricingPlans = [
  {
    name: "Individual Therapy",
    description: "Weekly one-on-one sessions with a licensed therapist tailored to your personal needs.",
    price: 120,
    period: "/month",
    features: [
      "50-minute weekly sessions",
      "Licensed therapists",
      "Flexible scheduling",
      "Progress tracking",
      "Secure messaging",
    ],
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Couples Therapy",
    description: "Strengthen your relationship with evidence-based couples counseling from experienced therapists.",
    price: 180,
    period: "/month",
    features: [
      "50-minute weekly sessions",
      "Licensed couples therapists",
      "Relationship-focused tools",
      "Flexible scheduling",
      "Progress tracking",
    ],
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Group Therapy",
    description: "Connect with others facing similar challenges in a supportive group setting.",
    price: 60,
    period: "/month",
    features: [
      "Weekly group sessions",
      "Facilitated by licensed therapists",
      "Peer support network",
      "Structured curriculum",
      "Confidential environment",
    ],
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Wellness Coaching",
    description: "Holistic health guidance combining nutrition, exercise, mindfulness, and lifestyle optimization.",
    price: 80,
    period: "/month",
    features: [
      "Bi-weekly coaching sessions",
      "Personalized wellness plans",
      "Nutrition guidance",
      "Mindfulness exercises",
      "Progress tracking",
    ],
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Comprehensive Care",
    description: "Complete mental health support including therapy, medication management, and wellness guidance.",
    price: 250,
    period: "/month",
    features: [
      "Everything from Individual Therapy",
      "Psychiatrist consultations",
      "Medication management",
      "Holistic wellness guidance",
      "Crisis support (24/7)",
      "Family sessions when appropriate",
      "Priority scheduling",
    ],
    variant: "default" as const,
    popular: true,
  },
];

export function PricingBenefitsSection() {
  return (
    <>
      {/* Comprehensive Pricing Section */}
      <section className="bg-secondary section-padding-y border-b" id="pricing">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col items-center gap-10 md:gap-12">
            <div className="section-title-gap-lg flex max-w-2xl flex-col items-center text-center">
              <Tagline>Pricing</Tagline>
              <h2 className="heading-lg text-foreground">
                Quality care that fits your budget
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose the therapy approach that best fits your needs and lifestyle
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full max-w-7xl">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative p-6 flex flex-col gap-6 ${
                    plan.popular
                      ? "ring-2 ring-primary shadow-lg scale-105"
                      : "shadow-sm"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground text-base">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant={plan.variant as VariantProps<typeof buttonVariants>["variant"]}
                    className="w-full"
                  >
                    Get Started
                  </Button>

                  <div className="flex flex-col gap-3 flex-1">
                    <p className="text-sm font-medium text-foreground">
                      What&apos;s included:
                    </p>
                    <div className="flex flex-col gap-2">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-primary h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

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
