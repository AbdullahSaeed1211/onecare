"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Calendar, Clock, User, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface AppointmentBookingFormProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (details: {
    name: string;
    email: string;
    serviceType: string;
    preferredDate: string;
    preferredTime: string;
    concerns: string;
  }) => void;
}

export const AppointmentBookingForm = React.forwardRef<HTMLDivElement, AppointmentBookingFormProps>(
  ({ className, imageUrl, title = "Book Your First Session", subtitle = "Take the first step towards better mental health. Connect with a licensed professional today.", onSubmit, ...props }, ref) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [serviceType, setServiceType] = React.useState("");
    const [preferredDate, setPreferredDate] = React.useState("");
    const [preferredTime, setPreferredTime] = React.useState("");
    const [concerns, setConcerns] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.({ name, email, serviceType, preferredDate, preferredTime, concerns });
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100 },
      },
    };

    return (
      <div
        className={cn("w-full max-w-6xl mx-auto p-4 lg:p-8", className)}
        ref={ref}
        {...props}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-background rounded-lg overflow-hidden min-h-[400px] lg:min-h-[500px]">
          {/* Left Side: Booking Form */}
          <motion.div
            className="p-4 sm:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{title}</h2>
              <p className="text-muted-foreground">{subtitle}</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <Select value={serviceType} onValueChange={setServiceType} required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select the type of therapy you need" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Therapy</SelectItem>
                    <SelectItem value="couples">Couples Therapy</SelectItem>
                    <SelectItem value="group">Group Therapy</SelectItem>
                    <SelectItem value="psychiatric">Psychiatric Consultation</SelectItem>
                    <SelectItem value="coaching">Wellness Coaching</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Preferred Date
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Preferred Time
                  </Label>
                  <Select value={preferredTime} onValueChange={setPreferredTime}>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-2">
                <Label htmlFor="concerns">Brief Description of Your Concerns (Optional)</Label>
                <Textarea
                  id="concerns"
                  placeholder="Tell us a bit about what brings you here and what you'd like to work on..."
                  value={concerns}
                  onChange={(e) => setConcerns(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground">
                    Your information is 100% confidential. This initial 15-minute chat is free and helps us find the best fit for you.
                  </p>
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Free 15-minute consultation • No commitment required
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center"
            variants={itemVariants}
          >
            {/* Halo Circle Background */}
            <div className="absolute w-80 h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl" />

            {/* Image Container */}
            <div className="relative z-10 w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt="Therapy consultation session"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);

AppointmentBookingForm.displayName = "AppointmentBookingForm";
