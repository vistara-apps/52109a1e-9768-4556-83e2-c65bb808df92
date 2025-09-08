'use client';

import { ArrowRight, Zap, AlertTriangle, CheckCircle } from 'lucide-react';
import { TradeButton } from './TradeButton';
import { formatPercentage, formatCurrency } from '@/lib/utils';

interface RouteDisplayProps {
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount: string;
  slippage: number;
}

export function RouteDisplay({
  fromToken,
  toToken,
  fromAmount,
  toAmount,
  slippage
}: RouteDisplayProps) {
  const mockRoute = [
    { dex: 'Uniswap V3', percentage: 60, color: '#FF007A' },
    { dex: 'Aerodrome', percentage: 40, color: '#0052FF' }
  ];

  const priceImpact = 0.12;
  const estimatedGas = 0.0023;
  const totalFees = 0.0045;

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-heading">Optimal Route Found</h3>
        <div className="flex items-center space-x-1 text-success">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm">Best Price</span>
        </div>
      </div>

      {/* Route Visualization */}
      <div className="bg-white bg-opacity-5 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-textPrimary">{fromAmount}</div>
            <div className="text-sm text-textSecondary">{fromToken}</div>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="flex items-center justify-center space-x-2">
              {mockRoute.map((route, index) => (
                <div key={route.dex} className="flex items-center space-x-2">
                  <div className="text-center">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: route.color }}
                    />
                    <div className="text-xs text-textSecondary mt-1">
                      {route.percentage}%
                    </div>
                  </div>
                  {index < mockRoute.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-textSecondary" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-textPrimary">{toAmount}</div>
            <div className="text-sm text-textSecondary">{toToken}</div>
          </div>
        </div>

        {/* DEX Breakdown */}
        <div className="space-y-2">
          {mockRoute.map((route) => (
            <div key={route.dex} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: route.color }}
                />
                <span className="text-textSecondary">{route.dex}</span>
              </div>
              <span className="text-textPrimary">{route.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trade Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-textSecondary text-sm">Price Impact</span>
            <div className="flex items-center space-x-1">
              {priceImpact > 1 ? (
                <AlertTriangle className="w-3 h-3 text-warning" />
              ) : (
                <CheckCircle className="w-3 h-3 text-success" />
              )}
              <span className={`text-sm ${priceImpact > 1 ? 'text-warning' : 'text-success'}`}>
                {formatPercentage(priceImpact / 100)}
              </span>
            </div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-textSecondary text-sm">Max Slippage</span>
            <span className="text-textPrimary text-sm">{formatPercentage(slippage / 100)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-textSecondary text-sm">Est. Gas</span>
            <span className="text-textPrimary text-sm">{formatCurrency(estimatedGas)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-textSecondary text-sm">Total Fees</span>
            <span className="text-textPrimary text-sm">{formatCurrency(totalFees)}</span>
          </div>
        </div>
      </div>

      {/* Execute Trade Button */}
      <TradeButton onClick={() => console.log('Execute trade')}>
        Execute Trade
      </TradeButton>

      {/* Route Refresh */}
      <div className="text-center">
        <button className="text-sm text-textSecondary hover:text-textPrimary transition-colors duration-200">
          Route updates in 30s
        </button>
      </div>
    </div>
  );
}
