"use client";
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart } from 'lucide-react';

// Kids Components
import KidsOverview from '@/components/dashboard/kids/KidsOverview';
import MoneySection from '@/components/dashboard/kids/MoneySection';
import PiggyBankSection from '@/components/dashboard/kids/PiggyBankSection';
import BudgetingSection from '@/components/dashboard/kids/BudgetingSection';
import BankSection from '@/components/dashboard/kids/BankSection';
import BankAccounts from '@/components/dashboard/kids/BankAccounts';
import OperatingAccount from '@/components/dashboard/kids/OperatingAccount';
import TransferSection from '@/components/dashboard/kids/TransferSection';
import BankLoans from '@/components/dashboard/kids/BankLoans';
import BankServices from '@/components/dashboard/kids/BankServices';
import SafetySection from '@/components/dashboard/kids/SafetySection';
import EarningEngine from '@/components/dashboard/kids/EarningEngine';
import MoneyTree from '@/components/dashboard/kids/MoneyTree';
import ShrinkingCookie from '@/components/dashboard/kids/ShrinkingCookie';
import CommunityPot from '@/components/dashboard/kids/CommunityPot';
import AdvancedGiving from '@/components/dashboard/kids/AdvancedGiving';
import CreditReputation from '@/components/dashboard/kids/CreditReputation';
import GlobalMoney from '@/components/dashboard/kids/GlobalMoney';
import MintingMoney from '@/components/dashboard/kids/MintingMoney';

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
import FundMetrics from '@/components/dashboard/mf/FundMetrics';
import PassiveInvesting from '@/components/dashboard/mf/PassiveInvesting';

// Equity Components
import EquityOverview from '@/components/dashboard/equity/EquityOverview';
import FundamentalAnalysis from '@/components/dashboard/equity/FundamentalAnalysis';
import TechnicalAnalysis from '@/components/dashboard/equity/TechnicalAnalysis';
import IPOs from '@/components/dashboard/equity/IPOs';

// Gold Components
import GoldOverview from '@/components/dashboard/gold/GoldOverview';
import PhysicalGold from '@/components/dashboard/gold/PhysicalGold';
import GoldETF from '@/components/dashboard/gold/GoldETF';
import DigitalGold from '@/components/dashboard/gold/DigitalGold';
import GoldTaxation from '@/components/dashboard/gold/GoldTaxation';
import DigitalGoldPlatforms from '@/components/dashboard/gold/DigitalGoldPlatforms';

// Real Estate Components
import RealEstateOverview from '@/components/dashboard/real-estate/RealEstateOverview';
import DocumentCheck from '@/components/dashboard/real-estate/DocumentCheck';
import REITsFractional from '@/components/dashboard/real-estate/REITsFractional';
import RentalYield from '@/components/dashboard/real-estate/RentalYield';
import RealEstateTaxation from '@/components/dashboard/real-estate/RealEstateTaxation';

// Bonds Components
import BondsOverview from '@/components/dashboard/bonds/BondsOverview';
import BondRatings from '@/components/dashboard/bonds/BondRatings';
import BondImportance from '@/components/dashboard/bonds/BondImportance';
import ThingsToConsider from '@/components/dashboard/bonds/ThingsToConsider';

