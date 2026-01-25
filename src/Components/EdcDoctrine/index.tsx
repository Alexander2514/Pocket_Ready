import React from "react"
import { ShieldAlert, Activity, Eye, Zap, Repeat } from "lucide-react";

export function EdcDoctrine() {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-black italic uppercase leading-none mb-6 text-zinc-300">
            The EDC<br/><span className="text-orange-500">Doctrine</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Every tool in your pockets must serve a purpose. We analyze weight-to-utility ratios to ensure your primary loadout is optimized for any urban or wilderness encounter.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-black border border-zinc-800 rounded-lg">
            <Activity className="text-orange-500 mb-4" size={20} />
            <h4 className="font-bold uppercase text-sm mb-2 text-zinc-300">Versatility Index</h4>
            <p className="text-zinc-500 text-xs italic leading-snug">
              We prioritize items that solve at least 3 distinct problems. A knife isn't just a blade; it's a lever, a pry-bar, and a lifeline.
            </p>
          </div>
          <div className="p-6 bg-black border border-zinc-800 rounded-lg">
            <Eye className="text-orange-500 mb-4" size={20} />
            <h4 className="font-bold uppercase text-sm mb-2 text-zinc-300">Low Profile Ops</h4>
            <p className="text-zinc-500 text-xs italic leading-snug">
              The best gear doesn't scream 'tactical'. We select tools that blend into your daily attire while maintaining mil-spec performance.
            </p>
          </div>
          <div className="p-6 bg-black border border-zinc-800 rounded-lg">
            <Repeat className="text-orange-500 mb-4" size={20} />
            <h4 className="font-bold uppercase text-sm mb-2 text-zinc-300">Redundancy Protocol</h4>
            <p className="text-zinc-500 text-xs italic leading-snug">
              "Two is one, one is none." We advocate for secondary backup systems for critical tools like fire starters and navigation.
            </p>
          </div>
          <div className="p-6 bg-black border border-zinc-800 rounded-lg">
            <Zap className="text-orange-500 mb-4" size={20} />
            <h4 className="font-bold uppercase text-sm mb-2 text-zinc-300">Tactical Readiness</h4>
            <p className="text-zinc-500 text-xs italic leading-snug">
              Deployment speed matters. Every item must be accessible in under 2 seconds, ensuring you are reactive in high-stress situations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}