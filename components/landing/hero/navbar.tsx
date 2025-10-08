"use client";

import { Logo } from "@/components/landing/shared/logo";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Find a therapist", href: "#therapists" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-2 md:flex-row md:gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href} className="touch-manipulation">
        <Button
          variant="ghost"
          className="w-full md:w-auto justify-start md:justify-center min-h-12 md:min-h-10 touch-manipulation active:scale-95 transition-all duration-200 hover:bg-accent/10 hover:text-accent-foreground"
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="touch-manipulation">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-12 items-center justify-center md:hidden touch-manipulation active:scale-95 transition-transform"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <ContactModal>
            <Button variant="outline" className="hover:scale-105 transition-all duration-200">Contact Us</Button>
          </ContactModal>
          <Link href="#pricing">
            <Button className="hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-3 pb-4 md:hidden border-t pt-4 mt-4">
            <NavMenuItems />
            <div className="flex flex-col gap-3 pt-2">
              <ContactModal>
                <Button variant="outline" className="w-full min-h-12 touch-manipulation active:scale-95 hover:scale-105 transition-all duration-200">
                  Contact Us
                </Button>
              </ContactModal>
              <Link href="#pricing" className="touch-manipulation">
                <Button className="w-full min-h-12 touch-manipulation active:scale-95 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
