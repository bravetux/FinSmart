"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, LineChart, Building2, ScrollText, Bitcoin, Globe, ShieldCheck, Gem, ChevronDown, ChevronLeft, ChevronRight, Coins, Baby, Banknote, PiggyBank, HandCoins, Zap, ArrowRightLeft, PieChart, ShieldAlert, Calculator, Scale, Rocket, Search, Shield, Heart, Home, Swords, Briefcase, Wallet } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useCurrency } from "@/context/CurrencyContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  isSubItem?: boolean;
  isCollapsed?: boolean;
}

const SidebarItem = ({ icon, label, active, onClick, className, isSubItem, isCollapsed }: SidebarItemProps) => {
  const content = (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left",
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        isSubItem && !isCollapsed && "pl-11 py-1.5",
        isCollapsed && "justify-center px-0 h-10 w-10 mx-auto",
        className
      )}
    >
      {icon}
      {!isCollapsed && <span className="truncate">{label}</span>}
    </button>
  );

  if (isCollapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
};

const DashboardSidebar = ({ currentSection, onSectionChange }: { currentSection: string, onSectionChange: (s: string) => void }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currency, setCurrencyByCode, currencies } = useCurrency();

  return (
    <TooltipProvider>
      <aside className={cn(
        "border-r bg-white h-screen flex flex-col sticky top-0 transition-all duration-300 overflow-y-auto overflow-x-hidden",
        isCollapsed ? "w-20" : "w-64"
      )}>
        <div className="p-4 flex flex-col h-full">
          <div className={cn("flex items-center mb-8", isCollapsed ? "justify-center" : "justify-between px-2")}>
            {!isCollapsed && (
              <div 
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => navigate('/')}
              >
                <div className="bg-primary p-1.5 rounded-lg text-primary-foreground shrink-0">
                  <LineChart className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight truncate">FinSmart</span>
              </div>
            )}
            {isCollapsed && (
              <div 
                className="bg-primary p-1.5 rounded-lg text-primary-foreground cursor-pointer"
                onClick={() => navigate('/')}
              >
                <LineChart className="w-5 h-5" />
              </div>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn("h-8 w-8", isCollapsed ? "mt-4" : "")}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>

          {/* Currency Selector */}
          {!isCollapsed ? (
            <div className="mb-6 px-2">
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
                      {c.label}
                      <span>({c.symbol})</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="mb-6 flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Coins className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right">
                  {currencies.map((c) => (
                    <DropdownMenuItem 
                      key={c.code} 
                      onClick={() => setCurrencyByCode(c.code)}
                      className="justify-between gap-4"
                    >
                      {c.label}
                      <span>({c.symbol})</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          <nav className="space-y-1 flex-1">
            {/* Kids */}
            {!isCollapsed ? (
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
                  <SidebarItem 
                    label="Adventure Map" 
                    active={currentSection === 'kids-overview'} 
                    onClick={() => onSectionChange('kids-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Basics & Earning */}
                  <Collapsible defaultOpen={currentSection.includes('money') || currentSection.includes('earning') || currentSection.includes('budgeting')}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Basics & Earning</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="Magic Money" 
                        active={currentSection === 'kids-money'} 
                        onClick={() => onSectionChange('kids-money')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Earning Engine" 
                        active={currentSection === 'kids-earning'} 
                        onClick={() => onSectionChange('kids-earning')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Piggy Bank Power" 
                        active={currentSection === 'kids-piggy-bank'} 
                        onClick={() => onSectionChange('kids-piggy-bank')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Budgeting" 
                        active={currentSection === 'kids-budgeting'} 
                        onClick={() => onSectionChange('kids-budgeting')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Growth & Concepts */}
                  <Collapsible defaultOpen={currentSection.includes('investing') || currentSection.includes('inflation') || currentSection.includes('taxes') || currentSection.includes('credit') || currentSection.includes('global') || currentSection.includes('giving')}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Growth & Concepts</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="Money Tree (Investing)" 
                        active={currentSection === 'kids-investing'} 
                        onClick={() => onSectionChange('kids-investing')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Shrinking Cookie (Inflation)" 
                        active={currentSection === 'kids-inflation'} 
                        onClick={() => onSectionChange('kids-inflation')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Community Pot (Taxes)" 
                        active={currentSection === 'kids-taxes'} 
                        onClick={() => onSectionChange('kids-taxes')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Credit Reputation" 
                        active={currentSection === 'kids-credit'} 
                        onClick={() => onSectionChange('kids-credit')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Global Money" 
                        active={currentSection === 'kids-global'} 
                        onClick={() => onSectionChange('kids-global')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Advanced Giving" 
                        active={currentSection === 'kids-giving'} 
                        onClick={() => onSectionChange('kids-giving')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

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
                      <SidebarItem 
                        label="How it Works" 
                        active={currentSection === 'kids-bank'} 
                        onClick={() => onSectionChange('kids-bank')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Minting Money" 
                        active={currentSection === 'kids-minting-money'} 
                        onClick={() => onSectionChange('kids-minting-money')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />

                      <Collapsible defaultOpen={currentSection.includes('kids-bank-accounts') || currentSection === 'kids-bank-operating' || currentSection === 'kids-bank-transfers'}>
                        <CollapsibleTrigger className="w-full">
                          <div className={cn(
                            "flex items-center justify-between pl-14 pr-4 py-1.5 text-sm font-medium transition-colors",
                            (currentSection.includes('kids-bank-accounts') || currentSection === 'kids-bank-operating' || currentSection === 'kids-bank-transfers') ? "text-primary" : "text-slate-600 hover:text-slate-900"
                          )}>
                            <span>Accounts</span>
                            <ChevronDown className="w-2.5 h-2.5" />
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-1">
                          <SidebarItem 
                            label="Types" 
                            active={currentSection === 'kids-bank-accounts'} 
                            onClick={() => onSectionChange('kids-bank-accounts')} 
                            className="pl-16 text-[10px]" 
                            isCollapsed={isCollapsed} 
                          />
                          <SidebarItem 
                            label="Operating" 
                            active={currentSection === 'kids-bank-operating'} 
                            onClick={() => onSectionChange('kids-bank-operating')} 
                            className="pl-16 text-[10px]" 
                            isCollapsed={isCollapsed} 
                          />
                          <SidebarItem 
                            label="Transfers" 
                            active={currentSection === 'kids-bank-transfers'} 
                            onClick={() => onSectionChange('kids-bank-transfers')} 
                            className="pl-16 text-[10px]" 
                            isCollapsed={isCollapsed} 
                          />
                        </CollapsibleContent>
                      </Collapsible>

                      <SidebarItem 
                        label="Loans" 
                        active={currentSection === 'kids-bank-loans'} 
                        onClick={() => onSectionChange('kids-bank-loans')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Other Services" 
                        active={currentSection === 'kids-bank-services'} 
                        onClick={() => onSectionChange('kids-bank-services')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  <SidebarItem 
                    label="Safety Shield" 
                    active={currentSection === 'kids-safety'} 
                    onClick={() => onSectionChange('kids-safety')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<Baby className="w-4 h-4" />} 
                label="Kids" 
                active={currentSection.startsWith('kids-')} 
                onClick={() => onSectionChange('kids-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Income Section */}
            {!isCollapsed ? (
              <Collapsible defaultOpen={currentSection.startsWith('income-')} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                  <div className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    currentSection.startsWith('income-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                    <div className="flex items-center gap-3">
                      <Wallet className="w-4 h-4" />
                      <span>Income</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('income-') && "-rotate-90")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    label="Roadmap" 
                    active={currentSection === 'income-overview'} 
                    onClick={() => onSectionChange('income-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<Wallet className="w-4 h-4" />} 
                label="Income" 
                active={currentSection.startsWith('income-')} 
                onClick={() => onSectionChange('income-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}
            
            {/* Insurance */}
            {!isCollapsed ? (
              <Collapsible defaultOpen={currentSection.startsWith('insurance-')} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                  <div className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    currentSection.startsWith('insurance-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4" />
                      <span>Insurance</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('insurance-') && "-rotate-90")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    icon={<Heart className="w-4 h-4" />}
                    label="Health Insurance" 
                    active={currentSection === 'insurance-health'} 
                    onClick={() => onSectionChange('insurance-health')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    icon={<ShieldCheck className="w-4 h-4" />}
                    label="Term Insurance" 
                    active={currentSection === 'insurance-term'} 
                    onClick={() => onSectionChange('insurance-term')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<Shield className="w-4 h-4" />} 
                label="Insurance" 
                active={currentSection.startsWith('insurance-')} 
                onClick={() => onSectionChange('insurance-health')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Mutual Funds */}
            {!isCollapsed ? (
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
                      <SidebarItem 
                        label="Equity Funds" 
                        active={currentSection === 'mf-equity-types'} 
                        onClick={() => onSectionChange('mf-equity-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Debt Funds" 
                        active={currentSection === 'mf-debt-types'} 
                        onClick={() => onSectionChange('mf-debt-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Hybrid Funds" 
                        active={currentSection === 'mf-hybrid-types'} 
                        onClick={() => onSectionChange('mf-hybrid-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Goal Based" 
                        active={currentSection === 'mf-goal-types'} 
                        onClick={() => onSectionChange('mf-goal-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Risk Based" 
                        active={currentSection === 'mf-risk-types'} 
                        onClick={() => onSectionChange('mf-risk-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Structure Based" 
                        active={currentSection === 'mf-structure-types'} 
                        onClick={() => onSectionChange('mf-structure-types')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen={!currentSection.includes('-types') && currentSection.startsWith('mf-') && currentSection !== 'mf-taxation' && currentSection !== 'mf-metrics' && currentSection !== 'mf-passive'} className="space-y-1">
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Options</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="SIP" 
                        active={currentSection === 'mf-sip'} 
                        onClick={() => onSectionChange('mf-sip')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Lumpsum" 
                        active={currentSection === 'mf-lumpsum'} 
                        onClick={() => onSectionChange('mf-lumpsum')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="SIP & Lumpsum" 
                        active={currentSection === 'mf-combined'} 
                        onClick={() => onSectionChange('mf-combined')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="SWP" 
                        active={currentSection === 'mf-swp'} 
                        onClick={() => onSectionChange('mf-swp')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="STP" 
                        active={currentSection === 'mf-stp'} 
                        onClick={() => onSectionChange('mf-stp')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen={currentSection === 'mf-taxation' || currentSection === 'mf-metrics' || currentSection === 'mf-passive'} className="space-y-1">
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Analysis & Passive</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="Fund Metrics" 
                        active={currentSection === 'mf-metrics'} 
                        onClick={() => onSectionChange('mf-metrics')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Passive Investing" 
                        active={currentSection === 'mf-passive'} 
                        onClick={() => onSectionChange('mf-passive')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Taxation" 
                        active={currentSection === 'mf-taxation'} 
                        onClick={() => onSectionChange('mf-taxation')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<BarChart3 className="w-4 h-4" />} 
                label="Mutual Funds" 
                active={currentSection.startsWith('mf-')} 
                onClick={() => onSectionChange('mf-equity-types')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Equity */}
            {!isCollapsed ? (
              <Collapsible defaultOpen={currentSection.startsWith('equity-')} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                  <div className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    currentSection.startsWith('equity-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                    <div className="flex items-center gap-3">
                      <LineChart className="w-4 h-4" />
                      <span>Equity</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('equity-') && "-rotate-90")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'equity-overview'} 
                    onClick={() => onSectionChange('equity-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Macro Analysis" 
                    active={currentSection === 'equity-macro'} 
                    onClick={() => onSectionChange('equity-macro')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  
                  {/* Companies Section */}
                  <Collapsible defaultOpen={currentSection.startsWith('equity-') && (currentSection === 'equity-competition' || currentSection === 'equity-debt' || currentSection === 'equity-valuation' || currentSection === 'equity-value-investing')}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Companies</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        icon={<Swords className="w-3.5 h-3.5" />}
                        label="Competition" 
                        active={currentSection === 'equity-competition'} 
                        onClick={() => onSectionChange('equity-competition')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Scale className="w-3.5 h-3.5" />}
                        label="Debt" 
                        active={currentSection === 'equity-debt'} 
                        onClick={() => onSectionChange('equity-debt')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Calculator className="w-3.5 h-3.5" />}
                        label="Valuation" 
                        active={currentSection === 'equity-valuation'} 
                        onClick={() => onSectionChange('equity-valuation')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Search className="w-3.5 h-3.5" />}
                        label="Value Investing" 
                        active={currentSection === 'equity-value-investing'} 
                        onClick={() => onSectionChange('equity-value-investing')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  <SidebarItem 
                    label="Fundamental Analysis" 
                    active={currentSection === 'equity-fundamental'} 
                    onClick={() => onSectionChange('equity-fundamental')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Moat Analysis" 
                    active={currentSection === 'equity-moat'} 
                    onClick={() => onSectionChange('equity-moat')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Pricing Power" 
                    active={currentSection === 'equity-pricing-power'} 
                    onClick={() => onSectionChange('equity-pricing-power')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Face Value & Splits" 
                    active={currentSection === 'equity-face-value'} 
                    onClick={() => onSectionChange('equity-face-value')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Beyond Valuation" 
                    active={currentSection === 'equity-beyond-valuation'} 
                    onClick={() => onSectionChange('equity-beyond-valuation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Technical Basics" 
                    active={currentSection === 'equity-technical'} 
                    onClick={() => onSectionChange('equity-technical')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="IPOs" 
                    active={currentSection === 'equity-ipo'} 
                    onClick={() => onSectionChange('equity-ipo')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<LineChart className="w-4 h-4" />} 
                label="Equity" 
                active={currentSection.startsWith('equity-')} 
                onClick={() => onSectionChange('equity-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Gold */}
            {!isCollapsed ? (
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
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'gold-overview'} 
                    onClick={() => onSectionChange('gold-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Physical Gold" 
                    active={currentSection === 'gold-physical'} 
                    onClick={() => onSectionChange('gold-physical')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Gold ETFs" 
                    active={currentSection === 'gold-etf'} 
                    onClick={() => onSectionChange('gold-etf')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Digital (SGB)" 
                    active={currentSection === 'gold-digital'} 
                    onClick={() => onSectionChange('gold-digital')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Taxation" 
                    active={currentSection === 'gold-taxation'} 
                    onClick={() => onSectionChange('gold-taxation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Digital Platforms" 
                    active={currentSection === 'gold-platforms'} 
                    onClick={() => onSectionChange('gold-platforms')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<Gem className="w-4 h-4" />} 
                label="Gold" 
                active={currentSection.startsWith('gold-')} 
                onClick={() => onSectionChange('gold-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Real Estate */}
            {!isCollapsed ? (
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
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 're-overview'} 
                    onClick={() => onSectionChange('re-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Rent vs. Buy Analysis" 
                    active={currentSection === 're-rental-returns'} 
                    onClick={() => onSectionChange('re-rental-returns')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Document Check" 
                    active={currentSection === 're-documents'} 
                    onClick={() => onSectionChange('re-documents')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="REITs & Fractional" 
                    active={currentSection === 're-reits-fractional'} 
                    onClick={() => onSectionChange('re-reits-fractional')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Rental Yield Calc" 
                    active={currentSection === 're-rental-yield'} 
                    onClick={() => onSectionChange('re-rental-yield')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Taxation" 
                    active={currentSection === 're-taxation'} 
                    onClick={() => onSectionChange('re-taxation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<Building2 className="w-4 h-4" />} 
                label="Real Estate" 
                active={currentSection.startsWith('re-')} 
                onClick={() => onSectionChange('re-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Bonds */}
            {!isCollapsed ? (
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
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'bonds-overview'} 
                    onClick={() => onSectionChange('bonds-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Things to Consider" 
                    active={currentSection === 'bonds-consider'} 
                    onClick={() => onSectionChange('bonds-consider')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  <Collapsible defaultOpen={currentSection.startsWith('bonds-') && currentSection !== 'bonds-overview' && currentSection !== 'bonds-consider'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Credit Ratings</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="Importance" 
                        active={currentSection === 'bonds-importance'} 
                        onClick={() => onSectionChange('bonds-importance')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Rating Scale" 
                        active={currentSection === 'bonds-ratings'} 
                        onClick={() => onSectionChange('bonds-ratings')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<ScrollText className="w-4 h-4" />} 
                label="Bonds" 
                active={currentSection.startsWith('bonds-')} 
                onClick={() => onSectionChange('bonds-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Diversification */}
            {!isCollapsed ? (
              <Collapsible className="pt-2">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-slate-600">
                    Diversification
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    label="PMS" 
                    active={currentSection === 'pms'} 
                    onClick={() => onSectionChange('pms')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="AIF" 
                    active={currentSection === 'aif'} 
                    onClick={() => onSectionChange('aif')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="SIF" 
                    active={currentSection === 'sif'} 
                    onClick={() => onSectionChange('sif')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    icon={<Bitcoin className="w-4 h-4" />} 
                    label="Bitcoin" 
                    active={currentSection === 'bitcoin'} 
                    onClick={() => onSectionChange('bitcoin')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    icon={<Globe className="w-4 h-4" />} 
                    label="Overseas" 
                    active={currentSection === 'overseas'} 
                    onClick={() => onSectionChange('overseas')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<PieChart className="w-4 h-4" />} 
                label="Diversification" 
                active={currentSection === 'pms'} 
                onClick={() => onSectionChange('pms')} 
                isCollapsed={isCollapsed} 
              />
            )}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t">
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default DashboardSidebar;