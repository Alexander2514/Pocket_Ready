import React from 'react';

export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="border-b border-zinc-800 pb-8 mb-12">
        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
          Terms of <span className="text-orange-500">Service</span>
        </h1>
        
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">01</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Use of Content
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              All content hosted on <span className="text-white font-bold">PocketReady</span> is provided for informational and educational purposes only. We do not provide professional, medical, legal, or safety advice.
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 p-4 italic text-sm text-zinc-300">
              "Visitors are solely responsible for how they use the information and products referenced on this site."
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">02</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Limitation of Liability
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              PocketReady assumes <span className="text-white">no responsibility</span> for injuries, damages, losses, or misuse of products purchased through external links. 
            </p>
            <p className="text-xs font-mono uppercase text-orange-500/80 tracking-wide">
              Critical Warning: Always follow manufacturer instructions and local regulations when deploying or using any equipment featured in our catalog.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">03</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Intellectual Property
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed">
            <p>
              All original content, branding, design elements, written material, and code are the <span className="text-zinc-200">exclusive intellectual property</span> of PocketReady unless otherwise stated. 
            </p>
            <p className="mt-4 border-t border-zinc-800 pt-4 text-sm font-mono text-zinc-500">
              Unauthorized reproduction, copying, or redistribution of any site asset is strictly prohibited under international copyright law.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-zinc-800 text-center">
        <p className="text-[10px] font-mono text-zinc-600 uppercase">
          Document End — Operational Integrity Verified
        </p>
      </footer>
    </article>
  );
}