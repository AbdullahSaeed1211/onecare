"use client";

import { User, MessageSquare, Heart, Calendar } from "lucide-react";
import { Tagline } from "@/components/landing/shared/tagline";

export function FeatureSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How it works</Tagline>
          <h2 className="heading-lg text-foreground">
            Your path to better mental health
          </h2>
          <p className="text-muted-foreground text-base">
            We make finding and accessing quality mental health care simple,
            connecting you with licensed professionals who understand your unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <User className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Tell us about yourself</h3>
              <p className="text-muted-foreground">
                Complete a simple assessment to help us understand your needs
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <MessageSquare className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Get matched</h3>
              <p className="text-muted-foreground">
                Our algorithm connects you with the perfect therapist or psychiatrist
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Heart className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Start your journey</h3>
              <p className="text-muted-foreground">
                Begin therapy sessions that fit your schedule and preferences
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Calendar className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Grow and heal</h3>
              <p className="text-muted-foreground">
                Experience ongoing support and progress tracking with your care team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
