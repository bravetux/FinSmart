"use client";

import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart } from 'lucide-react';

// Mutual Fund Components
import TypesOfMF from '@/components/dashboard/mf/Types';
import SIP from '@/components/dashboard/mf/SIP';
import Lumpsum from '@/components/dashboard/mf/Lumpsum';
import SIPandLumpsum from '@/components/dashboard/mf/SIPandLumpsum';
import SWP from '@/components/dashboard/mf/SWP';
import STP from '@/components/dashboard/mf/STP';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('mf-types');

  const renderContent = () => {
    switch (activeSection) {
      case 'mf-types': return <TypesOfMF />;
      case 'mf-sip': return <SIP />;
      case 'mf-lumpsum': return <Lumpsum />;
      case 'mf-combined': return <SIPandLumpsum />;
      case 'mf-swp': return <SWP />;
      case 'mf-stp': return <STP />;
      default:
        return (
          <div className="grid grid-cols-1 gap-6">
            <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white border-dashed border-2">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <LineChart className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Module coming soon</h3>
              <p className="text-slate-500 max-w-sm mb-6">
                We are currently building the educational content for this section. Stay tuned!
              </p>
              <Button variant="outline" onClick={() => setActiveSection('mf-types')}>Back to Basics</Button>
            </Card>
          </div>
        );
    }
  };

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'mf-types': 'Types of Mutual Funds',
      'mf-sip': 'SIP (Systematic Investment Plan)',
      'mf-lumpsum': 'Lumpsum Investment',
      'mf-combined': 'Hybrid Strategy (SIP + Lumpsum)',
      'mf-swp': 'SWP (Systematic Withdrawal Plan)',
      'mf-stp': 'STP (Systematic Transfer Plan)',
      'equity': 'Equity Markets',
      'gold': 'Gold Investment',
      'real-estate': 'Real Estate',
      'bonds': 'Bond Markets',
      'pms': 'PMS',
      'aif': 'AIF',
      'sif': 'SIF',
      'bitcoin': 'Bitcoin',
      'overseas': 'Overseas Investment'
    };
    return titles[id] || 'Mutual Funds';
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <DashboardSidebar currentSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
              Mutual Funds Masterclass
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{getSectionTitle(activeSection)}</h1>
          </div>
          <Button className="gap-2 shadow-lg shadow-blue-200">
            Take Quiz <ArrowUpRight className="w-4 h-4" />
          </Button>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;