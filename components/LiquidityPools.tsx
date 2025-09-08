'use client';

import { useState } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { LiquiditySummaryCard } from './LiquiditySummaryCard';
import { MOCK_LIQUIDITY_POOLS } from '@/lib/constants';

export function LiquidityPools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('liquidity');

  const filteredPools = MOCK_LIQUIDITY_POOLS
    .filter(pool => 
      pool.tokenA.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pool.tokenB.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pool.dexName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'liquidity':
          return Number(b.liquidity - a.liquidity);
        case 'apy':
          return (b.apy || 0) - (a.apy || 0);
        case 'volume':
          return Number((b.volume24h || 0n) - (a.volume24h || 0n));
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-heading">Liquidity Pools</h2>
        <div className="flex items-center space-x-2">
          <TrendingUp size={16} className="text-success" />
          <span className="text-caption text-success">Live Data</span>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
          <input
            type="text"
            placeholder="Search pools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 glass-card border-0 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none glass-button px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="liquidity">Sort by Liquidity</option>
            <option value="apy">Sort by APY</option>
            <option value="volume">Sort by Volume</option>
          </select>
          <Filter size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-textSecondary pointer-events-none" />
        </div>
      </div>

      {/* Pool List */}
      <div className="space-y-4">
        {filteredPools.map((pool, index) => (
          <LiquiditySummaryCard
            key={pool.poolId}
            pool={pool}
            rank={index + 1}
          />
        ))}
      </div>

      {/* Summary Stats */}
      <div className="glass-card p-4">
        <h3 className="text-heading mb-4">Pool Summary</h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-display gradient-text">{filteredPools.length}</div>
            <div className="text-caption">Active Pools</div>
          </div>
          
          <div className="text-center">
            <div className="text-display text-success">
              ${(filteredPools.reduce((sum, pool) => sum + Number(pool.liquidity), 0) / 1e18).toFixed(1)}M
            </div>
            <div className="text-caption">Total Liquidity</div>
          </div>
          
          <div className="text-center">
            <div className="text-display text-accent">
              {(filteredPools.reduce((sum, pool) => sum + (pool.apy || 0), 0) / filteredPools.length).toFixed(1)}%
            </div>
            <div className="text-caption">Avg APY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
