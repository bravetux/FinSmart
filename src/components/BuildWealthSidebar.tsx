"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Brain, Coins, Quote, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const SidebarItem = ({ icon, label, active, onClick, isCollapsed }: SidebarItemProps) => {
  const content = (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left",
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        isCollapsed && "justify-center px-0 h-10 w-10 mx-auto"
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

const BuildWealthSidebar = ({ currentSection, onSectionChange }: { currentSection: string, onSectionChange: (s: string) => void }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sections = [
    { id: 'roadmap', label: '4-Step Wealth Path', icon: <Coins className="w-4 h-4" /> },
    { id: 'milestones', label: 'Wealth Milestones', icon: <LineChart className="w-4 h-4" /> },
    { id: 'ppp', label: 'Purchasing Power (PPP)', icon: <Globe className="w-4 h-4" /> },
    { id: 'mindset', label: 'Mindset & Psychology', icon: <Brain className="w-4 h-4" /> },
    { id: 'wisdom', label: 'Investor Wisdom & Quotes', icon: <Quote className="w-4 h-4" /> },
  ];

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

          <nav className="space-y-1 flex-1">
            <div className={cn("mb-4", !isCollapsed ? "px-4" : "text-center")}>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {!isCollapsed ? 'Wealth Path' : 'Path'}
              </p>
            </div>
            
            {sections.map((section) => (
              <SidebarItem
                key={section.id}
                icon={section.icon}
                label={section.label}
                active={currentSection === section.id}
                onClick={() => onSectionChange(section.id)}
                isCollapsed={isCollapsed}
              />
            ))}
          </nav>
        </div>
      </aside>
    </TooltipProvider>
  );
};

export default BuildWealthSidebar;