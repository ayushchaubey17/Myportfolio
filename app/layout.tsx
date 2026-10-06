import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayushkumar.dev"),
  title: "Ayush Kumar — Java Backend & MERN Developer",
  description:
    "Java Backend and MERN Developer specializing in Spring Boot, Node.js, Next.js, microservices, REST APIs and full-stack applications.",
  keywords: [
    "Ayush Kumar",
    "Java Backend Developer",
    "MERN Developer",
    "Spring Boot",
    "Node.js",
    "Next.js",
    "Microservices",
    "REST APIs",
    "Full-stack",
    "Chennai",
  ],
  authors: [{ name: "Ayush Kumar", url: "https://ayushkumar.dev" }],
  openGraph: {
    type: "website",
    url: "https://ayushkumar.dev",
    title: "Ayush Kumar — Java Backend & MERN Developer",
    description:
      "Building reliable software systems, from APIs to full-stack products. Spring Boot · Node.js · Next.js · Microservices.",
    siteName: "Ayush Kumar — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar — Java Backend & MERN Developer",
    description:
      "Building reliable software systems, from APIs to full-stack products. Spring Boot · Node.js · Next.js · Microservices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ayush Kumar",
  jobTitle: "Java Backend & MERN Developer",
  email: "mailto:ayush96361570@gmail.com",
  telephone: "+91-9636157030",
  url: "https://ayushkumar.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/ayushchaubey17",
    "https://www.linkedin.com/in/ayush-chaubey-4a9702271/",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Node.js",
    "Next.js",
    "React.js",
    "Microservices",
    "REST APIs",
    "TypeScript",
    "MongoDB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
