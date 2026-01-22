import { ShoppingCart, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { Product } from '../../types/Product';

export default function ProductCard({ title, price, image, rating, link, id, is_featured }: Product) {
  const getImageUrl = (data: any): string => {
    if (Array.isArray(data)) return data[0];
    if (typeof data === 'string') {
      return data.replace(/[\[\]"']/g, '').split(',')[0].trim();
    }
    return '';
  };
  const imageToShow = getImageUrl(image);

  return (
    


    <div className="bg-tactical-card border-zinc-800 rounded-xl overflow-hidden hover:border-safety-orange/50 transition-all duration-500 group flex flex-col h-full relative">
      
      {is_featured && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-safety-orange text-white text-[9px] font-black px-2 py-1 rounded shadow-xl uppercase">
          <Zap size={10} fill="currentColor" /> Featured Gear
        </div>
      )}

      <Link href={`/Product/${id}`} className="cursor-pointer">
       
        <div className="relative h-60 w-full bg-zinc-50 flex items-center justify-center overflow-hidden brightness-75">
          <img 
            src={imageToShow} 
            alt={title} 
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < rating ? "fill-safety-orange text-safety-orange" : "text-zinc-800"} />
          ))}
          <p className='text-zinc-400'>{rating}</p>
        </div>
        
        <Link href={`/Product/${id}`} className="hover:text-safety-orange transition-colors">
          <h3 className="text-sm font-bold text-zinc-300 line-clamp-2 mb-4 uppercase tracking-tight leading-snug">
            {title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-800/50">
          <span className="text-xl font-black text-safety-orange italic">${price}</span>
          <a 
            href={link}
            target="_blank"
            className="flex items-center gap-2 bg-safety-orange hover:bg-orange-600  text-zinc-300 hover:text-white px-4 py-2 rounded font-bold transition-all text-[11px] uppercase"
          >
            <ShoppingCart size={14} /> Amazon
          </a>
        </div>
      </div>
    </div>

    
  );
}