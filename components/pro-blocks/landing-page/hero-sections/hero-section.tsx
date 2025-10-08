"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Highlighter } from "@/components/ui/highlighter";
import Image from "next/image";

export function HeroSection2() {
  return (
    <section
      className="relative bg-secondary section-padding-y overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Landing Wide Hero Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-6 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-2 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>OneCare</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
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

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Get Started Today</Button>
            <Button variant="ghost">
              How it works
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-1 relative w-full max-w-4xl aspect-[4/3]">
          {/* Background Blob */}
          <div className="absolute inset-0 z-0 rounded-[50%] bg-gradient-to-br from-blue-100 to-green-100 blur-3xl opacity-60"></div>

          {/* Main Image */}
          <div className="absolute inset-8 z-10 rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Therapy session - person talking with mental health professional"
              fill
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
