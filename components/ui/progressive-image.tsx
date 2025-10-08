"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps extends Omit<ImageProps, 'onLoad' | 'onError' | 'placeholder'> {
  blurDataURL?: string;
  transitionDuration?: number;
  onLoad?: () => void;
}

export function ProgressiveImage({
  src,
  blurDataURL,
  alt,
  className,
  width,
  height,
  fill = false,
  priority = false,
  transitionDuration = 500,
  onLoad,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Still show the blur placeholder if main image fails
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Main Image with Next.js built-in blur placeholder */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className={cn(
          "h-full w-full object-cover transition-all ease-out",
          isLoaded
            ? "opacity-100 scale-100"
            : blurDataURL
            ? "opacity-100 scale-100" // Keep visible with blur placeholder
            : "opacity-0 scale-105" // Hide until loaded if no blur placeholder
        )}
        style={{
          transitionDuration: `${transitionDuration}ms`,
        }}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading overlay for better UX when no blur placeholder */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  );
}
