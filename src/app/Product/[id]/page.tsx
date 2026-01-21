// src/app/Product/[id]/page.tsx
import { getProductById } from "../../../lib/db";
import { notFound } from "next/navigation";
import { Shield, Zap, Truck, RotateCcw, Package, Globe } from "lucide-react";
import ImageGallery from "./ImageGallery";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const product = await getProductById(id);
  if (!product) return notFound();

  const images = Array.isArray(product.image_url) ? product.image_url : [product.image_url];

  return (
    <div className="min-h-screen bg-[#181c2d] text-zinc-300 pt-24 pb-12 px-4">
      
<div className="max-w-7xl mx-auto px-4 lg:px-8"> 
  
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start bg-none">

  <div className="w-full brightness-90 lg:pr-10"> 
    <ImageGallery images={images} title={product.title_en} />
  </div>

          <div className="flex flex-col justify-center pt-8">
  <span className="text-safety-orange/60 font-mono text-sm tracking-[0.5em] uppercase mb-4 opacity-70">
    // INTEL_REPORT_{id.slice(0,4)}
  </span>
  
  <h1 className="text-3xl md:text-5xl xl:text-5xl font-black leading-none italic uppercase tracking-tighter mb-8">
    {product.title_en}
  </h1>

  <div className="flex items-baseline gap-2 mb-6">
    <span className="text-3xl xl:text-3xl font-light tracking-tighter italic text-zinc-300">${product.price}</span>
    <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">USD</span>
  </div>

  <p className="text-zinc-400 ttext-base lg:text-lg leading-relaxed mb-12 border-l-2 border-safety-orange/30 pl-6 italic max-w-2xl font-light">
    {product.description_en}
  </p>

            <a 
              href={product.amazon_link}
              target="_blank"
              className="w-full bg-safety-orange hover:bg-orange-600 text-white text-center font-bold text-sm py-4 rounded-lg transition-all duration-300 uppercase tracking-widest shadow-lg shadow-orange-900/20"
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
    
  );
}