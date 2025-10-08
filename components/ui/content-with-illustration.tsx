import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image'; // Assuming shadcn's utility function

/**
 * Props for the ContentWithIllustration component.
 * @param title - The main heading text.
 * @param highlightedText - The portion of the title to be visually highlighted.
 * @param paragraphs - An array of strings, each representing a paragraph of content.
 * @param imageSrc - URL for the main illustration.
 * @param imageAlt - Alt text for the main illustration.
 * @param iconSrc - URL for the small, animated icon.
 * @param iconAlt - Alt text for the animated icon.
 * @param className - Optional additional CSS classes.
 */
interface ContentWithIllustrationProps {
  title: string;
  highlightedText: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
  iconSrc: string;
  iconAlt?: string;
  className?: string;
}

/**
 * A responsive component that displays text content alongside an illustration,
 * featuring a hand-drawn highlight effect on the title and an animated icon.
 */
export const ContentWithIllustration: React.FC<ContentWithIllustrationProps> = ({
  title,
  highlightedText,
  paragraphs,
  imageSrc,
  imageAlt = 'Illustration',
  iconSrc,
  iconAlt = 'Decorative Icon',
  className,
}) => {
  // Split the title to isolate the part to be highlighted
  const titleParts = title.split(new RegExp(`(${highlightedText})`, 'gi'));

  return (
    <section
      className={cn(
        'w-full max-w-6xl mx-auto px-4 py-12 md:py-20 font-sans',
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {titleParts.map((part, index) =>
              part.toLowerCase() === highlightedText.toLowerCase() ? (
                <span key={index} className="relative inline-block whitespace-nowrap">
                  {/* Enhanced highlight effect with animation */}
                  <span className="relative z-10 px-3 py-2 rounded-xl bg-gradient-to-r from-primary/15 via-accent/20 to-primary/15 shadow-lg border border-primary/20 animate-pulse">
                    <span className="relative bg-gradient-to-r from-primary via-accent-secondary to-primary bg-clip-text text-transparent font-bold drop-shadow-sm">
                      {part}
                    </span>
                  </span>
                  {/* Decorative underline */}
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 w-full h-2 text-primary/60 animate-pulse"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,4 Q25,1 50,4 T100,4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-draw-line"
                    />
                  </svg>
                </span>
              ) : (
                part
              )
            )}
          </h2>
          <div className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="relative flex justify-center items-center h-full">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={64}
            height={64}
            className="absolute top-0 right-0 md:right-10 w-16 h-16 animate-subtle-spin"
            aria-hidden="true"
            priority={false}
          />
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full max-w-sm h-auto object-contain rounded-lg"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};