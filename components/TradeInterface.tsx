'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, Zap, Info } from 'lucide-react';
import { TokenInput } from './TokenInput';
import { TradeButton } from './TradeButton';
import { useMiniKit } from '@coinbase/onchainkit/minikit';

export function TradeInterface() {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [routeData, setRouteData] = useState(null);

  const { setFrameReady } = useMiniKit();

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleGetBestRoute = async () => {
    if (!fromAmount || !fromToken || !toToken) return;

    setIsLoading(true);
    
    // Simulate API call for route calculation
    setTimeout(() => {
      const mockRoute = {
        estimatedOutput: '3,487.52',
        priceImpact: 0.12,
        slippage: 0.5,
        fees: '2.45',
        route: ['Uniswap V3 (60%)', 'Aerodrome (40%)']
      };
      
      setRouteData(mockRoute);
      setToAmount(mockRoute.estimatedOutput);
      setIsLoading(false);
    }, 2000);
  };

  const handleExecuteTrade = async () => {
    setIsLoading(true);
    
    // Simulate trade execution
    setTimeout(() => {
      setIsLoading(false);
      // Reset form
      setFromAmount('');
      setToAmount('');
      setRouteData(null);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Trade Form */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-heading">Swap Tokens</h2>
          <button className="glass-button p-2">
            <Info size={16} />
          </button>
        </div>

        <TokenInput
          label="From"
          value={fromToken}
          amount={fromAmount}
          onTokenChange={setFromToken}
          onAmountChange={setFromAmount}
          showBalance
          balance="12.5847"
        />

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="glass-button p-3 rounded-full hover:bg-opacity-20 transition-all duration-200"
          >
            <ArrowUpDown size={20} />
          </button>
        </div>

        <TokenInput
          label="To"
          value={toToken}
          amount={toAmount}
          onTokenChange={setToToken}
          onAmountChange={setToAmount}
          showBalance
          balance="0.00"
        />

        {/* Route Information */}
        {routeData && (
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium">Best Route Found</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-textSecondary">Price Impact:</span>
                <span className="ml-2 text-warning">{routeData.priceImpact}%</span>
              </div>
              <div>
                <span className="text-textSecondary">Max Slippage:</span>
                <span className="ml-2 text-textPrimary">{routeData.slippage}%</span>
              </div>
              <div>
                <span className="text-textSecondary">Network Fee:</span>
                <span className="ml-2 text-textPrimary">${routeData.fees}</span>
              </div>
              <div>
                <span className="text-textSecondary">Route:</span>
                <span className="ml-2 text-accent text-xs">{routeData.route.join(', ')}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!routeData ? (
            <TradeButton
              onClick={handleGetBestRoute}
              loading={isLoading}
              disabled={!fromAmount || !fromToken || !toToken}
            >
              Get Best Route
            </TradeButton>
          ) : (
            <TradeButton
              onClick={handleExecuteTrade}
              loading={isLoading}
            >
              Execute Trade
            </TradeButton>
          )}
          
          <TradeButton variant="secondary" onClick={() => setRouteData(null)}>
            Clear Route
          </TradeButton>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="metric-card text-center">
          <div className="text-display gradient-text">14,587</div>
          <div className="text-caption">Total Pools</div>
        </div>
        <div className="metric-card text-center">
          <div className="text-display text-success">$2.1M</div>
          <div className="text-caption">24h Volume</div>
        </div>
        <div className="metric-card text-center">
          <div className="text-display text-accent">0.12%</div>
          <div className="text-caption">Avg Slippage</div>
        </div>
      </div>
    </div>
  );
}
