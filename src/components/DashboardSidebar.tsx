"use client";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, LineChart, Building2, ScrollText, Bitcoin, Globe, ShieldCheck, Gem, ChevronDown, ChevronLeft, ChevronRight, Coins, Baby, Banknote, PiggyBank, HandCoins, Zap, ArrowRightLeft, PieChart, ShieldAlert, Calculator, Scale, Rocket, Search, Shield, Heart, Home, Swords, Briefcase, Wallet, Trophy, BookOpen, Compass } from 'lucide-react';
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
  
  // Controlled state for each main section
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    kids: currentSection.startsWith('kids-'),
    income: currentSection.startsWith('income-'),
    insurance: currentSection.startsWith('insurance-'),
    mf: currentSection.startsWith('mf-'),
    equity: currentSection.startsWith('equity-'),
    gold: currentSection.startsWith('gold-'),
    realEstate: currentSection.startsWith('re-'),
    bonds: currentSection.startsWith('bonds-'),
    loans: currentSection.startsWith('loans-'),
    diversification: ['pms', 'aif', 'sif', 'bitcoin', 'overseas'].includes(currentSection)
  });

  // Update open sections when currentSection changes
  useEffect(() => {
    setOpenSections({
      kids: currentSection.startsWith('kids-'),
      income: currentSection.startsWith('income-'),
      insurance: currentSection.startsWith('insurance-'),
      mf: currentSection.startsWith('mf-'),
      equity: currentSection.startsWith('equity-'),
      gold: currentSection.startsWith('gold-'),
      realEstate: currentSection.startsWith('re-'),
      bonds: currentSection.startsWith('bonds-'),
      loans: currentSection.startsWith('loans-'),
      diversification: ['pms', 'aif', 'sif', 'bitcoin', 'overseas'].includes(currentSection)
    });
  }, [currentSection]);

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
              <Collapsible open={openSections.kids} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, kids: open }))} className="space-y-1">
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
              <Collapsible open={openSections.income} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, income: open }))} className="space-y-1">
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
                  
                  {/* Career & Growth */}
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Career & Growth</p>
                  </div>
                  <SidebarItem 
                    label="Career Growth" 
                    active={currentSection === 'income-career'} 
                    onClick={() => onSectionChange('income-career')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Income Optimization" 
                    active={currentSection === 'income-optimization'} 
                    onClick={() => onSectionChange('income-optimization')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Expense Management" 
                    active={currentSection === 'income-expenses'} 
                    onClick={() => onSectionChange('income-expenses')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  
                  {/* Additional Income */}
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Additional Income</p>
                  </div>
                  <SidebarItem 
                    label="Side Hustles" 
                    active={currentSection === 'income-side-hustles'} 
                    onClick={() => onSectionChange('income-side-hustles')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Freelancing" 
                    active={currentSection === 'income-freelancing'} 
                    onClick={() => onSectionChange('income-freelancing')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Passive Income" 
                    active={currentSection === 'income-passive'} 
                    onClick={() => onSectionChange('income-passive')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Entrepreneurship" 
                    active={currentSection === 'income-entrepreneurship'} 
                    onClick={() => onSectionChange('income-entrepreneurship')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  
                  {/* Protection & Mindset */}
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Protection & Mindset</p>
                  </div>
                  <SidebarItem 
                    label="Income Protection" 
                    active={currentSection === 'income-protection'} 
                    onClick={() => onSectionChange('income-protection')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Wealth Mindset" 
                    active={currentSection === 'income-mindset'} 
                    onClick={() => onSectionChange('income-mindset')} 
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
              <Collapsible open={openSections.insurance} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, insurance: open }))} className="space-y-1">
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
                    icon={<BookOpen className="w-4 h-4" />}
                    label="Insurance 101" 
                    active={currentSection === 'insurance-overview'} 
                    onClick={() => onSectionChange('insurance-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
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
                  <SidebarItem 
                    icon={<Swords className="w-4 h-4" />}
                    label="Vehicle Insurance" 
                    active={currentSection === 'insurance-vehicle'} 
                    onClick={() => onSectionChange('insurance-vehicle')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    icon={<Briefcase className="w-4 h-4" />}
                    label="Business Insurance" 
                    active={currentSection === 'insurance-business'} 
                    onClick={() => onSectionChange('insurance-business')} 
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
                onClick={() => onSectionChange('insurance-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Mutual Funds */}
            {!isCollapsed ? (
              <Collapsible open={openSections.mf} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, mf: open }))} className="space-y-1">
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
                  {/* 📚 FOUNDATIONS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        <BookOpen className="w-3 h-3" />
                        <span>Foundations</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Start your MF journey here</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'mf-overview'} 
                    onClick={() => onSectionChange('mf-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="How MF Works" 
                    active={currentSection === 'mf-how-it-works'} 
                    onClick={() => onSectionChange('mf-how-it-works')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="NAV Explained" 
                    active={currentSection === 'mf-nav'} 
                    onClick={() => onSectionChange('mf-nav')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Direct vs Regular" 
                    active={currentSection === 'mf-direct-regular'} 
                    onClick={() => onSectionChange('mf-direct-regular')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 🎯 TYPES OF MUTUAL FUNDS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                        <PieChart className="w-3 h-3" />
                        <span>Types of Funds</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Understanding fund categories</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection.includes('-types')} className="space-y-1">
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>By Asset Class</span>
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
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen={currentSection === 'mf-goal-types' || currentSection === 'mf-risk-types'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>By Goal & Risk</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
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
                    </CollapsibleContent>
                  </Collapsible>

                  <SidebarItem 
                    label="Structure Based" 
                    active={currentSection === 'mf-structure-types'} 
                    onClick={() => onSectionChange('mf-structure-types')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 💰 INVESTMENT OPTIONS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                        <Coins className="w-3 h-3" />
                        <span>Investment Options</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">How to invest & withdraw</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection === 'mf-sip' || currentSection === 'mf-lumpsum' || currentSection === 'mf-combined'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Investment Methods</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="SIP (Systematic)" 
                        active={currentSection === 'mf-sip'} 
                        onClick={() => onSectionChange('mf-sip')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Lumpsum (One-time)" 
                        active={currentSection === 'mf-lumpsum'} 
                        onClick={() => onSectionChange('mf-lumpsum')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="SIP + Lumpsum" 
                        active={currentSection === 'mf-combined'} 
                        onClick={() => onSectionChange('mf-combined')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen={currentSection === 'mf-swp' || currentSection === 'mf-stp'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Withdrawal & Transfer</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="SWP (Systematic Withdrawal)" 
                        active={currentSection === 'mf-swp'} 
                        onClick={() => onSectionChange('mf-swp')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="STP (Systematic Transfer)" 
                        active={currentSection === 'mf-stp'} 
                        onClick={() => onSectionChange('mf-stp')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🔍 FUND SELECTION & ANALYSIS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                        <Search className="w-3 h-3" />
                        <span>Selection & Analysis</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Choose the right funds</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="How to Select Funds" 
                    active={currentSection === 'mf-selection'} 
                    onClick={() => onSectionChange('mf-selection')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Fund Metrics" 
                    active={currentSection === 'mf-metrics'} 
                    onClick={() => onSectionChange('mf-metrics')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Expense Ratio" 
                    active={currentSection === 'mf-expense-ratio'} 
                    onClick={() => onSectionChange('mf-expense-ratio')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Fund Manager Analysis" 
                    active={currentSection === 'mf-fund-manager'} 
                    onClick={() => onSectionChange('mf-fund-manager')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Fund House Comparison" 
                    active={currentSection === 'mf-fund-house'} 
                    onClick={() => onSectionChange('mf-fund-house')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 📊 PASSIVE INVESTING */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                        <Rocket className="w-3 h-3" />
                        <span>Passive Investing</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Index funds & ETFs</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection === 'mf-passive' || currentSection === 'mf-index-funds' || currentSection === 'mf-etf'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Passive Options</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        label="Passive Investing Basics" 
                        active={currentSection === 'mf-passive'} 
                        onClick={() => onSectionChange('mf-passive')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Index Funds" 
                        active={currentSection === 'mf-index-funds'} 
                        onClick={() => onSectionChange('mf-index-funds')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="ETFs" 
                        active={currentSection === 'mf-etf'} 
                        onClick={() => onSectionChange('mf-etf')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        label="Active vs Passive" 
                        active={currentSection === 'mf-active-passive'} 
                        onClick={() => onSectionChange('mf-active-passive')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🎯 PORTFOLIO MANAGEMENT */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-pink-600 uppercase tracking-widest">
                        <Briefcase className="w-3 h-3" />
                        <span>Portfolio Management</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Build & maintain your portfolio</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Portfolio Construction" 
                    active={currentSection === 'mf-portfolio'} 
                    onClick={() => onSectionChange('mf-portfolio')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Diversification" 
                    active={currentSection === 'mf-diversification'} 
                    onClick={() => onSectionChange('mf-diversification')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Rebalancing" 
                    active={currentSection === 'mf-rebalancing'} 
                    onClick={() => onSectionChange('mf-rebalancing')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Portfolio Review" 
                    active={currentSection === 'mf-review'} 
                    onClick={() => onSectionChange('mf-review')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Exit Strategy" 
                    active={currentSection === 'mf-exit-strategy'} 
                    onClick={() => onSectionChange('mf-exit-strategy')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* ⚠️ RISKS & MISTAKES */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-red-600 uppercase tracking-widest">
                        <ShieldAlert className="w-3 h-3" />
                        <span>Risks & Mistakes</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">What to avoid</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Common Mistakes" 
                    active={currentSection === 'mf-mistakes'} 
                    onClick={() => onSectionChange('mf-mistakes')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Risk Management" 
                    active={currentSection === 'mf-risk-management'} 
                    onClick={() => onSectionChange('mf-risk-management')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Red Flags" 
                    active={currentSection === 'mf-red-flags'} 
                    onClick={() => onSectionChange('mf-red-flags')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 💸 TAXATION */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                        <Calculator className="w-3 h-3" />
                        <span>Taxation</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Tax implications & strategies</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="MF Taxation" 
                    active={currentSection === 'mf-taxation'} 
                    onClick={() => onSectionChange('mf-taxation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Tax Saving Funds (ELSS)" 
                    active={currentSection === 'mf-elss'} 
                    onClick={() => onSectionChange('mf-elss')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Tax Optimization" 
                    active={currentSection === 'mf-tax-optimization'} 
                    onClick={() => onSectionChange('mf-tax-optimization')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<BarChart3 className="w-4 h-4" />} 
                label="Mutual Funds" 
                active={currentSection.startsWith('mf-')} 
                onClick={() => onSectionChange('mf-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Equity */}
            {!isCollapsed ? (
              <Collapsible open={openSections.equity} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, equity: open }))} className="space-y-1">
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
                  {/* 📚 FOUNDATIONS - Start Here */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-2">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        <BookOpen className="w-3 h-3" />
                        <span>Foundations</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Start your equity journey here</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'equity-overview'} 
                    onClick={() => onSectionChange('equity-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Laws" 
                    active={currentSection === 'equity-laws'} 
                    onClick={() => onSectionChange('equity-laws')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Order Types" 
                    active={currentSection === 'equity-order-types'} 
                    onClick={() => onSectionChange('equity-order-types')} 
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
                  <SidebarItem 
                    label="Face Value & Splits" 
                    active={currentSection === 'equity-face-value'} 
                    onClick={() => onSectionChange('equity-face-value')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Corporate Actions" 
                    active={currentSection === 'equity-corporate-actions'} 
                    onClick={() => onSectionChange('equity-corporate-actions')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 📊 ANALYSIS FRAMEWORKS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-purple-600 uppercase tracking-widest">
                        <BarChart3 className="w-3 h-3" />
                        <span>Analysis Methods</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Learn to analyze stocks</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection === 'equity-macro' || currentSection === 'equity-fundamental' || currentSection === 'equity-technical'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>3 Analysis Types</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        icon={<Globe className="w-3.5 h-3.5" />}
                        label="Macro Analysis" 
                        active={currentSection === 'equity-macro'} 
                        onClick={() => onSectionChange('equity-macro')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Calculator className="w-3.5 h-3.5" />}
                        label="Fundamental Analysis" 
                        active={currentSection === 'equity-fundamental'} 
                        onClick={() => onSectionChange('equity-fundamental')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<BarChart3 className="w-3.5 h-3.5" />}
                        label="Technical Analysis" 
                        active={currentSection === 'equity-technical'} 
                        onClick={() => onSectionChange('equity-technical')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🏢 COMPANY EVALUATION */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                        <Building2 className="w-3 h-3" />
                        <span>Company Evaluation</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Deep dive into businesses</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection.startsWith('equity-') && (currentSection === 'equity-valuation' || currentSection === 'equity-quality' || currentSection === 'equity-moat' || currentSection === 'equity-value-investing' || currentSection === 'equity-beyond-valuation' || currentSection === 'equity-pricing-power' || currentSection === 'equity-competition' || currentSection === 'equity-debt')}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>8 Key Metrics</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        icon={<Calculator className="w-3.5 h-3.5" />}
                        label="Valuation" 
                        active={currentSection === 'equity-valuation'} 
                        onClick={() => onSectionChange('equity-valuation')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Trophy className="w-3.5 h-3.5" />}
                        label="Quality" 
                        active={currentSection === 'equity-quality'} 
                        onClick={() => onSectionChange('equity-quality')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<ShieldCheck className="w-3.5 h-3.5" />}
                        label="Moat Analysis" 
                        active={currentSection === 'equity-moat'} 
                        onClick={() => onSectionChange('equity-moat')} 
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
                      <SidebarItem 
                        icon={<Compass className="w-3.5 h-3.5" />}
                        label="Beyond Valuation" 
                        active={currentSection === 'equity-beyond-valuation'} 
                        onClick={() => onSectionChange('equity-beyond-valuation')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Briefcase className="w-3.5 h-3.5" />}
                        label="Pricing Power" 
                        active={currentSection === 'equity-pricing-power'} 
                        onClick={() => onSectionChange('equity-pricing-power')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
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
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🧠 PSYCHOLOGY & TIMING */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-pink-600 uppercase tracking-widest">
                        <Heart className="w-3 h-3" />
                        <span>Psychology & Timing</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Master emotions & market cycles</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection === 'equity-market-cycles' || currentSection === 'equity-behavioral-finance'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>Psychology & Timing</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        icon={<BarChart3 className="w-3.5 h-3.5" />}
                        label="Market Cycles" 
                        active={currentSection === 'equity-market-cycles'} 
                        onClick={() => onSectionChange('equity-market-cycles')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Heart className="w-3.5 h-3.5" />}
                        label="Behavioral Finance" 
                        active={currentSection === 'equity-behavioral-finance'} 
                        onClick={() => onSectionChange('equity-behavioral-finance')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 🔍 RESEARCH & TOOLS */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                        <Search className="w-3 h-3" />
                        <span>Research & Tools</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Practical resources</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Research Tools" 
                    onClick={() => onSectionChange('equity-research-tools')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Scrips (Watchlist)" 
                    active={currentSection === 'equity-scrips'} 
                    onClick={() => onSectionChange('equity-scrips')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* 💼 PORTFOLIO STRATEGY */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                        <PieChart className="w-3 h-3" />
                        <span>Portfolio Strategy</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Build & manage your portfolio</p>
                    </div>
                  )}
                  <Collapsible defaultOpen={currentSection === 'equity-index-investing' || currentSection === 'equity-portfolio-management' || currentSection === 'equity-exit-strategy'}>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between pl-11 pr-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <span>3 Building Blocks</span>
                        <ChevronDown className="w-3 h-3" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      <SidebarItem 
                        icon={<BarChart3 className="w-3.5 h-3.5" />}
                        label="Index Investing" 
                        active={currentSection === 'equity-index-investing'} 
                        onClick={() => onSectionChange('equity-index-investing')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<PieChart className="w-3.5 h-3.5" />}
                        label="Portfolio & Risk" 
                        active={currentSection === 'equity-portfolio-management'} 
                        onClick={() => onSectionChange('equity-portfolio-management')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                      <SidebarItem 
                        icon={<Compass className="w-3.5 h-3.5" />}
                        label="Exit Strategy" 
                        active={currentSection === 'equity-exit-strategy'} 
                        onClick={() => onSectionChange('equity-exit-strategy')} 
                        className="pl-14 text-xs" 
                        isCollapsed={isCollapsed} 
                      />
                    </CollapsibleContent>
                  </Collapsible>

                  {/* 💰 TAX & ADVANCED */}
                  {!isCollapsed && (
                    <div className="px-4 py-2 mt-4 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-red-600 uppercase tracking-widest">
                        <Zap className="w-3 h-3" />
                        <span>Tax & Advanced</span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-0.5">Optimize & go deeper</p>
                    </div>
                  )}
                  <SidebarItem 
                    label="Tax Strategy" 
                    active={currentSection === 'equity-tax-strategy'} 
                    onClick={() => onSectionChange('equity-tax-strategy')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Derivatives (F&O)" 
                    active={currentSection === 'equity-derivatives'} 
                    onClick={() => onSectionChange('equity-derivatives')} 
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
              <Collapsible open={openSections.gold} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, gold: open }))} className="space-y-1">
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
              <Collapsible open={openSections.realEstate} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, realEstate: open }))} className="space-y-1">
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
                  {/* Foundations */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Foundations
                  </div>
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 're-overview'} 
                    onClick={() => onSectionChange('re-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Investment Types" 
                    active={currentSection === 're-investment-types'} 
                    onClick={() => onSectionChange('re-investment-types')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Residential vs Commercial" 
                    active={currentSection === 're-residential-commercial'} 
                    onClick={() => onSectionChange('re-residential-commercial')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Location Analysis" 
                    active={currentSection === 're-location-analysis'} 
                    onClick={() => onSectionChange('re-location-analysis')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Due Diligence */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Due Diligence
                  </div>
                  <SidebarItem 
                    label="Property Valuation" 
                    active={currentSection === 're-property-valuation'} 
                    onClick={() => onSectionChange('re-property-valuation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Legal Due Diligence" 
                    active={currentSection === 're-legal-diligence'} 
                    onClick={() => onSectionChange('re-legal-diligence')} 
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
                    label="Builder Research" 
                    active={currentSection === 're-builder-research'} 
                    onClick={() => onSectionChange('re-builder-research')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Market Research" 
                    active={currentSection === 're-market-research'} 
                    onClick={() => onSectionChange('re-market-research')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Financing */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Financing
                  </div>
                  <SidebarItem 
                    label="Home Loan Basics" 
                    active={currentSection === 're-home-loan-basics'} 
                    onClick={() => onSectionChange('re-home-loan-basics')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="EMI Planning" 
                    active={currentSection === 're-emi-planning'} 
                    onClick={() => onSectionChange('re-emi-planning')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Loan Eligibility" 
                    active={currentSection === 're-loan-eligibility'} 
                    onClick={() => onSectionChange('re-loan-eligibility')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Investment Analysis */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Investment Analysis
                  </div>
                  <SidebarItem 
                    label="Rent vs Buy" 
                    active={currentSection === 're-rental-returns'} 
                    onClick={() => onSectionChange('re-rental-returns')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="ROI & Cash Flow" 
                    active={currentSection === 're-roi-analysis'} 
                    onClick={() => onSectionChange('re-roi-analysis')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Rental Yield Calculator" 
                    active={currentSection === 're-rental-yield'} 
                    onClick={() => onSectionChange('re-rental-yield')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Appreciation Factors" 
                    active={currentSection === 're-appreciation-factors'} 
                    onClick={() => onSectionChange('re-appreciation-factors')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Exit Strategy" 
                    active={currentSection === 're-exit-strategy'} 
                    onClick={() => onSectionChange('re-exit-strategy')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Alternative Investments */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Alternative Investments
                  </div>
                  <SidebarItem 
                    label="REITs & Fractional" 
                    active={currentSection === 're-reits-fractional'} 
                    onClick={() => onSectionChange('re-reits-fractional')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Commercial Properties" 
                    active={currentSection === 're-commercial'} 
                    onClick={() => onSectionChange('re-commercial')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Plots & Under Construction" 
                    active={currentSection === 're-plots-construction'} 
                    onClick={() => onSectionChange('re-plots-construction')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Risk & Tax */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Risk & Tax
                  </div>
                  <SidebarItem 
                    label="Common Mistakes" 
                    active={currentSection === 're-common-mistakes'} 
                    onClick={() => onSectionChange('re-common-mistakes')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Red Flags" 
                    active={currentSection === 're-red-flags'} 
                    onClick={() => onSectionChange('re-red-flags')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Risk Mitigation" 
                    active={currentSection === 're-risk-mitigation'} 
                    onClick={() => onSectionChange('re-risk-mitigation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Hidden Costs" 
                    active={currentSection === 're-hidden-costs'} 
                    onClick={() => onSectionChange('re-hidden-costs')} 
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
              <Collapsible open={openSections.bonds} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, bonds: open }))} className="space-y-1">
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
                  {/* Foundations */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Foundations
                  </div>
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'bonds-overview'} 
                    onClick={() => onSectionChange('bonds-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Bond Basics" 
                    active={currentSection === 'bonds-basics'} 
                    onClick={() => onSectionChange('bonds-basics')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Types of Bonds" 
                    active={currentSection === 'bonds-types'} 
                    onClick={() => onSectionChange('bonds-types')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Government Bonds" 
                    active={currentSection === 'bonds-government'} 
                    onClick={() => onSectionChange('bonds-government')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Corporate Bonds" 
                    active={currentSection === 'bonds-corporate'} 
                    onClick={() => onSectionChange('bonds-corporate')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Selection & Purchase */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Selection & Purchase
                  </div>
                  <SidebarItem 
                    label="How to Buy Bonds" 
                    active={currentSection === 'bonds-how-to-buy'} 
                    onClick={() => onSectionChange('bonds-how-to-buy')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Bond Selection" 
                    active={currentSection === 'bonds-selection'} 
                    onClick={() => onSectionChange('bonds-selection')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Credit Ratings" 
                    active={currentSection === 'bonds-ratings'} 
                    onClick={() => onSectionChange('bonds-ratings')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Rating Importance" 
                    active={currentSection === 'bonds-importance'} 
                    onClick={() => onSectionChange('bonds-importance')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Bond Research" 
                    active={currentSection === 'bonds-research'} 
                    onClick={() => onSectionChange('bonds-research')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Returns & Calculations */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Returns & Calculations
                  </div>
                  <SidebarItem 
                    label="Yield Calculations" 
                    active={currentSection === 'bonds-yield'} 
                    onClick={() => onSectionChange('bonds-yield')} 
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

                  {/* Risk Management */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Risk Management
                  </div>
                  <SidebarItem 
                    label="Interest Rate Risk" 
                    active={currentSection === 'bonds-interest-risk'} 
                    onClick={() => onSectionChange('bonds-interest-risk')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Credit Risk" 
                    active={currentSection === 'bonds-credit-risk'} 
                    onClick={() => onSectionChange('bonds-credit-risk')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Bond Risks" 
                    active={currentSection === 'bonds-risks'} 
                    onClick={() => onSectionChange('bonds-risks')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Common Mistakes" 
                    active={currentSection === 'bonds-mistakes'} 
                    onClick={() => onSectionChange('bonds-mistakes')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Portfolio Strategy */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Portfolio Strategy
                  </div>
                  <SidebarItem 
                    label="Bond Laddering" 
                    active={currentSection === 'bonds-laddering'} 
                    onClick={() => onSectionChange('bonds-laddering')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Portfolio Construction" 
                    active={currentSection === 'bonds-portfolio'} 
                    onClick={() => onSectionChange('bonds-portfolio')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Bonds vs Debt Funds" 
                    active={currentSection === 'bonds-vs-debt-funds'} 
                    onClick={() => onSectionChange('bonds-vs-debt-funds')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />

                  {/* Platforms & Tax */}
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-2">
                    Platforms & Tax
                  </div>
                  <SidebarItem 
                    label="Trading Platforms" 
                    active={currentSection === 'bonds-platforms'} 
                    onClick={() => onSectionChange('bonds-platforms')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Taxation" 
                    active={currentSection === 'bonds-taxation'} 
                    onClick={() => onSectionChange('bonds-taxation')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
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

            {/* Loans Section */}
            {!isCollapsed ? (
              <Collapsible open={openSections.loans} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, loans: open }))} className="space-y-1">
                <CollapsibleTrigger className="w-full">
                  <div className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    currentSection.startsWith('loans-') ? "text-primary" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}>
                    <div className="flex items-center gap-3">
                      <HandCoins className="w-4 h-4" />
                      <span>Loans</span>
                    </div>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", !currentSection.startsWith('loans-') && "-rotate-90")} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  <SidebarItem 
                    label="Overview" 
                    active={currentSection === 'loans-overview'} 
                    onClick={() => onSectionChange('loans-overview')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Types of Loans" 
                    active={currentSection === 'loans-types'} 
                    onClick={() => onSectionChange('loans-types')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="When to Take" 
                    active={currentSection === 'loans-when'} 
                    onClick={() => onSectionChange('loans-when')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="How Loans Work" 
                    active={currentSection === 'loans-how'} 
                    onClick={() => onSectionChange('loans-how')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Smart Borrowing" 
                    active={currentSection === 'loans-smart'} 
                    onClick={() => onSectionChange('loans-smart')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                  <SidebarItem 
                    label="Loan Closure Tips" 
                    active={currentSection === 'loans-closure'} 
                    onClick={() => onSectionChange('loans-closure')} 
                    isSubItem 
                    isCollapsed={isCollapsed} 
                  />
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <SidebarItem 
                icon={<HandCoins className="w-4 h-4" />} 
                label="Loans" 
                active={currentSection.startsWith('loans-')} 
                onClick={() => onSectionChange('loans-overview')} 
                isCollapsed={isCollapsed} 
              />
            )}

            {/* Diversification */}
            {!isCollapsed ? (
              <Collapsible open={openSections.diversification} onOpenChange={(open) => setOpenSections(prev => ({ ...prev, diversification: open }))} className="pt-2">
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

            {/* Build Wealth Link */}
            <div className="pt-2">
              <SidebarItem 
                icon={<Rocket className="w-4 h-4" />} 
                label="Build Wealth" 
                onClick={() => navigate('/build-wealth')} 
                isCollapsed={isCollapsed} 
              />
            </div>
          </nav>
        </div>

        <div className="mt-auto p-4 border-t">
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default DashboardSidebar;