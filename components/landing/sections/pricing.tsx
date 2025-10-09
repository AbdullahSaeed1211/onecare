"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tagline } from "@/components/landing/shared/tagline";
import { VariantProps } from "class-variance-authority";
import { Highlighter } from "@/components/ui/highlighter"

const pricingData = {
  plans: [
    {
      name: "Individual Therapy",
      description:
        "Weekly sessions with a licensed therapist tailored to your personal needs.",
      features: [
        { name: "50-minute weekly sessions", tooltip: "One session per week with your dedicated therapist", included: true },
        {
          name: "Licensed therapists",
          tooltip: "All therapists are fully licensed and experienced",
          included: true
        },
        { name: "Flexible scheduling", tooltip: "Book sessions that fit your schedule", included: true },
        { name: "Progress tracking", tooltip: "Monitor your mental health journey", included: true },
        { name: "Psychiatrist consultations", tooltip: "Access to medication management when needed", included: false },
        { name: "Holistic wellness guidance", tooltip: "Nutrition, exercise, and mindfulness support", included: false },
        { name: "Crisis support", tooltip: "24/7 access to mental health professionals during crises", included: false },
        { name: "Family sessions", tooltip: "Involve loved ones in your care when appropriate", included: false },
      ],
      price: 120,
      originalPrice: 150,
      period: "/month",
      variant: "outline",
    },
    {
      name: "Comprehensive Care",
      description:
        "Complete mental health support including therapy, medication management, and wellness guidance.",
      features: [
        { name: "Everything in Individual Therapy", tooltip: "Includes all individual therapy benefits", included: true },
        { name: "Psychiatrist consultations", tooltip: "Access to medication management when needed", included: true },
        { name: "Holistic wellness guidance", tooltip: "Nutrition, exercise, and mindfulness support", included: true },
        { name: "Crisis support", tooltip: "24/7 access to mental health professionals during crises", included: true },
        { name: "Family sessions", tooltip: "Involve loved ones in your care when appropriate", included: true },
        { name: "Flexible scheduling", tooltip: "Book sessions that fit your schedule", included: true },
        { name: "Progress tracking", tooltip: "Monitor your mental health journey", included: true },
        { name: "Priority booking", tooltip: "Get appointments within 24 hours", included: true },
      ],
      price: 250,
      originalPrice: 320,
      period: "/month",
      variant: "default",
      highlighted: true,
      popular: true,
    },
  ],
};

export function PricingSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="pricing-section-title"
      id="pricing"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <Tagline>Pricing</Tagline>
            {/* Main Title */}
            <h2
              id="pricing-section-title"
              className="heading-lg text-foreground"
            >
              Quality care that fits your {""}
              <Highlighter action="underline" color="#FF9800" animationDuration={900} isView delayMs={180}>
                budget
              </Highlighter>
            </h2>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-2 rounded-full text-sm font-medium">
              <Check className="h-4 w-4" />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium">
              <Check className="h-4 w-4" />
              HIPAA compliant & secure
            </div>
            <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-2 rounded-full text-sm font-medium">
              <Check className="h-4 w-4" />
              Licensed professionals only
            </div>
          </div>

          {/* Two-Column Side-by-Side Pricing Cards - Stacks on mobile */}
          <div className="flex w-full flex-col items-center gap-4 md:max-w-3xl md:flex-row md:gap-0">
            {pricingData.plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative p-6 shadow-none sm:p-12 md:rounded-tl-xl md:rounded-tr-none md:rounded-br-none md:rounded-bl-xl md:border-r-0 ${
                  plan.highlighted
                    ? "shadow-[0px_0px_0px_6px_rgba(7,46,106,0.05)] md:rounded-xl md:border-r-1 ring-2 ring-primary/20"
                    : ""
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Content Container */}
                <CardContent className="flex flex-col gap-8 p-0">
                  {/* Plan Header Section */}
                  <div className="flex flex-col gap-6">
                    {/* Plan Title and Description Block */}
                    <div className="relative flex flex-col gap-3">
                      <h3
                        className={`text-lg font-semibold ${
                          plan.highlighted ? "text-primary" : ""
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Display with Currency and Period */}
                    <div className="flex flex-col gap-1">
                      <div className="flex items-end gap-0.5">
                        {plan.originalPrice && (
                          <span className="text-muted-foreground text-lg line-through mr-2">
                            ${plan.originalPrice}
                          </span>
                        )}
                        <span className="text-4xl font-semibold">
                          ${plan.price}
                        </span>
                        <span className="text-muted-foreground text-base">
                          {pricingData.plans[index].period ?? "/month"}
                        </span>
                      </div>
                      {plan.originalPrice && (
                        <span className="text-success text-sm font-medium">
                          Save ${(plan.originalPrice - plan.price)}/month
                        </span>
                      )}
                    </div>

                    {/* Call-to-Action Button */}
                    <Button
                      variant={
                        plan.variant as VariantProps<
                          typeof buttonVariants
                        >["variant"]
                      }
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Features List Section */}
                  <div className="flex flex-col gap-4">
                    {/* Features Header */}
                    <p className="text-sm font-medium text-foreground">
                      {index === 0
                        ? "What's included:"
                        : `Everything in ${
                            pricingData.plans[index - 1].name
                          }, plus:`}
                    </p>
                    {/* Features Grid with Tooltips */}
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className={`flex items-center gap-3 ${!feature.included ? 'opacity-60' : ''}`}>
                          {feature.included ? (
                            <Check className="text-success h-5 w-5 flex-shrink-0" />
                          ) : (
                            <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-muted-foreground/30"></div>
                          )}
                          <span className={`flex-1 text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {feature.name}
                          </span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className={`h-4 w-4 cursor-pointer opacity-70 hover:opacity-100 ${feature.included ? 'text-muted-foreground' : 'text-muted-foreground/50'}`} />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Trust Message */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              💳 Secure payment processing • 🔒 256-bit SSL encryption • 🛡️ Your data is protected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
