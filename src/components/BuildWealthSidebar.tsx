"use client";

import React from 'react';
import { LineChart, Brain, Coins, Quote, ChevronLeft, ChevronRight, Globe, Home, Clock, FileText } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BuildWealthSidebarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const BuildWealthSidebar: React.FC<BuildWealthSidebarProps> = ({ currentSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const sections = [
    { id: 'roadmap', label: '4-Step Wealth Path', icon: <Coins className="w-4 h-4" /> },
    { id: 'milestones', label: 'Wealth Milestones', icon: <LineChart className="w-4 h-4" /> },
    { id: 'ppp', label: 'Purchasing Power (PPP)', icon: <Globe className="w-4 h-4" /> },
    { id: 'mindset', label: 'Mindset & Psychology', icon: <Brain className="w-4 h-4" /> },
    { id: 'wisdom', label: 'Investor Wisdom & Quotes', icon: <Quote className="w-4 h-4" /> },
    { id: 'realestate', label: 'Real Estate Investment', icon: <Home className="w-4 h-4" /> },
    { id: 'retirement', label: 'Retirement Planning', icon: <Clock className="w-4 h-4" /> },
    { id: 'estate-planning', label: 'Will & Estate Planning', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <aside 
      className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col sticky top-0 h-screen",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <LineChart className="w-5 h-5" />
            </div>
            <span>Build Wealth</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 group",
              currentSection === section.id 
                ? "bg-blue-50 text-blue-700 shadow-sm" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <div className={cn(
              "transition-colors",
              currentSection === section.id ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
            )}>
              {section.icon}
            </div>
            {!isCollapsed && <span className="text-sm font-medium">{section.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default BuildWealthSidebar;