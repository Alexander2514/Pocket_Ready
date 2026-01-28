export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-400 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="border border-zinc-800 bg-zinc-900/20 p-8 md:p-16 rounded-sm shadow-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}