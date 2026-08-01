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

const SITE_URL = "https://confeccionesmony.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Confecciones Mony | Clases de Costura Personalizadas en Constitución",
  description:
    "Aprende a coser a tu ritmo con Mony, Profesional en Diseño y Confección de Vestuario con más de 28 años de experiencia. Clases 100% personalizadas, presenciales en Constitución. ¡Escríbeme por WhatsApp!",
  keywords: [
    "clases de costura en Constitución",
    "profesora de costura Constitución",
    "clases de confección Región del Maule",
    "aprender a coser Constitución",
    "arreglos de ropa a domicilio Constitución",
    "modista en Constitución",
    "Confecciones Mony",
    "clases de costura personalizadas",
  ],
  authors: [{ name: "Confecciones Mony" }],
  creator: "Confecciones Mony",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "Confecciones Mony | Clases de Costura Personalizadas en Constitución",
    description:
      "Aprende a coser a tu ritmo con Mony, Profesional en Diseño y Confección de Vestuario con más de 28 años de experiencia. Clases 100% personalizadas, presenciales en Constitución.",
    url: SITE_URL,
    siteName: "Confecciones Mony",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Confecciones Mony | Clases de Costura Personalizadas en Constitución",
    description:
      "Aprende a coser a tu ritmo con Mony, Profesional en Diseño y Confección de Vestuario con más de 28 años de experiencia. Clases 100% personalizadas en Constitución.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Confecciones Mony",
  description:
    "Clases de costura personalizadas en Constitución. Más de 28 años de experiencia en confección y docencia.",
  url: SITE_URL,
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
    "Arreglos de ropa",
    "Diseño de vestuario",
  ],
  founder: {
    "@type": "Person",
    name: "Mony",
    jobTitle: "Profesional en Diseño y Confección de Vestuario y Profesora de Costura",
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
