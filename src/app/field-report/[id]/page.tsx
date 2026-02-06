import { intelReports } from "../../../Components/FieldReports/intelreports";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { Activity, ArrowLeft, ExternalLink, ChevronRight, Monitor} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const report = intelReports.find((r) => r.id.toString() === id);
  if (!report) return { title: "Report Not Found" };

  

  return {
    title: report.title ,
    description: report.excerpt,
    openGraph: {
      title: report.title ,
      description: report.excerpt,
      type: 'article',
      images: [report.image],
    },
  };
}

export default async function ReportDetail({ params }: Props) {
  const { id } = await params;
  const report = intelReports.find((r) => r.id.toString() === id);

  if (!report) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": report.title,
    "description": report.excerpt,
    "image": report.image,
    "identifier": `PR-INTEL-${report.id}`,
    "proficiencyLevel": "Expert",
    "publisher": {
      "@type": "Organization",
      "name": "Pocket Ready",
      "logo": "/favicon.ico"
    }
  };

  const currentIndex = intelReports.findIndex(r => r.id === report.id);
  const nextReport = intelReports[(currentIndex + 1) % intelReports.length];

  return (
    <>
      <Script id="json-ld-report" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[#050505] text-zinc-400 pt-32 pb-32 px-6 selection:bg-orange-500/30 selection:text-orange-200">
        <div className="max-w-3xl mx-auto">
          
          <nav className="mb-16">
            <Link href="/field-reports" className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-zinc-500 hover:text-orange-500 transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to index
            </Link>
          </nav>

          <header className="mb-12 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
            <span className="text-[10px] font-mono text-orange-500 mb-2 block tracking-[0.3em] uppercase">TACTICAL KNOWLEDGE BASE</span>
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-300 tracking-tight leading-tight">
              {report.title}
            </h1>
          </header>

          <article className="space-y-8 mb-24 text-zinc-300">
            {report.details_en.trim().split("\n\n").map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg font-light opacity-90">
                {paragraph}
              </p>
            ))}
          </article>

          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full overflow-hidden">
            <h2 className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em]          text-zinc-500 leading-relaxed max-w-full sm:max-w-[60%]">
              Additional reading from trusted organizations and experts.
            </h2>
  
           <div className="h-[1px] flex-grow bg-zinc-900 hidden xs:block w-full" />
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {report.link.map((url, index) => (
                <a 
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-5 bg-zinc-900/30 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 rounded-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="p-2 rounded bg-zinc-950 border border-zinc-800 group-hover:border-orange-500/30">
                      <Monitor size={18} className="text-zinc-600 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      
                      <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors truncate max-w-[150px]">
                        {new URL(url).hostname}
                      </span>
                    </div>
                  </div>

                  <ExternalLink size={16} className="text-zinc-700 group-hover:text-orange-500 transition-colors translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                

              )
              
              )}
              
            </div>

           
    <p className="text-[10px] md:text-xs font-mono text-zinc-300 uppercase tracking-[0.2em] leading-relaxed">
      Sources open in external domains. <br className="hidden md:block" />
      PocketReady does not control third-party content.
    </p>
          </section>

          <footer className="mt-32 pt-12 border-t border-zinc-900">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    

            <Link href={`/field-report/${nextReport.id}`} className="group flex justify-between items-center group">
              <div>
                
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-2">Next report</span>
                <h3 className="text-xl font-medium text-zinc-400 group-hover:text-orange-500 transition-colors lowercase italic">
                  {nextReport.title}
                </h3>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-zinc-800 group-hover:border-orange-500 transition-all group-hover:scale-110">
                <ChevronRight size={20} className="text-zinc-600 group-hover:text-orange-500" />
              </div>
            </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}