import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: allow global CSS side-effect import in Next.js
import "./globals.css";
import {Navbar} from "../Components/Navbar";
import {Footer} from "../Components/Footer";
import Script from "next/script";
import { CurrencyProvider } from "../context/CurrencyContext";
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
    default: "Tools, Essentials & Smart Solutions for Everyday Life | Pocket Ready",
    template: "%s | Pocket Ready"
  },
  description: "Join the PocketReady community. We curate the best tactical gear, survival kits, and everyday carry essentials to empower your preparedness movement. Explore our field-tested gear suggestions for the modern operator.",

icons: {
    icon: [
      { url: '/favicon.ico' }
      
    ]
  },

  
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
  "professional hardware",
  "EDC community",
    "tactical movement",
    "best survival gear suggestions",
    "everyday carry preparedness",
    "tactical equipment reviews",
    "survival kit curation",
    "mission ready gear",
    "PocketReady community"
],




  authors: [{ name: "Pocket Ready" }],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pocket-ready.com/", 
    siteName: "Pocket Ready",
    title: "PocketReady | Operational Readiness Platform",
description: "Equipment, knowledge, and systems designed for modern survival and everyday readiness.",

    // images: [{ url: "https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/view_website.png", width: 1200, height: 630 }
    // ],
  },
  
  // // Metadatos para Twitter/X
  // twitter: {
  //   card: "summary_large_image",
  //   title: "PocketReady | Strategic Gear",
  //   description: "Deploying professional-grade survival solutions.",
  //   images: ["https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/view_website.png"],
  // },
  
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

  alternates: {
    canonical: 'https://pocket-ready.com',
    languages: {
      'en-US': 'https://pocket-ready.com', 
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      

      <body className={`${inter.className} min-h-screen flex flex-col bg-[#080808] text-zinc-400`} suppressHydrationWarning>
        
        <CurrencyProvider>

        <Navbar />

          
        <main className="flex-grow">
          {children}
        </main>


        <Footer />


            </CurrencyProvider>

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



       
        <Script id="json-ld-org" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pocket Ready",
    "url": "https://pocket-ready.com",
    "logo": "/favicon.ico",
    "description": "A community movement dedicated to tactical preparedness and high-quality EDC gear curation.",
    "knowsAbout": ["Tactical Gear", "Survival Skills", "Everyday Carry"]
  },
  
  )}
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