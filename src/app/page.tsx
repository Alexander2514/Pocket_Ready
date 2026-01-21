import { ShieldAlert, Crosshair, Map, Zap, BookOpen, Terminal,Activity,Eye,AlertTriangle } from "lucide-react";
import ProductCard from "../Components/Productcard";
import { getAllProducts } from "../lib/db";

export default async function Home() {
  const products = await getAllProducts();
  
  return (
    <main className="bg-black min-h-screen text-white">
      
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

      <section className="max-w-7xl mx-auto px-4 py-32 bg-zinc-900">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-orange-500" />
             <h2 className="text-sm font-mono text-orange-500 tracking-[0.3em] uppercase">PRIMARY LOADOUT //</h2>
          </div>
          <h3 className="text-5xl font-black uppercase italic"> Essential Deployments</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

      <section className="bg-zinc-900 py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-black uppercase italic">Field Reports</h2>
                <p className="text-zinc-500 text-sm font-mono uppercase">Intel, Tactics & Reviews</p>
              </div>
              <button className="text-xs font-bold uppercase border-b border-orange-500 text-orange-500 pb-1">View All Logs</button>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                 <div className="h-48 bg-zinc-800 mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1533675116901-706796c34f0e?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h4 className="text-xl font-bold uppercase group-hover:text-orange-500 transition-colors">Top 5 Blades for Urban Survival</h4>
                 <p className="text-zinc-500 text-sm mt-2">Critical intel on blade geometry and steel composition for the daily operator...</p>
              </div>
              <div className="group cursor-pointer">
                 <div className="h-48 bg-zinc-800 mb-4 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1590234710161-04285f57fc1c?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
                 <h4 className="text-xl font-bold uppercase group-hover:text-orange-500 transition-colors">Water Purification Protocols</h4>
                 <p className="text-zinc-500 text-sm mt-2">When the grid goes down, hydration is your first priority. Here is how to stay safe...</p>
              </div>
           </div>
        </div>
      </section>

      
    </main>
  );
}