'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { NavTabs } from './NavTabs';
import { FloatingElements } from './FloatingElements';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const { setFrameReady } = useMiniKit();
  const [activeTab, setActiveTab] = useState('trade');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 p-4 border-b border-white border-opacity-10">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BL</span>
              </div>
              <h1 className="text-display gradient-text">Base Liquidity Navigator</h1>
            </div>
          </div>
          
          <p className="text-body mb-6">
            Your liquidity for your swap needs. Join us on token ring and an online
            to the trading your limit and get best liquidity matching.
          </p>
          
          <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-4">
        <div className="max-w-xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
