// Utility functions for image processing and placeholders

/**
 * Generate a simple blur placeholder data URL
 * This creates a small colored rectangle that can serve as a blur placeholder
 */
export function generateBlurPlaceholder(color: string = "#f3f4f6", width: number = 10, height: number = 10): string {
  // Create a simple SVG that will be used as blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;

  // Convert SVG to base64 data URL
  const base64 = Buffer.from(svg.trim()).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Generate a gradient blur placeholder that looks more like an image
 */
export function generateGradientBlurPlaceholder(
  colors: string[] = ["#f3f4f6", "#e5e7eb", "#d1d5db"],
  width: number = 10,
  height: number = 10
): string {
  const gradientId = "blurGradient";
  const stops = colors.map((color, index) => {
    const offset = Math.round((index / (colors.length - 1)) * 100);
    return `<stop offset="${offset}%" stop-color="${color}"/>`;
  }).join("");

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          ${stops}
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#${gradientId})"/>
    </svg>
  `;

  const base64 = Buffer.from(svg.trim()).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Common blur placeholders for different use cases
 */
export const blurPlaceholders = {
  // Light gray placeholder for general use
  light: generateBlurPlaceholder("#f3f4f6"),

  // Gradient placeholder that looks more sophisticated
  gradient: generateGradientBlurPlaceholder(),

  // Hero image specific - warm gradient to match healthcare theme
  hero: generateGradientBlurPlaceholder(["#fef7ed", "#fed7aa", "#fdba74"], 12, 8),
} as const;
