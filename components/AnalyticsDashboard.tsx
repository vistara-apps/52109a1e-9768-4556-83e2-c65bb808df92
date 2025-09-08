'use client';

import { useState } from 'react';
import { Calendar, TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';
import { AnalyticsChart } from './AnalyticsChart';
import { generateMockTradeData, formatCurrency, formatPercentage } from '@/lib/utils';

export function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('30d');
  const mockData = generateMockTradeData();

  const totalVolume = mockData.reduce((sum, day) => sum + day.volume, 0);
  const totalTrades = mockData.reduce((sum, day) => sum + day.trades, 0);
  const avgSlippage = mockData.reduce((sum, day) => sum + day.slippage, 0) / mockData.length;
  const totalFees = mockData.reduce((sum, day) => sum + day.fees, 0);

  const timeRanges = [
    { id: '7d', label: '7D' },
    { id: '30d', label: '30D' },
    { id: '90d', label: '90D' },
    { id: '1y', label: '1Y' }
  ];

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-heading">Trading Analytics</h2>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-textSecondary" />
            <div className="flex space-x-1">
              {timeRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setTimeRange(range.id)}
                  className={`px-3 py-1 rounded text-sm ${
                    timeRange === range.id
                      ? 'bg-primary text-white'
                      : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-5 h-5 text-accent" />
            </div>
            <div className="text-xl font-bold text-textPrimary">
              {formatCurrency(totalVolume)}
            </div>
            <div className="text-sm text-textSecondary">Total Volume</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-textPrimary">
              {totalTrades.toLocaleString()}
            </div>
            <div className="text-sm text-textSecondary">Total Trades</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Percent className="w-5 h-5 text-warning" />
            </div>
            <div className="text-xl font-bold text-textPrimary">
              {formatPercentage(avgSlippage)}
            </div>
            <div className="text-sm text-textSecondary">Avg Slippage</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingDown className="w-5 h-5 text-success" />
            </div>
            <div className="text-xl font-bold text-textPrimary">
              {formatCurrency(totalFees)}
            </div>
            <div className="text-sm text-textSecondary">Total Fees</div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6">
        <AnalyticsChart
          variant="bar"
          data={mockData}
          dataKey="volume"
          title="Daily Trading Volume"
          color="#00D4AA"
        />

        <AnalyticsChart
          variant="line"
          data={mockData}
          dataKey="slippage"
          title="Average Slippage Over Time"
          color="#F59E0B"
        />

        <AnalyticsChart
          variant="line"
          data={mockData}
          dataKey="fees"
          title="Daily Fees Paid"
          color="#EF4444"
        />
      </div>

      {/* DEX Performance */}
      <div className="glass-card p-6">
        <h3 className="text-heading mb-4">DEX Performance Breakdown</h3>
        
        <div className="space-y-4">
          {[
            { name: 'Uniswap V3', slippage: 0.08, volume: 2500000, color: '#FF007A' },
            { name: 'Aerodrome', slippage: 0.12, volume: 1800000, color: '#0052FF' },
            { name: 'PancakeSwap', slippage: 0.15, volume: 1200000, color: '#1FC7D4' },
            { name: 'SushiSwap', slippage: 0.18, volume: 800000, color: '#FA52A0' }
          ].map((dex) => (
            <div key={dex.name} className="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: dex.color }}
                />
                <span className="font-medium text-textPrimary">{dex.name}</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-textPrimary">{formatCurrency(dex.volume)}</div>
                  <div className="text-textSecondary">Volume</div>
                </div>
                <div className="text-center">
                  <div className={`${dex.slippage > 0.15 ? 'text-warning' : 'text-success'}`}>
                    {formatPercentage(dex.slippage)}
                  </div>
                  <div className="text-textSecondary">Avg Slippage</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
