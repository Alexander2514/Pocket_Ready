import React from "react";
import { intelReports } from "./intelreports";



export function FieldReports(){
    


    return (
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
                
                <a href="/field-reports" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-safety-orange transition-colors">
                  View All Logs
                  <span className="block h-[1px] w-8 bg-zinc-700 group-hover:bg-safety-orange transition-colors" />
                </a>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {intelReports.slice(0,6).map((report, index) => (
        <a 
          key={report.id}
          href={`/field-report/${report.id}`}
          // target="_blank"
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

    )
}