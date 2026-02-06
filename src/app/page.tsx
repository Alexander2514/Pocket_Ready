import { ShieldAlert, Crosshair, Map, Zap, BookOpen, Terminal,Activity,Eye,AlertTriangle } from "lucide-react";
import ProductCard from "../Components/Productcard";
import { getAllProducts } from "../lib/db";
import { FieldReports } from "../Components/FieldReports";
import { EdcDoctrine } from "../Components/EdcDoctrine";
import { SituationalAwareness } from "../Components/SituationalAwareness";
import TheSovereign from "../Components/TheSovereign";
import Link from "next/link";

export const revalidate = 1000; 

export default async function Home() {

  
  const products = await getAllProducts();
 



  
  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      
      
   <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-20"/>
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-1" />

  <div className="relative z-10 max-w-5xl">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-500 font-mono text-[9px] tracking-[0.4em] uppercase mb-6 animate-pulse">
      <Terminal size={10} /> Intel Link Active // 2026
    </div>

    <h1 className="text-4xl md:text-[75px] font-black mb-6 tracking-tighter uppercase italic leading-[0.85] text-zinc-300">
      Preparedness Fits <br className="hidden md:block" />
      in Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">Pocket</span>.
    </h1>

    <p className="max-w-lg mx-auto text-zinc-200 text-base md:text-lg font-light leading-relaxed tracking-tight mb-10">
     Field-tested tools, intelligence-driven guidance, and everyday readiness for those who take responsibility seriously. 
    </p>

    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center gap-4">
        <div className="h-px w-12 bg-orange-500/50 self-center" />
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600">Scroll to Explore</span>
        <div className="h-px w-12 bg-orange-500/50 self-center" />
      </div>
      <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent" />
    </div>
  </div>
</section>

    <TheSovereign/>


      <EdcDoctrine/>

    
   


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
          {(products ?? []).slice(0,6).map((product) => {
    // Limpiamos el objeto para que sea un objeto plano (POJO)
    const cleanProduct =   JSON.parse(JSON.stringify(product));
    
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

      
     
      <SituationalAwareness/>


      
    </main>
  );
}