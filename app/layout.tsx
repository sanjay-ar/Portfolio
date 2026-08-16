import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sanjay A R — Software Developer at Cisco",
  description:
    "Software developer at Cisco with experience across backend systems, AI/ML, connected healthcare products, and developer automation.",
  generator: "Next.js",
  applicationName: "SANJAY A R",
  keywords: [
    "developer",
    "Cisco",
    "AppDynamics",
    "backend engineer",
    "software developer",
    "AI engineer",
    "automation",
    "machine learning",
    "connected products",
    "smart bed application",
    "Kotlin Android",
    "Naatscorp",
    "INCOIS",
    "react",
    "frontend developer",
    "creative",
    "creative developer",
    "tech",
    "software",
    "portfolio",
    "Sanjay A R",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Sanjay A R — Software Developer at Cisco",
    description:
      "Backend engineering, AI/ML, connected products, and developer automation across Cisco, Naatscorp, and INCOIS.",
    url: "https://portfolio-ar.vercel.app/",
    siteName: "Sanjay A R Portfolio",
    images: [
      {
        url: "https://portfolio-ar.vercel.app/og-experience.png",
        width: 1733,
        height: 907,
        alt: "Sanjay A R — software developer across backend, AI/ML, and connected products",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay A R — Software Developer at Cisco",
    description:
      "Backend engineering, AI/ML, connected products, and developer automation across Cisco, Naatscorp, and INCOIS.",
    images: ["https://portfolio-ar.vercel.app/og-experience.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
