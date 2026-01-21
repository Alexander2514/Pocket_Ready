import Link from 'next/link';
import { Compass, ShoppingCart } from 'lucide-react'; // Iconos de ejemplo

const Navbar = () => {
  return (
    
    <nav className="sticky top-0 z-50 w-full bg-tactical-bg/80 backdrop-blur-md border-b border-tactical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y Nombre */}
          <Link href="/" className="flex items-center gap-2 group">
             <Compass className="h-8 w-8 text-safety-orange group-hover:rotate-45 transition-transform duration-300" /> 
            
            
            <span className="font-bold text-xl tracking-wider uppercase">
              Pocket<span className="text-safety-orange">Ready</span>
            </span>
          </Link>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-safety-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#productos" className="hover:text-safety-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Catalog
              </Link>
              <Link href="#about" className="text-text-muted hover:text-safety-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About us
              </Link>
            </div>
          </div>

          

        </div>
      </div>
    </nav>
  );
};

export {Navbar};