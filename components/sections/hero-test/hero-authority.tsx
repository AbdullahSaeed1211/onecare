import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, Award } from "lucide-react";
import Image from "next/image";

export function HeroAuthority() {
  return (
    <section className="min-h-[80vh] bg-background">
      <div className="container-padding-x container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
                Effective, evidence-based therapy you can trust.
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-lg text-muted-foreground font-medium">
                  Join 50,000+ people who have found their therapist with OneCare
                </span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">HIPAA compliant & secure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Licensed professionals only</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View Our Therapists
              </Button>
            </div>
          </div>

          {/* Right Side - Social Proof */}
          <div className="flex flex-col gap-8">
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Covered by Major Insurance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop&crop=center"
                    alt="Blue Cross Blue Shield"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=120&h=60&fit=crop&crop=center"
                    alt="Aetna"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=60&fit=crop&crop=center"
                    alt="UnitedHealthcare"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=60&fit=crop&crop=center"
                    alt="Cigna"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Therapist Video Placeholder */}
            <div className="bg-muted rounded-2xl p-8 text-center">
              <div className="w-full h-48 bg-muted-foreground/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-2" />
                  <p>Meet Our Licensed Therapists</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Watch how our diverse team of professionals creates safe, supportive environments for healing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
