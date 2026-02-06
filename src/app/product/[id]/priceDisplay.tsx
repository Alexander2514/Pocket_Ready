'use client';
import { useCurrency } from "../../../context/CurrencyContext";

export default function PriceDisplay({ price }: { price: number }) {
  const { formatPrice, isLoading } = useCurrency();
  
  return (
    <div className="flex items-baseline gap-2 mb-6">
      <span className="text-3xl xl:text-3xl font-light tracking-tighter italic text-zinc-300">
        {isLoading ? '...' : formatPrice(price)}
      </span>
      
    </div>
  );
}