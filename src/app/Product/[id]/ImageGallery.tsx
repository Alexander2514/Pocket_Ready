"use client";
import { useState, useEffect } from 'react';

export default function ImageGallery({ images, title }: { images: string[], title: string }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, 4000); // Aumentado a 4s para reducir errores de carga (NS_BINDING_ABORTED)
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full space-y-8">
      
      <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-zinc-800/80 bg-[#0a0a0a] flex items-center justify-center p-10 lg:p-16 shadow-2xl">
        
        {/* Decoraciones tácticas */}
        <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-safety-orange/40" />
        <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-safety-orange/40" />
        
        <div className="absolute top-6 right-8 flex items-center gap-2">
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">System: Active</span>
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>

        
        <img 
          src={images[selected]} 
          alt={title}
          className="relative z-10 max-h-[85%] w-auto object-contain transition-all duration-1000 brightness-[0.85] contrast-[1.1] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] lg:scale-110" 
        />
        
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none"/>
      </div>

      
      <div className="flex justify-center gap-4">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-16 h-16 xl:w-20 xl:h-20 rounded-2xl border transition-all duration-300 bg-zinc-900/40 p-2 ${
              selected === idx 
              ? 'border-safety-orange scale-110 shadow-lg shadow-orange-500/20 bg-safety-orange/5' 
              : 'border-zinc-800/50 opacity-40 hover:opacity-100'
            }`}
          >
            <img src={img} className="w-full h-full object-contain rounded-lg brightness-75 group-hover:brightness-100" />
          </button>
        ))}
      </div>
    </div>
  );
}