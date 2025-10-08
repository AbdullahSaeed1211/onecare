import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OneCare - Modern Wellness & Mental Health Services",
  description:
    "Connect with licensed therapists, psychiatrists, and wellness professionals for personalized mental health care. Quality support that fits your lifestyle, schedule, and goals.",
  openGraph: {
    images: [
      {
        url: "public/logo.png",
        width: 40,
        height: 40,
        alt: "OneCare Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
