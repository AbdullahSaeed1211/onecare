"use client";

import { Tagline } from "@/components/landing/shared/tagline";
import { Shield, Award, CheckCircle, Star } from "lucide-react";

const insuranceProviders = [
  { name: "Blue Cross Blue Shield", logo: "🏥" },
  { name: "Aetna", logo: "⚕️" },
  { name: "UnitedHealthcare", logo: "🩺" },
  { name: "Cigna", logo: "🏥" },
  { name: "Humana", logo: "⚕️" },
  { name: "Anthem", logo: "🩺" },
  { name: "Kaiser Permanente", logo: "🏥" },
  { name: "Molina Healthcare", logo: "⚕️" },
  { name: "Centene", logo: "🩺" },
  { name: "Oscar Health", logo: "🏥" }
];

const trustIndicators = [
  { icon: Shield, label: "HIPAA Compliant", color: "text-success" },
  { icon: Award, label: "Licensed Providers", color: "text-primary" },
  { icon: CheckCircle, label: "Verified Insurance", color: "text-accent" },
  { icon: Star, label: "4.9★ Rating", color: "text-warning" }
];

export function SocialProofLogoBar() {
  return (
    <div className="py-8 md:py-12">
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <section className="bg-background border-b pt-2">
        <div className="container-padding-x container mx-auto">
        <div className="text-center mb-8">
          <Tagline>Trusted By</Tagline>
          <p className="text-muted-foreground text-sm mt-2">
            We&apos;re proud to partner with leading insurance providers
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <indicator.icon className={`h-5 w-5 ${indicator.color}`} />
              <span className="text-sm font-medium text-foreground">{indicator.label}</span>
            </div>
          ))}
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div
            className="flex"
            style={{
              animation: 'marquee 25s linear infinite',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {/* First set of providers */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 px-4 py-3 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{provider.logo}</span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {provider.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 px-4 py-3 bg-white border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{provider.logo}</span>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {provider.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm font-medium">
            10,000+ clients trust OneCare for their mental health journey
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground ml-2 pb-2">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
