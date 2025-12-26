"use client";

import React from 'react';
import { 
  BarChart3, 
  LineChart, 
  Building2, 
  ScrollText, 
  Bitcoin, 
  Globe, 
  ShieldCheck, 
  Gem,
  ChevronDown,
  Coins
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { useCurrency } from "@/context/CurrencyContext";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  isSubItem?: boolean;
}

const SidebarItem = ({ icon, label, active, onClick, className, isSubItem }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left",
      active 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
      isSubItem && "pl-11 py-1.5",
      className
    )}
  >
    {icon}
    <span className="truncate">{label}</span>
  </button>
);

const DashboardSidebar = ({ 
  currentSection, 
  onSectionChange 
}: { 
  currentSection: string, 
  onSectionChange: (s: string) => void 
}) => {
  const { currency, setCurrencyByCode, currencies } = useCurrency();

  return (
    <aside className="w-64 border-r bg-white h-screen flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-primary-foreground">
              <LineChart className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">FinSmart</span>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="mb-6 px-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Display Currency</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-between gap-2 h-9">
                <div className="flex items-center gap-2">
                  <Coins className="w-3.5 h-3.5 text-slate-400" />
                  <span>{currency.label} ({currency.symbol})</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="start">
              {currencies.map((c) => (
                <DropdownMenuItem 
                  key={c.code} 
                  onClick={() => setCurrencyByCode(c.code)}
                  className="justify-between"
                >
                  {c.label} <span>({c.symbol})</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="space-y-1">
          <Collapsible defaultOpen={currentSection.startsWith('mf-')} className="space-y-1">
            <CollapsibleTrigger className="w-full">
              <div className={cn(
                "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentSection.startsWith('mf-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4" />
                  <span>Mutual Funds</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('mf-') && "-rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              
              {/* NEW: Types Collapsible */}
              <Collapsible defaultOpen className="space-y-1">
                <CollapsibleTrigger className="w-full">
                   <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                     <span>Types</span>
                     <ChevronDown className="w-3 h-3" />
                   </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    label="Types of Equity Funds"
                    active={currentSection === 'mf-types'}
                    onClick={() => onSectionChange('mf-types')}
                    className="pl-14 text-xs" 
                  />
                </CollapsibleContent>
              </Collapsible>

              {/* Existing Options Collapsible */}
              <Collapsible defaultOpen className="space-y-1">
                <CollapsibleTrigger className="w-full">
                   <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                     <span>Options</span>
                     <ChevronDown className="w-3 h-3" />
                   </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem label="SIP" active={currentSection === 'mf-sip'} onClick={() => onSectionChange('mf-sip')} className="pl-14 text-xs" />
                  <SidebarItem label="Lumpsum" active={currentSection === 'mf-lumpsum'} onClick={() => onSectionChange('mf-lumpsum')} className="pl-14 text-xs" />
                  <SidebarItem label="SIP & Lumpsum" active={currentSection === 'mf-combined'} onClick={() => onSectionChange('mf-combined')} className="pl-14 text-xs" />
                  <SidebarItem label="SWP" active={currentSection === 'mf-swp'} onClick={() => onSectionChange('mf-swp')} className="pl-14 text-xs" />
                  <SidebarItem label="STP" active={currentSection === 'mf-stp'} onClick={() => onSectionChange('mf-stp')} className="pl-14 text-xs" />
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>

          <SidebarItem icon={<LineChart className="w-4 h-4" />} label="Equity" active={currentSection === 'equity'} onClick={() => onSectionChange('equity')} />
          <SidebarItem icon={<Gem className="w-4 h-4" />} label="Gold" active={currentSection === 'gold'} onClick={() => onSectionChange('gold')} />
          <SidebarItem icon={<Building2 className="w-4 h-4" />} label="Real Estate" active={currentSection === 'real-estate'} onClick={() => onSectionChange('real-estate')} />
          <SidebarItem icon={<ScrollText className="w-4 h-4" />} label="Bonds" active={currentSection === 'bonds'} onClick={() => onSectionChange('bonds')} />

          <Collapsible className="pt-2">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-slate-600">
                Diversification
                <ChevronDown className="w-3 h-3" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem label="PMS" active={currentSection === 'pms'} onClick={() => onSectionChange('pms')} isSubItem />
              <SidebarItem label="AIF" active={currentSection === 'aif'} onClick={() => onSectionChange('aif')} isSubItem />
              <SidebarItem label="SIF" active={currentSection === 'sif'} onClick={() => onSectionChange('sif')} isSubItem />
              <SidebarItem icon={<Bitcoin className="w-4 h-4" />} label="Bitcoin" active={currentSection === 'bitcoin'} onClick={() => onSectionChange('bitcoin')} isSubItem />
              <SidebarItem icon={<Globe className="w-4 h-4" />} label="Overseas" active={currentSection === 'overseas'} onClick={() => onSectionChange('overseas')} isSubItem />
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t">
        <div className="bg-slate-50 p-4 rounded-xl">
          <p className="text-xs font-medium text-slate-500 mb-2">Learning Progress</p>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[45%]" />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Module: Mutual Funds Masterclass</p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;