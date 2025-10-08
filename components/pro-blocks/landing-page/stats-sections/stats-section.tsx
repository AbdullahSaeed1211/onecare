"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Impact</Tagline>
            <h2 className="heading-lg text-foreground">Transforming mental health care</h2>
            <p className="text-muted-foreground">
              Our commitment to accessible, personalized mental health care
              is making a real difference in people&apos;s lives.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  People helped
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  50K+
                </span>

                <p className="text-muted-foreground text-base">
                  Individuals who have found the support they need through our
                  personalized mental health services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Licensed professionals</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  500+
                </span>
                <p className="text-muted-foreground text-base">
                  Certified therapists, psychiatrists, and wellness experts
                  ready to provide personalized care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Satisfaction rate</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  96%
                </span>
                <p className="text-muted-foreground text-base">
                  Our clients report high satisfaction with the quality of care
                  and the ease of accessing services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
