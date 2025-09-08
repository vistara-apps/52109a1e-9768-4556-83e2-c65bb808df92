'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, Settings2, RefreshCw } from 'lucide-react';
import { TokenInput } from './TokenInput';
import { TradeButton } from './TradeButton';
import { RouteDisplay } from './RouteDisplay';
import { SUPPORTED_TOKENS } from '@/lib/constants';

export function TradeInterface() {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [isLoading, setIsLoading] = useState(false);
  const [showRoute, setShowRoute] = useState(false);
  const [slippage, setSlippage] = useState(0.5);

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleGetBestRoute = async () => {
    if (!fromAmount || parseFloat(fromAmount) <= 0) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock calculation
    const mockRate = fromToken === 'ETH' ? 3500 : 0.000286;
    const calculatedAmount = (parseFloat(fromAmount) * mockRate).toFixed(6);
    setToAmount(calculatedAmount);
    setShowRoute(true);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Trade Input Section */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-heading">Swap Tokens</h2>
          <button className="glass-button p-2 rounded-md">
            <Settings2 className="w-4 h-4 text-textSecondary" />
          </button>
        </div>

        <TokenInput
          label="From"
          value={fromAmount}
          onChange={setFromAmount}
          selectedToken={fromToken}
          onTokenChange={setFromToken}
        />

        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="glass-button p-3 rounded-full hover:bg-opacity-20 transition-all duration-200"
          >
            <ArrowUpDown className="w-5 h-5 text-textPrimary" />
          </button>
        </div>

        <TokenInput
          label="To"
          value={toAmount}
          onChange={setToAmount}
          selectedToken={toToken}
          onTokenChange={setToToken}
          disabled={true}
        />

        <div className="flex items-center justify-between text-sm">
          <span className="text-textSecondary">Slippage Tolerance</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSlippage(0.1)}
              className={`px-2 py-1 rounded text-xs ${
                slippage === 0.1 ? 'bg-primary text-white' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              0.1%
            </button>
            <button
              onClick={() => setSlippage(0.5)}
              className={`px-2 py-1 rounded text-xs ${
                slippage === 0.5 ? 'bg-primary text-white' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              0.5%
            </button>
            <button
              onClick={() => setSlippage(1.0)}
              className={`px-2 py-1 rounded text-xs ${
                slippage === 1.0 ? 'bg-primary text-white' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              1.0%
            </button>
          </div>
        </div>

        <TradeButton
          onClick={handleGetBestRoute}
          loading={isLoading}
          disabled={!fromAmount || parseFloat(fromAmount) <= 0}
        >
          Get Best Route
        </TradeButton>
      </div>

      {/* Route Display */}
      {showRoute && !isLoading && (
        <RouteDisplay
          fromToken={fromToken}
          toToken={toToken}
          fromAmount={fromAmount}
          toAmount={toAmount}
          slippage={slippage}
        />
      )}
    </div>
  );
}
