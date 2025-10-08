import { FaqSection } from "@/components/landing/sections/faq";
import { Footerdemo } from "@/components/ui/footer-section";
import { AppointmentBookingForm } from "@/components/ui/appointment-booking-form";

export function FaqFooterSection() {
  return (
    <>
      <FaqSection />

      {/* Appointment Booking Form */}
      <section className="bg-secondary section-padding-y border-b">
        <AppointmentBookingForm
          imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center"
        />
      </section>


      <Footerdemo />
    </>
  );
}
