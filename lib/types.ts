export interface User {
  userId: string;
  walletAddress: string;
  subscriptionTier: 'free' | 'basic' | 'premium';
  createdAt: Date;
}

export interface TradeHistory {
  tradeId: string;
  userId: string;
  tokenIn: string;
  tokenOut: string;
  amountIn: bigint;
  amountOut: bigint;
  estimatedSlippage: number;
  actualSlippage: number;
  fees: bigint;
  routedDEXs: string[];
  timestamp: Date;
}

export interface LiquidityPool {
  poolId: string;
  dexName: string;
  tokenA: string;
  tokenB: string;
  reserveA: bigint;
  reserveB: bigint;
  liquidity: bigint;
  timestamp: Date;
  apy?: number;
  volume24h?: bigint;
  fees24h?: bigint;
}

export interface TokenPair {
  tokenA: {
    symbol: string;
    address: string;
    decimals: number;
    logoUrl?: string;
  };
  tokenB: {
    symbol: string;
    address: string;
    decimals: number;
    logoUrl?: string;
  };
}

export interface RouteResult {
  route: string[];
  estimatedOutput: bigint;
  priceImpact: number;
  slippage: number;
  fees: bigint;
  gasEstimate: bigint;
  dexBreakdown: {
    dex: string;
    percentage: number;
    output: bigint;
  }[];
}

export interface AnalyticsData {
  totalTrades: number;
  totalVolume: bigint;
  averageSlippage: number;
  totalFees: bigint;
  bestPerformingDEX: string;
  worstPerformingDEX: string;
  slippageByDEX: {
    dex: string;
    averageSlippage: number;
    tradeCount: number;
  }[];
  volumeByDay: {
    date: string;
    volume: number;
    trades: number;
  }[];
}
