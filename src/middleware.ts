import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const countryToCurrency: Record<string, string> = {
  /* ===================== AMÉRICA ===================== */
  US: 'USD', CA: 'CAD', MX: 'MXN',
  GT: 'GTQ', HN: 'HNL', SV: 'USD', NI: 'NIO',
  CR: 'CRC', PA: 'PAB', DO: 'DOP',
  CU: 'CUP', HT: 'HTG', JM: 'JMD',
  BS: 'BSD', BB: 'BBD', TT: 'TTD',
  BZ: 'BZD', KY: 'KYD',

  CO: 'COP', VE: 'VES', EC: 'USD',
  PE: 'PEN', BO: 'BOB', PY: 'PYG',
  CL: 'CLP', AR: 'ARS', UY: 'UYU',
  BR: 'BRL', GY: 'GYD', SR: 'SRD',

  /* ===================== EUROPA (EURO) ===================== */
  ES: 'EUR', FR: 'EUR', DE: 'EUR', IT: 'EUR',
  PT: 'EUR', NL: 'EUR', BE: 'EUR', LU: 'EUR',
  IE: 'EUR', AT: 'EUR', FI: 'EUR',
  GR: 'EUR', CY: 'EUR', MT: 'EUR',
  EE: 'EUR', LV: 'EUR', LT: 'EUR',
  SI: 'EUR', SK: 'EUR',
  HR: 'EUR',

  // Euro fuera de la UE
  AD: 'EUR', MC: 'EUR', SM: 'EUR', VA: 'EUR',
  ME: 'EUR', XK: 'EUR',

  /* ===================== EUROPA (NO EURO) ===================== */
  GB: 'GBP', CH: 'CHF',
  SE: 'SEK', NO: 'NOK', DK: 'DKK',
  PL: 'PLN', CZ: 'CZK', HU: 'HUF',
  RO: 'RON', BG: 'BGN',
  IS: 'ISK',
  RS: 'RSD', BA: 'BAM', MK: 'MKD',
  AL: 'ALL', MD: 'MDL',
  UA: 'UAH', BY: 'BYN',
  RU: 'RUB', TR: 'TRY',
  GE: 'GEL', AM: 'AMD', AZ: 'AZN',

  /* ===================== ORIENTE MEDIO ===================== */
  SA: 'SAR', AE: 'AED', QA: 'QAR',
  KW: 'KWD', BH: 'BHD', OM: 'OMR',
  IL: 'ILS', JO: 'JOD', LB: 'LBP',
  IQ: 'IQD', IR: 'IRR', YE: 'YER',
  SY: 'SYP',

  /* ===================== ASIA ===================== */
  JP: 'JPY', CN: 'CNY', HK: 'HKD', TW: 'TWD',
  KR: 'KRW', SG: 'SGD', MY: 'MYR',
  ID: 'IDR', PH: 'PHP', TH: 'THB',
  VN: 'VND', KH: 'KHR', LA: 'LAK',
  MM: 'MMK',

  IN: 'INR', PK: 'PKR', BD: 'BDT',
  LK: 'LKR', NP: 'NPR',

  KZ: 'KZT', UZ: 'UZS', KG: 'KGS',
  TJ: 'TJS', MN: 'MNT',

  /* ===================== ÁFRICA ===================== */
  ZA: 'ZAR', NG: 'NGN', EG: 'EGP',
  KE: 'KES', UG: 'UGX', TZ: 'TZS',
  GH: 'GHS',

  MA: 'MAD', DZ: 'DZD', TN: 'TND',

  // Franco CFA (África Occidental)
  SN: 'XOF', CI: 'XOF', BF: 'XOF',
  ML: 'XOF', NE: 'XOF', TG: 'XOF',
  BJ: 'XOF',

  // Franco CFA (África Central)
  CM: 'XAF', CG: 'XAF', GA: 'XAF',
  GQ: 'XAF', TD: 'XAF',

  ET: 'ETB', RW: 'RWF', ZM: 'ZMW',
  AO: 'AOA', MZ: 'MZN', MW: 'MWK',
  BW: 'BWP', NA: 'NAD', LS: 'LSL',

  /* ===================== OCEANÍA ===================== */
  AU: 'AUD', NZ: 'NZD',
  FJ: 'FJD', PG: 'PGK', SB: 'SBD',

  /* ===================== FALLBACK REGIONAL ===================== */
  EU: 'EUR'
};

export function middleware(request: NextRequest) {
  // 1. Obtener país
  const country = request.headers.get('x-vercel-ip-country') || 'US';
  
  // 2. Mapear a moneda
  const currency = countryToCurrency[country] || 'USD';

  const response = NextResponse.next();
  
  // 3. Guardar en cookies
  response.cookies.set('user-country', country);
  response.cookies.set('user-currency', currency);

 
  
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};