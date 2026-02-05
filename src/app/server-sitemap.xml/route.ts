import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { supabase } from '../../utils/client' 
import { intelReports } from '../../Components/FieldReports/intelreports' 

export async function GET() {
  // 1. Obtención de productos desde Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('id, updated_at')

  if (error) {
    console.error('Error fetching products for sitemap:', error)
  }

  const productFields: ISitemapField[] = products?.map((prod) => ({
    loc: `https://pocket-ready.com/product/${prod.id}`,
    lastmod: new Date(prod.updated_at || new Date()).toISOString(),
    changefreq: 'daily' as const, 
    priority: 0.9,
  })) || []

 
  const intelFields: ISitemapField[] = intelReports.map((report) => ({
    loc: `https://pocket-ready.com/field-report/${report.id}`,
    lastmod: new Date().toISOString(), 
    changefreq: 'weekly' as const,
    priority: 0.8,
  }))

  // 4. Fusión de datos para el motor de búsqueda
  const fields = [...productFields, ...intelFields]

  return getServerSideSitemap(fields)
}