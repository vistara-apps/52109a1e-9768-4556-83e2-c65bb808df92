import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number | bigint, decimals: number = 2): string {
  const num = typeof value === 'bigint' ? Number(value) : value;
  
  if (num >= 1e9) {
    return `${(num / 1e9).toFixed(decimals)}B`;
  } else if (num >= 1e6) {
    return `${(num / 1e6).toFixed(decimals)}M`;
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(decimals)}K`;
  }
  
  return num.toFixed(decimals);
}

export function formatCurrency(value: number | bigint, currency: string = 'USD'): string {
  const num = typeof value === 'bigint' ? Number(value) : value;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

export function formatTokenAmount(amount: bigint, decimals: number): string {
  const divisor = BigInt(10 ** decimals);
  const quotient = amount / divisor;
  const remainder = amount % divisor;
  
  const decimalPart = Number(remainder) / Number(divisor);
  const result = Number(quotient) + decimalPart;
  
  return formatNumber(result, 6);
}

export function calculatePriceImpact(
  inputAmount: bigint,
  outputAmount: bigint,
  reserveIn: bigint,
  reserveOut: bigint
): number {
  // Simplified price impact calculation
  const inputAmountWithFee = inputAmount * BigInt(997);
  const numerator = inputAmountWithFee * reserveOut;
  const denominator = reserveIn * BigInt(1000) + inputAmountWithFee;
  const amountOut = numerator / denominator;
  
  const priceImpact = Number(outputAmount - amountOut) / Number(outputAmount);
  return Math.abs(priceImpact);
}

export function generateMockTradeHistory(count: number = 10) {
  const trades = [];
  const tokens = ['ETH', 'USDC', 'WETH', 'DAI'];
  const dexs = ['Uniswap V3', 'Aerodrome', 'PancakeSwap', 'SushiSwap'];
  
  for (let i = 0; i < count; i++) {
    const tokenIn = tokens[Math.floor(Math.random() * tokens.length)];
    let tokenOut = tokens[Math.floor(Math.random() * tokens.length)];
    while (tokenOut === tokenIn) {
      tokenOut = tokens[Math.floor(Math.random() * tokens.length)];
    }
    
    trades.push({
      tradeId: `trade-${i}`,
      userId: 'user-1',
      tokenIn,
      tokenOut,
      amountIn: BigInt(Math.floor(Math.random() * 1000000000000000000)),
      amountOut: BigInt(Math.floor(Math.random() * 1000000000000000000)),
      estimatedSlippage: Math.random() * 0.05,
      actualSlippage: Math.random() * 0.05,
      fees: BigInt(Math.floor(Math.random() * 1000000000000000)),
      routedDEXs: [dexs[Math.floor(Math.random() * dexs.length)]],
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
    });
  }
  
  return trades;
}
