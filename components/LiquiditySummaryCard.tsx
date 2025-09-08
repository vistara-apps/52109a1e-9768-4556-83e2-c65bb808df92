'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatNumber, formatPercentage } from '@/lib/utils';
import type { LiquidityPool } from '@/lib/types';

interface LiquiditySummaryCardProps {
  pool: LiquidityPool;
  rank: number;
}

export function LiquiditySummaryCard({ pool, rank }: LiquiditySummaryCardProps) {
  const isPositive = (pool.apy || 0) > 10;

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {pool.tokenA[0]}{pool.tokenB[0]}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium text-textPrimary">
              {pool.tokenA}/{pool.tokenB}
            </div>
            <div className="text-xs text-textSecondary">{pool.dexName}</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm font-medium text-textPrimary">#{rank}</div>
          <div className="text-xs text-textSecondary">Rank</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-textSecondary mb-1">Liquidity</div>
          <div className="text-sm font-medium text-textPrimary">
            ${formatNumber(Number(pool.liquidity) / 1e18)}
          </div>
        </div>
        
        <div>
          <div className="text-xs text-textSecondary mb-1">24h Volume</div>
          <div className="text-sm font-medium text-textPrimary">
            ${formatNumber(Number(pool.volume24h || 0) / 1e6)}
          </div>
        </div>
        
        <div>
          <div className="text-xs text-textSecondary mb-1">APY</div>
          <div className={`text-sm font-medium flex items-center space-x-1 ${
            isPositive ? 'text-success' : 'text-warning'
          }`}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{formatPercentage((pool.apy || 0) / 100)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
