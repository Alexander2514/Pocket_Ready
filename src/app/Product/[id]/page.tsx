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
      <div className="max-w-5xl mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center bg-none">
          
          <div className="w-full brightness-75">
             <ImageGallery images={images} title={product.title_en} />
          </div>

          <div className="flex flex-col">
  <span className="text-safety-orange/60 font-mono text-[9px] tracking-[0.5em] uppercase mb-1">
    // INTEL_REPORT_{id.slice(0,4)}
  </span>
  
  <h1 className="text-xl md:text-2xl font-black text-zinc-300 mb-4 leading-tight uppercase italic tracking-tight">
    {product.title_en}
  </h1>

  <div className="flex items-baseline gap-2 mb-6">
    <span className="text-3xl font-light text-zinc-100">${product.price}</span>
    <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">USD</span>
  </div>

  <p className="text-zinc-400 text-sm leading-relaxed mb-8 border-l border-zinc-800/50 pl-4 italic font-light">
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