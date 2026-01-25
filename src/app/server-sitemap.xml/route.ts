import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

import { supabase } from '../../utils/client' 

export async function GET() {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, updated_at')

  if (error) {
    console.error('Error fetching products for sitemap:', error)
    return new Response('Error fetching data', { status: 500 })
  }

  // Definimos explícitamente el tipo como ISitemapField[]
  const fields: ISitemapField[] = products?.map((prod) => ({
    loc: `https://pocket-ready.com/product/${prod.id}`,
    lastmod: new Date(prod.updated_at || new Date()).toISOString(),
    changefreq: 'daily' as const, 
    priority: 0.8,
  })) || []

  return getServerSideSitemap(fields)
}