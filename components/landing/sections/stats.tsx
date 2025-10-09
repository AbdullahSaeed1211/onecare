"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/landing/shared/tagline";
import { Users, Award, Heart, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Highlighter } from "@/components/ui/highlighter"

const statsData = [
  {
    icon: Users,
    title: "People helped",
    value: "50K+",
    description: "Individuals who have found the support they need through our personalized mental health services.",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Licensed professionals",
    value: "500+",
    description: "Certified therapists, psychiatrists, and wellness experts ready to provide personalized care.",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Satisfaction rate",
    value: "96%",
    description: "Our clients report high satisfaction with the quality of care and the ease of accessing services.",
    color: "text-accent-secondary"
  }
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
            <Tagline className="animate-on-scroll opacity-0 translate-y-2 transition-all duration-500 delay-100">Impact</Tagline>
            <h2 className="heading-lg text-foreground animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200">Transforming {""}
              <Highlighter action="underline" color="#FF9800" animationDuration={900} isView delayMs={150}>
                mental health
              </Highlighter>{" "}care
            </h2>
            <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-2 transition-all duration-500 delay-300">
              Our commitment to accessible, personalized mental health care
              is making a real difference in people&apos;s lives.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row stagger-children">
            {statsData.map((stat, index) => (
              <Card key={index} className="bg-secondary rounded-xl border-none p-6 shadow-none hover:shadow-lg hover-lift transition-all duration-300 animate-on-scroll opacity-0 translate-y-6">
                <CardContent className="flex flex-col gap-4 p-0 md:gap-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <h3 className="text-primary font-semibold text-lg">
                      {stat.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-foreground text-4xl font-bold md:text-5xl">
                      {stat.value}
                    </span>
                    {stat.value.includes('%') && (
                      <TrendingUp className="h-6 w-6 text-success" />
                    )}
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
