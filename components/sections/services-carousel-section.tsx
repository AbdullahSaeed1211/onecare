import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, MessageSquare, Sparkles } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Individual Therapy",
    price: "$120/month",
    description: "Weekly one-on-one sessions with a licensed therapist tailored to your personal needs and goals.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=center",
    icon: MessageSquare,
    features: ["50-minute weekly sessions", "Personalized treatment plan", "Flexible scheduling"]
  },
  {
    title: "Couples Therapy",
    price: "$180/month",
    description: "Strengthen your relationship with evidence-based couples counseling from experienced therapists.",
    imageSrc: "https://images.unsplash.com/photo-1516585427168-01b4e89712ad?w=400&h=300&fit=crop&crop=center",
    icon: Heart,
    features: ["Joint and individual sessions", "Communication tools", "Relationship building"]
  },
  {
    title: "Group Therapy",
    price: "$60/month",
    description: "Connect with others facing similar challenges in a supportive group setting led by experienced facilitators.",
    imageSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    icon: Users,
    features: ["Weekly group sessions", "Peer support network", "Structured curriculum"]
  },
  {
    title: "Wellness Coaching",
    price: "$80/month",
    description: "Holistic health guidance combining nutrition, exercise, mindfulness, and lifestyle optimization.",
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    icon: Sparkles,
    features: ["Bi-weekly coaching", "Personalized wellness plans", "Holistic approach"]
  }
];

export function ServicesCarouselSection() {
  return (
    <section className="bg-secondary section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">Comprehensive Mental Health Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the therapy approach that best fits your needs and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-background border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-foreground hover:bg-white">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="w-full group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
