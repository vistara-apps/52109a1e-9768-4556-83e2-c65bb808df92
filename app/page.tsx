'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { TradeInterface } from '@/components/TradeInterface';
import { LiquidityScanner } from '@/components/LiquidityScanner';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('trade');

  const renderContent = () => {
    switch (activeTab) {
      case 'trade':
        return <TradeInterface />;
      case 'pools':
        return <LiquidityScanner />;
      case 'analytics':
        return <AnalyticsDashboard />;
      case 'portfolio':
        return (
          <div className="glass-card p-6 text-center">
            <h2 className="text-heading mb-4">Portfolio Coming Soon</h2>
            <p className="text-body">Track your trading performance and positions.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="glass-card p-6">
            <h2 className="text-heading mb-4">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-textPrimary">Notifications</span>
                <button className="glass-button px-3 py-1 rounded">
                  Enabled
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-textPrimary">Auto-refresh</span>
                <button className="glass-button px-3 py-1 rounded">
                  30s
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-textPrimary">Default Slippage</span>
                <button className="glass-button px-3 py-1 rounded">
                  0.5%
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <TradeInterface />;
    }
  };

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Notification Card */}
        <div className="glass-card p-4 border-l-4 border-accent">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div>
              <h3 className="font-medium text-textPrimary">Route count to 210 zsh</h3>
              <p className="text-sm text-textSecondary mt-1">
                You can go on and long share a better
                new price cost and calculate fee.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {renderContent()}
      </div>
    </AppShell>
  );
}
