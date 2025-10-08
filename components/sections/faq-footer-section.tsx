import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer";
import { AppointmentBookingForm } from "@/components/ui/appointment-booking-form";

export function FaqFooterSection() {
  return (
    <>
      <FaqSection2 />

      {/* Appointment Booking Form */}
      <section className="bg-secondary section-padding-y border-b">
        <AppointmentBookingForm
          imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center"
        />
      </section>

      <Footer1 />
    </>
  );
}
