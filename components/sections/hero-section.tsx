"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/navbar";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section";
import { OneCareBreadcrumb } from "@/components/ui/breadcrumb";

export function HeroSection() {
  return (
    <>
      <LpNavbar1 />

      {/* Breadcrumb Navigation */}
      <section className="bg-background border-b">
        <div className="container-padding-x container mx-auto py-4">
          <OneCareBreadcrumb />
        </div>
      </section>

      <HeroSection2 />
    </>
  );
}
