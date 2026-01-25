import Link from 'next/link';
import { Twitter, Instagram, Mail } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor" // Esto permite que use las clases de Tailwind como text-zinc-500
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '18px', height: '18px' }} 
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.81.44-1.43 1.25-1.65 2.16-.13.56-.12 1.15.01 1.71.21.99.88 1.86 1.74 2.37.88.51 1.95.55 2.87.1 1.17-.54 1.97-1.8 2-3.1-.02-2.39-.01-4.78-.01-7.17v-12z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-zinc-800 text-zinc-500 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white font-black text-xl mb-4 tracking-tighter">POCKET<span className="text-orange-500">READY</span></h2>
            <p className="text-sm max-w-sm mb-6">
              Curating the finest tactical and survival gear for the modern mindset. 
              Be prepared for the unexpected, every single day.
            </p>
            <div className="flex gap-4">
              
          
        <TikTokIcon className="text-zinc-500 hover:text-white transition-colors cursor-pointer" />
        
              
              
              <Instagram className="hover:text-white cursor-pointer transition-colors" size={20} />
              <Mail className="hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Mission Control</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Gear</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">About the Gear</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-bold mb-4 uppercase text-sm">Legal</h3>
             <ul className="space-y-2 text-sm">
               <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
               <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 text-xs text-zinc-600 text-justify">
          <p>
            PocketReady is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
          <p className="mt-4 text-center">
            &copy; {new Date().getFullYear()} Pocket Ready. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}