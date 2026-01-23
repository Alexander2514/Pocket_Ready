import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow global CSS side-effect import in Next.js
import "./globals.css";
import {Navbar} from "../Components/Navbar";
import {Footer} from "../Components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Configuración de visualización para móviles
export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {

  metadataBase: new URL('https://pocket-ready.com'), 
    // Título dinámico para SEO
    
    
    

  title: {
    default: "Survival Gear & Tactical Equipment for Everyday Carry | PocketReady",
    template: "%s | PocketReady"
  },
  description: "Your primary loadout for high-stakes environments. Curated tactical intelligence and professional-grade survival hardware for the modern operator.",
   icons:'https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/Logo.jpg'

   ,
keywords: [
  "survival gear",
  "tactical gear",
  "edc gear",
  "emergency preparedness",
  "outdoor survival equipment",
  "everyday carry tools",
  "tactical gear",
  'survival kit',
  'edc tools',
  'mission essentials',
  "professional hardware"
],




  authors: [{ name: "PocketReady Team" }],
  
  // Metadatos para Facebook/WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pocket-ready.com/", 
    siteName: "PocketReady",
    title: "PocketReady | Strategic Survival Gear",
    description: "High-performance solutions for high-stakes environments.",
    images: [{ url: "https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/FullAresenalView.png", width: 1200, height: 630 }],
  },
  
  // Metadatos para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "PocketReady | Strategic Gear",
    description: "Deploying professional-grade survival solutions.",
    images: ["/https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/FullAresenalView.png"],
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


    //GA4
    <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-78W3ZQVPE2"
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-78W3ZQVPE2');
          `}
        </Script>



        {/* Ejemplo: JSON-LD (Datos Estructurados para Google Shopping) */}
        <Script id="json-ld-store" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "PocketReady",
    "url": "https://pocket-ready.com/gears",
    "logo": "https://www.pocket-ready.com/Logo.jpg",
    "image": "https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/ImgProducts.png",
    "description": "Tactical EDC and survival gear for everyday carry and preparedness.",
    "areaServed": "US"
  })}
</Script>



        <Script id="fb-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'TU_PIXEL_ID');
    fbq('track', 'PageView');
  `}


</Script>


<Script id="json-ld-breadcrumbs" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pocket-ready.com"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Tactical Gears",
      "item": "https://pocket-ready.com/gears"
    }]
  })}
</Script>

      </body>
    </html>
  );
}