'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { AnalyticsChart } from './AnalyticsChart';
import { formatNumber, formatCurrency, formatPercentage } from '@/lib/utils';

const mockVolumeData = [
  { date: '2024-01-01', volume: 1200000, trades: 45 },
  { date: '2024-01-02', volume: 1800000, trades: 67 },
  { date: '2024-01-03', volume: 2100000, trades: 89 },
  { date: '2024-01-04', volume: 1900000, trades: 72 },
  { date: '2024-01-05', volume: 2400000, trades: 95 },
  { date: '2024-01-06', volume: 2800000, trades: 112 },
  { date: '2024-01-07', volume: 3200000, trades: 134 },
];

const mockSlippageData = [
  { dex: 'Uniswap V3', slippage: 0.08, trades: 45 },
  { dex: 'Aerodrome', slippage: 0.12, trades: 32 },
  { dex: 'PancakeSwap', slippage: 0.15, trades: 28 },
  { dex: 'SushiSwap', slippage: 0.18, trades: 21 },
];

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-heading">Trading Analytics</h2>
        <div className="flex space-x-2">
          {['24h', '7d', '30d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                timeRange === range
                  ? 'bg-primary text-white'
                  : 'text-textSecondary hover:text-textPrimary hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption">Total Volume</span>
            <DollarSign size={16} className="text-success" />
          </div>
          <div className="text-display text-success">$2.1M</div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp size={12} className="text-success" />
            <span className="text-success">+12.5%</span>
            <span className="text-textSecondary">vs last week</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption">Avg Slippage</span>
            <Percent size={16} className="text-warning" />
          </div>
          <div className="text-display text-warning">0.12%</div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingDown size={12} className="text-success" />
            <span className="text-success">-0.03%</span>
            <span className="text-textSecondary">vs last week</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption">Total Trades</span>
            <TrendingUp size={16} className="text-accent" />
          </div>
          <div className="text-display text-accent">1,247</div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp size={12} className="text-success" />
            <span className="text-success">+8.2%</span>
            <span className="text-textSecondary">vs last week</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-caption">Total Fees</span>
            <DollarSign size={16} className="text-error" />
          </div>
          <div className="text-display text-error">$3,247</div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp size={12} className="text-error" />
            <span className="text-error">+5.1%</span>
            <span className="text-textSecondary">vs last week</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        <AnalyticsChart
          variant="line"
          data={mockVolumeData}
          dataKey="volume"
          xAxisKey="date"
          title="Trading Volume Over Time"
          color="#00D4AA"
        />

        <AnalyticsChart
          variant="bar"
          data={mockSlippageData}
          dataKey="slippage"
          xAxisKey="dex"
          title="Average Slippage by DEX"
          color="#F59E0B"
        />
      </div>

      {/* DEX Performance Table */}
      <div className="glass-card p-4">
        <h3 className="text-heading mb-4">DEX Performance</h3>
        
        <div className="space-y-3">
          {mockSlippageData.map((dex, index) => (
            <div key={dex.dex} className="flex items-center justify-between p-3 glass-button rounded-md">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-textPrimary">{dex.dex}</div>
                  <div className="text-xs text-textSecondary">{dex.trades} trades</div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium text-warning">
                  {formatPercentage(dex.slippage)}
                </div>
                <div className="text-xs text-textSecondary">avg slippage</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
