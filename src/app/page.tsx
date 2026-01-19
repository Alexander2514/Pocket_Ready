
import ProductCard from "../Components/Productcard";
import { supabase } from "../utils/client";
import React from "react";
import { getAllProducts, } from "../lib/db";
import { log } from "console";
// Estos datos luego vendrán de Supabase, por ahora los usamos de "mock"
// const DUMMY_PRODUCTS = [
//   {
//     id: 1,
//     title: "Linterna LED Táctica 2000 Lúmenes - Resistente al Agua",
//     price: 24.99,
//     rating: 5,
//     image: "https://m.media-amazon.com/images/I/71+D7p9V6WL._AC_SL1500_.jpg",
//     link: "#"
//   },
//   {
//     id: 2,
//     title: "Navaja de Supervivencia 5 en 1 con Iniciador de Fuego",
//     price: 18.50,
//     rating: 4,
//     image: "https://m.media-amazon.com/images/I/61e8-78y9pL._AC_SL1500_.jpg",
//     link: "#"
//   }
// ];

export default async function Home() {

  //  React.useEffect(
  //   ()=> {
  //     const FetchProducts = async ()=>{

  //       const {data,error} = await supabase
  //       .from("products")
  //       .select('id,title_en,description_en,price,image_url,amazon_link,rating,is_featured')
  //       .order('rating',{ascending:true})
  //       ;

  //       if(error){
  //         console.error('Error al traer Products: ', error)
  //       }
  //       else {
  //         console.log('Titulos de productos obtenidos', data);
          
  //       }
  //     }
  //     FetchProducts()
  //   },[])
  const products = await getAllProducts();
  console.log(products);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section Simple */}
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          Be prepared for the<span className="text-safety-orange"> unexpected</span>
        </h1>
        <p className="text-text-muted text-xl max-w-2xl mx-auto">
          Expert analysis of tactical and survival gear. Field-tested, ready for your pocket.
        </p>
      </header>

      {/* Grid de Productos */}
      <section id="productos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            title={product.title_en}
            price={product.price}
            image={product.image_url}
            rating={product.rating}
            link={product.amazon_link}
            id={product.id}
          />
        ))}
      </section>
    </div>
  );
}