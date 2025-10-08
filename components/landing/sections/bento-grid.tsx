"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/landing/shared/tagline";

export function BentoGrid() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Platform Features</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Everything you need for your mental health journey
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2 hover-lift transition-all duration-300 cursor-pointer group">
            <Image
              src="/bento/bento-1.jpg"
              alt="Therapist and client having a secure video consultation"
              width={813}
              height={332}
              className="hidden w-full h-[332px] object-cover lg:block transition-transform duration-500 group-hover:scale-105"
            />
            <Image
              src="/bento/bento-1.jpg"
              alt="Therapist and client having a secure video consultation"
              width={480}
              height={332}
              className="block w-full h-[332px] object-cover lg:hidden transition-transform duration-500 group-hover:scale-105"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Secure Messaging
              </h3>
              <p className="text-muted-foreground">
                Connect with your therapist between sessions through our confidential messaging portal
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1 hover-lift transition-all duration-300 cursor-pointer group">
            <Image
              src="/bento/bento-2.jpg"
              alt="Mental health progress tracking and goal setting interface"
              width={480}
              height={332}
              className="w-full h-[332px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Progress Tracking
              </h3>
              <p className="text-muted-foreground">
                Visualize your journey and track your goals with your therapist&apos;s guidance
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1 hover-lift transition-all duration-300 cursor-pointer group">
            <Image
              src="/bento/bento-3.jpg"
              alt="Mental health resource library with wellness articles and exercises"
              width={480}
              height={332}
              className="w-full h-[332px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Resource Library
              </h3>
              <p className="text-muted-foreground">
                Access a library of curated articles, worksheets, and wellness exercises
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2 hover-lift transition-all duration-300 cursor-pointer group">
            <Image
              src="/bento/bento-4.jpg"
              alt="Professional healthcare scheduling and appointment booking interface"
              width={813}
              height={332}
              className="hidden w-full h-[332px] object-cover lg:block transition-transform duration-500 group-hover:scale-105"
            />
            <Image
              src="/bento/bento-4.jpg"
              alt="Professional healthcare scheduling and appointment booking interface"
              width={480}
              height={332}
              className="block w-full h-[332px] object-cover lg:hidden transition-transform duration-500 group-hover:scale-105"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Easy Scheduling
              </h3>
              <p className="text-muted-foreground">
                Book, reschedule, or cancel your sessions easily from your personal dashboard
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
