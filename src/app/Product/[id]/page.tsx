// src/app/Product/[id]/page.tsx
import { getProductById } from "../../../lib/db";
import { notFound } from "next/navigation";
import { CheckCircle, Shield, Truck } from "lucide-react";

const cleanImageUrl = (urlData: any): string => {
  if (Array.isArray(urlData)) return urlData[0];
  if (typeof urlData === 'string') {
    return urlData.replace(/[\[\]"']/g, '').split(',')[0].trim();
  }
  return '/placeholder.png';
};


export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  // 1. Desenvolver la promesa de params
  const { id } = await params; 
  
  // 2. Usar el id para buscar el producto
  const product = await getProductById(id);

  if (!product) return notFound();

  const mainImage = cleanImageUrl(product.image_url);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Columna Izquierda: Imagen */}
        <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-tactical-border">
            <img 
              src={mainImage} 
              alt={product.title_en} 
              className="max-h-[500px] w-auto object-contain" 
            />
        </div>

        {/* Columna Derecha: Información y Venta */}
        <div className="flex flex-col justify-center">
          <span className="text-safety-orange font-bold tracking-widest uppercase text-sm mb-2">
            {product.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
            {product.title_en}
          </h1>

          <div className="text-3xl font-bold text-white mb-6">
            ${product.price} <span className="text-text-muted text-lg font-normal">USD</span>
          </div>

          <p className="text-text-muted text-lg leading-relaxed mb-8 border-l-4 border-safety-orange pl-4">
            {product.description_en}
          </p>

          {/* Botón de compra gigante */}
          <a 
            href={product.amazon_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-safety-orange hover:bg-orange-600 text-white text-center font-black text-xl py-4 rounded-xl transition-all shadow-lg shadow-orange-900/20 mb-8 block"
          >
            Comprar ahora en Amazon
          </a>

          {/* Sellos de confianza (Copywriting táctico) */}
          <div className="grid grid-cols-2 gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <Shield className="text-safety-orange" size={20} />
              <span>Garantía de calidad</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="text-safety-orange" size={20} />
              <span>Envío rápido (Prime)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-safety-orange" size={20} />
              <span>Probado en campo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}