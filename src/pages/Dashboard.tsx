"use client";

import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart } from 'lucide-react';

// Mutual Fund Components
import TypesOfEquityFunds from '@/components/dashboard/mf/TypesOfEquityFunds';
import SIP from '@/components/dashboard/mf/SIP';
import Lumpsum from '@/components/dashboard/mf/Lumpsum';
import SIPandLumpsum from '@/components/dashboard/mf/SIPandLumpsum';
import SWP from '@/components/dashboard/mf/SWP';
import STP from '@/components/dashboard/mf/STP';
import DebtFunds from '@/components/dashboard/mf/DebtFunds';
import HybridFunds from '@/components/dashboard/mf/HybridFunds';
import GoalBasedFunds from '@/components/dashboard/mf/GoalBasedFunds';
import RiskBasedFunds from '@/components/dashboard/mf/RiskBasedFunds';
import StructureBasedFunds from '@/components/dashboard/mf/StructureBasedFunds';
import Taxation from '@/components/dashboard/mf/Taxation';

// Gold Components
import GoldOverview from '@/components/dashboard/gold/GoldOverview';
import PhysicalGold from '@/components/dashboard/gold/PhysicalGold';
import GoldETF from '@/components/dashboard/gold/GoldETF';
import DigitalGold from '@/components/dashboard/gold/DigitalGold';

// Real Estate Components
import RealEstateOverview from '@/components/dashboard/real-estate/RealEstateOverview';
import DocumentCheck from '@/components/dashboard/real-estate/DocumentCheck';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('mf-equity-types');

  const renderContent = () => {
    switch (activeSection) {
      // Mutual Funds
      case 'mf-equity-types': return <TypesOfEquityFunds />;
      case 'mf-debt-types': return <DebtFunds />;
      case 'mf-hybrid-types': return <HybridFunds />;
      case 'mf-goal-types': return <GoalBasedFunds />;
      case 'mf-risk-types': return <RiskBasedFunds />;
      case 'mf-structure-types': return <StructureBasedFunds />;
      case 'mf-sip': return <SIP />;
      case 'mf-lumpsum': return <Lumpsum />;
      case 'mf-combined': return <SIPandLumpsum />;
      case 'mf-swp': return <SWP />;
      case 'mf-stp': return <STP />;
      case 'mf-taxation': return <Taxation />;
      
      // Gold
      case 'gold-overview': return <GoldOverview />;
      case 'gold-physical': return <PhysicalGold />;
      case 'gold-etf': return <GoldETF />;
      case 'gold-digital': return <DigitalGold />;

      // Real Estate
      case 're-overview': return <RealEstateOverview />;
      case 're-documents': return <DocumentCheck />;
      
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
              <Button variant="outline" onClick={() => setActiveSection('mf-equity-types')}>Back to Basics</Button>
            </Card>
          </div>
        );
    }
  };

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'mf-equity-types': 'Equity Funds',
      'mf-debt-types': 'Debt Funds',
      'mf-hybrid-types': 'Hybrid Funds',
      'mf-goal-types': 'Goal Based Funds',
      'mf-risk-types': 'Risk Based Funds',
      'mf-structure-types': 'Structure Based Funds',
      'mf-sip': 'SIP (Systematic Investment Plan)',
      'mf-lumpsum': 'Lumpsum Investment',
      'mf-combined': 'Hybrid Strategy (SIP + Lumpsum)',
      'mf-swp': 'SWP (Systematic Withdrawal Plan)',
      'mf-stp': 'STP (Systematic Transfer Plan)',
      'mf-taxation': 'Taxation of Mutual Funds',
      'gold-overview': 'Gold Investment Overview',
      'gold-physical': 'Physical Gold',
      'gold-etf': 'Gold ETFs & Funds',
      'gold-digital': 'Digital Gold (SGB)',
      're-overview': 'Real Estate Overview',
      're-documents': 'Document Verification Checklist',
    };
    return titles[id] || 'Financial Dashboard';
  };

  const getModuleLabel = (id: string) => {
    if (id.startsWith('mf-')) return "Mutual Funds Masterclass";
    if (id.startsWith('gold-')) return "Precious Metals Module";
    if (id.startsWith('re-')) return "Real Estate Module";
    return "Wealth Management";
  }

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <DashboardSidebar currentSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
              {getModuleLabel(activeSection)}
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