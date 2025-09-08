'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { TradeInterface } from '@/components/TradeInterface';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';
import { LiquidityPools } from '@/components/LiquidityPools';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('trade');

  const renderContent = () => {
    switch (activeTab) {
      case 'trade':
        return <TradeInterface />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'pools':
        return <LiquidityPools />;
      case 'portfolio':
        return (
          <div className="glass-card p-8 text-center">
            <h2 className="text-heading mb-4">Portfolio Coming Soon</h2>
            <p className="text-body">Track your trading performance and positions.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="glass-card p-8 text-center">
            <h2 className="text-heading mb-4">Settings Coming Soon</h2>
            <p className="text-body">Customize your trading preferences and notifications.</p>
          </div>
        );
      default:
        return <TradeInterface />;
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Tab Content */}
        {renderContent()}
        
        {/* Notification Card */}
        {activeTab === 'trade' && (
          <div className="glass-card p-4 border-l-4 border-accent">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-accent bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-accent text-sm">💡</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-textPrimary mb-1">
                  Better route found to 210 sats
                </h4>
                <p className="text-xs text-textSecondary">
                  You can save 0.2% on your next trade and minimize fees.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
