import { Metadata } from 'next';
import ProductCard from '../../Components/Productcard';
import { Product } from '@//lib/db';
import { getAllProducts } from '@//lib/db';
export const metadata: Metadata = {
  title: 'Full Tactical Catalog | POCKETREADY',
  description: 'Complete inventory of mission-ready hardware. Explore our full range of tactical EDC and survival gear.',
  openGraph: {
    title: 'POCKETREADY Arsenal | All Products',
    description: 'Direct access to our complete tactical equipment inventory.',
    images: ['https://ahmdmnoxdroarbooanyg.supabase.co/storage/v1/object/public/images/Assets/ImgProducts.png'], 
  },
};

export default async  function Gears() {

  const products = await getAllProducts();


  return (
    
    <main className="min-h-screen bg-zinc-900 pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-l-4 border-safety-orange pl-6">
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
            Full Arsenal <span className="text-zinc-700">/ Inventory</span>
          </h1>
          <p className="text-zinc-500 mt-2 font-mono text-sm">SECURE ACCESS // ALL UNITS AVAILABLE</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
              // Limpiamos el objeto para que sea un objeto plano (POJO)
              const cleanProduct = JSON.parse(JSON.stringify(product));
              
              return (
                <ProductCard 
                  key={cleanProduct.id}
                  title={cleanProduct.title_en}
                  price={cleanProduct.price}
                  image={cleanProduct.image_url}
                  rating={cleanProduct.rating}
                  link={cleanProduct.amazon_link}
                  id={cleanProduct.id}
                  is_featured={cleanProduct.is_featured}
                />
              );})}
        </div>
      </div>
    </main>
    
  );
}