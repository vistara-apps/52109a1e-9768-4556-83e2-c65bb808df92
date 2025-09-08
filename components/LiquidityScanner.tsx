'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, TrendingUp, Zap } from 'lucide-react';
import { LiquiditySummaryCard } from './LiquiditySummaryCard';
import { MOCK_LIQUIDITY_POOLS } from '@/lib/constants';
import { formatNumber } from '@/lib/utils';

export function LiquidityScanner() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pools, setPools] = useState(MOCK_LIQUIDITY_POOLS);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Shuffle pools to simulate real-time updates
    const shuffledPools = [...pools].sort(() => Math.random() - 0.5);
    setPools(shuffledPools);
    setIsRefreshing(false);
  };

  const totalLiquidity = pools.reduce((sum, pool) => sum + Number(pool.liquidity), 0);
  const totalVolume = pools.reduce((sum, pool) => sum + Number(pool.volume24h || 0n), 0);

  return (
    <div className="space-y-6">
      {/* Scanner Header */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-heading">Real-time Liquidity Scanner</h2>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="glass-button p-2 rounded-md"
          >
            <RefreshCw className={`w-4 h-4 text-textSecondary ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-textPrimary">
              ${formatNumber(totalLiquidity / 1e18)}
            </div>
            <div className="text-sm text-textSecondary">Total Liquidity</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-textPrimary">
              ${formatNumber(totalVolume / 1e6)}
            </div>
            <div className="text-sm text-textSecondary">24h Volume</div>
          </div>
        </div>
      </div>

      {/* Pool Rankings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-heading">Top Liquidity Pools</h3>
          <div className="flex items-center space-x-1 text-accent">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Live Data</span>
          </div>
        </div>

        {pools.map((pool, index) => (
          <LiquiditySummaryCard
            key={pool.poolId}
            pool={pool}
            rank={index + 1}
          />
        ))}
      </div>

      {/* Market Insights */}
      <div className="glass-card p-6">
        <h3 className="text-heading mb-4">Market Insights</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Best APY Pool</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-success font-medium">PancakeSwap ETH/USDC</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Lowest Slippage</span>
            <div className="flex items-center space-x-2">
              <span className="text-accent font-medium">Uniswap V3 (0.05%)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-textSecondary">Most Active</span>
            <div className="flex items-center space-x-2">
              <span className="text-primary font-medium">ETH/USDC Pairs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
