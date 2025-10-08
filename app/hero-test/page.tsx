import Link from "next/link";
import { Navbar } from "@/components/landing/hero/navbar";
import { HeroEmpathy } from "@/components/sections/hero-test/hero-empathy";
import { HeroAction } from "@/components/sections/hero-test/hero-action";
import { HeroAuthority } from "@/components/sections/hero-test/hero-authority";

export default function HeroTestPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Option 1: Empathy-First */}
      <section className="py-16 bg-muted/30">
        <div className="container-padding-x container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Option 1: The Empathy-First Hero</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lead with a human connection, not with features. This approach makes a visitor feel immediately seen and safe.
            </p>
          </div>
        </div>
      </section>
      <HeroEmpathy />

      {/* Hero Option 2: Action-Oriented */}
      <section className="py-16 bg-muted/30">
        <div className="container-padding-x container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Option 2: The Action-Oriented Hero</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guide the user to the first step immediately. This approach is focused on clarity and reducing overwhelm.
            </p>
          </div>
        </div>
      </section>
      <HeroAction />

      {/* Hero Option 3: Authority & Trust */}
      <section className="py-16 bg-muted/30">
        <div className="container-padding-x container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Option 3: The Authority & Trust Hero</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lead with strong social proof and trust signals. This structure establishes credibility immediately.
            </p>
          </div>
        </div>
      </section>
      <HeroAuthority />

      {/* Footer */}
      <footer className="py-16 bg-background border-t">
        <div className="container-padding-x container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Which Hero Resonates Most?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Each of these hero approaches serves different user needs and psychological states.
            The empathy-first approach works best for users seeking emotional validation.
            The action-oriented approach reduces decision paralysis.
            The authority approach addresses trust and credibility concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
