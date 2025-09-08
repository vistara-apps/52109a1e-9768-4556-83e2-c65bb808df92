'use client';

import { BarChart3, ArrowUpDown, Settings2, TrendingUp, PieChart } from 'lucide-react';

interface NavTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'trade', label: 'Swap', icon: ArrowUpDown },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'pools', label: 'Pools', icon: PieChart },
  { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings2 },
];

export function NavTabs({ activeTab, onTabChange }: NavTabsProps) {
  return (
    <div className="flex space-x-1 glass-card p-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`nav-tab flex-1 flex items-center justify-center space-x-1 ${
              isActive ? 'nav-tab-active' : 'nav-tab-inactive'
            }`}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
