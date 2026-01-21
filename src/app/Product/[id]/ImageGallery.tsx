"use client";
import { useState, useEffect } from 'react';

export default function ImageGallery({ images, title }: { images: string[], title: string }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setSelected((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="space-y-6">
      <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0a0a0a] flex items-center justify-center p-8 shadow-2xl">
        
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-safety-orange/40" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-safety-orange/40" />
        
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Status: Ready</span>
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
        </div>

        <img 
          src={images[selected]} 
          alt={title}
          className="relative z-10 max-h-full w-auto object-contain transition-all duration-1000 brightness-[0.8] contrast-[1.1] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]" 
        />
        
        
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"/>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-3">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-14 h-14 rounded-xl border transition-all duration-300 bg-zinc-900/40 p-1.5 ${
              selected === idx ? 'border-safety-orange scale-105 shadow-lg shadow-orange-500/10' : 'border-zinc-800 opacity-40'
            }`}
          >
            <img src={img} className="w-full h-full object-contain rounded-md brightness-75" />
          </button>
        ))}
      </div>
    </div>
  );
}