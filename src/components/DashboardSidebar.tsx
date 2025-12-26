"use client";

import React from 'react';
import { 
  BarChart3, 
  LineChart, 
  Coins, 
  Building2, 
  ScrollText, 
  Layers, 
  Bitcoin, 
  Globe, 
  ShieldCheck, 
  Gem,
  ChevronDown
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const SidebarItem = ({ icon, label, active, onClick, className }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
      active 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      className
    )}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const DashboardSidebar = ({ 
  currentSection, 
  onSectionChange 
}: { 
  currentSection: string, 
  onSectionChange: (s: string) => void 
}) => {
  return (
    <aside className="w-64 border-r bg-white h-screen flex flex-col sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
            <LineChart className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">FinSmart</span>
        </div>

        <nav className="space-y-1">
          <SidebarItem 
            icon={<BarChart3 className="w-4 h-4" />} 
            label="Mutual Funds" 
            active={currentSection === 'mutual-funds'}
            onClick={() => onSectionChange('mutual-funds')}
          />
          <SidebarItem 
            icon={<LineChart className="w-4 h-4" />} 
            label="Equity" 
            active={currentSection === 'equity'}
            onClick={() => onSectionChange('equity')}
          />
          <SidebarItem 
            icon={<Gem className="w-4 h-4" />} 
            label="Gold" 
            active={currentSection === 'gold'}
            onClick={() => onSectionChange('gold')}
          />
          <SidebarItem 
            icon={<Building2 className="w-4 h-4" />} 
            label="Real Estate" 
            active={currentSection === 'real-estate'}
            onClick={() => onSectionChange('real-estate')}
          />
          <SidebarItem 
            icon={<ScrollText className="w-4 h-4" />} 
            label="Bonds" 
            active={currentSection === 'bonds'}
            onClick={() => onSectionChange('bonds')}
          />

          <Collapsible defaultOpen className="pt-2">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-slate-600">
                Diversification
                <ChevronDown className="w-3 h-3" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem 
                icon={<Layers className="w-4 h-4" />} 
                label="PMS" 
                active={currentSection === 'pms'}
                onClick={() => onSectionChange('pms')}
                className="pl-9"
              />
              <SidebarItem 
                icon={<ShieldCheck className="w-4 h-4" />} 
                label="AIF" 
                active={currentSection === 'aif'}
                onClick={() => onSectionChange('aif')}
                className="pl-9"
              />
              <SidebarItem 
                icon={<Coins className="w-4 h-4" />} 
                label="SIF" 
                active={currentSection === 'sif'}
                onClick={() => onSectionChange('sif')}
                className="pl-9"
              />
              <SidebarItem 
                icon={<Bitcoin className="w-4 h-4" />} 
                label="Bitcoin" 
                active={currentSection === 'bitcoin'}
                onClick={() => onSectionChange('bitcoin')}
                className="pl-9"
              />
              <SidebarItem 
                icon={<Globe className="w-4 h-4" />} 
                label="Overseas Investment" 
                active={currentSection === 'overseas'}
                onClick={() => onSectionChange('overseas')}
                className="pl-9"
              />
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t">
        <div className="bg-slate-50 p-4 rounded-xl">
          <p className="text-xs font-medium text-slate-500 mb-2">Learning Progress</p>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[35%]" />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Level 2: Intermediate Investor</p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;