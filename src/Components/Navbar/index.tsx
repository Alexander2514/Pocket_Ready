'use client'; // Necesario para usar useState

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-tactical-bg/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center gap-2 group">
             <Compass className="h-8 w-8 text-orange-500 group-hover:rotate-45 transition-transform duration-300" /> 
            <span className="font-bold text-xl tracking-wider uppercase">
              Pocket<span className="text-orange-500">Ready</span>
            </span>
          </Link>

          {/* Menú Desktop (Oculto en móvil) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/gears" className="hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">Gear</Link>
              <Link href="#about" className="text-zinc-500 hover:text-orange-500 transition-colors px-3 py-2 text-sm font-medium">About us</Link>
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable (Móvil) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#080808] border-b border-zinc-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 block px-3 py-4 text-base font-medium uppercase tracking-widest"
          >
            Home
          </Link>
          <Link 
            href="/gears" 
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-500 block px-3 py-4 text-base font-medium uppercase tracking-widest"
          >
            Gear
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-orange-500 block px-3 py-4 text-base font-medium uppercase tracking-widest"
          >
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };