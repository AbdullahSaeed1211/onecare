import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const professionals = [
  {
    name: "Dr. Sarah Chen",
    title: "Clinical Psychologist",
    credentials: "PsyD, Licensed",
    specialty: "Anxiety & Depression",
    imageSrc: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    bio: "Dr. Chen specializes in cognitive behavioral therapy and has helped hundreds of clients overcome anxiety and depression. She creates a warm, supportive environment where clients feel heard and understood.",
    yearsExperience: 8,
  },
  {
    name: "Dr. Michael Rodriguez",
    title: "Psychiatrist",
    credentials: "MD, Board Certified",
    specialty: "Medication Management",
    imageSrc: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    bio: "Dr. Rodriguez combines medication management with therapeutic support, focusing on comprehensive mental health care. His approach integrates the latest research with compassionate, personalized treatment plans.",
    yearsExperience: 12,
  },
  {
    name: "Jennifer Walsh",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW, EMDR Certified",
    specialty: "Trauma & PTSD",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Jennifer is passionate about helping survivors heal from trauma. Using EMDR and other evidence-based approaches, she guides clients toward recovery with patience, empathy, and expertise.",
    yearsExperience: 6,
  },
  {
    name: "Dr. Amanda Foster",
    title: "Marriage & Family Therapist",
    credentials: "LMFT, PhD",
    specialty: "Couples & Family Therapy",
    imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Dr. Foster helps couples and families navigate relationship challenges and build stronger connections. Her integrative approach draws from various therapeutic modalities to meet each client's unique needs.",
    yearsExperience: 10,
  },
];

export function ProfessionalsSection() {
  return (
    <section className="bg-secondary section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="heading-lg text-foreground">Meet Our Featured Providers</h2>
            <p className="text-muted-foreground text-lg">
              Connect with licensed professionals who are committed to your mental health journey.
              Each provider brings unique expertise and a compassionate approach to care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {professionals.map((professional, index) => (
              <Card key={index} className="bg-background border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg" />
                    <Avatar className="relative w-20 h-20 ring-4 ring-white shadow-lg">
                      <AvatarImage
                        src={professional.imageSrc}
                        alt={professional.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {professional.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {professional.title}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {professional.credentials}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {professional.specialty}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {professional.bio}
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-sm">
                      {professional.yearsExperience} years experience
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                ].map((url, i) => (
                  <Avatar key={i} className="w-8 h-8 border-2 border-background">
                    <AvatarImage src={url} alt={`Provider ${i + 1}`} />
                    <AvatarFallback>P{i + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                +500 licensed professionals in our network
              </span>
            </div>
            <p className="text-center text-muted-foreground max-w-md">
              All our providers are fully licensed, background-checked, and committed to providing
              evidence-based, compassionate care tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
