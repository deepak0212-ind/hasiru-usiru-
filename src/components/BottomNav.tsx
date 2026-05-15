import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Map as MapIcon, Leaf, User, BarChart2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'map', icon: MapIcon, label: 'Map' },
    { id: 'species', icon: Leaf, label: 'Species' },
    { id: 'analytics', icon: BarChart2, label: 'Stats' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-t-2 border-natural-border flex justify-around items-center px-6 py-3 pb-8 shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            id={`nav-tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all duration-300 relative",
              isActive ? "text-natural-green scale-110" : "text-slate-300 hover:text-slate-400"
            )}
          >
            <div className={cn(
              "p-2.5 rounded-2xl transition-all duration-500",
              isActive ? "bg-natural-highlight shadow-sm border border-natural-green/10" : "bg-transparent"
            )}>
              <Icon size={isActive ? 26 : 24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={cn(
               "text-[9px] font-black uppercase tracking-[0.1em] transition-all duration-300",
               isActive ? "opacity-100" : "opacity-0 -translate-y-1"
            )}>
               {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute -bottom-1 w-1 h-1 bg-natural-green rounded-full"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
