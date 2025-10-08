"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Tagline } from "@/components/landing/shared/tagline";
import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";

export function HeroContent() {
  return (
    <section
      className="relative bg-secondary section-padding-y overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle Hero Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
      </div>
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-6 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-[0_0_40%] flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>OneCare</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Quality{" "}
              <Highlighter action="underline" color="#FF9800" animationDuration={800} isView>
                mental health
              </Highlighter>{" "}
              support, made simple and{" "}
              <Highlighter action="highlight" color="#87CEFA" animationDuration={800} isView>
                accessible
              </Highlighter>
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Connect with licensed therapists, psychiatrists, and wellness professionals
              for personalized care that fits your lifestyle and goals
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Licensed therapists and psychiatrists
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Both online and in-person sessions
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Personalized care that fits your schedule
              </span>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="text-success h-4 w-4" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-success h-4 w-4" />
              <span>Free initial consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-success h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
            <Button size="lg" className="text-base px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="text-base px-6 py-3 border-2 hover:bg-accent hover:border-accent">
              How it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-[0_0_60%] relative w-full max-w-4xl aspect-[4/3]">
          {/* Main Image */}
          <div className="absolute inset-4 z-10 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <Image
              src="/hero.jpg"
              alt="Professional therapist providing compassionate mental health care in a comfortable, modern setting"
              fill
              priority
              className="h-full w-full object-cover"
            />
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
