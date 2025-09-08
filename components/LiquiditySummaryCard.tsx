'use client';

import { TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { formatNumber, formatCurrency, formatPercentage } from '@/lib/utils';
import { LiquidityPool } from '@/lib/types';

interface LiquiditySummaryCardProps {
  pool: LiquidityPool;
  rank: number;
}

export function LiquiditySummaryCard({ pool, rank }: LiquiditySummaryCardProps) {
  const totalLiquidity = formatNumber(Number(pool.liquidity) / 1e18);
  const volume24h = formatNumber(Number(pool.volume24h || 0) / 1e6);
  const fees24h = formatCurrency(Number(pool.fees24h || 0) / 1e6);
  
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full" />
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-purple-500 rounded-full -ml-2" />
          </div>
          <div>
            <div className="font-medium text-textPrimary">
              {pool.tokenA}/{pool.tokenB}
            </div>
            <div className="text-sm text-textSecondary">{pool.dexName}</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-textSecondary">#{rank}</div>
          <div className="flex items-center space-x-1">
            <Zap className="w-3 h-3 text-accent" />
            <span className="text-sm font-medium text-accent">
              {formatPercentage(pool.apy || 0 / 100)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-caption text-textSecondary">Liquidity</div>
          <div className="font-medium text-textPrimary">${totalLiquidity}</div>
        </div>
        
        <div>
          <div className="text-caption text-textSecondary">24h Volume</div>
          <div className="font-medium text-textPrimary">${volume24h}</div>
        </div>
        
        <div>
          <div className="text-caption text-textSecondary">24h Fees</div>
          <div className="font-medium text-success">{fees24h}</div>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-white border-opacity-10">
        <div className="flex items-center justify-between text-sm">
          <span className="text-textSecondary">Price Impact</span>
          <div className="flex items-center space-x-1">
            <TrendingDown className="w-3 h-3 text-success" />
            <span className="text-success">0.12%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
