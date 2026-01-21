import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow global CSS side-effect import in Next.js
import "./globals.css";
import {Navbar} from "../Components/Navbar";
import {Footer} from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

// Configuración de visualización para móviles
export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // Título dinámico para SEO
  title: {
    default: "PocketReady | Strategic Survival & Tactical Gear",
    template: "%s | PocketReady"
  },
  description: "Your primary loadout for high-stakes environments. Curated tactical intelligence and professional-grade survival hardware for the modern operator.",
  keywords: ["tactical gear", "survival kit", "edc tools", "mission essentials", "professional hardware"],
  authors: [{ name: "PocketReady Team" }],
  
  // Metadatos para Facebook/WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pocket-ready.com/", // Cambia por tu dominio real
    siteName: "PocketReady",
    title: "PocketReady | Strategic Survival Gear",
    description: "High-performance solutions for high-stakes environments.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  
  // Metadatos para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "PocketReady | Strategic Gear",
    description: "Deploying professional-grade survival solutions.",
    images: ["/og-image.jpg"],
  },
  
  // Verificación de buscadores y robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#080808] text-zinc-400`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}