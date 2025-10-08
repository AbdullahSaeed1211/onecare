"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsSectionProps {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
}

export default function TestimonialsSection({
  quote = "MindSpace is like having a photographic memory for every meeting. We reduced the follow-up emails by 80%.",
  authorName = "David Park",
  authorRole = "Engineering Manager at TechCorp",
  avatarSrc = "/DavidPark.png",
}: TestimonialsSectionProps) {
  return (
    <section
      className="container-padding-x section-padding-y flex flex-col items-center border-b bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex max-w-2xl flex-col items-center gap-8">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-center text-xl font-medium text-foreground leading-relaxed md:text-3xl"
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 rounded-xl ring-2 ring-primary/20 md:h-14 md:w-14">
            <AvatarImage src={avatarSrc} alt={authorName} />
          </Avatar>

          {/* Author Details */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
            <span className="text-base font-semibold text-foreground">
              {authorName}
            </span>
            <span className="hidden text-muted-foreground md:inline-block">
              •
            </span>
            <span className="text-base text-muted-foreground">{authorRole}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
