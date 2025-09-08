'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { SUPPORTED_TOKENS } from '@/lib/constants';

interface TokenInputProps {
  label: string;
  value: string;
  amount: string;
  onTokenChange: (token: string) => void;
  onAmountChange: (amount: string) => void;
  showBalance?: boolean;
  balance?: string;
}

export function TokenInput({
  label,
  value,
  amount,
  onTokenChange,
  onAmountChange,
  showBalance = false,
  balance = '0.00'
}: TokenInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedToken = SUPPORTED_TOKENS.find(token => token.symbol === value);
  const filteredTokens = SUPPORTED_TOKENS.filter(token =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-caption">{label}</label>
        {showBalance && (
          <span className="text-caption">Balance: {balance}</span>
        )}
      </div>
      
      <div className="glass-card p-4">
        <div className="flex items-center space-x-3">
          {/* Token Selector */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 glass-button px-3 py-2"
            >
              {selectedToken && (
                <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {selectedToken.symbol[0]}
                  </span>
                </div>
              )}
              <span className="text-sm font-medium">{value || 'Select'}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Token Dropdown */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 glass-card p-2 z-50">
                <div className="relative mb-2">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
                  <input
                    type="text"
                    placeholder="Search tokens..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-surface bg-opacity-50 border border-white border-opacity-10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="max-h-48 overflow-y-auto space-y-1">
                  {filteredTokens.map((token) => (
                    <button
                      key={token.symbol}
                      onClick={() => {
                        onTokenChange(token.symbol);
                        setIsOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center space-x-3 p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {token.symbol[0]}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-medium">{token.symbol}</div>
                        <div className="text-xs text-textSecondary">
                          {token.address.slice(0, 6)}...{token.address.slice(-4)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Amount Input */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="0.00"
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              className="w-full bg-transparent text-right text-lg font-medium focus:outline-none placeholder-textSecondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
