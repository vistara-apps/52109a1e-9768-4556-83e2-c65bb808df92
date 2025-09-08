import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, decimals: number = 2): string {
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(decimals)}B`;
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(decimals)}M`;
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(decimals)}K`;
  }
  return value.toFixed(decimals);
}

export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

export function formatBigInt(value: bigint, decimals: number = 18): number {
  return Number(value) / Math.pow(10, decimals);
}

export function calculatePriceImpact(
  inputAmount: bigint,
  outputAmount: bigint,
  marketPrice: number
): number {
  const inputValue = formatBigInt(inputAmount);
  const outputValue = formatBigInt(outputAmount);
  const expectedOutput = inputValue * marketPrice;
  
  return Math.abs((expectedOutput - outputValue) / expectedOutput);
}

export function generateMockTradeData() {
  const days = 30;
  const data = [];
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      volume: Math.random() * 1000000 + 100000,
      trades: Math.floor(Math.random() * 100) + 10,
      slippage: Math.random() * 0.05 + 0.001,
      fees: Math.random() * 10000 + 1000,
    });
  }
  
  return data.reverse();
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
