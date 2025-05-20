import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; // ← ici

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boli Conseil – Cabinet de conseil juridique",
  description: "Votre sécurité juridique, notre priorité. Découvrez nos services premium en droit du travail, contentieux, contrats et accompagnement d'entreprise.",
  keywords: [
    "Boli Conseil", 
    "cabinet juridique", 
    "droit du travail", 
    "avocat", 
    "conseil juridique", 
    "entreprises",
    "rédaction de contrat",
    "litiges",
    "conseil aux entreprises",
    "juriste Paris",
    "avocat conseil",
    "cabinet d'avocats premium"
  ],
  authors: [{ name: "Boli Conseil", url: "https://boli-conseil.fr" }],
  creator: "Boli Conseil",
  publisher: "Boli Conseil",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Boli Conseil – Cabinet de conseil juridique",
    description: "Votre sécurité juridique, notre priorité. Prestations juridiques haut de gamme.",
    url: "https://boli-conseil.fr",
    siteName: "Boli Conseil",
    images: [
      {
        url: "https://boli-conseil.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boli Conseil – Votre sécurité juridique",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boli Conseil",
    description: "Votre sécurité juridique, notre priorité.",
    creator: "@boliconseil",
    images: ["https://boli-conseil.fr/og-image.jpg"],
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
       <head>
        <link rel="canonical" href="https://boli-conseil.fr" />
      </head>
      <body
        className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
