import { OfferCarousel } from "@/components/ui/offer-carousel";

export function ServicesCarouselSection() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto mb-8">
        <div className="text-center mb-8">
          <h2 className="heading-lg text-foreground mb-4">Comprehensive Mental Health Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the therapy approach that best fits your needs and lifestyle
          </p>
        </div>
      </div>
      <OfferCarousel
        offers={[
          {
            id: 1,
            imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=center",
            imageAlt: "Individual therapy session",
            tag: "$120/month",
            title: "Individual Therapy",
            description: "Weekly one-on-one sessions with a licensed therapist tailored to your personal needs and goals.",
            brandLogoSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=center",
            brandName: "OneCare",
            promoCode: "FIRSTSESSION",
            href: "/therapy/individual"
          },
          {
            id: 2,
            imageSrc: "https://images.unsplash.com/photo-1516585427168-01b4e89712ad?w=400&h=300&fit=crop&crop=center",
            imageAlt: "Couples therapy session",
            tag: "$180/month",
            title: "Couples Therapy",
            description: "Strengthen your relationship with evidence-based couples counseling from experienced therapists.",
            brandLogoSrc: "https://images.unsplash.com/photo-1516585427168-01b4e89712ad?w=80&h=80&fit=crop&crop=center",
            brandName: "OneCare",
            promoCode: "COUPLES20",
            href: "/therapy/couples"
          },
          {
            id: 3,
            imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
            imageAlt: "Group therapy session",
            tag: "$60/month",
            title: "Group Therapy",
            description: "Connect with others facing similar challenges in a supportive group setting led by experienced facilitators.",
            brandLogoSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&h=80&fit=crop&crop=center",
            brandName: "OneCare",
            promoCode: "GROUP50",
            href: "/therapy/group"
          },
          {
            id: 4,
            imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
            imageAlt: "Wellness coaching session",
            tag: "$80/month",
            title: "Wellness Coaching",
            description: "Holistic health guidance combining nutrition, exercise, mindfulness, and lifestyle optimization.",
            brandLogoSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop&crop=center",
            brandName: "OneCare",
            promoCode: "WELLNESS",
            href: "/coaching/wellness"
          }
        ]}
      />
    </section>
  );
}
