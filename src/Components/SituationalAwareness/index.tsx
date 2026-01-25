import React from "react";
import { AlertTriangle } from "lucide-react";

export function SituationalAwareness() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <AlertTriangle className="text-orange-500 mx-auto mb-6 animate-pulse" size={40} />
        <h3 className="text-3xl font-black uppercase italic mb-8 text-zinc-300">Situational Awareness</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="border-l border-zinc-800 pl-6">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Fact 01</span>
            <p className="text-zinc-400 text-sm italic mt-2">
              "Ounces equal pounds, and pounds equal pain." Keep your EDC under 1.5lbs for maximum mobility.
            </p>
          </div>
          <div className="border-l border-zinc-800 pl-6">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Fact 02</span>
            <p className="text-zinc-400 text-sm italic mt-2">
              Stainless steel (304/316) is king for humidity, but High-Carbon steel (D2/1095) wins in edge retention. Know your environment.
            </p>
          </div>
          <div className="border-l border-zinc-800 pl-6">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Fact 03</span>
            <p className="text-zinc-400 text-sm italic mt-2">
              The Rule of Three: You can survive 3 minutes without air, 3 hours without shelter, 3 days without water, and 3 weeks without food. Prioritize accordingly.
            </p>
          </div>
          <div className="border-l border-zinc-800 pl-6">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">Fact 04</span>
            <p className="text-zinc-400 text-sm italic mt-2">
              Mechanical Advantage: A Grade 5 Titanium pry-bar offers an unbeatable strength-to-weight ratio for urban entry and exit tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}