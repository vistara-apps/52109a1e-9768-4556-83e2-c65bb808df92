'use client';

import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { SUPPORTED_TOKENS } from '@/lib/constants';

interface TokenInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  selectedToken: string;
  onTokenChange: (token: string) => void;
  disabled?: boolean;
}

export function TokenInput({
  label,
  value,
  onChange,
  selectedToken,
  onTokenChange,
  disabled = false
}: TokenInputProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedTokenData = SUPPORTED_TOKENS.find(token => token.symbol === selectedToken);
  
  const filteredTokens = SUPPORTED_TOKENS.filter(token =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <label className="text-caption text-textSecondary">{label}</label>
      
      <div className="glass-card p-4">
        <div className="flex items-center justify-between">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="0.0"
            disabled={disabled}
            className="bg-transparent text-2xl font-semibold text-textPrimary placeholder-textSecondary outline-none flex-1"
          />
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 glass-button px-3 py-2"
            >
              {selectedTokenData && (
                <div className="w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full" />
              )}
              <span className="font-medium text-textPrimary">{selectedToken}</span>
              <ChevronDown className="w-4 h-4 text-textSecondary" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 glass-card border border-white border-opacity-20 rounded-lg z-50">
                <div className="p-3 border-b border-white border-opacity-10">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-textSecondary" />
                    <input
                      type="text"
                      placeholder="Search tokens..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-10 rounded-md text-textPrimary placeholder-textSecondary outline-none"
                    />
                  </div>
                </div>
                
                <div className="max-h-48 overflow-y-auto">
                  {filteredTokens.map((token) => (
                    <button
                      key={token.symbol}
                      onClick={() => {
                        onTokenChange(token.symbol);
                        setIsDropdownOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full" />
                      <div className="text-left">
                        <div className="font-medium text-textPrimary">{token.symbol}</div>
                        <div className="text-sm text-textSecondary truncate">
                          {token.address.slice(0, 8)}...{token.address.slice(-6)}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {selectedTokenData && (
          <div className="mt-2 text-sm text-textSecondary">
            Balance: 0.00 {selectedToken}
          </div>
        )}
      </div>
    </div>
  );
}
