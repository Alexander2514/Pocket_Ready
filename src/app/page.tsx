import { ShieldAlert, Crosshair, Map, Zap, BookOpen, Terminal,Activity,Eye,AlertTriangle } from "lucide-react";
import ProductCard from "../Components/Productcard";
import { getAllProducts } from "../lib/db";
import { FieldReports } from "../Components/FieldReports";
import { EdcDoctrine } from "../Components/EdcDoctrine";
import { SituationalAwareness } from "../Components/SituationalAwareness";
import Link from "next/link";

export default async function Home() {
  const products = await getAllProducts();
  
  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1504194103304-47b99fb9c53c?q=80&w=2070')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-1" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-8 animate-pulse">
            <Terminal size={12} /> System Active // 2026
          </div>
          <h1 className="text-7xl md:text-[120px] font-black mb-6 tracking-tighter uppercase italic leading-[0.8]">
            Stay <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">Lethal</span>.
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed tracking-tight">
            Tactical-grade hardware for high-stakes environments. We vet every tool so you don't have to. <span className="text-white font-bold italic">Excellence</span> isn't an option; it's a requirement for the modern operator.
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <div className="h-px w-20 bg-orange-500 self-center" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Scroll to Explore Intel</span>
            <div className="h-px w-20 bg-orange-500 self-center" />
          </div>
        </div>
      </section>

      <EdcDoctrine/>

    
    <SituationalAwareness/>


    <FieldReports/>



      <section className="max-w-7xl mx-auto px-4 py-32 bg-zinc-900">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-6">
    <div>
      <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
        ESSENTIAL <span className="text-safety-orange text-outline">DEPLOYMENT</span>
      </h2>
      
    </div>

    <Link href="/gears" className="group relative">
      <div className="relative px-6 py-2 bg-transparent border border-safety-orange/30 transition-all duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange/5">
        
        <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-safety-orange" />
        <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-safety-orange" />

        <div className="flex items-center gap-4">
          <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] italic">
            All Gears
          </span>
          <svg 
            className="w-4 h-4 text-safety-orange group-hover:translate-x-1 transition-transform" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" 
        id="Catalog">
          {products.slice(0,6).map((product) => {
    // Limpiamos el objeto para que sea un objeto plano (POJO)
    const cleanProduct = JSON.parse(JSON.stringify(product));
    
    return (
      <ProductCard 
        key={cleanProduct.id}
        title={cleanProduct.title_en}
        price={cleanProduct.price}
        image={cleanProduct.image_url}
        rating={cleanProduct.rating}
        link={cleanProduct.amazon_link}
        id={cleanProduct.id}
        is_featured={cleanProduct.is_featured}
      />
    );})}
        </div>
      </section>

      

      

      
    </main>
  );
}