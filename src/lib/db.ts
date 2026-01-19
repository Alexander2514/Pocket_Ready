import { supabase } from "../utils/client";

// Función para traer TODOS los productos (para la landing)
export interface Product {
  id: string;
  title_es: string;
  title_en: string; // Asumiendo que ya creaste las columnas dobles
  description_es: string;
  description_en: string;
  price: number;
  image_url: string;
  amazon_link: string;
  rating: number;
  category: string;
}
export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select('id,title_en,description_en,price,image_url,amazon_link,rating,is_featured')    
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// Función para traer UN SOLO producto (para la vista de detalle)
export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single(); // Trae un solo objeto, no un array

  if (error) return null;
  return data;
}