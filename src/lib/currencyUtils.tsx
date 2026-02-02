export interface ExchangeRates {
  [currencyCode: string]: number;
}


export const getExchangeRates = async (): Promise<ExchangeRates> => {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/6d0d4ef13323b268d50bff54/latest/USD');
    const data = await response.json();
    return data.conversion_rates; // Esto devuelve el objeto de tasas { NIO: 36.6, ... }
  } catch (error) {
    console.error("Error obteniendo tasas:", error);
    return { USD: 1 }; // Fallback de seguridad
  }
};

export const convertAndFormatPrice = (
  basePriceUSD: number,
  targetCurrency: string,
  rates: ExchangeRates,
  locale: string = 'en-US'
): string => {
  // Buscamos la tasa, si no existe usamos 1 (USD)
  const rate = rates[targetCurrency?.toUpperCase()] ?? 1;
  const convertedAmount = basePriceUSD * rate;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: targetCurrency?.toUpperCase() || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(convertedAmount);
};