// Insurance Components
import HealthInsurance from '@/components/dashboard/insurance/HealthInsurance';
import TermInsurance from '@/components/dashboard/insurance/TermInsurance';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('kids-overview');

  const renderContent = () => {
    switch (activeSection) {
      // Kids
      case 'kids-overview':
        return <KidsOverview />;
      case 'kids-money':
        return <MoneySection />;
      case 'kids-piggy-bank':
        return <PiggyBankSection />;
      case 'kids-budgeting':
        return <BudgetingSection />;
      case 'kids-bank':
        return <BankSection />;
      case 'kids-bank-accounts':
        return <BankAccounts />;
      case 'kids-bank-operating':
        return <OperatingAccount />;
      case 'kids-bank-transfers':
        return <TransferSection />;
      case 'kids-bank-loans':
        return <BankLoans />;
      case 'kids-bank-services':
        return <BankServices />;
      case 'kids-safety':
        return <SafetySection />;
      case 'kids-earning':
        return <EarningEngine />;
      case 'kids-investing':
        return <MoneyTree />;
      case 'kids-inflation':
        return <ShrinkingCookie />;
      case 'kids-taxes':
        return <CommunityPot />;
      case 'kids-giving':
        return <AdvancedGiving />;
      case 'kids-credit':
        return <CreditReputation />;
      case 'kids-global':
        return <GlobalMoney />;
      case 'kids-minting-money':
        return <MintingMoney />;
        
      // Insurance
      case 'insurance-health':
        return <HealthInsurance />;
      case 'insurance-term':
        return <TermInsurance />;

      // Mutual Funds
      case 'mf-equity-types':
        return <TypesOfEquityFunds />;
      case 'mf-debt-types':
        return <DebtFunds />;
      case 'mf-hybrid-types':
        return <HybridFunds />;
      case 'mf-goal-types':
        return <GoalBasedFunds />;
      case 'mf-risk-types':
        return <RiskBasedFunds />;
      case 'mf-structure-types':
        return <StructureBasedFunds />;
      case 'mf-sip':
        return <SIP />;
      case 'mf-lumpsum':
        return <Lumpsum />;
      case 'mf-combined':
        return <SIPandLumpsum />;
      case 'mf-swp':
        return <SWP />;
      case 'mf-stp':
        return <STP />;
      case 'mf-taxation':
        return <Taxation />;
      case 'mf-metrics':
        return <FundMetrics />;
      case 'mf-passive':
        return <PassiveInvesting />;
        
      // Equity
      case 'equity-overview':
        return <EquityOverview />;
      case 'equity-fundamental':
        return <FundamentalAnalysis />;
      case 'equity-technical':
        return <TechnicalAnalysis />;
      case 'equity-ipo':
        return <IPOs />;
        
      // Gold
      case 'gold-overview':
        return <GoldOverview />;
      case 'gold-physical':
        return <PhysicalGold />;
      case 'gold-etf':
        return <GoldETF />;
      case 'gold-digital':
        return <DigitalGold />;
      case 'gold-taxation':
        return <GoldTaxation />;
      case 'gold-platforms':
        return <DigitalGoldPlatforms />;
        
      // Real Estate
      case 're-overview':
        return <RealEstateOverview />;
      case 're-documents':
        return <DocumentCheck />;
      case 're-reits-fractional':
        return <REITsFractional />;
      case 're-rental-yield':
        return <RentalYield />;
      case 're-taxation':
        return <RealEstateTaxation />;
        
      // Bonds
      case 'bonds-overview':
        return <BondsOverview />;
      case 'bonds-ratings':
        return <BondRatings />;
      case 'bonds-importance':
        return <BondImportance />;
      case 'bonds-consider':
        return <ThingsToConsider />;
        
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
              <Button variant="outline" onClick={() => setActiveSection('mf-equity-types')}>
                Back to Basics
              </Button>
            </Card>
          </div>
        );
    }
  };

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'kids-overview': 'Kids Wealth Adventure',
      'kids-money': 'The Magic of Money',
      'kids-piggy-bank': 'Piggy Bank Power',
      'kids-budgeting': 'The Budgeting Adventure',
      'kids-bank': 'How Banks Work',
      'kids-bank-accounts': 'The Account Store',
      'kids-bank-operating': 'Operating Your Account',
      'kids-bank-transfers': 'Money Transfer Station',
      'kids-bank-loans': 'The Loan Counter',
      'kids-bank-services': 'Digital Magic & More',
      'kids-safety': 'Safety Shield',
      'kids-earning': 'The Earning Engine',
      'kids-investing': 'The Money Tree (Investing)',
      'kids-inflation': 'The Shrinking Cookie (Inflation)',
      'kids-taxes': 'The Community Pot (Taxes)',
      'kids-giving': 'Advanced Giving',
      'kids-credit': 'Credit Reputation',
      'kids-global': 'Global Money',
      'kids-minting-money': 'Minting Money (Money Multiplier)',
      
      'insurance-health': 'Health Insurance',
      'insurance-term': 'Term Insurance',

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
      'mf-metrics': 'Fund Metrics & Selection',
      'mf-passive': 'Passive Investing (Index/ETF)',
      'equity-overview': 'Equity Market Basics',
      'equity-fundamental': 'Fundamental Analysis',
      'equity-technical': 'Technical Analysis Basics',
      'equity-ipo': 'IPOs (Going Public)',
      'gold-overview': 'Gold Investment Overview',
      'gold-physical': 'Physical Gold',
      'gold-etf': 'Gold ETFs & Funds',
      'gold-digital': 'Digital Gold (SGB)',
      'gold-taxation': 'Gold Taxation',
      'gold-platforms': 'Digital Gold Platforms',
      're-overview': 'Real Estate Overview',
      're-documents': 'Document Verification Checklist',
      're-reits-fractional': 'REITs & Fractional Ownership',
      're-rental-yield': 'Rental Yield Calculation',
      're-taxation': 'Real Estate Taxation',
      'bonds-overview': 'Corporate Bond Markets',
      'bonds-ratings': 'CRISIL Rating Scale',
      'bonds-importance': 'Credit Ratings',
      'bonds-consider': 'Things to Consider',
    };
    return titles[id] || 'Financial Dashboard';
  };

  const getModuleLabel = (id: string) => {
    if (id.startsWith('kids-')) return "Early Foundations";
    if (id.startsWith('insurance-')) return "Insurance & Protection";
    if (id.startsWith('mf-')) return "Mutual Funds Masterclass";
    if (id.startsWith('equity-')) return "Equity Markets";
    if (id.startsWith('gold-')) return "Precious Metals Module";
    if (id.startsWith('re-')) return "Real Estate Module";
    if (id.startsWith('bonds-')) return "Fixed Income Module";
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
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;