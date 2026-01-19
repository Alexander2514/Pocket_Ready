import { log } from 'console';
import { ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
interface ProductProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  link: string;
  id:string;
}

export default function ProductCard({ title, price, image, rating, link,id }: ProductProps) {

  // // 1. Creamos la función que SI retorna el valor
  // const getImageUrl = (data: any): string => {
  //   if (Array.isArray(data)) {
  //     console.log('Dta: ',data[0]);
      
  //     return data[0]; // Si es array, retorna el primero
  //   }
  //   return data; // Si ya es un string, lo retorna tal cual
  // };

  // // 2. Guardamos el resultado en una constante
  // const imageToShow = getImageUrl(image);
  // console.log(imageToShow);

  const getImageUrl = (data: any): string => {
  // Si por algún motivo ya es un array real
  if (Array.isArray(data)) {
    return data[0];
  }

  // Si es un string (que es tu caso actual según la consola)
  if (typeof data === 'string') {
    // Eliminamos los corchetes [ ] y las comillas " ' con una expresión regular
    // Luego dividimos por comas y tomamos el primer elemento
    const cleanUrl = data.replace(/[\[\]"']/g, '').split(',')[0].trim();
    return cleanUrl;
  }

  return '';
};
  const imageToShow = getImageUrl(image);

  return (
    <div className="bg-tactical-card border border-tactical-border rounded-xl overflow-hidden hover:border-safety-orange transition-all duration-300 group flex flex-col h-full">
      {/* Clic en la imagen lleva al DETALLE interno */}
      <Link href={`/Product/${id}`} className="cursor-pointer">
        <div className="relative h-64 w-full bg-white overflow-hidden">
          <img 
            src={imageToShow} 
            alt={title} 
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={i < rating ? "fill-safety-orange text-safety-orange" : "text-text-muted"} />
          ))}
        </div>
        
        {/* Clic en título también lleva al DETALLE */}
        <Link href={`/product/${id}`} className="hover:text-safety-orange transition-colors">
          <h3 className="text-lg font-bold text-text-primary line-clamp-2 mb-2">
            {title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-2xl font-black text-safety-orange">${price}</span>
          {/* Botón lleva directo a AMAZON (Venta) */}
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-safety-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm"
          >
            <ShoppingCart size={16} />
            Amazon
          </a>
        </div>
      </div>
    </div>
  );
}