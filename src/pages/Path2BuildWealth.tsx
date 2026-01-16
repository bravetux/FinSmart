"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

// New Components
import BuildWealthSidebar from '@/components/BuildWealthSidebar';
import Roadmap from '../components/buildwealth/Roadmap';
import Mindset from '../components/buildwealth/Mindset';
import Wisdom from '../components/buildwealth/Wisdom';

const Path2BuildWealth = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('roadmap');

  const renderContent = () => {
    switch (activeSection) {
      case 'roadmap':
        return <Roadmap />;
      case 'mindset':
        return <Mindset />;
      case 'wisdom':
        return <Wisdom />;
      default:
        return <Roadmap />;
    }
  };

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'roadmap': '4-Step Wealth Path',
      'mindset': 'Mindset & Psychology',
      'wisdom': 'Investor Wisdom & Quotes',
    };
    return titles[id] || 'The Path to Build Wealth';
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <BuildWealthSidebar currentSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <Button 
              variant="ghost" 
              className="gap-2 -ml-2 text-sm text-slate-500 hover:text-slate-900" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
              <LineChart className="w-4 h-4" />
              WEALTH ROADMAP
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{getSectionTitle(activeSection)}</h1>
          </div>
        </header>
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Path2BuildWealth;