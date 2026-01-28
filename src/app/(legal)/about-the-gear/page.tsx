export default function AboutGear() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-black text-white uppercase italic mb-8 tracking-tighter">
        About the <span className="text-orange-500">Gear</span>
      </h1>
      <section className="space-y-6 divide-y divide-zinc-600">
        <p className="text-lg leading-relaxed py-2">
          At PocketReady, our goal is to provide a carefully curated selection of everyday carry, survival, and utility-focused equipment designed for real-world use. We evaluate each product based on practicality, durability, portability, and overall usefulness in daily and unexpected situations.

Our content is research-driven. We analyze product specifications, real user feedback, and real-life use cases to help visitors make informed decisions. PocketReady does not manufacture products; we focus on <span className="text-sm font-semibold uppercase tracking-widest text-orange-100 ">education, comparison, and curation.</span>
        </p>

        <p className="py-2 border-b-0"> <span className="text-sm font-semibold uppercase tracking-widest text-orange-100 mb-2 ">Amazon Associate Disclosure </span> 

PocketReady participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com.</p>

        <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 my-8">
          <h4 className="text-white font-bold uppercase text-sm">Amazon Associate Disclosure:</h4>
          <p className="text-white italic text-sm">
            "As an Amazon Associate, I earn from qualifying purchases at no extra cost to you."
          </p>
        </div>

        <p>When you click on an affiliate link and make a purchase, we may receive a small commission. This compensation helps support website maintenance, content creation, and research efforts.
Affiliate relationships <span className="text-sm font-semibold uppercase tracking-widest text-orange-100 mb-2 " >do not influence</span> which products we feature or how they are reviewed.</p>
        
      </section>
    </article>
  );
}