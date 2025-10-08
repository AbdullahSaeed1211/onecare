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
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=813&h=332&fit=crop&crop=center"
              alt="Secure messaging platform"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=480&h=332&fit=crop&crop=center"
              alt="Secure messaging platform"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
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
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=332&fit=crop&crop=center"
              alt="Progress tracking dashboard"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
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
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=480&h=332&fit=crop&crop=center"
              alt="Resource library with books and articles"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
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
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=813&h=332&fit=crop&crop=center"
              alt="Easy scheduling calendar interface"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=332&fit=crop&crop=center"
              alt="Easy scheduling calendar interface"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
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
