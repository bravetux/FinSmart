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
  Coins,
  Baby,
  Banknote,
  PiggyBank,
  HandCoins,
  Zap,
  ArrowRightLeft,
  PieChart,
  ShieldAlert
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
          {/* Kids */}
          <Collapsible defaultOpen={currentSection.startsWith('kids-')} className="space-y-1">
            <CollapsibleTrigger className="w-full">
              <div className={cn(
                "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentSection.startsWith('kids-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}>
                <div className="flex items-center gap-3">
                  <Baby className="w-4 h-4" />
                  <span>Kids</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('kids-') && "-rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem label="Adventure Map" active={currentSection === 'kids-overview'} onClick={() => onSectionChange('kids-overview')} isSubItem />
              <SidebarItem label="Magic Money" active={currentSection === 'kids-money'} onClick={() => onSectionChange('kids-money')} isSubItem />
              <SidebarItem label="Piggy Bank Power" active={currentSection === 'kids-piggy-bank'} onClick={() => onSectionChange('kids-piggy-bank')} isSubItem />
              <SidebarItem label="Budgeting" active={currentSection === 'kids-budgeting'} onClick={() => onSectionChange('kids-budgeting')} isSubItem />
              
              <Collapsible defaultOpen={currentSection.startsWith('kids-bank')} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                   <div className={cn(
                     "flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium transition-colors",
                     currentSection.startsWith('kids-bank') ? "text-primary" : "text-slate-600 hover:text-slate-900"
                   )}>
                     <span>The Bank Store</span>
                     <ChevronDown className="w-3 h-3" />
                   </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem label="How it Works" active={currentSection === 'kids-bank'} onClick={() => onSectionChange('kids-bank')} className="pl-14 text-xs" />
                  <Collapsible defaultOpen={currentSection.includes('kids-bank-accounts') || currentSection === 'kids-bank-operating' || currentSection === 'kids-bank-transfers'}>
                    <CollapsibleTrigger className="w-full">
                      <div className={cn(
                        "flex items-center justify-between pl-14 pr-4 py-1.5 text-xs font-medium transition-colors",
                        (currentSection.includes('kids-bank-accounts') || currentSection === 'kids-bank-operating' || currentSection === 'kids-bank-transfers') ? "text-primary" : "text-slate-600 hover:text-slate-900"
                      )}>
                        <span>Accounts</span>
                        <ChevronDown className="w-2.5 h-2.5" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem label="Types" active={currentSection === 'kids-bank-accounts'} onClick={() => onSectionChange('kids-bank-accounts')} className="pl-16 text-[10px]" />
                      <SidebarItem label="Operating" active={currentSection === 'kids-bank-operating'} onClick={() => onSectionChange('kids-bank-operating')} className="pl-16 text-[10px]" />
                      <SidebarItem label="Transfers" active={currentSection === 'kids-bank-transfers'} onClick={() => onSectionChange('kids-bank-transfers')} className="pl-16 text-[10px]" />
                    </CollapsibleContent>
                  </Collapsible>
                  <SidebarItem label="Loans" active={currentSection === 'kids-bank-loans'} onClick={() => onSectionChange('kids-bank-loans')} className="pl-14 text-xs" />
                  <SidebarItem label="Other Services" active={currentSection === 'kids-bank-services'} onClick={() => onSectionChange('kids-bank-services')} className="pl-14 text-xs" />
                </CollapsibleContent>
              </Collapsible>
              <SidebarItem label="Safety Shield" active={currentSection === 'kids-safety'} onClick={() => onSectionChange('kids-safety')} isSubItem />
            </CollapsibleContent>
          </Collapsible>

          {/* Mutual Funds */}
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
              <Collapsible defaultOpen={currentSection.includes('-types')} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                   <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                     <span>Types</span>
                     <ChevronDown className="w-3 h-3" />
                   </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem label="Equity Funds" active={currentSection === 'mf-equity-types'} onClick={() => onSectionChange('mf-equity-types')} className="pl-14 text-xs" />
                  <SidebarItem label="Debt Funds" active={currentSection === 'mf-debt-types'} onClick={() => onSectionChange('mf-debt-types')} className="pl-14 text-xs" />
                  <SidebarItem label="Hybrid Funds" active={currentSection === 'mf-hybrid-types'} onClick={() => onSectionChange('mf-hybrid-types')} className="pl-14 text-xs" />
                  <SidebarItem label="Goal Based" active={currentSection === 'mf-goal-types'} onClick={() => onSectionChange('mf-goal-types')} className="pl-14 text-xs" />
                  <SidebarItem label="Risk Based" active={currentSection === 'mf-risk-types'} onClick={() => onSectionChange('mf-risk-types')} className="pl-14 text-xs" />
                  <SidebarItem label="Structure Based" active={currentSection === 'mf-structure-types'} onClick={() => onSectionChange('mf-structure-types')} className="pl-14 text-xs" />
                </CollapsibleContent>
              </Collapsible>
              <Collapsible defaultOpen={!currentSection.includes('-types') && currentSection.startsWith('mf-') && currentSection !== 'mf-taxation'} className="space-y-1">
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
              <SidebarItem label="Taxation" active={currentSection === 'mf-taxation'} onClick={() => onSectionChange('mf-taxation')} className="pl-11" />
            </CollapsibleContent>
          </Collapsible>

          {/* Equity */}
          <SidebarItem icon={<LineChart className="w-4 h-4" />} label="Equity" active={currentSection === 'equity'} onClick={() => onSectionChange('equity')} />
          
          {/* Gold */}
          <Collapsible defaultOpen={currentSection.startsWith('gold-')} className="space-y-1">
            <CollapsibleTrigger className="w-full">
              <div className={cn(
                "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentSection.startsWith('gold-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}>
                <div className="flex items-center gap-3">
                  <Gem className="w-4 h-4" />
                  <span>Gold</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('gold-') && "-rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem label="Overview" active={currentSection === 'gold-overview'} onClick={() => onSectionChange('gold-overview')} isSubItem />
              <SidebarItem label="Physical Gold" active={currentSection === 'gold-physical'} onClick={() => onSectionChange('gold-physical')} isSubItem />
              <SidebarItem label="Gold ETFs" active={currentSection === 'gold-etf'} onClick={() => onSectionChange('gold-etf')} isSubItem />
              <SidebarItem label="Digital (SGB)" active={currentSection === 'gold-digital'} onClick={() => onSectionChange('gold-digital')} isSubItem />
            </CollapsibleContent>
          </Collapsible>

          {/* Real Estate */}
          <Collapsible defaultOpen={currentSection.startsWith('re-')} className="space-y-1">
            <CollapsibleTrigger className="w-full">
              <div className={cn(
                "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentSection.startsWith('re-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4" />
                  <span>Real Estate</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('re-') && "-rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem label="Overview" active={currentSection === 're-overview'} onClick={() => onSectionChange('re-overview')} isSubItem />
              <SidebarItem label="Document Check" active={currentSection === 're-documents'} onClick={() => onSectionChange('re-documents')} isSubItem />
            </CollapsibleContent>
          </Collapsible>
          
          {/* Bonds */}
          <Collapsible defaultOpen={currentSection.startsWith('bonds-')} className="space-y-1">
            <CollapsibleTrigger className="w-full">
              <div className={cn(
                "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentSection.startsWith('bonds-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}>
                <div className="flex items-center gap-3">
                  <ScrollText className="w-4 h-4" />
                  <span>Bonds</span>
                </div>
                <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('bonds-') && "-rotate-90")} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1">
              <SidebarItem label="Overview" active={currentSection === 'bonds-overview'} onClick={() => onSectionChange('bonds-overview')} isSubItem />
              <SidebarItem label="Things to Consider" active={currentSection === 'bonds-consider'} onClick={() => onSectionChange('bonds-consider')} isSubItem />
              <Collapsible defaultOpen={currentSection.startsWith('bonds-') && currentSection !== 'bonds-overview' && currentSection !== 'bonds-consider'}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                    <span>Credit Ratings</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem label="Importance" active={currentSection === 'bonds-importance'} onClick={() => onSectionChange('bonds-importance')} className="pl-14 text-xs" />
                  <SidebarItem label="Rating Scale" active={currentSection === 'bonds-ratings'} onClick={() => onSectionChange('bonds-ratings')} className="pl-14 text-xs" />
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>

          {/* Diversification */}
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
          <p className="text-[10px] text-slate-400 mt-2">Module: Financial Literacy</p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;