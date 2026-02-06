import React from "react";
import { Metadata } from "next";
import { intelReports } from "../../Components/FieldReports/intelreports"; // Ajusta la ruta

export const metadata: Metadata = {
  title: 'Field Reports | Tactical Intel & Survival Science | Pocket Ready',
  description: 'Deep dive into survival protocols, medical intelligence, and tactical mindset. The Sovereign documentation for the prepared individual.',
  openGraph: {
    title: 'Field Reports | Pocket Ready',
    description: 'Scientific survival documentation and gear reviews.',
  }
};

export default function FieldReportsPage() {
  return (
    <main className="min-h-screen bg-[#050505] pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 border-l-4 border-safety-orange pl-6">
          <h1 className="text-2xl md:text-4xl font-black text-zinc-300 italic uppercase tracking-tighter">
            Field Reports
          </h1>
          
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {intelReports.map((report) => (
            <a 
              key={report.id}
              href={`/field-report/${report.id}`}
              // target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-zinc-900/10 border border-zinc-800/40 rounded-sm overflow-hidden hover:border-safety-orange/40 transition-all duration-500"
            >
              <div className="relative h-52 bg-black overflow-hidden">
                <img 
                  src={report.image} 
                  alt={report.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/90 text-safety-orange text-[10px] font-black px-2 py-1 uppercase tracking-tighter border border-zinc-800">
                    {report.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white uppercase italic mb-3 group-hover:text-safety-orange transition-colors">
                  {report.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                  {report.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    Access Intel
                  </span>
                  <div className="h-[1px] flex-grow mx-4 bg-zinc-800 group-hover:bg-safety-orange/30 transition-colors" />
                  
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}