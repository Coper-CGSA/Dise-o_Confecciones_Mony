import type { Metadata } from "next";
import { Fraunces, Mulish, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Script font used ONLY inside the logo wordmark, per brand guidelines.
const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const SITE_URL = "https://www.clasesdecosturas.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Confecciones Mony | Clases de Costura Personalizadas en Constitución",
    template: "%s · Confecciones Mony",
  },
  description:
    "Clases de costura 1 a 1 en Constitución, con Mónica Aguayo Varas — Profesional en Diseño y Confección de Vestuario con más de 28 años de experiencia. Iniciación, patronaje, confección, arreglos y costura para emprendimiento. Presencial, en taller o a domicilio.",
  applicationName: "Confecciones Mony",
  keywords: [
    "clases de costura en Constitución",
    "profesora de costura Constitución",
    "clases de confección Región del Maule",
    "aprender a coser Constitución",
    "arreglos de ropa a domicilio Constitución",
    "modista en Constitución",
    "Confecciones Mony",
    "clases de costura personalizadas",
    "Mónica Aguayo Varas",
    "patronaje Constitución",
    "curso de costura Constitución",
  ],
  authors: [{ name: "Mónica Aguayo Varas", url: SITE_URL }],
  creator: "Mónica Aguayo Varas",
  publisher: "Confecciones Mony",
  alternates: {
    canonical: SITE_URL,
  },
  // Favicon assets
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  // Manifest for PWA / Android home screen
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Confecciones Mony · Clases de Costura Personalizadas en Constitución",
    description:
      "Aprende a coser 1 a 1 con Mónica Aguayo Varas, Profesional en Diseño y Confección de Vestuario (+28 años de experiencia). Iniciación, patronaje, confección y arreglos. Presencial en Constitución o a domicilio.",
    url: SITE_URL,
    siteName: "Confecciones Mony",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confecciones Mony — Clases de Costura Personalizadas en Constitución",
        type: "image/png",
      },
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Confecciones Mony — Clases de Costura Personalizadas en Constitución",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confecciones Mony · Clases de Costura Personalizadas en Constitución",
    description:
      "Aprende a coser 1 a 1 con Mónica Aguayo Varas, Profesional en Diseño y Confección de Vestuario (+28 años de experiencia). Presencial en Constitución o a domicilio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Confecciones Mony",
  alternateName: "Clases de Costura Mony",
  description:
    "Clases de costura personalizadas en Constitución. Más de 28 años de experiencia en confección y docencia. Iniciación, patronaje, confección, arreglos y costura orientada a emprendimiento.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand-logo-hires.png`,
  image: `${SITE_URL}/og-image.png`,
  email: "mony.a.varas@gmail.com",
  telephone: "+56981972791",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Constitución",
    addressRegion: "Región del Maule",
    addressCountry: "CL",
  },
  areaServed: "Constitución, Región del Maule, Chile",
  knowsAbout: [
    "Clases de costura",
    "Confección de prendas",
    "Patronaje",
    "Moldaje y corte",
    "Arreglos de ropa",
    "Diseño de vestuario",
    "Costura para emprendimiento",
  ],
  founder: {
    "@type": "Person",
    name: "Mónica Aguayo Varas",
    jobTitle: "Profesional en Diseño y Confección de Vestuario",
    description: "Profesora de costura con más de 28 años de experiencia en confección, diseño y docencia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${mulish.variable} ${dancingScript.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
