'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getExchangeRates, convertAndFormatPrice, ExchangeRates } from '../lib/currencyUtils';

interface CurrencyContextType {
  currency: string;
  formatPrice: (amount: number) => string;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [rates, setRates] = useState<ExchangeRates>({});
  const [userCurrency, setUserCurrency] = useState('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Leer moneda de la cookie
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('user-currency='))
      ?.split('=')[1];
    
    if (cookieValue) setUserCurrency(cookieValue);

    // 2. Obtener tasas de la API
    getExchangeRates().then(data => {
      setRates(data);
      setLoading(false);
    });
  }, []);

  const formatPrice = (amount: number) => {
    return convertAndFormatPrice(amount, userCurrency, rates, userCurrency === 'US' ? 'en-US' : 'en-EU');
  };

  return (
    <CurrencyContext.Provider value={{ currency: userCurrency, formatPrice, isLoading: loading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency debe usarse dentro de CurrencyProvider");
  return context;
};