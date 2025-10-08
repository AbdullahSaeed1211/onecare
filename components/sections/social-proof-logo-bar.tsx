"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const insuranceProviders = [
  "Blue Cross Blue Shield",
  "Aetna",
  "UnitedHealthcare",
  "Cigna",
  "Humana",
  "Anthem",
  "Kaiser Permanente",
  "Molina Healthcare",
  "Centene",
  "Oscar Health"
];

export function SocialProofLogoBar() {
  return (
    <>
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
      <section className="bg-background border-b py-12">
        <div className="container-padding-x container mx-auto">
        <div className="text-center mb-8">
          <Tagline>Trusted By</Tagline>
          <p className="text-muted-foreground text-sm mt-2">
            We&apos;re proud to partner with leading insurance providers
          </p>
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
                className="flex-shrink-0 mx-4 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm whitespace-nowrap"
              >
                {provider}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {insuranceProviders.map((provider, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm whitespace-nowrap"
              >
                {provider}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            10,000+ clients trust OneCare for their mental health journey
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
