import React from 'react';
import { Phone, MessageSquare, Globe, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CrisisResource {
  name: string;
  description: string;
  phone?: string;
  text?: string;
  website?: string;
  available: string;
  urgent?: boolean;
}

interface EmergencyResourcesProps {
  className?: string;
}

const crisisResources: CrisisResource[] = [
  {
    name: "National Suicide Prevention Lifeline",
    description: "24/7 free and confidential support for people in distress",
    phone: "988",
    available: "24/7",
    urgent: true
  },
  {
    name: "Crisis Text Line",
    description: "Free, 24/7 support via text message",
    text: "Text HOME to 741741",
    available: "24/7",
    urgent: true
  },
  {
    name: "National Alliance on Mental Illness (NAMI)",
    description: "Mental health education, support groups, and advocacy",
    phone: "1-800-950-6264",
    website: "https://www.nami.org",
    available: "Mon-Fri 10AM-6PM EST"
  },
  {
    name: "Mental Health America",
    description: "Mental health screening tools and local resources",
    phone: "1-800-950-6264",
    website: "https://www.mhanational.org",
    available: "24/7 online resources"
  }
];

export function EmergencyResources({ className }: EmergencyResourcesProps) {
  return (
    <section className={cn("bg-destructive/5 border-y border-destructive/20", className)}>
      <div className="container-padding-x container mx-auto py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl font-bold text-destructive">
              Need Immediate Help?
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you&apos;re experiencing a mental health crisis or thinking about harming yourself,
            help is available right now. These resources are confidential and free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {crisisResources.map((resource, index) => (
            <Card
              key={index}
              className={cn(
                "relative overflow-hidden",
                resource.urgent && "ring-2 ring-destructive/50 bg-destructive/5"
              )}
            >
              {resource.urgent && (
                <div className="absolute top-0 left-0 right-0 bg-destructive text-destructive-foreground text-xs font-medium py-1 px-3 text-center">
                  URGENT - Available 24/7
                </div>
              )}

              <CardHeader className={cn(resource.urgent && "pt-8")}>
                <CardTitle className="text-lg">{resource.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Available:</span>
                  <span className="text-muted-foreground">{resource.available}</span>
                </div>

                <div className="flex flex-col gap-2">
                  {resource.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="font-mono text-lg font-bold">{resource.phone}</span>
                    </div>
                  )}

                  {resource.text && (
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span className="font-medium">{resource.text}</span>
                    </div>
                  )}

                  {resource.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <Button variant="link" className="h-auto p-0 text-primary" asChild>
                        <a href={resource.website} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 p-6 bg-background rounded-lg border">
          <h3 className="font-semibold mb-2">Remember</h3>
          <p className="text-sm text-muted-foreground">
            You&apos;re not alone. Reaching out for help is a sign of strength, not weakness.
            These services are here to support you whenever you need them.
          </p>
        </div>
      </div>
    </section>
  );
}
