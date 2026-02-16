import { getProductById } from "../../../lib/db";
import { notFound } from "next/navigation";
import { Shield, Zap, Truck, RotateCcw, Package, Globe } from "lucide-react";
import ImageGallery from "./ImageGallery";
import Script from "next/script";
import { Metadata } from 'next';
import PriceDisplay from "./priceDisplay";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export const revalidate = 1000; 


// --- FUNCIÓN DE METADATOS ---
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title_en ,
    description: product.description_en,
    alternates: {
      canonical: `https://pocket-ready.com/product/${id}`,
    },
    openGraph: {
      title: product.title_en,
      description: product.description_en,
      images: Array.isArray(product.image_url) ? product.image_url : [product.image_url],
      type: 'website',
    },
  };
}



export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params; 
  const product = await getProductById(id);
  if (!product) return notFound();

  const images = Array.isArray(product.image_url) ? product.image_url : [product.image_url];

  

  return (
    <>

   <Script
  id="json-ld-product"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title_en,
      "image": images[0],
      "description": product.description_en,
      "sku": id,
      "category": "Tactical Gear / EDC",
      "brand": {
        "@type": "Brand",
        
        "name": product.brand_name || "PocketReady Curated" 
      },
      "offers": {
        "@type": "Offer",
        "url": product.amazon_link,
        "priceCurrency": "USD",
        "price": product.price, 
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Amazon",
          "url": "https://amazon.com"
        }
      }
    })
  }}
/>


<Script
  id="json-ld-breadcrumb-product"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pocket-ready.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tactical Gears",
          "item": "https://pocket-ready.com/gears"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": product.title_en,
          "item": `https://pocket-ready.com/product/${id}`
        }
      ]
    })
  }}
/>


    <div className="min-h-screen bg-[#181c2d] text-zinc-300 pt-24 pb-12 px-4">
      
<div className="max-w-7xl mx-auto px-4 lg:px-8"> 
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start bg-none">

  <div className="w-full brightness-90 lg:pr-10"> 
    <ImageGallery images={images} title={product.title_en} />
  </div>

          <div className="flex flex-col justify-center pt-8">
  
  
  <h1 className="text-3xl md:text-5xl xl:text-5xl font-black leading-none italic uppercase tracking-tighter mb-8 text-zinc-300">
    {product.title_en}
  </h1>

  <PriceDisplay price={Number(product.price)} />

  {/* Busca donde renderizas la descripción y cámbialo por esto: */}
<div className="space-y-6">
  {product.description_en
    .split(/\\n\\n|\n\n|\/n \/n/) // Detecta \n\n literal, salto de línea real, o /n /n
    .map((paragraph: string, index: Key | null | undefined) => (
      <p 
        key={index} 
        className="leading-relaxed text-[17px] text-zinc-400 font-light opacity-90"
      >
        {paragraph.trim()}
      </p>
    ))}
</div>

            <a 
              href={product.amazon_link}
              target="_blank"
              className="w-full bg-safety-orange hover:bg-orange-600 text-white text-center font-bold text-sm py-4 rounded-lg transition-all duration-300 uppercase tracking-widest shadow-lg shadow-orange-900/20 mt-10"
            >
              buy on Amazon
            </a>

            
            <div className="grid grid-cols-2 gap-y-4 mt-12 pt-8 border-t border-zinc-900">
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold text-zinc-500">
                <Shield className="text-safety-orange/60" size={14} /> Quality Verified
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold text-zinc-500">
                <Truck className="text-safety-orange/60" size={14} /> Global Logistics
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold text-zinc-500">
                <RotateCcw className="text-safety-orange/60" size={14} /> Return Protocol
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold text-zinc-500">
                <Globe className="text-safety-orange/60" size={14} /> Tactical Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}