import React from 'react';
import { pillars } from './SovereignData';

import { ChevronRight, Terminal } from 'lucide-react';

const TheSovereign = () => {
  return (
    <section className="py-24 bg-[#0c0c0c] border-y border-zinc-800/50 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none">
        {Array(50).fill("READY FOR ACTION • STATUS ACTIVE • POCKET READY • ").join("")}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-orange-500" />
            <span className="text-orange-500 font-mono text-xs tracking-[0.3em] uppercase">Core Doctrine</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-300 uppercase italic tracking-tighter leading-none mb-6">
            The Path of <span className="text-zinc-500">Autonomous Power</span>
          </h2>
          <p className="max-w-2xl text-zinc-500 text-sm md:text-base font-light leading-relaxed border-l border-zinc-800 pl-6 italic">
            "A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship... Specialization is for insects."
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar">
          {pillars.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[450px] snap-center group relative p-8 bg-zinc-900/20 border border-zinc-800/50 hover:border-orange-500/30 transition-all duration-500 rounded-sm"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                  <item.icon className="text-orange-500" size={24} />
                </div>
                <span className="font-mono text-[10px] text-zinc-700 group-hover:text-orange-900 transition-colors">
                  0{index + 1} // OPERATIONAL_PILLAR
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-300 uppercase italic mb-6 tracking-tight flex items-center gap-3">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 leading-relaxed text-sm font-light min-h-[120px]">
                {item.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">Read Intel</span>
                <ChevronRight size={12} className="text-orange-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de scroll para el usuario */}
        <div className="mt-6 flex justify-end items-center gap-4">
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Swipe to navigate doctrine</span>
          <div className="h-[1px] w-24 bg-zinc-800" />
        </div>
      </div>
    </section>
  );
};

export default TheSovereign;