import { ShieldAlert, Crosshair, Map, Zap, BookOpen, Terminal,Activity,Eye,AlertTriangle } from "lucide-react";
import ProductCard from "../Components/Productcard";
import { getAllProducts } from "../lib/db";
import { intelReports } from "./intelreports";
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
    {/* EDC Doctrine */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-black italic uppercase leading-none mb-6">The EDC<br/><span className="text-safety-orange">Doctrine</span></h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Every tool in your pockets must serve a purpose. We analyze weight-to-utility ratios to ensure your primary loadout is optimized for any urban or wilderness encounter.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-black border border-zinc-800 rounded-lg">
              <Activity className="text-safety-orange mb-4" size={20} />
              <h4 className="font-bold uppercase text-sm mb-2 text-white">Versatility Index</h4>
              <p className="text-zinc-500 text-xs italic leading-snug">We prioritize items that solve at least 3 distinct problems. A knife isn't just a blade; it's a lever, a pry-bar, and a lifeline.</p>
            </div>
            <div className="p-6 bg-black border border-zinc-800 rounded-lg">
              <Eye className="text-safety-orange mb-4" size={20} />
              <h4 className="font-bold uppercase text-sm mb-2 text-white">Low Profile Ops</h4>
              <p className="text-zinc-500 text-xs italic leading-snug">The best gear doesn't scream 'tactical'. We select tools that blend into your daily attire while maintaining mil-spec performance.</p>
            </div>
          </div>
        </div>
      </section>

    {/* Situational Awareness */}
    <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AlertTriangle className="text-safety-orange mx-auto mb-6 animate-pulse" size={40} />
          <h3 className="text-3xl font-black uppercase italic mb-8">Situational Awareness</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="border-l border-zinc-800 pl-6">
              <span className="text-safety-orange font-mono text-xs uppercase tracking-widest">Fact 01</span>
              <p className="text-zinc-400 text-sm italic mt-2">"Ounces equal pounds, and pounds equal pain." Keep your EDC under 1.5lbs for maximum mobility.</p>
            </div>
            <div className="border-l border-zinc-800 pl-6">
              <span className="text-safety-orange font-mono text-xs uppercase tracking-widest">Fact 02</span>
              <p className="text-zinc-400 text-sm italic mt-2">Stainless steel (304/316) is king for humidity, but High-Carbon steel (D2/1095) wins in edge retention. Know your environment.</p>
            </div>
          </div>
        </div>
      </section>

    {/* Field Reports */}
    <section className="py-24 border-t border-zinc-900 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-2">
                Field Reports
              </h2>
              <p className="text-safety-orange font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                // INTEL, TACTICS & REVIEWS
              </p>
            </div>
            
            <a href="/blog" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-safety-orange transition-colors">
              View All Logs
              <span className="block h-[1px] w-8 bg-zinc-700 group-hover:bg-safety-orange transition-colors" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelReports.map((report, index) => (
    <a 
      key={report.id}
      href={report.link}
      target="_blank"
      style={{ animationDelay: `${index * 1.5}s` }} 
      className="group block relative bg-zinc-900/30 border border-zinc-800/50 overflow-hidden rounded-xl transition-all duration-500 
                 animate-mobile-scan 
                 hover:border-safety-orange/50 hover:bg-zinc-900/50"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={report.image} 
          alt={report.title}
          
          className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
        
        {/* Badge táctico mejorado */}
        <div className="absolute top-4 left-4 z-30">
          <span className="bg-black/80 backdrop-blur-md border border-zinc-700 px-3 py-1 text-[9px] font-black text-safety-orange uppercase tracking-[0.2em]">
            {report.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold text-white uppercase mb-4 italic group-hover:text-safety-orange transition-colors duration-300">
          {report.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 font-light italic">
          {report.excerpt}
        </p>
        
        {/* Indicador de acción */}
        <div className="mt-6 flex items-center gap-2">
          <div className="h-[1px] w-8 bg-zinc-800 group-hover:w-12 group-hover:bg-safety-orange transition-all duration-500" />
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400">
            View Intel
          </span>
        </div>
      </div>
    </a>
  ))}
          </div>
          
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-4 py-32 bg-zinc-900">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-orange-500" />
             <h2 className="text-sm font-mono text-orange-500 tracking-[0.3em] uppercase">PRIMARY LOADOUT //</h2>
          </div>
          <h3 className="text-4xl font-black uppercase italic text-zinc-300 "> Essential Deployments</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" 
        id="Catalog">
          {products.map((product) => {
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