"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline>FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Find answers to our frequently asked questions
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              We&apos;ve compiled the most important information to help you get
              the most out of your experience. Can&apos;t find what you&apos;re
              looking for?{" "}
              <Link href="#" className="text-primary underline">
                Contact us.
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Getting Started FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Getting Started
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Getting Started FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I get started with OneCare?
                  </AccordionTrigger>
                  <AccordionContent>
                    Getting started is simple! Complete our brief online assessment
                    to help us understand your needs. Our matching algorithm will
                    then connect you with the most suitable therapist or psychiatrist.
                    You can schedule your first session within 24-48 hours.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What types of therapy do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of therapeutic approaches including CBT,
                    DBT, psychodynamic therapy, couples counseling, and more. Our
                    therapists are trained in multiple modalities and can recommend
                    the best approach for your specific situation and preferences.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Do you accept insurance?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we work with most major insurance providers. During signup,
                    you can provide your insurance information, and we&apos;ll help
                    verify coverage and handle billing. We also offer self-pay options
                    for those without insurance or who prefer not to use it.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What if I need medication?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our psychiatrists can assess your need for medication and prescribe
                    when appropriate. They work closely with your therapist to ensure
                    comprehensive care. Medication management is included in our
                    Comprehensive Care plan, or can be added as a separate service.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Services & Support FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Services & Support
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Services & Support FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    What&apos;s included in each plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our Individual Therapy plan includes weekly 50-minute sessions
                    with a licensed therapist. The Comprehensive Care plan includes
                    everything in Individual Therapy plus psychiatric consultations,
                    medication management, holistic wellness guidance, and 24/7
                    crisis support. Both plans offer flexible scheduling and progress tracking.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    Can I switch therapists if needed?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! We understand that finding the right therapeutic
                    match is important. If you&apos;d like to try a different therapist,
                    simply let us know and we&apos;ll help you find someone who better
                    fits your needs. There&apos;s no penalty for switching within
                    your first few sessions.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    What if I need to cancel or pause my plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can pause or cancel your plan at any time with no penalties.
                    If you pause, we&apos;ll hold your therapist matching for up to
                    3 months. When you&apos;re ready to resume, your care team will
                    be there to continue your journey. We want you to feel in control
                    of your mental health care.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    How do I access crisis support?
                  </AccordionTrigger>
                  <AccordionContent>
                    Crisis support is available 24/7 through our mobile app and
                    helpline. If you&apos;re in immediate danger, please call emergency
                    services (911 in the US) or go to your nearest emergency room.
                    Our crisis counselors can provide immediate support and help
                    you navigate difficult moments.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
