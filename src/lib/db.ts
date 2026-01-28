export const revalidate = 1000; // <--- ESTA LÍNEA OBLIGA A REVISAR DATOS NUEVOS SIEMPRE




import { supabase } from "../utils/client";

export interface Product {
  id: string;
  title_es: string;
  title_en: string; 
  description_es: string;
  description_en: string;
  price: number;
  image_url: string;
  amazon_link: string;
  rating: number;
  category: string;
  is_featured:boolean;
}
export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select('id,title_en,description_en,price,image_url,amazon_link,rating,is_featured')    
    .order("is_featured", { ascending: false });

  if (error) throw new Error(error.message);
  
  return data;
}

export async function getProductById(id: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single(); // Trae un solo objeto, no un array

  if (error) return null;
  return data;
}

//Fields reports




//TheSovereign