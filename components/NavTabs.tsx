'use client';

import { BarChart3, ArrowUpDown, Settings2, TrendingUp, Zap } from 'lucide-react';

interface NavTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'trade', label: 'Swap AI Follow', icon: ArrowUpDown },
  { id: 'pools', label: 'Pools', icon: Zap },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings2 },
];

export function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`nav-tab flex items-center space-x-2 whitespace-nowrap ${
              isActive ? 'nav-tab-active' : 'nav-tab-inactive'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
