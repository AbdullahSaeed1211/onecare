"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroAction() {
  const [selectedIssue, setSelectedIssue] = useState("");

  const getButtonText = () => {
    if (!selectedIssue) return "Get Started";
    return `See Therapists for ${selectedIssue}`;
  };

  return (
    <section className="min-h-[70vh] flex items-center bg-secondary">
      <div className="container-padding-x container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
            Your path to feeling better starts here.
          </h1>

          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-background rounded-full px-6 py-4 shadow-sm border">
              <span className="text-muted-foreground font-medium">I&apos;m looking for support with:</span>
              <Select value={selectedIssue} onValueChange={setSelectedIssue}>
                <SelectTrigger className="w-48 border-none bg-transparent shadow-none focus:ring-0">
                  <SelectValue placeholder="Choose your concern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Anxiety & Stress">Anxiety & Stress</SelectItem>
                  <SelectItem value="Depression">Depression</SelectItem>
                  <SelectItem value="Relationships">Relationships</SelectItem>
                  <SelectItem value="Trauma">Trauma</SelectItem>
                  <SelectItem value="Life Transitions">Life Transitions</SelectItem>
                  <SelectItem value="Self-Esteem">Self-Esteem</SelectItem>
                  <SelectItem value="Grief & Loss">Grief & Loss</SelectItem>
                  <SelectItem value="Addiction">Addiction</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold">
              {getButtonText()}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>

          <p className="mt-6 text-muted-foreground text-sm">
            Free consultation • Licensed professionals • Flexible scheduling
          </p>
        </div>
      </div>
    </section>
  );
}
