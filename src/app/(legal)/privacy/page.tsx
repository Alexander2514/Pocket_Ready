import React from 'react';

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="border-b border-zinc-800 pb-8 mb-12">
        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
          Privacy <span className="text-orange-500">Policy</span>
        </h1>
        
      </div>

      <div className="space-y-12">
        
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">01</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Data Collection & Analytics
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              PocketReady uses third-party analytics tools such as <span className="text-zinc-200">Google Analytics</span> and <span className="text-zinc-200">Meta (Facebook) Pixel</span> to understand how visitors interact with the site. The information collected is aggregated and anonymized, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 border border-zinc-800/50 bg-black/20 p-4 rounded-sm list-none">
              <li className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-orange-500">›</span> Pages visited
              </li>
              <li className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-orange-500">›</span> Time spent on pages
              </li>
              <li className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-orange-500">›</span> Device and browser type
              </li>
              <li className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-orange-500">›</span> General geographic region
              </li>
            </ul>
            <p className="text-sm">
              This data is used solely to improve site functionality, content relevance, and user experience.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">02</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Cookies & Tracking Technologies
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed space-y-4">
            <p>
              Cookies are small data files stored on your device to enhance functionality and performance. PocketReady uses cookies to:
            </p>
            <ul className="space-y-2 list-none p-0">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                <span>Remember user preferences and tactical interface settings.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                <span>Measure traffic and engagement protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                <span>Ensure proper operation of affiliate tracking and attribution.</span>
              </li>
            </ul>
            <p className="text-sm bg-zinc-900/50 p-4 border border-zinc-800 italic">
              By continuing to use this website, you consent to the use of cookies in accordance with this policy. You may disable cookies through your browser settings, though some features may not function correctly.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">03</span>
            <h2 className="text-xl font-bold text-white uppercase tracking-tight m-0">
              Third-Party Services & External Links
            </h2>
          </div>
          <div className="text-zinc-400 leading-relaxed">
            <p>
              PocketReady contains links to third-party websites, including <span className="text-zinc-200">Amazon</span>. Once you leave our domain, PocketReady is not responsible for the privacy practices, content, or policies of external sites.
            </p>
            <p className="mt-4">
              We encourage users to review the privacy policies of any third-party platforms they engage with.
            </p>
          </div>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-zinc-800 text-center">
        <p className="text-[10px] font-mono text-zinc-600 uppercase">
          End of Transmission — PocketReady Internal Protocol
        </p>
      </footer>
    </article>
  );
}